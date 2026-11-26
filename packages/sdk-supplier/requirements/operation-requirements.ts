// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-supplier/openapi.yaml.

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

/** Every operation of @durion-sdk/supplier, by the name of its generated service method. */
export type SupplierOperationId =
  | 'addFavoriteVendor'
  | 'approveSupplierVendorRemitChange'
  | 'createAuthConfig'
  | 'createCommercialAccount'
  | 'createEndpointBinding'
  | 'createSupplierVendor'
  | 'createVendorProfile'
  | 'deactivateSupplierVendor'
  | 'deleteAuthConfig'
  | 'deleteCommercialAccount'
  | 'deleteEndpointBinding'
  | 'deleteVendorProfile'
  | 'fetchSupplierInvoices'
  | 'getFleetWorkorderAuthorization'
  | 'getLatestSupplierStockSnapshot'
  | 'getSupplierExchange'
  | 'getSupplierPriceCatalogFreshness'
  | 'getSupplierStockAvailability'
  | 'getSupplierTransmission'
  | 'getSupplierVendor'
  | 'getVendorProfile'
  | 'importMarketingCatalog'
  | 'inquireSupplierStock'
  | 'listAuthConfigs'
  | 'listCommercialAccounts'
  | 'listEndpointBindings'
  | 'listFavoriteVendors'
  | 'listFleetAuthorizationsNeedingReview'
  | 'listFleetContracts'
  | 'listFleetPolicies'
  | 'listMarketingCatalogVariants'
  | 'listSupplierExchangeAccesses'
  | 'listSupplierExchanges'
  | 'listSupplierPriceCatalogEntries'
  | 'listSupplierPriceCatalogImports'
  | 'listSupplierPriceCatalogUnmatchedLines'
  | 'listSupplierStockSnapshotLines'
  | 'listSupplierTransmissionsForPurchaseOrder'
  | 'listSupplierVendorRemitChanges'
  | 'listSupplierVendorTaxIdReveals'
  | 'listSupplierVendorTaxRegistrationSchemes'
  | 'listSupplierVendors'
  | 'listVendorDirectory'
  | 'listVendorProfiles'
  | 'lookupFleetVehicle'
  | 'reactivateSupplierVendor'
  | 'readSupplierExchangePayload'
  | 'reapplySupplierPriceCatalogQuarantine'
  | 'rejectSupplierVendorRemitChange'
  | 'removeFavoriteVendor'
  | 'replaySupplierVendorFacts'
  | 'requestFleetWorkorderAuthorization'
  | 'requestSupplierVendorRemitChange'
  | 'resolveSupplierTransmission'
  | 'revealSupplierVendorTaxRegistration'
  | 'searchSupplierTransmissions'
  | 'traceSupplierCorrelation'
  | 'triggerSupplierPriceCatalogImport'
  | 'updateAuthConfig'
  | 'updateCommercialAccount'
  | 'updateEndpointBinding'
  | 'updateSupplierVendor'
  | 'updateVendorProfile'
  | 'uploadSupplierVendorLogo';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<SupplierOperationId, OperationRequirement>>> = {
  addFavoriteVendor: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveSupplierVendorRemitChange: { anyOf: ['supplier:vendor_remit:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  fetchSupplierInvoices: { anyOf: ['supplier:invoice:fetch'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getFleetWorkorderAuthorization: { anyOf: ['supplier:workorderauth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLatestSupplierStockSnapshot: { anyOf: ['supplier:stocksnapshot:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSupplierExchange: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSupplierPriceCatalogFreshness: { anyOf: ['supplier:pricecatalog:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSupplierStockAvailability: { anyOf: ['supplier:stockavailability:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSupplierTransmission: { anyOf: ['supplier:transmission:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSupplierVendor: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorProfile: { anyOf: ['supplier:profile:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  importMarketingCatalog: { anyOf: ['supplier:mktcat:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  inquireSupplierStock: { anyOf: ['supplier:stock:inquire'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAuthConfigs: { anyOf: ['supplier:profile:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCommercialAccounts: { anyOf: ['supplier:profile:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listEndpointBindings: { anyOf: ['supplier:profile:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listFavoriteVendors: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listFleetAuthorizationsNeedingReview: { anyOf: ['supplier:workorderauth:review'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listFleetContracts: { anyOf: ['supplier:workorderauth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listFleetPolicies: { anyOf: ['supplier:workorderauth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMarketingCatalogVariants: { anyOf: ['supplier:mktcat:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierExchangeAccesses: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierExchanges: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierPriceCatalogEntries: { anyOf: ['supplier:pricecatalog:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierPriceCatalogImports: { anyOf: ['supplier:pricecatalog:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierPriceCatalogUnmatchedLines: { anyOf: ['supplier:pricecatalog:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierStockSnapshotLines: { anyOf: ['supplier:stocksnapshot:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierTransmissionsForPurchaseOrder: { anyOf: ['supplier:transmission:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierVendorRemitChanges: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierVendorTaxIdReveals: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierVendorTaxRegistrationSchemes: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierVendors: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorDirectory: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorProfiles: { anyOf: ['supplier:profile:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  lookupFleetVehicle: { anyOf: ['supplier:workorderauth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reactivateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  readSupplierExchangePayload: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reapplySupplierPriceCatalogQuarantine: { anyOf: ['supplier:pricecatalog:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectSupplierVendorRemitChange: { anyOf: ['supplier:vendor_remit:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeFavoriteVendor: { anyOf: ['supplier:vendor:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaySupplierVendorFacts: { anyOf: ['supplier:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestFleetWorkorderAuthorization: { anyOf: ['supplier:workorderauth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestSupplierVendorRemitChange: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveSupplierTransmission: { anyOf: ['supplier:transmission:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revealSupplierVendorTaxRegistration: { anyOf: ['supplier:vendor_tax_id:reveal'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchSupplierTransmissions: { anyOf: ['supplier:transmission:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  traceSupplierCorrelation: { anyOf: ['supplier:audit:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  triggerSupplierPriceCatalogImport: { anyOf: ['supplier:pricecatalog:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  uploadSupplierVendorLogo: { anyOf: ['supplier:vendor:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly SupplierOperationId[] = [];
