// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-catalog/openapi.yaml.

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

/** Every operation of @durion-sdk/catalog, by the name of its generated service method. */
export type CatalogOperationId =
  | 'addProductReplacement'
  | 'addProductUom'
  | 'addServicePackageMember'
  | 'addSubstitutionGroupMember'
  | 'approveLocationPriceOverride'
  | 'bulkIngestCatalogProducts'
  | 'bulkIngestCatalogServices'
  | 'bulkIngestLaborStandards'
  | 'bulkIngestServicePackageMembers'
  | 'bulkIngestServicePackages'
  | 'createCatalog'
  | 'createCatalogItem'
  | 'createLocationPriceOverride'
  | 'createPriceBook'
  | 'createPriceBookRule'
  | 'createProduct'
  | 'createProductMsrp'
  | 'createServiceLaborStandard'
  | 'createServicePackage'
  | 'createSubstitutionGroup'
  | 'createUomConversion'
  | 'deactivatePriceBookRule'
  | 'deactivateUomConversion'
  | 'deleteCatalog'
  | 'deleteCatalogItem'
  | 'deleteProductUom'
  | 'deleteSubstitutionGroup'
  | 'findProductByCode'
  | 'getActiveProductMsrp'
  | 'getCatalogById'
  | 'getEffectiveLocationPrice'
  | 'getItemCostAuditHistory'
  | 'getItemCosts'
  | 'getLatestSupplierPrice'
  | 'getNonInventoryProductById'
  | 'getPartSubstitutes'
  | 'getPriceBook'
  | 'getProductById'
  | 'getProductDetailView'
  | 'getProductLifecycle'
  | 'getServiceById'
  | 'getServicePackage'
  | 'getSubstitutionGroup'
  | 'getTreadDesignForProduct'
  | 'getUomConversionById'
  | 'listCatalogsByName'
  | 'listClaimableServices'
  | 'listIncompleteLaborGuideImports'
  | 'listIncompleteSupplierPriceImports'
  | 'listLaborStandardConflicts'
  | 'listNonInventoryProductsByName'
  | 'listPriceBookRules'
  | 'listProductCommandCenter'
  | 'listProductMsrpHistory'
  | 'listProductReplacements'
  | 'listProductUoms'
  | 'listProductsByName'
  | 'listServiceLaborStandards'
  | 'listServicePackages'
  | 'listServicesByName'
  | 'listSubstitutionGroups'
  | 'listSupplierPriceHistory'
  | 'listTreadDesignCandidates'
  | 'listUnmappedLaborGuideOperations'
  | 'listUnmatchedTreadDesigns'
  | 'listUomConversions'
  | 'mapUnmappedLaborGuideOperation'
  | 'rejectLocationPriceOverride'
  | 'removeServicePackageMember'
  | 'removeSubstitutionGroupMember'
  | 'replayProductFacts'
  | 'replayServiceFacts'
  | 'replaySupplierArticleCodeFacts'
  | 'resolveLaborTime'
  | 'resolveProductPrice'
  | 'resolveTreadDesign'
  | 'runLaborGuideImport'
  | 'searchCatalogProducts'
  | 'searchCatalogServices'
  | 'setServiceRequirements'
  | 'supersedeServiceLaborStandard'
  | 'updateCatalog'
  | 'updateCatalogItem'
  | 'updatePriceBook'
  | 'updatePriceBookRule'
  | 'updateProduct'
  | 'updateProductLifecycle'
  | 'updateProductMsrp'
  | 'updateProductTrackingLevel'
  | 'updateProductUom'
  | 'updateStandardItemCost'
  | 'updateUomConversion'
  | 'upsertLocationGuardrailPolicy';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<CatalogOperationId, OperationRequirement>>> = {
  addProductReplacement: { anyOf: ['catalog:product:edit', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false },
  addProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false },
  addServicePackageMember: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false },
  addSubstitutionGroupMember: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false },
  approveLocationPriceOverride: { anyOf: ['pricing:override:approve'], allOf: [], conditional: [], authenticated: false },
  bulkIngestCatalogProducts: { anyOf: ['catalog:product:create'], allOf: [], conditional: [], authenticated: false },
  bulkIngestCatalogServices: { anyOf: ['catalog:service:ingest'], allOf: [], conditional: [], authenticated: false },
  bulkIngestLaborStandards: { anyOf: ['catalog:labor_standard:import'], allOf: [], conditional: [], authenticated: false },
  bulkIngestServicePackageMembers: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false },
  bulkIngestServicePackages: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false },
  createCatalog: { anyOf: ['catalog:catalog_grouping:edit'], allOf: [], conditional: [], authenticated: false },
  createCatalogItem: { anyOf: ['catalog:catalog_item:create'], allOf: [], conditional: [], authenticated: false },
  createLocationPriceOverride: { anyOf: ['catalog:location_price_override:write'], allOf: [], conditional: [], authenticated: false },
  createPriceBook: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false },
  createPriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false },
  createProduct: { anyOf: ['catalog:product:create'], allOf: [], conditional: [], authenticated: false },
  createProductMsrp: { anyOf: ['catalog:msrp:write'], allOf: [], conditional: [], authenticated: false },
  createServiceLaborStandard: { anyOf: ['catalog:labor_standard:manage'], allOf: [], conditional: [], authenticated: false },
  createServicePackage: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false },
  createSubstitutionGroup: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false },
  createUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false },
  deactivatePriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false },
  deactivateUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false },
  deleteCatalog: { anyOf: ['catalog:catalog_grouping:delete'], allOf: [], conditional: [], authenticated: false },
  deleteCatalogItem: { anyOf: ['catalog:catalog_item:delete', 'catalog:product:delete'], allOf: [], conditional: [], authenticated: false },
  deleteProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false },
  deleteSubstitutionGroup: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false },
  findProductByCode: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  getActiveProductMsrp: { anyOf: ['catalog:msrp:read'], allOf: [], conditional: [], authenticated: false },
  getCatalogById: { anyOf: ['catalog:catalog_grouping:view'], allOf: [], conditional: [], authenticated: false },
  getEffectiveLocationPrice: { anyOf: ['catalog:location_price_override:read'], allOf: [], conditional: [], authenticated: false },
  getItemCostAuditHistory: { anyOf: ['catalog:item_cost:read'], allOf: [], conditional: [], authenticated: false },
  getItemCosts: { anyOf: ['catalog:item_cost:read'], allOf: [], conditional: [], authenticated: false },
  getLatestSupplierPrice: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false },
  getNonInventoryProductById: { anyOf: ['catalog:non_inventory:view'], allOf: [], conditional: [], authenticated: false },
  getPartSubstitutes: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  getPriceBook: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false },
  getProductById: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  getProductDetailView: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  getProductLifecycle: { anyOf: ['catalog:product:view', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false },
  getServiceById: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false },
  getServicePackage: { anyOf: ['catalog:service_package:view'], allOf: [], conditional: [], authenticated: false },
  getSubstitutionGroup: { anyOf: ['catalog:substitution_group:view'], allOf: [], conditional: [], authenticated: false },
  getTreadDesignForProduct: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false },
  getUomConversionById: { anyOf: ['catalog:uom_conversion:view'], allOf: [], conditional: [], authenticated: false },
  listCatalogsByName: { anyOf: ['catalog:catalog_grouping:view'], allOf: [], conditional: [], authenticated: false },
  listClaimableServices: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false },
  listIncompleteLaborGuideImports: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false },
  listIncompleteSupplierPriceImports: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false },
  listLaborStandardConflicts: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false },
  listNonInventoryProductsByName: { anyOf: ['catalog:non_inventory:view'], allOf: [], conditional: [], authenticated: false },
  listPriceBookRules: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false },
  listProductCommandCenter: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  listProductMsrpHistory: { anyOf: ['catalog:msrp:read'], allOf: [], conditional: [], authenticated: false },
  listProductReplacements: { anyOf: ['catalog:product:view', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false },
  listProductUoms: { anyOf: ['catalog:product_uom:view'], allOf: [], conditional: [], authenticated: false },
  listProductsByName: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  listServiceLaborStandards: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false },
  listServicePackages: { anyOf: ['catalog:service_package:view'], allOf: [], conditional: [], authenticated: false },
  listServicesByName: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false },
  listSubstitutionGroups: { anyOf: ['catalog:substitution_group:view'], allOf: [], conditional: [], authenticated: false },
  listSupplierPriceHistory: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false },
  listTreadDesignCandidates: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false },
  listUnmappedLaborGuideOperations: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false },
  listUnmatchedTreadDesigns: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false },
  listUomConversions: { anyOf: ['catalog:uom_conversion:view'], allOf: [], conditional: [], authenticated: false },
  mapUnmappedLaborGuideOperation: { anyOf: ['catalog:labor_guide:manage'], allOf: [], conditional: [], authenticated: false },
  rejectLocationPriceOverride: { anyOf: ['pricing:override:approve'], allOf: [], conditional: [], authenticated: false },
  removeServicePackageMember: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false },
  removeSubstitutionGroupMember: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false },
  replayProductFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false },
  replayServiceFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false },
  replaySupplierArticleCodeFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false },
  resolveLaborTime: { anyOf: ['catalog:labor_time:resolve'], allOf: [], conditional: [], authenticated: false },
  resolveProductPrice: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false },
  resolveTreadDesign: { anyOf: ['catalog:tread_design:resolve'], allOf: [], conditional: [], authenticated: false },
  runLaborGuideImport: { anyOf: ['catalog:labor_standard:import'], allOf: [], conditional: [], authenticated: false },
  searchCatalogProducts: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false },
  searchCatalogServices: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false },
  setServiceRequirements: { anyOf: ['catalog:service_requirement:manage'], allOf: [], conditional: [], authenticated: false },
  supersedeServiceLaborStandard: { anyOf: ['catalog:labor_standard:manage'], allOf: [], conditional: [], authenticated: false },
  updateCatalog: { anyOf: ['catalog:catalog_grouping:edit'], allOf: [], conditional: [], authenticated: false },
  updateCatalogItem: { anyOf: ['catalog:catalog_item:edit'], allOf: [], conditional: [], authenticated: false },
  updatePriceBook: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false },
  updatePriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false },
  updateProduct: { anyOf: ['catalog:product:edit'], allOf: [], conditional: [], authenticated: false },
  updateProductLifecycle: { anyOf: ['catalog:product:edit', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false },
  updateProductMsrp: { anyOf: ['catalog:msrp:write'], allOf: [], conditional: [], authenticated: false },
  updateProductTrackingLevel: { anyOf: ['catalog:product:edit'], allOf: [], conditional: [], authenticated: false },
  updateProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false },
  updateStandardItemCost: { anyOf: ['catalog:item_cost:update'], allOf: [], conditional: [], authenticated: false },
  updateUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false },
  upsertLocationGuardrailPolicy: { anyOf: ['catalog:guardrail_policy:write'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly CatalogOperationId[] = [];
