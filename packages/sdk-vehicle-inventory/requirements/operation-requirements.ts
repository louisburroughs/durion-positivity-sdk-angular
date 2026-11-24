// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-vehicle-inventory/openapi.yaml.

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

/** Every operation of @durion-sdk/vehicle-inventory, by the name of its generated service method. */
export type VehicleInventoryOperationId =
  | 'bulkIngestVehicles'
  | 'completeVehicleDueDate'
  | 'createVehicle'
  | 'createVehicleLegacy'
  | 'createVehicleLegacyByVin'
  | 'deleteVehicle'
  | 'deleteVehicleDueDate'
  | 'deleteVehicleLegacy'
  | 'deleteVehicleLegacyByVin'
  | 'deleteVehiclePreferences'
  | 'getVehicle'
  | 'getVehicleByVin'
  | 'getVehicleLegacy'
  | 'getVehicleLegacyByVin'
  | 'getVehiclePreferences'
  | 'listVehicleDueDates'
  | 'listVehiclesLegacy'
  | 'mergeVehiclePreferences'
  | 'replayVehicleFacts'
  | 'searchVehicleDueDates'
  | 'searchVehicles'
  | 'searchVehiclesByQuery'
  | 'updateVehicle'
  | 'updateVehicleLegacy'
  | 'updateVehicleLegacyByVin'
  | 'upsertVehicleDueDate'
  | 'upsertVehiclePreferences';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<VehicleInventoryOperationId, OperationRequirement>>> = {
  bulkIngestVehicles: { anyOf: ['vehicle-inventory:registry:create'], allOf: [], authenticated: false },
  completeVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], authenticated: false },
  createVehicle: { anyOf: ['vehicle-inventory:registry:create'], allOf: [], authenticated: false },
  createVehicleLegacy: { anyOf: [], allOf: [], authenticated: true },
  createVehicleLegacyByVin: { anyOf: [], allOf: [], authenticated: true },
  deleteVehicle: { anyOf: ['vehicle-inventory:registry:delete'], allOf: [], authenticated: false },
  deleteVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], authenticated: false },
  deleteVehicleLegacy: { anyOf: [], allOf: [], authenticated: true },
  deleteVehicleLegacyByVin: { anyOf: [], allOf: [], authenticated: true },
  deleteVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], authenticated: false },
  getVehicle: { anyOf: ['vehicle-inventory:registry:view'], allOf: [], authenticated: false },
  getVehicleByVin: { anyOf: ['vehicle-inventory:registry:view'], allOf: [], authenticated: false },
  getVehicleLegacy: { anyOf: [], allOf: [], authenticated: true },
  getVehicleLegacyByVin: { anyOf: [], allOf: [], authenticated: true },
  getVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], authenticated: false },
  listVehicleDueDates: { anyOf: ['vehicle-inventory:due-dates:view'], allOf: [], authenticated: false },
  listVehiclesLegacy: { anyOf: [], allOf: [], authenticated: true },
  mergeVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], authenticated: false },
  replayVehicleFacts: { anyOf: ['vehicle-inventory:fact:replay'], allOf: [], authenticated: false },
  searchVehicleDueDates: { anyOf: ['vehicle-inventory:due-dates:view'], allOf: [], authenticated: false },
  searchVehicles: { anyOf: ['vehicle-inventory:search:view'], allOf: [], authenticated: false },
  searchVehiclesByQuery: { anyOf: ['vehicle-inventory:search:view'], allOf: [], authenticated: false },
  updateVehicle: { anyOf: ['vehicle-inventory:registry:update'], allOf: [], authenticated: false },
  updateVehicleLegacy: { anyOf: [], allOf: [], authenticated: true },
  updateVehicleLegacyByVin: { anyOf: [], allOf: [], authenticated: true },
  upsertVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], authenticated: false },
  upsertVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly VehicleInventoryOperationId[] = [];
