// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-workorder/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<WorkorderOperationId, OperationRequirement>>> = {
  acknowledgeChangeRequestDenial: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  addEstimateItem: { anyOf: ['workorder:estimate_item:add'], allOf: [], conditional: [], authenticated: false },
  addWorkorderNote: { anyOf: ['workorder:note:add'], allOf: [], conditional: [], authenticated: false },
  adjustLaborHours: { anyOf: ['workorder:labor:adjust'], allOf: [], conditional: [], authenticated: false },
  applyChangeRequestEmergencyOverride: { anyOf: ['workorder:change_request:emergency_override'], allOf: [], conditional: [], authenticated: false },
  approveChangeRequest: { anyOf: ['workorder:change_request:approve'], allOf: [], conditional: [], authenticated: false },
  approveEstimate: { anyOf: ['workorder:estimate:approve'], allOf: [], conditional: [], authenticated: false },
  approveWorkorder: { anyOf: ['workorder:workorder:approve'], allOf: [], conditional: [], authenticated: false },
  assignServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], conditional: [], authenticated: false },
  assignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false },
  calculateEstimateTotals: { anyOf: ['workorder:estimate:calculate'], allOf: [], conditional: [], authenticated: false },
  checkWorkorderCanClose: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  claimWorkorder: { anyOf: ['workorder:workorder:claim'], allOf: [], conditional: [], authenticated: false },
  completePartItem: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false },
  completePickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  completeServiceItem: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false },
  completeWorkorder: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false },
  confirmPickLine: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  consumeParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  consumeWorkorderPickedItems: { anyOf: ['workorder:parts:consume'], allOf: [], conditional: [], authenticated: false },
  correctPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  countWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  createApprovalConfiguration: { anyOf: ['workorder:approval_config:create'], allOf: [], conditional: [], authenticated: false },
  createChangeRequest: { anyOf: ['workorder:change_request:create'], allOf: [], conditional: [], authenticated: false },
  createEstimate: { anyOf: ['workorder:estimate:create'], allOf: [], conditional: [], authenticated: false },
  createEstimateFromAppointment: { anyOf: ['workorder:estimate:create'], allOf: [], conditional: [], authenticated: false },
  createEstimateSnapshot: { anyOf: ['workorder:estimate_snapshot:create'], allOf: [], conditional: [], authenticated: false },
  createLaborPerformed: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  createTravelSegmentAdjustment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  createWorkorder: { anyOf: ['workorder:workorder:create'], allOf: [], conditional: [], authenticated: false },
  declineChangeRequest: { anyOf: ['workorder:change_request:decline'], allOf: [], conditional: [], authenticated: false },
  declineEstimate: { anyOf: ['workorder:estimate:decline'], allOf: [], conditional: [], authenticated: false },
  deleteApprovalConfiguration: { anyOf: ['workorder:approval_config:delete'], allOf: [], conditional: [], authenticated: false },
  deleteEstimate: { anyOf: ['workorder:estimate:delete'], allOf: [], conditional: [], authenticated: false },
  deleteEstimateItem: { anyOf: ['workorder:estimate_item:delete'], allOf: [], conditional: [], authenticated: false },
  deleteWorkorder: { anyOf: ['workorder:workorder:delete'], allOf: [], conditional: [], authenticated: false },
  generateEstimatePdf: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  generateWorkorderInvoice: { anyOf: ['workorder:workorder:generate_invoice'], allOf: [], conditional: [], authenticated: false },
  getActiveTimers: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false },
  getApplicableApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false },
  getApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false },
  getChangeRequest: { anyOf: ['workorder:change_request:view'], allOf: [], conditional: [], authenticated: false },
  getCompletionPreconditions: { anyOf: ['workorder:workorder:complete'], allOf: [], conditional: [], authenticated: false },
  getCompletionSignOff: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getDispatchDashboard: { anyOf: ['workorder:dashboard:view'], allOf: [], conditional: [], authenticated: false },
  getEstimate: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  getEstimateSummary: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  getJobTimeTotals: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false },
  getLaborAdjustments: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false },
  getLaborHistory: { anyOf: ['workorder:labor:view'], allOf: [], conditional: [], authenticated: false },
  getLaborOverrunsByServiceType: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getLocationSettings: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getOpenWorkordersByCustomer: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getOperationalContext: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getPartAdjustmentHistory: { anyOf: ['workorder:parts:view'], allOf: [], conditional: [], authenticated: false },
  getPartsUsageHistory: { anyOf: ['workorder:parts:view'], allOf: [], conditional: [], authenticated: false },
  getPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  getPickedItems: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  getPositionAvailability: { anyOf: ['location:bay:read'], allOf: [], conditional: [], authenticated: false },
  getReopenedWorkorderAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getScheduledWorkorderBlockers: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getServicePosition: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getTechnicianAssignment: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getTechnicianLaborAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getWipDetail: { anyOf: ['workorder:wip:view'], allOf: [], conditional: [], authenticated: false },
  getWorkorder: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getWorkorderDetail: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  getWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], conditional: [], authenticated: false },
  getWorkorderPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  getWorkorderSnapshots: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  getWorkorderStatusTransitions: { anyOf: ['workorder:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getWorkorderTransitions: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  issueParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  listApprovalConfigurations: { anyOf: ['workorder:approval_config:view'], allOf: [], conditional: [], authenticated: false },
  listChangeRequests: { anyOf: ['workorder:change_request:view'], allOf: [], conditional: [], authenticated: false },
  listEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  listEstimatesByCustomer: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  listEstimatesByLocation: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  listEstimatesByShop: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  listLaborIntelligence: { anyOf: ['workorder:labor_intelligence:view'], allOf: [], conditional: [], authenticated: false },
  listOpenItems: { anyOf: ['workorder:open_item:view'], allOf: [], conditional: [], authenticated: false },
  listTravelSegments: { anyOf: ['workorder:labor:add', 'workorder:labor:view'], allOf: [], conditional: [], authenticated: false },
  listWipWorkorders: { anyOf: ['workorder:wip:view'], allOf: [], conditional: [], authenticated: false },
  listWorkorderNotes: { anyOf: ['workorder:note:view'], allOf: [], conditional: [], authenticated: false },
  listWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  overrideOperationalContext: { anyOf: ['workorder:operationalContext:override'], allOf: [], conditional: [], authenticated: false },
  patchEstimateStatus: { anyOf: ['workorder:estimate:edit'], allOf: [], conditional: [], authenticated: false },
  promoteEstimate: { anyOf: ['workorder:estimate:promote'], allOf: [], conditional: [], authenticated: false },
  putEstimateCheckIn: { anyOf: ['workorder:estimate:check_in'], allOf: [], conditional: [], authenticated: false },
  reassignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false },
  recordCompletionSignOff: { anyOf: ['workorder:workorder:record_sign_off'], allOf: [], conditional: [], authenticated: false },
  releaseServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], conditional: [], authenticated: false },
  releaseTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], conditional: [], authenticated: false },
  reopenEstimate: { anyOf: ['workorder:estimate:reopen'], allOf: [], conditional: [], authenticated: false },
  reopenWorkorder: { anyOf: ['workorder:workorder:reopen_completed'], allOf: [], conditional: [], authenticated: false },
  requestWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], conditional: [], authenticated: false },
  resolvePickScan: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  resolveWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:resolve'], allOf: [], conditional: [], authenticated: false },
  resolveWorkorderNumbers: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  returnParts: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  returnUnusedPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  searchEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], conditional: [], authenticated: false },
  searchWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], conditional: [], authenticated: false },
  startBreakSegment: { anyOf: ['timekeeping:work_session:break_start'], allOf: [], conditional: [], authenticated: false },
  startLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  startTimer: { anyOf: ['workorder:labor:add', 'workorder:labor:add_on_behalf'], allOf: [], conditional: [], authenticated: false },
  startTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  startWorkexecWorkSession: { anyOf: ['timekeeping:work_session:create'], allOf: [], conditional: [], authenticated: false },
  startWorkorder: { anyOf: ['workorder:workorder:start'], allOf: [], conditional: [], authenticated: false },
  stopBreakSegment: { anyOf: ['timekeeping:work_session:break_stop'], allOf: [], conditional: [], authenticated: false },
  stopLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  stopTimers: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  stopTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  stopWorkexecWorkSession: { anyOf: ['timekeeping:work_session:stop'], allOf: [], conditional: [], authenticated: false },
  submitEstimateForApproval: { anyOf: ['workorder:estimate:submit'], allOf: [], conditional: [], authenticated: false },
  submitTravelSegments: { anyOf: ['workorder:labor:add'], allOf: [], conditional: [], authenticated: false },
  substitutePart: { anyOf: ['workorder:parts:add'], allOf: [], conditional: [], authenticated: false },
  suggestWorkorderSubstitutes: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  transferWorkorder: { anyOf: ['workorder:workorder:transfer'], allOf: [], conditional: [], authenticated: false },
  updateApprovalConfiguration: { anyOf: ['workorder:approval_config:edit'], allOf: [], conditional: [], authenticated: false },
  updateEstimateItem: { anyOf: ['workorder:estimate_item:edit'], allOf: [], conditional: [], authenticated: false },
  updateLocationSettings: { anyOf: ['workorder:location_settings:manage'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly WorkorderOperationId[] = [];
