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
  readonly conditional: readonly string[];
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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<TenantOperationId, OperationRequirement>>> = {
  addAccountContact: { anyOf: ['platform:account:update'], allOf: [], conditional: [], authenticated: false },
  createAccount: { anyOf: ['platform:account:create'], allOf: [], conditional: [], authenticated: false },
  createReadingTier: { anyOf: ['platform:reading_tier:manage'], allOf: [], conditional: [], authenticated: false },
  createTenant: { anyOf: ['platform:tenant:create'], allOf: [], conditional: [], authenticated: false },
  createTenantSignup: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  decommissionTenant: { anyOf: ['platform:tenant:decommission'], allOf: [], conditional: [], authenticated: false },
  getAccount: { anyOf: ['platform:account:read'], allOf: [], conditional: [], authenticated: false },
  getTenant: { anyOf: ['platform:tenant:read'], allOf: [], conditional: [], authenticated: false },
  listAccounts: { anyOf: ['platform:account:read'], allOf: [], conditional: [], authenticated: false },
  listReadingTiers: { anyOf: ['platform:reading_tier:read'], allOf: [], conditional: [], authenticated: false },
  listTenants: { anyOf: ['platform:tenant:read'], allOf: [], conditional: [], authenticated: false },
  putAccountBillingProfile: { anyOf: ['platform:account:update'], allOf: [], conditional: [], authenticated: false },
  reEmitTenants: { anyOf: ['platform:tenant:update'], allOf: [], conditional: [], authenticated: false },
  reactivateTenant: { anyOf: ['platform:tenant:reactivate'], allOf: [], conditional: [], authenticated: false },
  removeAccountContact: { anyOf: ['platform:account:update'], allOf: [], conditional: [], authenticated: false },
  setTenantTaxProviderBinding: { anyOf: ['platform:tenant_tax_provider:manage'], allOf: [], conditional: [], authenticated: false },
  suspendTenant: { anyOf: ['platform:tenant:suspend'], allOf: [], conditional: [], authenticated: false },
  updateAccount: { anyOf: ['platform:account:update'], allOf: [], conditional: [], authenticated: false },
  updateAccountContact: { anyOf: ['platform:account:update'], allOf: [], conditional: [], authenticated: false },
  updateReadingTier: { anyOf: ['platform:reading_tier:manage'], allOf: [], conditional: [], authenticated: false },
  updateTenant: { anyOf: ['platform:tenant:update'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly TenantOperationId[] = [];
