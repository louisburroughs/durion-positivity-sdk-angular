// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-tax/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InternalOperationId, OperationRequirement>>> = {
  calculateTax: { anyOf: ['tax:calculate'], allOf: [], conditional: [], authenticated: false },
  checkTaxPlausibility: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  commitTaxDocument: { anyOf: ['tax:commit'], allOf: [], conditional: [], authenticated: false },
  createExemptionCertificate: { anyOf: ['tax:exemption:manage'], allOf: [], conditional: [], authenticated: false },
  createTaxRegistration: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getExemptionCertificateById: { anyOf: ['tax:exemption:view'], allOf: [], conditional: [], authenticated: false },
  getTaxEvidenceRules: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  getTaxInformationReturnForms: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  getTaxPurchaseRules: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  getTaxRates: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  getTaxRegistrationSchemes: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  getTaxTypes: { anyOf: ['tax:rates:view'], allOf: [], conditional: [], authenticated: false },
  listExemptionCertificates: { anyOf: ['tax:exemption:view'], allOf: [], conditional: [], authenticated: false },
  setTaxProviderBinding: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  updateExemptionCertificate: { anyOf: ['tax:exemption:manage'], allOf: [], conditional: [], authenticated: false },
  updateTaxRegistration: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  voidTaxDocument: { anyOf: ['tax:commit'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InternalOperationId[] = [];
