// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-security-service/openapi.yaml.

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

/** Every operation of @durion-sdk/security, by the name of its generated service method. */
export type SecurityOperationId =
  | 'activateAccount'
  | 'activateAccountWithStarterPassword'
  | 'assignUserRole'
  | 'assignUserRolesByUsername'
  | 'bulkIngestUserPersonLinks'
  | 'bulkIngestUsers'
  | 'checkPermissionExists'
  | 'confirmPasswordReset'
  | 'confirmPendingRoleSuggestion'
  | 'createAuditEvent'
  | 'createJobTitleRoleSuggestion'
  | 'createPricingSnapshot'
  | 'createRole'
  | 'createRoleAssignment'
  | 'createUser'
  | 'decodePermissionBits'
  | 'deleteAuditExportWebhook'
  | 'deleteJobTitleRoleSuggestion'
  | 'deleteRole'
  | 'deleteUser'
  | 'disableUserAccount'
  | 'dismissPendingRoleSuggestion'
  | 'downloadAuditExport'
  | 'enableUserAccount'
  | 'expireUserAccount'
  | 'expireUserCredentials'
  | 'getAuditEvent'
  | 'getAuditExportJob'
  | 'getAuditExportWebhook'
  | 'getAuthCapabilities'
  | 'getMyAccess'
  | 'getMyTenant'
  | 'getPermissionById'
  | 'getPermissionCatalogVersion'
  | 'getPersonAuthorizationDecision'
  | 'getPricingSnapshot'
  | 'getRoleById'
  | 'getRoleByKey'
  | 'getRoleByName'
  | 'getRoleDefaultPermissions'
  | 'getSelfRegistrationReviewCase'
  | 'getTenantSignup'
  | 'getTokenSubject'
  | 'getTokenUserId'
  | 'getUserAccess'
  | 'getUserAccountState'
  | 'getUserById'
  | 'getUserDefaultPersona'
  | 'getUserPermissions'
  | 'getUserPermissionsLegacy'
  | 'issueInternalToken'
  | 'issueTokenPair'
  | 'linkUserPerson'
  | 'listCapabilities'
  | 'listJobTitleRoleSuggestions'
  | 'listPendingRoleSuggestions'
  | 'listPermissionHolders'
  | 'listPermissions'
  | 'listPermissionsByDomain'
  | 'listRoles'
  | 'listSelfRegistrationReviewCases'
  | 'listUserRoleAssignments'
  | 'listUsers'
  | 'loginUser'
  | 'mintAdministratorActivationToken'
  | 'mintImpersonationToken'
  | 'reconcileRoleTemplate'
  | 'refreshTokenPair'
  | 'registerAuditExportWebhook'
  | 'registerModulePermissions'
  | 'registerPermissionsContract'
  | 'registerTenant'
  | 'rejectAuditEventDelete'
  | 'rejectAuditEventUpdate'
  | 'requestAuditExport'
  | 'requestPasswordReset'
  | 'requestUsernameReminder'
  | 'resendUserActivation'
  | 'resolveSelfRegistrationReviewCase'
  | 'revokeRoleAssignment'
  | 'revokeToken'
  | 'revokeUserRole'
  | 'searchAuditEvents'
  | 'searchTenants'
  | 'selfRegisterUser'
  | 'unlockUserAccount'
  | 'updateRole'
  | 'updateRoleCapabilities'
  | 'updateUser'
  | 'validatePermissionName'
  | 'validateToken';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<SecurityOperationId, OperationRequirement>>> = {
  assignUserRole: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignUserRolesByUsername: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestUserPersonLinks: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestUsers: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkPermissionExists: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmPendingRoleSuggestion: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAuditEvent: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createJobTitleRoleSuggestion: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPricingSnapshot: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createRole: { anyOf: ['security:role:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createRoleAssignment: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createUser: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  decodePermissionBits: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteAuditExportWebhook: { anyOf: ['security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteJobTitleRoleSuggestion: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteRole: { anyOf: ['security:role:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteUser: { anyOf: ['security:user:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  disableUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dismissPendingRoleSuggestion: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  downloadAuditExport: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  enableUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  expireUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  expireUserCredentials: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditEvent: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditExportJob: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditExportWebhook: { anyOf: ['security:audit:export', 'security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMyAccess: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getMyTenant: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getPermissionById: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPersonAuthorizationDecision: { anyOf: ['security:authorization:decide'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPricingSnapshot: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRoleById: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRoleByKey: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRoleByName: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRoleDefaultPermissions: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSelfRegistrationReviewCase: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTokenSubject: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getTokenUserId: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getUserAccess: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUserAccountState: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUserById: { anyOf: ['security:user:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUserDefaultPersona: { anyOf: ['security:assistant_persona:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUserPermissions: { anyOf: [], allOf: [], conditional: ['security:permission:view'], authenticated: false, conditions: {} },
  getUserPermissionsLegacy: { anyOf: [], allOf: [], conditional: ['security:permission:view'], authenticated: false, conditions: {} },
  issueInternalToken: { anyOf: ['security:token:issue_internal'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  issueTokenPair: { anyOf: ['security:token:issue_internal'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  linkUserPerson: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCapabilities: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listJobTitleRoleSuggestions: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPendingRoleSuggestions: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPermissionHolders: { anyOf: ['accounting:ap_approval_policy:manage', 'security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPermissions: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPermissionsByDomain: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listRoles: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSelfRegistrationReviewCases: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUserRoleAssignments: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUsers: { anyOf: ['security:user:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  mintAdministratorActivationToken: { anyOf: ['platform:tenant:provision'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  mintImpersonationToken: { anyOf: ['platform:tenant:impersonate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcileRoleTemplate: { anyOf: ['platform:tenant:provision'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  registerAuditExportWebhook: { anyOf: ['security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  registerModulePermissions: { anyOf: ['security:permission:register'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  registerPermissionsContract: { anyOf: ['security:permission:register'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectAuditEventDelete: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectAuditEventUpdate: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestAuditExport: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resendUserActivation: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveSelfRegistrationReviewCase: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revokeRoleAssignment: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revokeToken: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  revokeUserRole: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchAuditEvents: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  unlockUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateRole: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateRoleCapabilities: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateUser: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  validatePermissionName: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly SecurityOperationId[] = [
  'activateAccount',
  'activateAccountWithStarterPassword',
  'confirmPasswordReset',
  'getAuthCapabilities',
  'getPermissionCatalogVersion',
  'getTenantSignup',
  'loginUser',
  'refreshTokenPair',
  'registerTenant',
  'requestPasswordReset',
  'requestUsernameReminder',
  'searchTenants',
  'selfRegisterUser',
  'validateToken',
];
