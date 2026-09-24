#!/usr/bin/env bash
set -euo pipefail

# OpenAPI generation pipeline
# Generates Angular HttpClient services from backend OpenAPI specs (typescript-angular generator).
# Generated services are @Injectable({ providedIn: 'root' }) and return Observable<T>.
#
# The repo-wide minor version is bumped once per run, before anything is
# generated, so the regenerated package.json files (and the openapi-generator
# `npmVersion` they are stamped from) carry the new number. Without the bump
# generation would re-stamp the previous version and downstream consumers would
# never see a version change. Major versions are never bumped here: do those by
# hand with `npm run version:set -- <major>.0.0`.
#
# Usage:
#   ./scripts/generate-openapi.sh                    # Bump, then generate all SDK modules
#   ./scripts/generate-openapi.sh --module security  # Bump, then generate only that module
#   ./scripts/generate-openapi.sh --no-bump          # Regenerate at the current version
#
# Valid module names: security, order, inventory, workorder, supplier, accounting, catalog, customer, invoice, location, people, people-contact, price, shop-manager, image, event-receiver, vehicle-fitment, vehicle-inventory, internal, documents, inquiry, bulk-loader, warranty, marketing, tenant

module=""
bump="true"

while [[ $# -gt 0 ]]; do
	case "$1" in
		--module)
			module="$2"
			shift 2
			;;
		--no-bump)
			bump="false"
			shift
			;;
		*)
			echo "Unknown argument: $1" >&2
			exit 2
			;;
	esac
done

MODULES=(security order inventory workorder supplier accounting catalog customer invoice location people people-contact price shop-manager image event-receiver vehicle-fitment vehicle-inventory internal documents inquiry bulk-loader warranty marketing tenant)

patch_package_tsconfig() {
	# The custom tsconfig.mustache (templates/typescript-angular/tsconfig.mustache) now
	# produces ES2022 target/module and correct moduleResolution directly, so no sed
	# patching is needed. This function is kept as a no-op to preserve call-site
	# compatibility in case a future generator version regresses.
	:
}

# Support files the generator writes at the package root. They hold no
# services, so they are moved into the `@durion-sdk/<pkg>/configuration`
# secondary entry point (see move_support_files_to_configuration_entry).
CONFIGURATION_ENTRY_FILES=(configuration api.base.service query.params encoder param variables provide-api)

# An Angular app imports each package's Configuration at startup. With a single
# entry point per package, that import put the whole package module - every
# generated service the app uses anywhere, lazy pages included - into the app's
# initial chunk. The support files now live in a secondary entry point,
# packages/sdk-<pkg>/configuration/, which ng-packagr builds into its own
# module and exports as `@durion-sdk/<pkg>/configuration`.
#
# The generator rewrites the support files at the package root on every run, so
# this moves them again each time. Their relative imports of one another stay
# valid because they all move together.
#
# Invariant: the primary entry must reach these files only by package name
# (`@durion-sdk/<pkg>/configuration`), never by relative path. A relative
# import compiles a second Configuration class and BASE_PATH token into the
# primary bundle; the app then provides a Configuration the services never
# inject and every request silently goes to the generated default basePath.
# scripts/check-configuration-entry.mjs fails the pack if that happens.
move_support_files_to_configuration_entry() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local entry_dir="${package_dir}/configuration"
	local npm_name="@durion-sdk/${module_name}"
	local support_file

	mkdir -p "${entry_dir}"

	for support_file in "${CONFIGURATION_ENTRY_FILES[@]}"; do
		if [[ -f "${package_dir}/${support_file}.ts" ]]; then
			mv -f "${package_dir}/${support_file}.ts" "${entry_dir}/${support_file}.ts"
		fi
		if [[ ! -f "${entry_dir}/${support_file}.ts" ]]; then
			echo "[generate] Missing ${support_file}.ts for sdk-${module_name}; cannot build the configuration entry point" >&2
			return 1
		fi
	done

	: > "${entry_dir}/index.ts"
	for support_file in "${CONFIGURATION_ENTRY_FILES[@]}"; do
		echo "export * from './${support_file}';" >> "${entry_dir}/index.ts"
	done

	cat > "${entry_dir}/ng-package.json" <<'EOF'
{
  "$schema": "../node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "index.ts"
  }
}
EOF

	# api.module.ts stays in the primary entry; point it at the secondary one.
	if [[ -f "${package_dir}/api.module.ts" ]]; then
		sed -i "s|from '\./configuration'|from '${npm_name}/configuration'|" "${package_dir}/api.module.ts"
	fi
}

write_src_support_shims() {
	# The generated services under src/apis import ../configuration,
	# ../variables, ../api.base.service and ../query.params. These shims send
	# those imports to the configuration entry point by package name, so the
	# services share its single Configuration class and BASE_PATH token.
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local src_dir="${package_dir}/src"

	mkdir -p "${src_dir}"

	for support_file in configuration api.base.service query.params encoder param variables; do
		cat > "${src_dir}/${support_file}.ts" <<EOF
export * from '@durion-sdk/${module_name}/configuration';
EOF
	done
}

# The generator is configured with modelPackage "src/models" (openapitools.json),
# and the typescript-angular templates build a service's model imports as
# "../<modelPackage>/<model>". The services themselves are written to
# src/apis, so that comes out as "../src/models/<model>" - which from
# src/apis/ resolves to src/src/models/, a directory the generator never
# writes.
#
# This used to be papered over by write_nested_model_shims, which created a
# src/src/models/<model>.ts re-exporting "../../models/<model>" for every
# model in the package: 1236 files across 24 packages, rewritten on every
# regeneration, existing only to make a wrong relative path resolve. Rewrite
# the imports to the real path instead and the shim tree is not needed at all.
fix_model_import_paths() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local apis_dir="${package_dir}/src/apis"

	[[ -d "${apis_dir}" ]] || return 0

	shopt -s nullglob
	local api_file
	for api_file in "${apis_dir}"/*.ts; do
		sed -i "s|from '\.\./src/models/|from '../models/|g" "${api_file}"
	done
	shopt -u nullglob

	# Left behind by an earlier generation; harmless but dead once the imports
	# above point at src/models directly.
	rm -rf "${package_dir}/src/src"
}

cleanup_legacy_null_models() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local models_index="${package_dir}/src/models/index.ts"
	local removed_basename
	local model_file

	shopt -s nullglob
	for model_file in "${package_dir}/src/models"/*.ts; do
		[[ -f "$model_file" ]] || continue
		# A leftover from the typescript-fetch generation: those models import
		# from '../runtime', which this generator never emits.
		if grep -q "from '\.\./runtime'" "$model_file" 2>/dev/null; then
			removed_basename="$(basename "$model_file" .ts)"
			rm -f "$model_file"
			if [[ -f "$models_index" ]]; then
				sed -i "/export \* from '\.\/${removed_basename}'/d" "$models_index"
			fi
			echo "[generate] Removed legacy null model ${removed_basename} from sdk-${module_name}"
		fi
	done
	shopt -u nullglob
}

cleanup_legacy_fetch_apis() {
	local module_name="$1"
	local apis_dir="packages/sdk-${module_name}/src/apis"
	local apis_index="${apis_dir}/index.ts"

	# Delete legacy PascalCase *Api.ts files (fetch-style holdovers)
	find "$apis_dir" -maxdepth 1 -type f -name '[A-Z]*Api.ts' -delete 2>/dev/null || true

	# Force apis/index.ts to re-export the aggregator emitted by the Angular generator
	if [[ -f "${apis_dir}/api.ts" ]]; then
		echo "export * from './api';" > "$apis_index"
	fi
}

optimize_api_aggregator_for_treeshaking() {
	# OpenAPI's default api.ts aggregator imports every generated service to build an
	# APIS array. Those eager value imports make Configuration-only consumers pay for
	# all service classes. Keep only re-exports so bundlers can prune unused services.
	local module_name="$1"
	local api_file="packages/sdk-${module_name}/src/apis/api.ts"
	local tmp_file

	if [[ ! -f "${api_file}" ]]; then
		return 0
	fi

	tmp_file="$(mktemp)"
	grep "^export \* from './.*';$" "${api_file}" > "${tmp_file}" || true

	if [[ -s "${tmp_file}" ]]; then
		mv "${tmp_file}" "${api_file}"
	else
		rm -f "${tmp_file}"
		echo "export {};" > "${api_file}"
	fi
}

cleanup_orphan_js() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	find "${package_dir}/src" -name '*.js' -delete 2>/dev/null || true
	rm -f "${package_dir}/src/index.js" "${package_dir}/src/runtime.ts" "${package_dir}/src/runtime.js" 2>/dev/null || true
}

cleanup_generated_trailing_whitespace() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	find "${package_dir}/src" -type f -name '*.ts' -exec sed -i 's/[[:space:]]\+$//' {} +
}

ensure_models_are_modules() {
	# When a service has no DTO models, the generator emits empty src/models/index.ts
	# and src/models/models.ts. TS treats empty files as scripts (TS2306). Stamp an
	# explicit `export {};` so they parse as modules. Idempotent.
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local f
	for f in "${package_dir}/src/models/index.ts" "${package_dir}/src/models/models.ts"; do
		if [[ -f "$f" && ! -s "$f" ]]; then
			echo "export {};" > "$f"
		fi
	done
}

write_src_index() {
	# Idempotently regenerate packages/sdk-${module}/src/index.ts.
	# - Always re-export the generated apis aggregator (./apis/api).
	# - Re-export every workflow file under ./workflows (excluding .test.ts), if present.
	# - Always overwrite to keep generation deterministic.
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local src_dir="${package_dir}/src"
	local index_file="${src_dir}/index.ts"
	local workflows_dir="${src_dir}/workflows"
	local has_content=false

	mkdir -p "${src_dir}"
	: > "${index_file}"

	if [[ -f "${src_dir}/apis/api.ts" ]]; then
		echo "export * from './apis/api';" >> "${index_file}"
		has_content=true
	fi

	if [[ -d "${workflows_dir}" ]]; then
		shopt -s nullglob
		local wf
		for wf in "${workflows_dir}"/*.ts; do
			local base
			base="$(basename "${wf}" .ts)"
			[[ "${base}" == *.test ]] && continue
			[[ "${base}" == "index" ]] && continue
			echo "export * from './workflows/${base}';" >> "${index_file}"
			has_content=true
		done
		shopt -u nullglob
	fi

	if [[ "${has_content}" == "false" ]]; then
		echo "export {};" >> "${index_file}"
	fi
}

patch_package_dependencies() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"

	if [[ -f "${package_dir}/package.json" ]]; then
		(
			cd "${package_dir}"
			npm pkg delete 'dependencies.@durion-sdk/transport' >/dev/null 2>&1 || true
			npm pkg set 'peerDependencies.@durion-sdk/transport=*' >/dev/null
		)
	fi
}

patch_package_side_effects() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"

	if [[ -f "${package_dir}/package.json" ]]; then
		(
			cd "${package_dir}"
			npm pkg set --json 'sideEffects=false' >/dev/null
		)
	fi
}

cleanup_vehicle_inventory_duplicate_exports() {
	# Post-generation cleanup: VehicleAPIApi defines request-parameter interfaces named
	# CreateVehicleRequest and UpdateVehicleRequest that clash with same-named model DTOs
	# (TS2308 ambiguity). Drop `export` from the API-level interfaces so models win.
	echo "[generate] Applying sdk-vehicle-inventory duplicate-export cleanup..."
	VEHICLE_API_FILE="packages/sdk-vehicle-inventory/src/apis/VehicleAPIApi.ts"

	if [[ -f "$VEHICLE_API_FILE" ]]; then
		sed -i 's/^export interface CreateVehicleRequest {/interface CreateVehicleRequest {/;s/^export interface UpdateVehicleRequest {/interface UpdateVehicleRequest {/' "$VEHICLE_API_FILE"
		echo "[generate] Patched VehicleAPIApi.ts to un-export CreateVehicleRequest and UpdateVehicleRequest"
	fi
}

cleanup_inventory_duplicate_exports() {
	# Post-generation cleanup: fix sdk-inventory duplicate exports caused by multi-tag ops
	echo "[generate] Applying sdk-inventory duplicate-export cleanup..."
	INVENTORY_APIS_DIR="packages/sdk-inventory/src/apis"
	CYCLECOUNT_API_FILE="${INVENTORY_APIS_DIR}/CycleCountAPIApi.ts"
	INVENTORY_INDEX_FILE="${INVENTORY_APIS_DIR}/index.ts"

	if [[ -f "$CYCLECOUNT_API_FILE" ]]; then
		rm -f "$CYCLECOUNT_API_FILE"
		echo "[generate] Removed CycleCountAPIApi.ts (duplicate catch-all)"
	fi

	if [[ -f "$INVENTORY_INDEX_FILE" ]]; then
		# Remove the CycleCountAPIApi export line
		sed -i '/CycleCountAPIApi/d' "$INVENTORY_INDEX_FILE"
		echo "[generate] Patched apis/index.ts to remove CycleCountAPIApi export"
	fi
}

gateway_base_path_for_module() {
	case "$1" in
		accounting) echo "http://api-gateway.local/accounting" ;;
		bulk-loader) echo "http://api-gateway.local/bulk-loader" ;;
		catalog) echo "http://api-gateway.local/catalog" ;;
		customer) echo "http://api-gateway.local/customer" ;;
		event-receiver) echo "http://api-gateway.local/event-receiver" ;;
		image) echo "http://api-gateway.local/image" ;;
		inquiry) echo "http://api-gateway.local/inquiry" ;;
		inventory) echo "http://api-gateway.local/inventory" ;;
		invoice) echo "http://api-gateway.local/invoice" ;;
		location) echo "http://api-gateway.local/location" ;;
		order) echo "http://api-gateway.local/order" ;;
		people) echo "http://api-gateway.local/people" ;;
		people-contact) echo "http://api-gateway.local/people-contact" ;;
		price) echo "http://api-gateway.local/price" ;;
		security) echo "http://api-gateway.local/security-service" ;;
		supplier) echo "http://api-gateway.local/supplier" ;;
		shop-manager) echo "http://api-gateway.local/shop-manager" ;;
		vehicle-fitment) echo "http://api-gateway.local/vehicle-fitment" ;;
		vehicle-inventory) echo "http://api-gateway.local/vehicle-inventory" ;;
		workorder) echo "http://api-gateway.local/workorder" ;;
		warranty) echo "http://api-gateway.local/warranty" ;;
		marketing) echo "http://api-gateway.local/marketing" ;;
		tenant) echo "http://api-gateway.local/tenant" ;;
		*) return 1 ;;
	esac
}

apply_gateway_base_path_default() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local api_base_service="${package_dir}/configuration/api.base.service.ts"
	local gateway_base_path

	if ! gateway_base_path="$(gateway_base_path_for_module "${module_name}")"; then
		return 0
	fi

	if [[ ! -f "${api_base_service}" ]]; then
		echo "[generate] Missing ${api_base_service}; cannot apply gateway base path default" >&2
		return 1
	fi

	sed -i "s|protected basePath = '.*';|protected basePath = '${gateway_base_path}';|" "${api_base_service}"
	echo "[generate] Patched sdk-${module_name} basePath default -> ${gateway_base_path}"
}

# Validate the provided module name before anything is bumped or written.
if [[ -n "$module" ]]; then
	valid=false
	for m in "${MODULES[@]}"; do
		if [[ "$m" == "$module" ]]; then
			valid=true
			break
		fi
	done
	if [[ "$valid" == "false" ]]; then
		echo "Invalid --module value: '$module'. Valid modules: ${MODULES[*]}" >&2
		exit 2
	fi
fi

# Bump before generating: the generator stamps `npmVersion` from
# openapitools.json into every package.json it writes, so bumping afterwards
# would be reverted by the next regeneration.
if [[ "$bump" == "true" ]]; then
	node scripts/version.mjs bump
else
	echo "[generate] --no-bump: keeping version $(node scripts/version.mjs current)"
fi

if [[ -n "$module" ]]; then
	echo "Generating sdk-${module}..."
	npx @openapitools/openapi-generator-cli generate --generator-key "sdk-${module}"

	patch_package_tsconfig "$module"
	move_support_files_to_configuration_entry "$module"
	write_src_support_shims "$module"
	fix_model_import_paths "$module"
	if [[ "$module" == "inventory" ]]; then
		cleanup_inventory_duplicate_exports
	fi
	if [[ "$module" == "vehicle-inventory" ]]; then
		cleanup_vehicle_inventory_duplicate_exports
	fi
	cleanup_legacy_null_models "$module"
	cleanup_legacy_fetch_apis "$module"
	optimize_api_aggregator_for_treeshaking "$module"
	cleanup_orphan_js "$module"
	cleanup_generated_trailing_whitespace "$module"
	ensure_models_are_modules "$module"
	apply_gateway_base_path_default "$module"
	write_src_index "$module"
	patch_package_dependencies "$module"
	patch_package_side_effects "$module"
else
	# Generate all SDK modules in deterministic order
	for m in "${MODULES[@]}"; do
		echo "Generating sdk-${m}..."
		npx @openapitools/openapi-generator-cli generate --generator-key "sdk-${m}"

		patch_package_tsconfig "$m"
		move_support_files_to_configuration_entry "$m"
		write_src_support_shims "$m"
		fix_model_import_paths "$m"
		if [[ "$m" == "inventory" ]]; then
			cleanup_inventory_duplicate_exports
		fi
		if [[ "$m" == "vehicle-inventory" ]]; then
			cleanup_vehicle_inventory_duplicate_exports
		fi
		cleanup_legacy_null_models "$m"
		cleanup_legacy_fetch_apis "$m"
		optimize_api_aggregator_for_treeshaking "$m"
		cleanup_orphan_js "$m"
		cleanup_generated_trailing_whitespace "$m"
		ensure_models_are_modules "$m"
		apply_gateway_base_path_default "$m"
		write_src_index "$m"
		patch_package_dependencies "$m"
		patch_package_side_effects "$m"
	done
fi

echo "Generation complete at version $(node scripts/version.mjs current)."
