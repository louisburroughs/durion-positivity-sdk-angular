// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-location/openapi.yaml.

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

/** Every operation of @durion-sdk/location, by the name of its generated service method. */
export type LocationOperationId =
  | 'addLocationParent'
  | 'bulkIngestBays'
  | 'bulkIngestLocations'
  | 'bulkIngestMobileUnits'
  | 'bulkIngestStorageLocations'
  | 'configureSiteDefaults'
  | 'createBay'
  | 'createLocation'
  | 'createMobileUnit'
  | 'createServiceArea'
  | 'createStorageLocation'
  | 'createTravelBufferPolicy'
  | 'deleteBay'
  | 'deleteLocation'
  | 'deleteMobileUnit'
  | 'findEligibleMobileUnits'
  | 'getBay'
  | 'getLocationById'
  | 'getLocationResponsiblePerson'
  | 'getLocationRoster'
  | 'getMobileUnitById'
  | 'getSiteDefaults'
  | 'getStorageLocation'
  | 'getStorageLocationTopology'
  | 'getTopLevelLocation'
  | 'listBayTypes'
  | 'listBays'
  | 'listCoverageRules'
  | 'listLocationAttention'
  | 'listLocationChildren'
  | 'listLocationDescendants'
  | 'listLocationParents'
  | 'listLocations'
  | 'listMobileUnits'
  | 'listServiceAreas'
  | 'listStorageLocations'
  | 'listTravelBufferPolicies'
  | 'patchBay'
  | 'patchLocation'
  | 'patchMobileUnit'
  | 'patchServiceArea'
  | 'patchStorageLocation'
  | 'patchTravelBufferPolicy'
  | 'removeLocationParent'
  | 'replaceCoverageRules'
  | 'replaceLocationParent'
  | 'replaceServiceAreaPostalCodes'
  | 'updateLocation'
  | 'validateLocation'
  | 'validateStorageLocation';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<LocationOperationId, OperationRequirement>>> = {
  addLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestBays: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestLocations: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestMobileUnits: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestStorageLocations: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  configureSiteDefaults: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createServiceArea: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createStorageLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTravelBufferPolicy: { anyOf: ['location:travel-buffer-policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  findEligibleMobileUnits: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBay: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationById: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationResponsiblePerson: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationRoster: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMobileUnitById: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSiteDefaults: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStorageLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStorageLocationTopology: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTopLevelLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBayTypes: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBays: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCoverageRules: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationAttention: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationChildren: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationDescendants: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationParents: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocations: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMobileUnits: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServiceAreas: { anyOf: ['location:service-area:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStorageLocations: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTravelBufferPolicies: { anyOf: ['location:travel-buffer-policy:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchServiceArea: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchStorageLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchTravelBufferPolicy: { anyOf: ['location:travel-buffer-policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaceCoverageRules: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaceLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaceServiceAreaPostalCodes: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  validateLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  validateStorageLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly LocationOperationId[] = [];
