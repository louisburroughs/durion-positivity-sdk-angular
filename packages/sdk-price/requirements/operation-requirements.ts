// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-price/openapi.yaml.

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

/** Every operation of @durion-sdk/price, by the name of its generated service method. */
export type PriceOperationId =
  | 'activatePromotionOffer'
  | 'applyPromotionOffer'
  | 'bulkIngestBasePrices'
  | 'bulkIngestLaborRateAdjustments'
  | 'bulkIngestLaborRates'
  | 'calculatePriceQuote'
  | 'createLaborRate'
  | 'createLaborRateAdjustment'
  | 'createPromotionEligibilityRule'
  | 'createPromotionOffer'
  | 'createRestrictionRule'
  | 'deactivatePromotionOffer'
  | 'deactivateRestrictionRule'
  | 'deletePromotionEligibilityRule'
  | 'evaluatePriceRestrictions'
  | 'evaluatePromotionEligibility'
  | 'getPricingSnapshotById'
  | 'getPromotionOfferByCode'
  | 'getPromotionOfferById'
  | 'getRestrictionRuleById'
  | 'listLaborRateAdjustments'
  | 'listLaborRates'
  | 'listPromotionEligibilityRules'
  | 'listRestrictionRules'
  | 'normalizePricing'
  | 'overridePriceRestriction'
  | 'resolveLaborRate';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PriceOperationId, OperationRequirement>>> = {
  activatePromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], authenticated: false },
  applyPromotionOffer: { anyOf: ['pricing:promotion:apply'], allOf: [], authenticated: false },
  bulkIngestBasePrices: { anyOf: ['pricing:base_price:create'], allOf: [], authenticated: false },
  bulkIngestLaborRateAdjustments: { anyOf: ['pricing:labor_rate:manage'], allOf: [], authenticated: false },
  bulkIngestLaborRates: { anyOf: ['pricing:labor_rate:manage'], allOf: [], authenticated: false },
  calculatePriceQuote: { anyOf: [], allOf: [], authenticated: true },
  createLaborRate: { anyOf: ['pricing:labor_rate:manage'], allOf: [], authenticated: false },
  createLaborRateAdjustment: { anyOf: ['pricing:labor_rate:manage'], allOf: [], authenticated: false },
  createPromotionEligibilityRule: { anyOf: ['pricing:promotion:manage'], allOf: [], authenticated: false },
  createPromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], authenticated: false },
  createRestrictionRule: { anyOf: ['pricing:restriction:manage'], allOf: [], authenticated: false },
  deactivatePromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], authenticated: false },
  deactivateRestrictionRule: { anyOf: ['pricing:restriction:manage'], allOf: [], authenticated: false },
  deletePromotionEligibilityRule: { anyOf: ['pricing:promotion:manage'], allOf: [], authenticated: false },
  evaluatePriceRestrictions: { anyOf: ['pricing:restrictions:view'], allOf: [], authenticated: false },
  evaluatePromotionEligibility: { anyOf: ['pricing:promotion:apply'], allOf: [], authenticated: false },
  getPricingSnapshotById: { anyOf: [], allOf: [], authenticated: true },
  getPromotionOfferByCode: { anyOf: ['pricing:promotion:view'], allOf: [], authenticated: false },
  getPromotionOfferById: { anyOf: ['pricing:promotion:view'], allOf: [], authenticated: false },
  getRestrictionRuleById: { anyOf: ['pricing:rule:view'], allOf: [], authenticated: false },
  listLaborRateAdjustments: { anyOf: ['pricing:labor_rate:view'], allOf: [], authenticated: false },
  listLaborRates: { anyOf: ['pricing:labor_rate:view'], allOf: [], authenticated: false },
  listPromotionEligibilityRules: { anyOf: ['pricing:promotion:view'], allOf: [], authenticated: false },
  listRestrictionRules: { anyOf: ['pricing:rule:view'], allOf: [], authenticated: false },
  normalizePricing: { anyOf: ['pricing:normalization:edit'], allOf: [], authenticated: false },
  overridePriceRestriction: { anyOf: ['pricing:restriction:override'], allOf: [], authenticated: false },
  resolveLaborRate: { anyOf: ['pricing:labor_rate:quote'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PriceOperationId[] = [];
