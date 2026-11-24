// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-location/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<LocationOperationId, OperationRequirement>>> = {
  addLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  bulkIngestBays: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false },
  bulkIngestLocations: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  bulkIngestMobileUnits: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false },
  bulkIngestStorageLocations: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  configureSiteDefaults: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  createBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false },
  createLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  createMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false },
  createServiceArea: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false },
  createStorageLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  createTravelBufferPolicy: { anyOf: ['location:travel-buffer-policy:manage'], allOf: [], conditional: [], authenticated: false },
  deleteBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false },
  deleteLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  deleteMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false },
  findEligibleMobileUnits: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false },
  getBay: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false },
  getLocationById: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getLocationResponsiblePerson: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getLocationRoster: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getMobileUnitById: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false },
  getSiteDefaults: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getStorageLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getStorageLocationTopology: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  getTopLevelLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listBayTypes: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false },
  listBays: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false },
  listCoverageRules: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false },
  listLocationAttention: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listLocationChildren: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listLocationDescendants: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listLocationParents: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listLocations: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listMobileUnits: { anyOf: ['location:mobile-unit:read'], allOf: [], conditional: [], authenticated: false },
  listServiceAreas: { anyOf: ['location:service-area:read'], allOf: [], conditional: [], authenticated: false },
  listStorageLocations: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  listTravelBufferPolicies: { anyOf: ['location:travel-buffer-policy:read'], allOf: [], conditional: [], authenticated: false },
  patchBay: { anyOf: ['location:bay:manage'], allOf: [], conditional: [], authenticated: false },
  patchLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  patchMobileUnit: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false },
  patchServiceArea: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false },
  patchStorageLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  patchTravelBufferPolicy: { anyOf: ['location:travel-buffer-policy:manage'], allOf: [], conditional: [], authenticated: false },
  removeLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  replaceCoverageRules: { anyOf: ['location:mobile-unit:manage'], allOf: [], conditional: [], authenticated: false },
  replaceLocationParent: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  replaceServiceAreaPostalCodes: { anyOf: ['location:service-area:manage'], allOf: [], conditional: [], authenticated: false },
  updateLocation: { anyOf: ['location:write'], allOf: [], conditional: [], authenticated: false },
  validateLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
  validateStorageLocation: { anyOf: ['location:read'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly LocationOperationId[] = [];
