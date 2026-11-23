// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-vehicle-fitment/openapi.yaml.

/**
 * What a caller must hold to call one operation. The same shape as
 * `OperationRequirement` in @durion-sdk/transport, which documents it and
 * evaluates it (`isOperationPermitted`). Declared here as well because a
 * generated package cannot import another workspace package at build time; the
 * two are interchangeable.
 */
export interface OperationRequirement {
  readonly anyOf: readonly string[];
  readonly allOf: readonly string[];
  readonly authenticated: boolean;
}

/** Every operation of @durion-sdk/vehicle-fitment, by the name of its generated service method. */
export type VehicleFitmentOperationId =
  | 'bulkIngestVehicleFitments'
  | 'createVehicleHint'
  | 'decodeVin'
  | 'deleteVehicleHint'
  | 'filterProductsByVehicleAttributes'
  | 'getVehicleHint'
  | 'listMakesByManufacturer'
  | 'listManufacturers'
  | 'listModelsByMake'
  | 'listVehicleHintsByProduct'
  | 'listVehicleTypesByMake'
  | 'resolvePlate'
  | 'updateVehicleHint';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<VehicleFitmentOperationId, OperationRequirement>>> = {
  bulkIngestVehicleFitments: { anyOf: ['vehicle-fitment:hint:create'], allOf: [], authenticated: false },
  createVehicleHint: { anyOf: ['vehicle-fitment:hint:create'], allOf: [], authenticated: false },
  decodeVin: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  deleteVehicleHint: { anyOf: ['vehicle-fitment:hint:delete'], allOf: [], authenticated: false },
  filterProductsByVehicleAttributes: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  getVehicleHint: { anyOf: ['vehicle-fitment:hint:view'], allOf: [], authenticated: false },
  listMakesByManufacturer: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  listManufacturers: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  listModelsByMake: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  listVehicleHintsByProduct: { anyOf: ['vehicle-fitment:hint:view'], allOf: [], authenticated: false },
  listVehicleTypesByMake: { anyOf: ['vehicle-fitment:catalog:view'], allOf: [], authenticated: false },
  resolvePlate: { anyOf: ['vehicle-fitment:plate:resolve'], allOf: [], authenticated: false },
  updateVehicleHint: { anyOf: ['vehicle-fitment:hint:update'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly VehicleFitmentOperationId[] = [];
