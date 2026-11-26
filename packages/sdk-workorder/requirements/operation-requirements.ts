// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-workorder/openapi.yaml.

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

/** Every operation of @durion-sdk/workorder, by the name of its generated service method. */
export type WorkorderOperationId =
  | 'acknowledgeChangeRequestDenial'
  | 'addEstimateItem'
  | 'addWorkorderNote'
  | 'adjustLaborHours'
  | 'applyChangeRequestEmergencyOverride'
  | 'approveChangeRequest'
  | 'approveEstimate'
  | 'approveWorkorder'
  | 'assignServicePosition'
  | 'assignTechnician'
  | 'calculateEstimateTotals'
  | 'checkWorkorderCanClose'
  | 'claimWorkorder'
  | 'completePartItem'
  | 'completePickTask'
  | 'completeServiceItem'
  | 'completeWorkorder'
  | 'confirmPickLine'
  | 'consumeParts'
  | 'consumeWorkorderPickedItems'
  | 'correctPartQuantity'
  | 'countWorkorders'
  | 'createApprovalConfiguration'
  | 'createChangeRequest'
  | 'createEstimate'
  | 'createEstimateFromAppointment'
  | 'createEstimateSnapshot'
  | 'createLaborPerformed'
  | 'createTravelSegmentAdjustment'
  | 'createWorkorder'
  | 'declineChangeRequest'
  | 'declineEstimate'
  | 'deleteApprovalConfiguration'
  | 'deleteEstimate'
  | 'deleteEstimateItem'
  | 'deleteWorkorder'
  | 'generateEstimatePdf'
  | 'generateWorkorderInvoice'
  | 'getActiveTimers'
  | 'getApplicableApprovalConfiguration'
  | 'getApprovalConfiguration'
  | 'getChangeRequest'
  | 'getCompletionPreconditions'
  | 'getCompletionSignOff'
  | 'getDispatchDashboard'
  | 'getEstimate'
  | 'getEstimateSummary'
  | 'getJobTimeTotals'
  | 'getLaborAdjustments'
  | 'getLaborHistory'
  | 'getLaborOverrunsByServiceType'
  | 'getLocationSettings'
  | 'getOpenWorkordersByCustomer'
  | 'getOperationalContext'
  | 'getPartAdjustmentHistory'
  | 'getPartsUsageHistory'
  | 'getPickTasks'
  | 'getPickedItems'
  | 'getPositionAvailability'
  | 'getReopenedWorkorderAnalytics'
  | 'getScheduledWorkorderBlockers'
  | 'getServicePosition'
  | 'getTechnicianAssignment'
  | 'getTechnicianLaborAnalytics'
  | 'getWipDetail'
  | 'getWorkorder'
  | 'getWorkorderDetail'
  | 'getWorkorderFleetAuthorization'
  | 'getWorkorderPickList'
  | 'getWorkorderSnapshots'
  | 'getWorkorderStatusTransitions'
  | 'getWorkorderTransitions'
  | 'issueParts'
  | 'listApprovalConfigurations'
  | 'listChangeRequests'
  | 'listEstimates'
  | 'listEstimatesByCustomer'
  | 'listEstimatesByLocation'
  | 'listEstimatesByShop'
  | 'listLaborIntelligence'
  | 'listOpenItems'
  | 'listTravelSegments'
  | 'listWipWorkorders'
  | 'listWorkorderNotes'
  | 'listWorkorders'
  | 'overrideOperationalContext'
  | 'patchEstimateStatus'
  | 'promoteEstimate'
  | 'putEstimateCheckIn'
  | 'reassignTechnician'
  | 'recordCompletionSignOff'
  | 'releaseServicePosition'
  | 'releaseTechnician'
  | 'reopenEstimate'
  | 'reopenWorkorder'
  | 'requestWorkorderFleetAuthorization'
  | 'resolvePickScan'
  | 'resolveWorkorderFleetAuthorization'
  | 'resolveWorkorderNumbers'
  | 'returnParts'
  | 'returnUnusedPartQuantity'
  | 'searchEstimates'
  | 'searchWorkorders'
  | 'startBreakSegment'
  | 'startLaborSession'
  | 'startTimer'
  | 'startTravelSegment'
  | 'startWorkexecWorkSession'
  | 'startWorkorder'
  | 'stopBreakSegment'
  | 'stopLaborSession'
  | 'stopTimers'
  | 'stopTravelSegment'
  | 'stopWorkexecWorkSession'
  | 'submitEstimateForApproval'
  | 'submitTravelSegments'
  | 'substitutePart'
  | 'suggestWorkorderSubstitutes'
  | 'transferWorkorder'
  | 'updateApprovalConfiguration'
  | 'updateEstimateItem'
  | 'updateLocationSettings';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<WorkorderOperationId, OperationRequirement>>> = {
  acknowledgeChangeRequestDenial: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  addEstimateItem: { anyOf: ['workorder:estimate_item:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addWorkorderNote: { anyOf: ['workorder:note:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  adjustLaborHours: { anyOf: ['workorder:labor:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyChangeRequestEmergencyOverride: { anyOf: ['workorder:change_request:emergency_override'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveChangeRequest: { anyOf: ['workorder:change_request:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveEstimate: { anyOf: ['workorder:estimate:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveWorkorder: { anyOf: ['workorder:workorder:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  calculateEstimateTotals: { anyOf: ['workorder:estimate:calculate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkWorkorderCanClose: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  claimWorkorder: { anyOf: ['workorder:workorder:claim'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completePartItem: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completePickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completeServiceItem: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completeWorkorder: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmPickLine: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  consumeParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  consumeWorkorderPickedItems: { anyOf: ['workorder:parts:consume'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  correctPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  countWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createApprovalConfiguration: { anyOf: ['workorder:approval_config:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createChangeRequest: { anyOf: ['workorder:change_request:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEstimate: { anyOf: ['workorder:estimate:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEstimateFromAppointment: { anyOf: ['workorder:estimate:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createEstimateSnapshot: { anyOf: ['workorder:estimate_snapshot:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createLaborPerformed: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTravelSegmentAdjustment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createWorkorder: { anyOf: ['workorder:workorder:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  declineChangeRequest: { anyOf: ['workorder:change_request:decline'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  declineEstimate: { anyOf: ['workorder:estimate:decline'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteApprovalConfiguration: { anyOf: ['workorder:approval_config:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteEstimate: { anyOf: ['workorder:estimate:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteEstimateItem: { anyOf: ['workorder:estimate_item:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteWorkorder: { anyOf: ['workorder:workorder:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateEstimatePdf: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateWorkorderInvoice: { anyOf: ['workorder:workorder:generate_invoice'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getActiveTimers: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getApplicableApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getChangeRequest: { anyOf: ['workorder:change_request:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCompletionPreconditions: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCompletionSignOff: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getDispatchDashboard: { anyOf: ['workorder:dashboard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEstimate: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEstimateSummary: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getJobTimeTotals: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLaborAdjustments: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLaborHistory: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLaborOverrunsByServiceType: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationSettings: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getOpenWorkordersByCustomer: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getOperationalContext: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  getPartAdjustmentHistory: { anyOf: ['workorder:parts:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPartsUsageHistory: { anyOf: ['workorder:parts:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPickedItems: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPositionAvailability: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReopenedWorkorderAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getScheduledWorkorderBlockers: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getServicePosition: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTechnicianAssignment: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTechnicianLaborAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWipDetail: { anyOf: ['workorder:wip:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorder: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorderDetail: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: { lineMoney: { code: 'workorder:financials:view', kind: 'fields', fields: ['services[].unitPrice', 'services[].laborCost', 'services[].lineTotal', 'parts[].unitPrice', 'parts[].partCost', 'parts[].lineTotal', 'estimatedTotal', 'laborTotal', 'partsTotal', 'taxTotal'] } } },
  getWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorderPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorderSnapshots: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorderStatusTransitions: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getWorkorderTransitions: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  issueParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listApprovalConfigurations: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listChangeRequests: { anyOf: ['workorder:change_request:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listEstimatesByCustomer: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listEstimatesByLocation: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listEstimatesByShop: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLaborIntelligence: { anyOf: ['workorder:labor_intelligence:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listOpenItems: { anyOf: ['workorder:open_item:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTravelSegments: { anyOf: ['workorder:labor:add', 'workorder:labor:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listWipWorkorders: { anyOf: ['workorder:wip:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listWorkorderNotes: { anyOf: ['workorder:note:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  overrideOperationalContext: { anyOf: ['workorder:operationalContext:override'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  patchEstimateStatus: { anyOf: ['workorder:estimate:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  promoteEstimate: { anyOf: ['workorder:estimate:promote'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  putEstimateCheckIn: { anyOf: ['workorder:estimate:check_in'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reassignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordCompletionSignOff: { anyOf: ['workorder:workorder:record_sign_off'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  releaseServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  releaseTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reopenEstimate: { anyOf: ['workorder:estimate:reopen'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reopenWorkorder: { anyOf: ['workorder:workorder:reopen_completed'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolvePickScan: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveWorkorderNumbers: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  returnParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  returnUnusedPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startBreakSegment: { anyOf: ['timekeeping:work_session:break_start'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startTimer: { anyOf: ['workorder:labor:add', 'workorder:labor:add_on_behalf'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startWorkexecWorkSession: { anyOf: ['timekeeping:work_session:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startWorkorder: { anyOf: ['workorder:workorder:start'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  stopBreakSegment: { anyOf: ['timekeeping:work_session:break_stop'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  stopLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  stopTimers: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  stopTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  stopWorkexecWorkSession: { anyOf: ['timekeeping:work_session:stop'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitEstimateForApproval: { anyOf: ['workorder:estimate:submit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitTravelSegments: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  substitutePart: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  suggestWorkorderSubstitutes: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  transferWorkorder: { anyOf: ['workorder:workorder:transfer'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateApprovalConfiguration: { anyOf: ['workorder:approval_config:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateEstimateItem: { anyOf: ['workorder:estimate_item:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateLocationSettings: { anyOf: ['workorder:location_settings:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly WorkorderOperationId[] = [];
