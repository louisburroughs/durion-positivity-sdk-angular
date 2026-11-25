// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-people/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleOperationId, OperationRequirement>>> = {
  acknowledgeTimeEntryException: { anyOf: ['people:timeException:acknowledge'], allOf: [], conditional: [], authenticated: false },
  approveTimeEntriesBatch: { anyOf: ['people:timeEntry:approve'], allOf: [], conditional: [], authenticated: false },
  approveTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:approve'], allOf: [], conditional: [], authenticated: false },
  approveTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], conditional: [], authenticated: false },
  approveTimePeriod: { anyOf: ['people:timeEntry:approve'], allOf: [], conditional: [], authenticated: false },
  bulkIngestPersonCredentials: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  bulkIngestStaffingAssignments: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  cancelShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false },
  cancelTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], conditional: [], authenticated: false },
  clearEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], conditional: [], authenticated: false },
  closeMissedWorkSessionClockOut: { anyOf: ['people:timeAdjustment:create'], allOf: [], conditional: [], authenticated: false },
  closeMissedWorkSessionClockOutForPerson: { anyOf: ['people:timekeeping:approve'], allOf: [], conditional: [], authenticated: false },
  correctPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], conditional: [], authenticated: false },
  createEmployee: { anyOf: ['people:employee:create'], allOf: [], conditional: [], authenticated: false },
  createEmployeesBulk: { anyOf: ['people:employee:create'], allOf: [], conditional: [], authenticated: false },
  createJobRole: { anyOf: ['people:jobRole:manage'], allOf: [], conditional: [], authenticated: false },
  createPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], conditional: [], authenticated: false },
  createShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false },
  createStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  createTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:create'], allOf: [], conditional: [], authenticated: false },
  createTimeEntryException: { anyOf: ['people:timeException:create'], allOf: [], conditional: [], authenticated: false },
  createTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], conditional: [], authenticated: false },
  createTimePeriod: { anyOf: ['people:timePeriod:create'], allOf: [], conditional: [], authenticated: false },
  denyTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], conditional: [], authenticated: false },
  disableEmployee: { anyOf: ['people:employee:activation'], allOf: [], conditional: [], authenticated: false },
  enableEmployee: { anyOf: ['people:employee:activation'], allOf: [], conditional: [], authenticated: false },
  endStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  getAttendanceDiscrepancyReport: { anyOf: ['people:attendance_report:view'], allOf: [], conditional: [], authenticated: false },
  getCredentialAttentionCounts: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getCurrentWorkSession: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], conditional: [], authenticated: false },
  getEmployee: { anyOf: ['people:employee_pii:view'], allOf: [], conditional: [], authenticated: false },
  getEmployeeByNumber: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getEmployeeStatusCounts: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getMyLocationReach: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getMyPrimaryLocation: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false },
  getPersonPrimaryLocation: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getStaffingAssignment: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  getStaffingCoverage: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false },
  getStaffingTargets: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false },
  getTimeEntry: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false },
  getTimeOffRequest: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false },
  getTimePeriodApproval: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false },
  getWorkSessionDay: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], conditional: [], authenticated: false },
  listApprovedTimeForExport: { anyOf: ['accounting:time:export'], allOf: [], conditional: [], authenticated: false },
  listCredentialDocumentReveals: { anyOf: ['people:credential_document_audit:view'], allOf: [], conditional: [], authenticated: false },
  listCredentialsNeedingAttention: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  listInactivePersonActiveUsers: { anyOf: ['people:compliance:view'], allOf: [], conditional: [], authenticated: false },
  listJobRoles: { anyOf: ['people:jobRole:view'], allOf: [], conditional: [], authenticated: false },
  listMyLocations: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false },
  listPeopleAvailability: { anyOf: ['people:availability:view'], allOf: [], conditional: [], authenticated: false },
  listPersonCredentials: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  listPersonLocations: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  listPersonTimeOffBalances: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false },
  listShifts: { anyOf: ['people:shift:view'], allOf: [], conditional: [], authenticated: false },
  listSkills: { anyOf: ['people:skill:view'], allOf: [], conditional: [], authenticated: false },
  listStaffingAssignments: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  listStaffingAssignmentsByPath: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  listTimeEntries: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false },
  listTimeEntryAdjustments: { anyOf: ['people:timeAdjustment:view'], allOf: [], conditional: [], authenticated: false },
  listTimeEntryExceptions: { anyOf: ['people:timeException:view'], allOf: [], conditional: [], authenticated: false },
  listTimeOffBalances: { anyOf: ['people:time_off:view'], allOf: [], conditional: [], authenticated: false },
  listTimeOffRequests: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], conditional: [], authenticated: false },
  listTimePeriods: { anyOf: ['people:timekeeping:view'], allOf: [], conditional: [], authenticated: false },
  listTimekeepingApprovalPeople: { anyOf: ['people:timeEntry:view'], allOf: [], conditional: [], authenticated: false },
  rejectTimeEntriesBatch: { anyOf: ['people:timeEntry:reject'], allOf: [], conditional: [], authenticated: false },
  rejectTimePeriod: { anyOf: ['people:timeEntry:reject'], allOf: [], conditional: [], authenticated: false },
  replaceStaffingTargets: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false },
  resolveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], conditional: [], authenticated: false },
  revealCredentialDocument: { anyOf: ['people:credential_document:reveal'], allOf: [], conditional: [], authenticated: false },
  searchEmployees: { anyOf: ['people:employee:view'], allOf: [], conditional: [], authenticated: false },
  setEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], conditional: [], authenticated: false },
  setTimeOffBalance: { anyOf: ['people:time_off_balance:manage'], allOf: [], conditional: [], authenticated: false },
  startWorkSession: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  startWorkSessionBreak: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  stopWorkSession: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  stopWorkSessionBreak: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  submitWorkSession: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  transitionTimePeriod: { anyOf: ['people:timePeriod:transition'], allOf: [], conditional: [], authenticated: false },
  updateEmployee: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  updateJobRole: { anyOf: ['people:jobRole:manage'], allOf: [], conditional: [], authenticated: false },
  updateShift: { anyOf: ['people:shift:manage'], allOf: [], conditional: [], authenticated: false },
  updateStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], conditional: [], authenticated: false },
  waiveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleOperationId[] = [];
