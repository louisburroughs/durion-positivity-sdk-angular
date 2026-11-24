// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-warranty/openapi.yaml.

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

/** Every operation of @durion-sdk/warranty, by the name of its generated service method. */
export type WarrantyOperationId =
  | 'addClaimLine'
  | 'addClaimNote'
  | 'addClaimPhoto'
  | 'cancelClaim'
  | 'closeClaim'
  | 'createClaim'
  | 'createPartReturn'
  | 'createPolicy'
  | 'createProvider'
  | 'createRegistration'
  | 'createSettlement'
  | 'decideClaim'
  | 'evaluateClaimEligibility'
  | 'findApplicablePolicies'
  | 'getClaim'
  | 'getPolicy'
  | 'getProvider'
  | 'getRegistration'
  | 'listPartReturns'
  | 'listPolicies'
  | 'listProviders'
  | 'listReimbursements'
  | 'reconcileSettlements'
  | 'removeClaimLine'
  | 'removeClaimPhoto'
  | 'searchCandidateLines'
  | 'searchClaims'
  | 'searchRegistrations'
  | 'submitClaim'
  | 'submitReimbursement'
  | 'updateClaim'
  | 'updatePartReturn'
  | 'updatePolicy'
  | 'updateProvider'
  | 'updateRegistration'
  | 'updateReimbursement';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<WarrantyOperationId, OperationRequirement>>> = {
  addClaimLine: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  addClaimNote: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  addClaimPhoto: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  cancelClaim: { anyOf: ['warranty:claim:cancel'], allOf: [], conditional: [], authenticated: false },
  closeClaim: { anyOf: ['warranty:claim:close'], allOf: [], conditional: [], authenticated: false },
  createClaim: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  createPartReturn: { anyOf: ['warranty:part-return:manage'], allOf: [], conditional: [], authenticated: false },
  createPolicy: { anyOf: ['warranty:policy:manage'], allOf: [], conditional: [], authenticated: false },
  createProvider: { anyOf: ['warranty:provider:manage'], allOf: [], conditional: [], authenticated: false },
  createRegistration: { anyOf: ['warranty:registration:manage'], allOf: [], conditional: [], authenticated: false },
  createSettlement: { anyOf: ['warranty:claim:settle'], allOf: [], conditional: [], authenticated: false },
  decideClaim: { anyOf: ['warranty:claim:decide'], allOf: [], conditional: [], authenticated: false },
  evaluateClaimEligibility: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false },
  findApplicablePolicies: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false },
  getClaim: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false },
  getPolicy: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false },
  getProvider: { anyOf: ['warranty:provider:view'], allOf: [], conditional: [], authenticated: false },
  getRegistration: { anyOf: ['warranty:registration:view'], allOf: [], conditional: [], authenticated: false },
  listPartReturns: { anyOf: ['warranty:part-return:view'], allOf: [], conditional: [], authenticated: false },
  listPolicies: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false },
  listProviders: { anyOf: ['warranty:provider:view'], allOf: [], conditional: [], authenticated: false },
  listReimbursements: { anyOf: ['warranty:reimbursement:view'], allOf: [], conditional: [], authenticated: false },
  reconcileSettlements: { anyOf: ['warranty:claim:settle'], allOf: [], conditional: [], authenticated: false },
  removeClaimLine: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  removeClaimPhoto: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  searchCandidateLines: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false },
  searchClaims: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false },
  searchRegistrations: { anyOf: ['warranty:registration:view'], allOf: [], conditional: [], authenticated: false },
  submitClaim: { anyOf: ['warranty:claim:submit'], allOf: [], conditional: [], authenticated: false },
  submitReimbursement: { anyOf: ['warranty:reimbursement:manage'], allOf: [], conditional: [], authenticated: false },
  updateClaim: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false },
  updatePartReturn: { anyOf: ['warranty:part-return:manage'], allOf: [], conditional: [], authenticated: false },
  updatePolicy: { anyOf: ['warranty:policy:manage'], allOf: [], conditional: [], authenticated: false },
  updateProvider: { anyOf: ['warranty:provider:manage'], allOf: [], conditional: [], authenticated: false },
  updateRegistration: { anyOf: ['warranty:registration:manage'], allOf: [], conditional: [], authenticated: false },
  updateReimbursement: { anyOf: ['warranty:reimbursement:manage'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly WarrantyOperationId[] = [];
