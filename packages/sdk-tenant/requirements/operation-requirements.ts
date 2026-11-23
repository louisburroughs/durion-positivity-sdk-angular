// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-tenant/openapi.yaml.

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

/** Every operation of @durion-sdk/tenant, by the name of its generated service method. */
export type TenantOperationId =
  | 'addAccountContact'
  | 'createAccount'
  | 'createReadingTier'
  | 'createTenant'
  | 'createTenantSignup'
  | 'decommissionTenant'
  | 'getAccount'
  | 'getTenant'
  | 'listAccounts'
  | 'listReadingTiers'
  | 'listTenants'
  | 'putAccountBillingProfile'
  | 'reEmitTenants'
  | 'reactivateTenant'
  | 'removeAccountContact'
  | 'setTenantTaxProviderBinding'
  | 'suspendTenant'
  | 'updateAccount'
  | 'updateAccountContact'
  | 'updateReadingTier'
  | 'updateTenant';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<TenantOperationId, OperationRequirement>>> = {
  addAccountContact: { anyOf: ['platform:account:update'], allOf: [], authenticated: false },
  createAccount: { anyOf: ['platform:account:create'], allOf: [], authenticated: false },
  createReadingTier: { anyOf: ['platform:reading_tier:manage'], allOf: [], authenticated: false },
  createTenant: { anyOf: ['platform:tenant:create'], allOf: [], authenticated: false },
  createTenantSignup: { anyOf: [], allOf: [], authenticated: true },
  decommissionTenant: { anyOf: ['platform:tenant:decommission'], allOf: [], authenticated: false },
  getAccount: { anyOf: ['platform:account:read'], allOf: [], authenticated: false },
  getTenant: { anyOf: ['platform:tenant:read'], allOf: [], authenticated: false },
  listAccounts: { anyOf: ['platform:account:read'], allOf: [], authenticated: false },
  listReadingTiers: { anyOf: ['platform:reading_tier:read'], allOf: [], authenticated: false },
  listTenants: { anyOf: ['platform:tenant:read'], allOf: [], authenticated: false },
  putAccountBillingProfile: { anyOf: ['platform:account:update'], allOf: [], authenticated: false },
  reEmitTenants: { anyOf: ['platform:tenant:update'], allOf: [], authenticated: false },
  reactivateTenant: { anyOf: ['platform:tenant:reactivate'], allOf: [], authenticated: false },
  removeAccountContact: { anyOf: ['platform:account:update'], allOf: [], authenticated: false },
  setTenantTaxProviderBinding: { anyOf: ['platform:tenant_tax_provider:manage'], allOf: [], authenticated: false },
  suspendTenant: { anyOf: ['platform:tenant:suspend'], allOf: [], authenticated: false },
  updateAccount: { anyOf: ['platform:account:update'], allOf: [], authenticated: false },
  updateAccountContact: { anyOf: ['platform:account:update'], allOf: [], authenticated: false },
  updateReadingTier: { anyOf: ['platform:reading_tier:manage'], allOf: [], authenticated: false },
  updateTenant: { anyOf: ['platform:tenant:update'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly TenantOperationId[] = [];
