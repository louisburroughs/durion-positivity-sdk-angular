// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-vehicle-inventory/openapi.yaml.

/**
 * One permission check the operation makes beyond its authorization
 * expression, by the key the spec gives it. The same shape as
 * `OperationCondition` in @durion-sdk/transport, which documents it.
 */
export interface OperationCondition {
  readonly code: string;
  readonly kind: 'requiredWhen' | 'waives' | 'fields';
  readonly fields: readonly string[];
}

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
  readonly conditional: readonly string[];
  readonly authenticated: boolean;
  readonly conditions: Readonly<Record<string, OperationCondition>>;
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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<VehicleInventoryOperationId, OperationRequirement>>> = {
  bulkIngestVehicles: { anyOf: ['vehicle-inventory:registry:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completeVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVehicle: { anyOf: ['vehicle-inventory:registry:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVehicleLegacy: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  createVehicleLegacyByVin: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  deleteVehicle: { anyOf: ['vehicle-inventory:registry:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteVehicleLegacy: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  deleteVehicleLegacyByVin: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  deleteVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVehicle: { anyOf: ['vehicle-inventory:registry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVehicleByVin: { anyOf: ['vehicle-inventory:registry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVehicleLegacy: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getVehicleLegacyByVin: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVehicleDueDates: { anyOf: ['vehicle-inventory:due-dates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVehiclesLegacy: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  mergeVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayVehicleFacts: { anyOf: ['vehicle-inventory:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchVehicleDueDates: { anyOf: ['vehicle-inventory:due-dates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchVehicles: { anyOf: ['vehicle-inventory:search:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchVehiclesByQuery: { anyOf: ['vehicle-inventory:search:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateVehicle: { anyOf: ['vehicle-inventory:registry:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateVehicleLegacy: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  updateVehicleLegacyByVin: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  upsertVehicleDueDate: { anyOf: ['vehicle-inventory:due-dates:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertVehiclePreferences: { anyOf: ['vehicle-inventory:preferences:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly VehicleInventoryOperationId[] = [];
