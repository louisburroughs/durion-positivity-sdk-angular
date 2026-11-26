// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-warranty/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<WarrantyOperationId, OperationRequirement>>> = {
  addClaimLine: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addClaimNote: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addClaimPhoto: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelClaim: { anyOf: ['warranty:claim:cancel'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  closeClaim: { anyOf: ['warranty:claim:close'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createClaim: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPartReturn: { anyOf: ['warranty:part-return:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPolicy: { anyOf: ['warranty:policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createProvider: { anyOf: ['warranty:provider:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createRegistration: { anyOf: ['warranty:registration:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createSettlement: { anyOf: ['warranty:claim:settle'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  decideClaim: { anyOf: ['warranty:claim:decide'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  evaluateClaimEligibility: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  findApplicablePolicies: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getClaim: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPolicy: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getProvider: { anyOf: ['warranty:provider:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRegistration: { anyOf: ['warranty:registration:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPartReturns: { anyOf: ['warranty:part-return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPolicies: { anyOf: ['warranty:policy:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listProviders: { anyOf: ['warranty:provider:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReimbursements: { anyOf: ['warranty:reimbursement:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcileSettlements: { anyOf: ['warranty:claim:settle'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeClaimLine: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeClaimPhoto: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchCandidateLines: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchClaims: { anyOf: ['warranty:claim:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchRegistrations: { anyOf: ['warranty:registration:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitClaim: { anyOf: ['warranty:claim:submit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitReimbursement: { anyOf: ['warranty:reimbursement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateClaim: { anyOf: ['warranty:claim:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePartReturn: { anyOf: ['warranty:part-return:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePolicy: { anyOf: ['warranty:policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateProvider: { anyOf: ['warranty:provider:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateRegistration: { anyOf: ['warranty:registration:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateReimbursement: { anyOf: ['warranty:reimbursement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly WarrantyOperationId[] = [];
