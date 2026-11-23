// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-supplier/openapi.yaml.

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
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<SupplierOperationId, OperationRequirement>>> = {
  addFavoriteVendor: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  approveSupplierVendorRemitChange: { anyOf: ['supplier:vendor_remit:approve'], allOf: [], authenticated: false },
  createAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  createCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  createEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  createSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
  createVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  deactivateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
  deleteAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  deleteCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  deleteEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  deleteVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  fetchSupplierInvoices: { anyOf: ['supplier:invoice:fetch'], allOf: [], authenticated: false },
  getFleetWorkorderAuthorization: { anyOf: ['supplier:workorderauth:request'], allOf: [], authenticated: false },
  getLatestSupplierStockSnapshot: { anyOf: ['supplier:stocksnapshot:read'], allOf: [], authenticated: false },
  getSupplierExchange: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  getSupplierPriceCatalogFreshness: { anyOf: ['supplier:pricecatalog:read'], allOf: [], authenticated: false },
  getSupplierStockAvailability: { anyOf: ['supplier:stockavailability:read'], allOf: [], authenticated: false },
  getSupplierTransmission: { anyOf: ['supplier:transmission:read'], allOf: [], authenticated: false },
  getSupplierVendor: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  getVendorProfile: { anyOf: ['supplier:profile:read'], allOf: [], authenticated: false },
  importMarketingCatalog: { anyOf: ['supplier:mktcat:import'], allOf: [], authenticated: false },
  inquireSupplierStock: { anyOf: ['supplier:stock:inquire'], allOf: [], authenticated: false },
  listAuthConfigs: { anyOf: ['supplier:profile:read'], allOf: [], authenticated: false },
  listCommercialAccounts: { anyOf: ['supplier:profile:read'], allOf: [], authenticated: false },
  listEndpointBindings: { anyOf: ['supplier:profile:read'], allOf: [], authenticated: false },
  listFavoriteVendors: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  listFleetAuthorizationsNeedingReview: { anyOf: ['supplier:workorderauth:review'], allOf: [], authenticated: false },
  listFleetContracts: { anyOf: ['supplier:workorderauth:request'], allOf: [], authenticated: false },
  listFleetPolicies: { anyOf: ['supplier:workorderauth:request'], allOf: [], authenticated: false },
  listMarketingCatalogVariants: { anyOf: ['supplier:mktcat:import'], allOf: [], authenticated: false },
  listSupplierExchangeAccesses: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  listSupplierExchanges: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  listSupplierPriceCatalogEntries: { anyOf: ['supplier:pricecatalog:read'], allOf: [], authenticated: false },
  listSupplierPriceCatalogImports: { anyOf: ['supplier:pricecatalog:read'], allOf: [], authenticated: false },
  listSupplierPriceCatalogUnmatchedLines: { anyOf: ['supplier:pricecatalog:read'], allOf: [], authenticated: false },
  listSupplierStockSnapshotLines: { anyOf: ['supplier:stocksnapshot:read'], allOf: [], authenticated: false },
  listSupplierTransmissionsForPurchaseOrder: { anyOf: ['supplier:transmission:read'], allOf: [], authenticated: false },
  listSupplierVendorRemitChanges: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  listSupplierVendorTaxIdReveals: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  listSupplierVendorTaxRegistrationSchemes: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  listSupplierVendors: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  listVendorDirectory: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  listVendorProfiles: { anyOf: ['supplier:profile:read'], allOf: [], authenticated: false },
  lookupFleetVehicle: { anyOf: ['supplier:workorderauth:request'], allOf: [], authenticated: false },
  reactivateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
  readSupplierExchangePayload: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  reapplySupplierPriceCatalogQuarantine: { anyOf: ['supplier:pricecatalog:import'], allOf: [], authenticated: false },
  rejectSupplierVendorRemitChange: { anyOf: ['supplier:vendor_remit:approve'], allOf: [], authenticated: false },
  removeFavoriteVendor: { anyOf: ['supplier:vendor:read'], allOf: [], authenticated: false },
  replaySupplierVendorFacts: { anyOf: ['supplier:fact:replay'], allOf: [], authenticated: false },
  requestFleetWorkorderAuthorization: { anyOf: ['supplier:workorderauth:request'], allOf: [], authenticated: false },
  requestSupplierVendorRemitChange: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
  resolveSupplierTransmission: { anyOf: ['supplier:transmission:resolve'], allOf: [], authenticated: false },
  revealSupplierVendorTaxRegistration: { anyOf: ['supplier:vendor_tax_id:reveal'], allOf: [], authenticated: false },
  searchSupplierTransmissions: { anyOf: ['supplier:transmission:read'], allOf: [], authenticated: false },
  traceSupplierCorrelation: { anyOf: ['supplier:audit:read'], allOf: [], authenticated: false },
  triggerSupplierPriceCatalogImport: { anyOf: ['supplier:pricecatalog:import'], allOf: [], authenticated: false },
  updateAuthConfig: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  updateCommercialAccount: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  updateEndpointBinding: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  updateSupplierVendor: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
  updateVendorProfile: { anyOf: ['supplier:profile:write'], allOf: [], authenticated: false },
  uploadSupplierVendorLogo: { anyOf: ['supplier:vendor:write'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly SupplierOperationId[] = [];
