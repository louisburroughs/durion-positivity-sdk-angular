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
	done
fi

echo "Generation complete."
