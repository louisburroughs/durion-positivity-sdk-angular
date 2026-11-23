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
  | 'updateShift'
  | 'updateStaffingAssignment'
  | 'waiveTimeEntryException';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleOperationId, OperationRequirement>>> = {
  acknowledgeTimeEntryException: { anyOf: ['people:timeException:acknowledge'], allOf: [], authenticated: false },
  approveTimeEntriesBatch: { anyOf: ['people:timeEntry:approve'], allOf: [], authenticated: false },
  approveTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:approve'], allOf: [], authenticated: false },
  approveTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], authenticated: false },
  approveTimePeriod: { anyOf: ['people:timeEntry:approve'], allOf: [], authenticated: false },
  bulkIngestPersonCredentials: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  bulkIngestStaffingAssignments: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  cancelShift: { anyOf: ['people:shift:manage'], allOf: [], authenticated: false },
  cancelTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], authenticated: false },
  clearEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], authenticated: false },
  closeMissedWorkSessionClockOut: { anyOf: ['people:timeAdjustment:create'], allOf: [], authenticated: false },
  closeMissedWorkSessionClockOutForPerson: { anyOf: ['people:timekeeping:approve'], allOf: [], authenticated: false },
  correctPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], authenticated: false },
  createEmployee: { anyOf: ['people:employee:create'], allOf: [], authenticated: false },
  createEmployeesBulk: { anyOf: ['people:employee:create'], allOf: [], authenticated: false },
  createJobRole: { anyOf: ['people:jobRole:manage'], allOf: [], authenticated: false },
  createPersonCredential: { anyOf: ['people:credential:manage'], allOf: [], authenticated: false },
  createShift: { anyOf: ['people:shift:manage'], allOf: [], authenticated: false },
  createStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  createTimeEntryAdjustment: { anyOf: ['people:timeAdjustment:create'], allOf: [], authenticated: false },
  createTimeEntryException: { anyOf: ['people:timeException:create'], allOf: [], authenticated: false },
  createTimeOffRequest: { anyOf: ['people:time_off:decide', 'people:time_off:request'], allOf: [], authenticated: false },
  createTimePeriod: { anyOf: ['people:timePeriod:create'], allOf: [], authenticated: false },
  denyTimeOffRequest: { anyOf: ['people:time_off:decide'], allOf: [], authenticated: false },
  disableEmployee: { anyOf: ['people:employee:activation'], allOf: [], authenticated: false },
  enableEmployee: { anyOf: ['people:employee:activation'], allOf: [], authenticated: false },
  endStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  getAttendanceDiscrepancyReport: { anyOf: ['people:attendance_report:view'], allOf: [], authenticated: false },
  getCredentialAttentionCounts: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getCurrentWorkSession: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], authenticated: false },
  getEmployee: { anyOf: ['people:employee_pii:view'], allOf: [], authenticated: false },
  getEmployeeByNumber: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getEmployeeStatusCounts: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getMyLocationReach: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getMyPrimaryLocation: { anyOf: ['people:self:view'], allOf: [], authenticated: false },
  getPersonPrimaryLocation: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getStaffingAssignment: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  getStaffingCoverage: { anyOf: ['people:shift:view'], allOf: [], authenticated: false },
  getStaffingTargets: { anyOf: ['people:shift:view'], allOf: [], authenticated: false },
  getTimeEntry: { anyOf: ['people:timeEntry:view'], allOf: [], authenticated: false },
  getTimeOffRequest: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], authenticated: false },
  getTimePeriodApproval: { anyOf: ['people:timeEntry:view'], allOf: [], authenticated: false },
  getWorkSessionDay: { anyOf: ['people:self:view', 'people:timekeeping:view'], allOf: [], authenticated: false },
  listApprovedTimeForExport: { anyOf: ['accounting:time:export'], allOf: [], authenticated: false },
  listCredentialDocumentReveals: { anyOf: ['people:credential_document_audit:view'], allOf: [], authenticated: false },
  listCredentialsNeedingAttention: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  listInactivePersonActiveUsers: { anyOf: ['people:compliance:view'], allOf: [], authenticated: false },
  listJobRoles: { anyOf: ['people:jobRole:view'], allOf: [], authenticated: false },
  listMyLocations: { anyOf: ['people:self:view'], allOf: [], authenticated: false },
  listPeopleAvailability: { anyOf: ['people:availability:view'], allOf: [], authenticated: false },
  listPersonCredentials: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  listPersonLocations: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  listPersonTimeOffBalances: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], authenticated: false },
  listShifts: { anyOf: ['people:shift:view'], allOf: [], authenticated: false },
  listSkills: { anyOf: ['people:skill:view'], allOf: [], authenticated: false },
  listStaffingAssignments: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  listStaffingAssignmentsByPath: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  listTimeEntries: { anyOf: ['people:timeEntry:view'], allOf: [], authenticated: false },
  listTimeEntryAdjustments: { anyOf: ['people:timeAdjustment:view'], allOf: [], authenticated: false },
  listTimeEntryExceptions: { anyOf: ['people:timeException:view'], allOf: [], authenticated: false },
  listTimeOffBalances: { anyOf: ['people:time_off:view'], allOf: [], authenticated: false },
  listTimeOffRequests: { anyOf: ['people:time_off:request', 'people:time_off:view'], allOf: [], authenticated: false },
  listTimePeriods: { anyOf: ['people:timekeeping:view'], allOf: [], authenticated: false },
  listTimekeepingApprovalPeople: { anyOf: ['people:timeEntry:view'], allOf: [], authenticated: false },
  rejectTimeEntriesBatch: { anyOf: ['people:timeEntry:reject'], allOf: [], authenticated: false },
  rejectTimePeriod: { anyOf: ['people:timeEntry:reject'], allOf: [], authenticated: false },
  replaceStaffingTargets: { anyOf: ['people:shift:manage'], allOf: [], authenticated: false },
  resolveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], authenticated: false },
  revealCredentialDocument: { anyOf: ['people:credential_document:reveal'], allOf: [], authenticated: false },
  searchEmployees: { anyOf: ['people:employee:view'], allOf: [], authenticated: false },
  setEmployeePhoto: { anyOf: ['people:employee:edit', 'people:employee_photo:edit'], allOf: [], authenticated: false },
  setTimeOffBalance: { anyOf: ['people:time_off_balance:manage'], allOf: [], authenticated: false },
  startWorkSession: { anyOf: [], allOf: [], authenticated: true },
  startWorkSessionBreak: { anyOf: [], allOf: [], authenticated: true },
  stopWorkSession: { anyOf: [], allOf: [], authenticated: true },
  stopWorkSessionBreak: { anyOf: [], allOf: [], authenticated: true },
  submitWorkSession: { anyOf: [], allOf: [], authenticated: true },
  transitionTimePeriod: { anyOf: ['people:timePeriod:transition'], allOf: [], authenticated: false },
  updateEmployee: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  updateShift: { anyOf: ['people:shift:manage'], allOf: [], authenticated: false },
  updateStaffingAssignment: { anyOf: ['people:employee:edit'], allOf: [], authenticated: false },
  waiveTimeEntryException: { anyOf: ['people:timeException:resolve'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleOperationId[] = [];
