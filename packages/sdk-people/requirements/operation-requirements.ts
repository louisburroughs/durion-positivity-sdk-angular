// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-people/openapi.yaml.

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

/** Every operation of @durion-sdk/people, by the name of its generated service method. */
export type PeopleOperationId =
  | 'acknowledgeTimeEntryException'
  | 'approveTimeEntriesBatch'
  | 'approveTimeEntryAdjustment'
  | 'approveTimeOffRequest'
  | 'approveTimePeriod'
  | 'bulkIngestPersonCredentials'
  | 'bulkIngestStaffingAssignments'
  | 'cancelShift'
  | 'cancelTimeOffRequest'
  | 'clearEmployeePhoto'
  | 'closeMissedWorkSessionClockOut'
  | 'closeMissedWorkSessionClockOutForPerson'
  | 'correctPersonCredential'
  | 'createEmployee'
  | 'createEmployeesBulk'
  | 'createJobRole'
  | 'createPersonCredential'
  | 'createShift'
  | 'createStaffingAssignment'
  | 'createTimeEntryAdjustment'
  | 'createTimeEntryException'
  | 'createTimeOffRequest'
  | 'createTimePeriod'
  | 'denyTimeOffRequest'
  | 'disableEmployee'
  | 'enableEmployee'
  | 'endStaffingAssignment'
  | 'getAttendanceDiscrepancyReport'
  | 'getCredentialAttentionCounts'
  | 'getCurrentWorkSession'
  | 'getEmployee'
  | 'getEmployeeByNumber'
  | 'getEmployeeStatusCounts'
  | 'getJobRole'
  | 'getMyLocationReach'
  | 'getMyPrimaryLocation'
  | 'getPersonPrimaryLocation'
  | 'getStaffingAssignment'
  | 'getStaffingCoverage'
  | 'getStaffingTargets'
  | 'getTimeEntry'
  | 'getTimeOffRequest'
  | 'getTimePeriodApproval'
  | 'getWorkSessionDay'
  | 'listApprovedTimeForExport'
  | 'listCredentialDocumentReveals'
  | 'listCredentialsNeedingAttention'
  | 'listInactivePersonActiveUsers'
  | 'listJobRoles'
  | 'listMyLocations'
  | 'listPeopleAvailability'
  | 'listPersonCredentials'
  | 'listPersonLocations'
  | 'listPersonTimeOffBalances'
  | 'listShifts'
  | 'listSkills'
  | 'listStaffingAssignments'
  | 'listStaffingAssignmentsByPath'
  | 'listTimeEntries'
  | 'listTimeEntryAdjustments'
  | 'listTimeEntryExceptions'
  | 'listTimeOffBalances'
  | 'listTimeOffRequests'
  | 'listTimePeriods'
  | 'listTimekeepingApprovalPeople'
  | 'rejectTimeEntriesBatch'
  | 'rejectTimePeriod'
  | 'replaceStaffingTargets'
  | 'resolveTimeEntryException'
  | 'revealCredentialDocument'
  | 'searchEmployees'
  | 'setEmployeePhoto'
  | 'setTimeOffBalance'
  | 'startWorkSession'
  | 'startWorkSessionBreak'
  | 'stopWorkSession'
  | 'stopWorkSessionBreak'
  | 'submitWorkSession'
  | 'transitionTimePeriod'
  | 'updateEmployee'
  | 'updateJobRole'
  | 'updateShift'
  | 'updateStaffingAssignment'
  | 'waiveTimeEntryException';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleOperationId, OperationRequirement>>> = {
  acknowledgeTimeEntryException: { anyOf: ['people:timeException:acknowledge'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveTimeEntriesBatch: { anyOf: ['people:timeEntry:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveTimePeriod: { anyOf: ['people:timeEntry:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestPersonCredentials: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestStaffingAssignments: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  clearEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  closeMissedWorkSessionClockOut: { anyOf: ['people:timeAdjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  closeMissedWorkSessionClockOutForPerson: { anyOf: ['people:timekeeping:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  correctPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEmployee: { anyOf: ['people:employee:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEmployeesBulk: { anyOf: ['people:employee:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createJobRole: { anyOf: ['people:jobRole:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTimeEntryException: { anyOf: ['people:timeException:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTimePeriod: { anyOf: ['people:timePeriod:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  denyTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  disableEmployee: { anyOf: ['people:employee:activation'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  enableEmployee: { anyOf: ['people:employee:activation'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  endStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAttendanceDiscrepancyReport: { anyOf: ['people:attendance_report:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCredentialAttentionCounts: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCurrentWorkSession: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEmployee: { anyOf: ['people:employee_pii:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEmployeeByNumber: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEmployeeStatusCounts: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: { clockState: { code: 'people:timekeeping:view', kind: 'fields', fields: ['clockedInCount'] } } },
  getJobRole: { anyOf: ['people:jobRole:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMyLocationReach: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMyPrimaryLocation: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPersonPrimaryLocation: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStaffingAssignment: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStaffingCoverage: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStaffingTargets: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTimeEntry: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTimeOffRequest: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTimePeriodApproval: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkSessionDay: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listApprovedTimeForExport: { anyOf: ['accounting:time:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCredentialDocumentReveals: { anyOf: ['people:credential_document_audit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCredentialsNeedingAttention: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInactivePersonActiveUsers: { anyOf: ['people:compliance:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listJobRoles: { anyOf: ['people:jobRole:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMyLocations: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPeopleAvailability: { anyOf: ['people:availability:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPersonCredentials: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPersonLocations: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPersonTimeOffBalances: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listShifts: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSkills: { anyOf: ['people:skill:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStaffingAssignments: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStaffingAssignmentsByPath: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimeEntries: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimeEntryAdjustments: { anyOf: ['people:timeAdjustment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimeEntryExceptions: { anyOf: ['people:timeException:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimeOffBalances: { anyOf: ['people:time_off:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimeOffRequests: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimePeriods: { anyOf: ['people:timekeeping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTimekeepingApprovalPeople: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectTimeEntriesBatch: { anyOf: ['people:timeEntry:reject'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectTimePeriod: { anyOf: ['people:timeEntry:reject'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaceStaffingTargets: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revealCredentialDocument: { anyOf: ['people:credential_document:reveal'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchEmployees: { anyOf: ['people:employee:view'], allOf: [], conditional: ['people:timekeeping:view'], authenticated: false, conditions: { clockState: { code: 'people:timekeeping:view', kind: 'fields', fields: ['items[].clock'] }, clockStateFilter: { code: 'people:timekeeping:view', kind: 'requiredWhen', fields: [] }, periodTime: { code: 'people:timeEntry:view', kind: 'fields', fields: ['items[].periodTime'] } } },
  setEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setTimeOffBalance: { anyOf: ['people:time_off_balance:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startWorkSession: { anyOf: [], allOf: [], conditional: ['people:timekeeping:approve'], authenticated: true, conditions: { manageOthers: { code: 'people:timekeeping:approve', kind: 'requiredWhen', fields: [] } } },
  startWorkSessionBreak: { anyOf: [], allOf: [], conditional: ['people:timekeeping:approve'], authenticated: true, conditions: { manageOthers: { code: 'people:timekeeping:approve', kind: 'requiredWhen', fields: [] } } },
  stopWorkSession: { anyOf: [], allOf: [], conditional: ['people:timekeeping:approve'], authenticated: true, conditions: { manageOthers: { code: 'people:timekeeping:approve', kind: 'requiredWhen', fields: [] } } },
  stopWorkSessionBreak: { anyOf: [], allOf: [], conditional: ['people:timekeeping:approve'], authenticated: true, conditions: { manageOthers: { code: 'people:timekeeping:approve', kind: 'requiredWhen', fields: [] } } },
  submitWorkSession: { anyOf: [], allOf: [], conditional: ['people:timekeeping:approve'], authenticated: true, conditions: { manageOthers: { code: 'people:timekeeping:approve', kind: 'requiredWhen', fields: [] } } },
  transitionTimePeriod: { anyOf: ['people:timePeriod:transition'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateEmployee: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateJobRole: { anyOf: ['people:jobRole:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  waiveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleOperationId[] = [];
