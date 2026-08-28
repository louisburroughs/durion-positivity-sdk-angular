#!/usr/bin/env bash
set -euo pipefail

# Tarball pipeline
# Bumps the repo-wide minor version and writes one npm tarball per SDK package.
#
# The minor version is bumped once per run, before anything is packed, so every
# tarball produced by a run carries the same new version. Major versions are
# never bumped here: do those by hand with `npm run version:set -- <major>.0.0`.
#
# `npm pack` runs each package's `prepare` hook, so the ng-packagr build happens
# as part of packing (npm ignores --ignore-scripts for that hook).
#
# Usage:
#   ./scripts/pack-sdk.sh                     # bump minor, pack every SDK package
#   ./scripts/pack-sdk.sh --module location   # bump minor, pack only sdk-location
#   ./scripts/pack-sdk.sh --no-bump           # repack at the current version
#   ./scripts/pack-sdk.sh --out-dir dist/tarballs
#   ./scripts/pack-sdk.sh --prune-old         # delete older tarballs of the packed packages
#   ./scripts/pack-sdk.sh --dry-run           # show what would happen, write nothing

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

module=""
out_dir="$repo_root"
bump=true
prune_old=false
dry_run=false

while [[ $# -gt 0 ]]; do
	case "$1" in
		--module)
			module="${2:-}"
			[[ -n "$module" ]] || { echo "--module requires a value" >&2; exit 2; }
			shift 2
			;;
		--out-dir)
			out_dir="${2:-}"
			[[ -n "$out_dir" ]] || { echo "--out-dir requires a value" >&2; exit 2; }
			shift 2
			;;
		--no-bump)
			bump=false
			shift
			;;
		--prune-old)
			prune_old=true
			shift
			;;
		--dry-run)
			dry_run=true
			shift
			;;
		-h|--help)
			awk 'NR>3 && /^#/ { sub(/^# ?/, ""); print; next } NR>3 { exit }' "${BASH_SOURCE[0]}"
			exit 0
			;;
		*)
			echo "Unknown argument: $1" >&2
			exit 2
			;;
	esac
done

# Selected workspaces, as directory paths under packages/.
packages=()
if [[ -n "$module" ]]; then
	package_dir="packages/sdk-${module}"
	if [[ ! -f "${package_dir}/package.json" ]]; then
		echo "Unknown module '${module}': ${package_dir}/package.json not found" >&2
		exit 2
	fi
	packages+=("$package_dir")
else
	while IFS= read -r manifest; do
		packages+=("$(dirname "$manifest")")
	done < <(find packages -mindepth 2 -maxdepth 2 -name package.json | sort)
fi

if [[ ${#packages[@]} -eq 0 ]]; then
	echo "No packages found to pack." >&2
	exit 1
fi

if [[ ! -d node_modules ]]; then
	echo "[pack] node_modules/ is missing; run 'npm install' first so packages can build." >&2
	[[ "$dry_run" == "true" ]] || exit 1
fi

if [[ "$bump" == "true" ]]; then
	if [[ "$dry_run" == "true" ]]; then
		node scripts/version.mjs bump --dry-run
	else
		node scripts/version.mjs bump
	fi
else
	echo "[pack] --no-bump: keeping version $(node scripts/version.mjs current)"
fi

version="$(node scripts/version.mjs current)"
if [[ "$bump" == "true" && "$dry_run" == "true" ]]; then
	version="$(node scripts/version.mjs next)"
fi

if [[ "$dry_run" == "false" ]]; then
	mkdir -p "$out_dir"
fi
out_dir="$(cd "$out_dir" 2>/dev/null && pwd || echo "$out_dir")"

# npm names the tarball after the package name with the scope flattened:
# @durion-sdk/location -> durion-sdk-location-<version>.tgz
tarball_prefix_for() {
	local package_dir="$1"
	local package_name
	package_name="$(node -p "require('./${package_dir}/package.json').name")"
	echo "${package_name#@}" | tr '/' '-'
}

packed=()
for package_dir in "${packages[@]}"; do
	prefix="$(tarball_prefix_for "$package_dir")"
	tarball="${out_dir}/${prefix}-${version}.tgz"

	if [[ "$dry_run" == "true" ]]; then
		echo "[pack] would pack ${package_dir} -> ${tarball}"
		continue
	fi

	# The package's `prepare` hook builds it (ng-packagr / tsc) as part of packing.
	echo "[pack] Building and packing ${package_dir}..."
	npm pack --workspace "$package_dir" --pack-destination "$out_dir" >/dev/null

	if [[ ! -f "$tarball" ]]; then
		echo "[pack] Expected tarball not found: ${tarball}" >&2
		exit 1
	fi
	packed+=("$tarball")

	if [[ "$prune_old" == "true" ]]; then
		while IFS= read -r stale; do
			[[ "$stale" == "$tarball" ]] && continue
			# Only prune this package's own tarballs: the prefix alone would also
			# match a sibling (durion-sdk-people vs durion-sdk-people-contact).
			[[ "$(basename "$stale")" =~ ^${prefix}-[0-9]+\.[0-9]+\.[0-9]+([-+][0-9A-Za-z.-]+)?\.tgz$ ]] || continue
			echo "[pack] Removing superseded tarball $(basename "$stale")"
			rm -f "$stale"
		done < <(find "$out_dir" -maxdepth 1 -name "${prefix}-*.tgz")
	fi
done

if [[ "$dry_run" == "true" ]]; then
	echo "[pack] Dry run complete; nothing was written."
	exit 0
fi

echo "[pack] Packed ${#packed[@]} package(s) at version ${version}:"
for tarball in "${packed[@]}"; do
	echo "  ${tarball#"$repo_root"/}"
done
