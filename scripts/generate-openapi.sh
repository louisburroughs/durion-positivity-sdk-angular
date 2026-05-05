#!/usr/bin/env bash
set -euo pipefail

# OpenAPI generation pipeline
# Generates Angular HttpClient services from backend OpenAPI specs (typescript-angular generator).
# Generated services are @Injectable({ providedIn: 'root' }) and return Observable<T>.
#
# Usage:
#   ./scripts/generate-openapi.sh                    # Generate all SDK modules
#   ./scripts/generate-openapi.sh --module security  # Generate only the specified module
#
# Valid module names: security, order, inventory, workorder, accounting, catalog, customer, invoice, location, people, price, shop-manager, image, event-receiver, vehicle-fitment, vehicle-inventory, internal, documents, inquiry, bulk-loader

module=""

while [[ $# -gt 0 ]]; do
	case "$1" in
		--module)
			module="$2"
			shift 2
			;;
		*)
			echo "Unknown argument: $1" >&2
			exit 2
			;;
	esac
done

MODULES=(security order inventory workorder accounting catalog customer invoice location people price shop-manager image event-receiver vehicle-fitment vehicle-inventory internal documents inquiry bulk-loader)

patch_package_tsconfig() {
	# The custom tsconfig.mustache (templates/typescript-angular/tsconfig.mustache) now
	# produces ES2022 target/module and correct moduleResolution directly, so no sed
	# patching is needed. This function is kept as a no-op to preserve call-site
	# compatibility in case a future generator version regresses.
	:
}

write_src_support_shims() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local src_dir="${package_dir}/src"

	mkdir -p "${src_dir}"

	for support_file in configuration api.base.service query.params encoder param variables; do
		cat > "${src_dir}/${support_file}.ts" <<EOF
export * from '../${support_file}';
EOF
	done
}

write_nested_model_shims() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local nested_models_dir="${package_dir}/src/src/models"
	local model_file

	mkdir -p "${nested_models_dir}"

	shopt -s nullglob
	for model_file in "${package_dir}/src/models/"*.ts; do
		local model_basename
		model_basename="$(basename "${model_file}")"

		cat > "${nested_models_dir}/${model_basename}" <<EOF
export * from '../../models/${model_basename%.ts}';
EOF
	done
	shopt -u nullglob
}

cleanup_legacy_null_models() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local models_index="${package_dir}/src/models/index.ts"
	local removed_basename
	local model_file

	shopt -s nullglob
	for model_file in "${package_dir}/src/models"/*.ts "${package_dir}/src/src/models"/*.ts; do
		[[ -f "$model_file" ]] || continue
		if grep -q "from '\.\./runtime'\|from '\.\./\.\./models/" "$model_file" 2>/dev/null; then
			# nested shim files always re-export from ../../models/...; only delete if the
			# referenced sibling no longer exists OR the file in src/models/ uses ../runtime
			if grep -q "from '\.\./runtime'" "$model_file"; then
				removed_basename="$(basename "$model_file" .ts)"
				rm -f "$model_file"
				rm -f "${package_dir}/src/src/models/${removed_basename}.ts"
				if [[ -f "$models_index" ]]; then
					sed -i "/export \* from '\.\/${removed_basename}'/d" "$models_index"
				fi
				echo "[generate] Removed legacy null model ${removed_basename} from sdk-${module_name}"
			fi
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

cleanup_orphan_js() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	find "${package_dir}/src" -name '*.js' -delete 2>/dev/null || true
	rm -f "${package_dir}/src/index.js" "${package_dir}/src/runtime.ts" "${package_dir}/src/runtime.js" 2>/dev/null || true
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
		price) echo "http://api-gateway.local/price" ;;
		security) echo "http://api-gateway.local/security-service" ;;
		shop-manager) echo "http://api-gateway.local/shop-manager" ;;
		vehicle-fitment) echo "http://api-gateway.local/vehicle-fitment" ;;
		vehicle-inventory) echo "http://api-gateway.local/vehicle-inventory" ;;
		workorder) echo "http://api-gateway.local/workorder" ;;
		*) return 1 ;;
	esac
}

apply_gateway_base_path_default() {
	local module_name="$1"
	local package_dir="packages/sdk-${module_name}"
	local api_base_service="${package_dir}/api.base.service.ts"
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

if [[ -n "$module" ]]; then
	# Validate the provided module name
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
	echo "Generating sdk-${module}..."
	npx @openapitools/openapi-generator-cli generate --generator-key "sdk-${module}"

	patch_package_tsconfig "$module"
	write_src_support_shims "$module"
	write_nested_model_shims "$module"
	if [[ "$module" == "inventory" ]]; then
		cleanup_inventory_duplicate_exports
	fi
	if [[ "$module" == "vehicle-inventory" ]]; then
		cleanup_vehicle_inventory_duplicate_exports
	fi
	cleanup_legacy_null_models "$module"
	cleanup_legacy_fetch_apis "$module"
	cleanup_orphan_js "$module"
	ensure_models_are_modules "$module"
	apply_gateway_base_path_default "$module"
	write_src_index "$module"
	patch_package_dependencies "$module"
else
	# Generate all SDK modules in deterministic order
	for m in "${MODULES[@]}"; do
		echo "Generating sdk-${m}..."
		npx @openapitools/openapi-generator-cli generate --generator-key "sdk-${m}"

		patch_package_tsconfig "$m"
		write_src_support_shims "$m"
		write_nested_model_shims "$m"
		if [[ "$m" == "inventory" ]]; then
			cleanup_inventory_duplicate_exports
		fi
		if [[ "$m" == "vehicle-inventory" ]]; then
			cleanup_vehicle_inventory_duplicate_exports
		fi
		cleanup_legacy_null_models "$m"
		cleanup_legacy_fetch_apis "$m"
		cleanup_orphan_js "$m"
		ensure_models_are_modules "$m"
		apply_gateway_base_path_default "$m"
		write_src_index "$m"
		patch_package_dependencies "$m"
	done
fi

echo "Generation complete."
