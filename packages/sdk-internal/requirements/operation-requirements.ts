// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-tax/openapi.yaml.

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

/** Every operation of @durion-sdk/internal, by the name of its generated service method. */
export type InternalOperationId =
  | 'calculateTax'
  | 'checkTaxPlausibility'
  | 'commitTaxDocument'
  | 'createExemptionCertificate'
  | 'createTaxRegistration'
  | 'getExemptionCertificateById'
  | 'getTaxEvidenceRules'
  | 'getTaxInformationReturnForms'
  | 'getTaxPurchaseRules'
  | 'getTaxRates'
  | 'getTaxRegistrationSchemes'
  | 'getTaxTypes'
  | 'listExemptionCertificates'
  | 'setTaxProviderBinding'
  | 'updateExemptionCertificate'
  | 'updateTaxRegistration'
  | 'voidTaxDocument';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InternalOperationId, OperationRequirement>>> = {
  calculateTax: { anyOf: ['tax:calculate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkTaxPlausibility: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  commitTaxDocument: { anyOf: ['tax:commit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createExemptionCertificate: { anyOf: ['tax:exemption:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTaxRegistration: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getExemptionCertificateById: { anyOf: ['tax:exemption:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxEvidenceRules: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxInformationReturnForms: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxPurchaseRules: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxRates: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxRegistrationSchemes: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxTypes: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listExemptionCertificates: { anyOf: ['tax:exemption:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setTaxProviderBinding: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  updateExemptionCertificate: { anyOf: ['tax:exemption:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateTaxRegistration: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  voidTaxDocument: { anyOf: ['tax:commit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InternalOperationId[] = [];
