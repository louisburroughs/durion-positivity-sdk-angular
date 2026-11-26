// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-price/openapi.yaml.

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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PriceOperationId, OperationRequirement>>> = {
  activatePromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyPromotionOffer: { anyOf: ['pricing:promotion:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestBasePrices: { anyOf: ['pricing:base_price:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestLaborRateAdjustments: { anyOf: ['pricing:labor_rate:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestLaborRates: { anyOf: ['pricing:labor_rate:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  calculatePriceQuote: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  createLaborRate: { anyOf: ['pricing:labor_rate:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createLaborRateAdjustment: { anyOf: ['pricing:labor_rate:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPromotionEligibilityRule: { anyOf: ['pricing:promotion:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createRestrictionRule: { anyOf: ['pricing:restriction:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivatePromotionOffer: { anyOf: ['pricing:promotion:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateRestrictionRule: { anyOf: ['pricing:restriction:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deletePromotionEligibilityRule: { anyOf: ['pricing:promotion:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  evaluatePriceRestrictions: { anyOf: ['pricing:restrictions:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  evaluatePromotionEligibility: { anyOf: ['pricing:promotion:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPricingSnapshotById: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getPromotionOfferByCode: { anyOf: ['pricing:promotion:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPromotionOfferById: { anyOf: ['pricing:promotion:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRestrictionRuleById: { anyOf: ['pricing:rule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLaborRateAdjustments: { anyOf: ['pricing:labor_rate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLaborRates: { anyOf: ['pricing:labor_rate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPromotionEligibilityRules: { anyOf: ['pricing:promotion:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listRestrictionRules: { anyOf: ['pricing:rule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  normalizePricing: { anyOf: ['pricing:normalization:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  overridePriceRestriction: { anyOf: ['pricing:restriction:override'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveLaborRate: { anyOf: ['pricing:labor_rate:quote'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PriceOperationId[] = [];
