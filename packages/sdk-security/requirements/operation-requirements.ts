// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-security-service/openapi.yaml.

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
  | 'createAuditEvent'
  | 'createPricingSnapshot'
  | 'createRole'
  | 'createRoleAssignment'
  | 'createUser'
  | 'decodePermissionBits'
  | 'deleteAuditExportWebhook'
  | 'deleteRole'
  | 'deleteUser'
  | 'disableUserAccount'
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
  | 'getRolePersonas'
  | 'getSelfRegistrationReviewCase'
  | 'getTenantSignup'
  | 'getTokenRoles'
  | 'getTokenSubject'
  | 'getTokenUserId'
  | 'getUserAccountState'
  | 'getUserById'
  | 'getUserPermissions'
  | 'getUserPermissionsLegacy'
  | 'issueInternalToken'
  | 'issueTokenPair'
  | 'linkUserPerson'
  | 'listCapabilities'
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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<SecurityOperationId, OperationRequirement>>> = {
  assignUserRole: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false },
  assignUserRolesByUsername: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false },
  bulkIngestUserPersonLinks: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false },
  bulkIngestUsers: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false },
  checkPermissionExists: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
  createAuditEvent: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false },
  createPricingSnapshot: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false },
  createRole: { anyOf: ['security:role:create'], allOf: [], conditional: [], authenticated: false },
  createRoleAssignment: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false },
  createUser: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false },
  decodePermissionBits: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
  deleteAuditExportWebhook: { anyOf: ['security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false },
  deleteRole: { anyOf: ['security:role:delete'], allOf: [], conditional: [], authenticated: false },
  deleteUser: { anyOf: ['security:user:delete'], allOf: [], conditional: [], authenticated: false },
  disableUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  downloadAuditExport: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false },
  enableUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  expireUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  expireUserCredentials: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  getAuditEvent: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false },
  getAuditExportJob: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false },
  getAuditExportWebhook: { anyOf: ['security:audit:export', 'security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false },
  getMyAccess: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getMyTenant: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getPermissionById: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
  getPersonAuthorizationDecision: { anyOf: ['security:authorization:decide'], allOf: [], conditional: [], authenticated: false },
  getPricingSnapshot: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false },
  getRoleById: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  getRoleByKey: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  getRoleByName: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  getRoleDefaultPermissions: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  getRolePersonas: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  getSelfRegistrationReviewCase: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false },
  getTokenRoles: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getTokenSubject: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getTokenUserId: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getUserAccountState: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false },
  getUserById: { anyOf: ['security:user:view'], allOf: [], conditional: [], authenticated: false },
  getUserPermissions: { anyOf: [], allOf: [], conditional: ['security:permission:view'], authenticated: false },
  getUserPermissionsLegacy: { anyOf: [], allOf: [], conditional: ['security:permission:view'], authenticated: false },
  issueInternalToken: { anyOf: ['security:token:issue_internal'], allOf: [], conditional: [], authenticated: false },
  issueTokenPair: { anyOf: ['security:token:issue_internal'], allOf: [], conditional: [], authenticated: false },
  linkUserPerson: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false },
  listCapabilities: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  listPermissionHolders: { anyOf: ['accounting:ap_approval_policy:manage', 'security:role:view'], allOf: [], conditional: [], authenticated: false },
  listPermissions: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
  listPermissionsByDomain: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
  listRoles: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  listSelfRegistrationReviewCases: { anyOf: ['security:user_account_state:view'], allOf: [], conditional: [], authenticated: false },
  listUserRoleAssignments: { anyOf: ['security:role:view'], allOf: [], conditional: [], authenticated: false },
  listUsers: { anyOf: ['security:user:view'], allOf: [], conditional: [], authenticated: false },
  mintAdministratorActivationToken: { anyOf: ['platform:tenant:provision'], allOf: [], conditional: [], authenticated: false },
  mintImpersonationToken: { anyOf: ['platform:tenant:impersonate'], allOf: [], conditional: [], authenticated: false },
  reconcileRoleTemplate: { anyOf: ['platform:tenant:provision'], allOf: [], conditional: [], authenticated: false },
  registerAuditExportWebhook: { anyOf: ['security:audit_export:webhook_manage'], allOf: [], conditional: [], authenticated: false },
  registerModulePermissions: { anyOf: ['security:permission:register'], allOf: [], conditional: [], authenticated: false },
  registerPermissionsContract: { anyOf: ['security:permission:register'], allOf: [], conditional: [], authenticated: false },
  rejectAuditEventDelete: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false },
  rejectAuditEventUpdate: { anyOf: ['security:audit:create'], allOf: [], conditional: [], authenticated: false },
  requestAuditExport: { anyOf: ['security:audit:export'], allOf: [], conditional: [], authenticated: false },
  resendUserActivation: { anyOf: ['security:user:create'], allOf: [], conditional: [], authenticated: false },
  resolveSelfRegistrationReviewCase: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  revokeRoleAssignment: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false },
  revokeToken: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  revokeUserRole: { anyOf: ['security:role:assign'], allOf: [], conditional: [], authenticated: false },
  searchAuditEvents: { anyOf: ['security:audit:view'], allOf: [], conditional: [], authenticated: false },
  unlockUserAccount: { anyOf: ['security:user_account_state:manage'], allOf: [], conditional: [], authenticated: false },
  updateRole: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false },
  updateRoleCapabilities: { anyOf: ['security:role:edit'], allOf: [], conditional: [], authenticated: false },
  updateUser: { anyOf: ['security:user:edit'], allOf: [], conditional: [], authenticated: false },
  validatePermissionName: { anyOf: ['security:permission:view'], allOf: [], conditional: [], authenticated: false },
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
