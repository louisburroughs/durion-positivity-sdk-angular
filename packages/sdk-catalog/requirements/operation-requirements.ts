// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-catalog/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<CatalogOperationId, OperationRequirement>>> = {
  addProductReplacement: { anyOf: ['catalog:product:edit', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addServicePackageMember: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addSubstitutionGroupMember: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveLocationPriceOverride: { anyOf: ['pricing:override:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestCatalogProducts: { anyOf: ['catalog:product:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestCatalogServices: { anyOf: ['catalog:service:ingest'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestLaborStandards: { anyOf: ['catalog:labor_standard:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestServicePackageMembers: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestServicePackages: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCatalog: { anyOf: ['catalog:catalog_grouping:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCatalogItem: { anyOf: ['catalog:catalog_item:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createLocationPriceOverride: { anyOf: ['catalog:location_price_override:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPriceBook: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createProduct: { anyOf: ['catalog:product:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createProductMsrp: { anyOf: ['catalog:msrp:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createServiceLaborStandard: { anyOf: ['catalog:labor_standard:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createServicePackage: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createSubstitutionGroup: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivatePriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteCatalog: { anyOf: ['catalog:catalog_grouping:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteCatalogItem: { anyOf: ['catalog:catalog_item:delete', 'catalog:product:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteSubstitutionGroup: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  findProductByCode: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getActiveProductMsrp: { anyOf: ['catalog:msrp:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCatalogById: { anyOf: ['catalog:catalog_grouping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEffectiveLocationPrice: { anyOf: ['catalog:location_price_override:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getItemCostAuditHistory: { anyOf: ['catalog:item_cost:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getItemCosts: { anyOf: ['catalog:item_cost:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLatestSupplierPrice: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getNonInventoryProductById: { anyOf: ['catalog:non_inventory:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPartSubstitutes: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPriceBook: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getProductById: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getProductDetailView: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getProductLifecycle: { anyOf: ['catalog:product:view', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getServiceById: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getServicePackage: { anyOf: ['catalog:service_package:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSubstitutionGroup: { anyOf: ['catalog:substitution_group:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTreadDesignForProduct: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUomConversionById: { anyOf: ['catalog:uom_conversion:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCatalogsByName: { anyOf: ['catalog:catalog_grouping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listClaimableServices: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listIncompleteLaborGuideImports: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listIncompleteSupplierPriceImports: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLaborStandardConflicts: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listNonInventoryProductsByName: { anyOf: ['catalog:non_inventory:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPriceBookRules: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProductCommandCenter: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProductMsrpHistory: { anyOf: ['catalog:msrp:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProductReplacements: { anyOf: ['catalog:product:view', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProductUoms: { anyOf: ['catalog:product_uom:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProductsByName: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServiceLaborStandards: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServicePackages: { anyOf: ['catalog:service_package:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServicesByName: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSubstitutionGroups: { anyOf: ['catalog:substitution_group:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierPriceHistory: { anyOf: ['catalog:supplier_cost:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTreadDesignCandidates: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUnmappedLaborGuideOperations: { anyOf: ['catalog:labor_standard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUnmatchedTreadDesigns: { anyOf: ['catalog:tread_design:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUomConversions: { anyOf: ['catalog:uom_conversion:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  mapUnmappedLaborGuideOperation: { anyOf: ['catalog:labor_guide:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectLocationPriceOverride: { anyOf: ['pricing:override:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeServicePackageMember: { anyOf: ['catalog:service_package:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeSubstitutionGroupMember: { anyOf: ['catalog:substitution_group:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayProductFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayServiceFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaySupplierArticleCodeFacts: { anyOf: ['catalog:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveLaborTime: { anyOf: ['catalog:labor_time:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveProductPrice: { anyOf: ['catalog:price_book:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveTreadDesign: { anyOf: ['catalog:tread_design:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  runLaborGuideImport: { anyOf: ['catalog:labor_standard:import'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchCatalogProducts: { anyOf: ['catalog:product:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchCatalogServices: { anyOf: ['catalog:service_type:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setServiceRequirements: { anyOf: ['catalog:service_requirement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  supersedeServiceLaborStandard: { anyOf: ['catalog:labor_standard:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCatalog: { anyOf: ['catalog:catalog_grouping:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCatalogItem: { anyOf: ['catalog:catalog_item:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePriceBook: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePriceBookRule: { anyOf: ['catalog:price_book:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProduct: { anyOf: ['catalog:product:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProductLifecycle: { anyOf: ['catalog:product:edit', 'product:lifecycle:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProductMsrp: { anyOf: ['catalog:msrp:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProductTrackingLevel: { anyOf: ['catalog:product:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProductUom: { anyOf: ['catalog:product_uom:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateStandardItemCost: { anyOf: ['catalog:item_cost:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateUomConversion: { anyOf: ['catalog:uom_conversion:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertLocationGuardrailPolicy: { anyOf: ['catalog:guardrail_policy:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly CatalogOperationId[] = [];
