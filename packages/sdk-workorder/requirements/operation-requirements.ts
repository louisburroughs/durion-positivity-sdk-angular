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
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<WorkorderOperationId, OperationRequirement>>> = {
  acknowledgeChangeRequestDenial: { anyOf: [], allOf: [], authenticated: true },
  addEstimateItem: { anyOf: ['workorder:estimate_item:add'], allOf: [], authenticated: false },
  addWorkorderNote: { anyOf: ['workorder:note:add'], allOf: [], authenticated: false },
  adjustLaborHours: { anyOf: ['workorder:labor:adjust'], allOf: [], authenticated: false },
  applyChangeRequestEmergencyOverride: { anyOf: ['workorder:change_request:emergency_override'], allOf: [], authenticated: false },
  approveChangeRequest: { anyOf: ['workorder:change_request:approve'], allOf: [], authenticated: false },
  approveEstimate: { anyOf: ['workorder:estimate:approve'], allOf: [], authenticated: false },
  approveWorkorder: { anyOf: ['workorder:workorder:approve'], allOf: [], authenticated: false },
  assignServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], authenticated: false },
  assignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], authenticated: false },
  calculateEstimateTotals: { anyOf: ['workorder:estimate:calculate'], allOf: [], authenticated: false },
  checkWorkorderCanClose: { anyOf: [], allOf: [], authenticated: true },
  claimWorkorder: { anyOf: ['workorder:workorder:claim'], allOf: [], authenticated: false },
  completePartItem: { anyOf: ['workorder:workorder:complete'], allOf: [], authenticated: false },
  completePickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  completeServiceItem: { anyOf: ['workorder:workorder:complete'], allOf: [], authenticated: false },
  completeWorkorder: { anyOf: ['workorder:workorder:complete'], allOf: [], authenticated: false },
  confirmPickLine: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  consumeParts: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  consumeWorkorderPickedItems: { anyOf: ['workorder:parts:consume'], allOf: [], authenticated: false },
  correctPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  countWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  createApprovalConfiguration: { anyOf: ['workorder:approval_config:create'], allOf: [], authenticated: false },
  createChangeRequest: { anyOf: ['workorder:change_request:create'], allOf: [], authenticated: false },
  createEstimate: { anyOf: ['workorder:estimate:create'], allOf: [], authenticated: false },
  createEstimateFromAppointment: { anyOf: ['workorder:estimate:create'], allOf: [], authenticated: false },
  createEstimateSnapshot: { anyOf: ['workorder:estimate_snapshot:create'], allOf: [], authenticated: false },
  createLaborPerformed: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  createTravelSegmentAdjustment: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  createWorkorder: { anyOf: ['workorder:workorder:create'], allOf: [], authenticated: false },
  declineChangeRequest: { anyOf: ['workorder:change_request:decline'], allOf: [], authenticated: false },
  declineEstimate: { anyOf: ['workorder:estimate:decline'], allOf: [], authenticated: false },
  deleteApprovalConfiguration: { anyOf: ['workorder:approval_config:delete'], allOf: [], authenticated: false },
  deleteEstimate: { anyOf: ['workorder:estimate:delete'], allOf: [], authenticated: false },
  deleteEstimateItem: { anyOf: ['workorder:estimate_item:delete'], allOf: [], authenticated: false },
  deleteWorkorder: { anyOf: ['workorder:workorder:delete'], allOf: [], authenticated: false },
  generateEstimatePdf: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  generateWorkorderInvoice: { anyOf: ['workorder:workorder:generate_invoice'], allOf: [], authenticated: false },
  getActiveTimers: { anyOf: ['workorder:labor:view'], allOf: [], authenticated: false },
  getApplicableApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], authenticated: false },
  getApprovalConfiguration: { anyOf: ['workorder:approval_config:view'], allOf: [], authenticated: false },
  getChangeRequest: { anyOf: ['workorder:change_request:view'], allOf: [], authenticated: false },
  getCompletionPreconditions: { anyOf: ['workorder:workorder:complete'], allOf: [], authenticated: false },
  getCompletionSignOff: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getDispatchDashboard: { anyOf: ['workorder:dashboard:view'], allOf: [], authenticated: false },
  getEstimate: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  getEstimateSummary: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  getJobTimeTotals: { anyOf: ['workorder:labor:view'], allOf: [], authenticated: false },
  getLaborAdjustments: { anyOf: ['workorder:labor:view'], allOf: [], authenticated: false },
  getLaborHistory: { anyOf: ['workorder:labor:view'], allOf: [], authenticated: false },
  getLaborOverrunsByServiceType: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getLocationSettings: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getOpenWorkordersByCustomer: { anyOf: ['workorder:analytics:view'], allOf: [], authenticated: false },
  getOperationalContext: { anyOf: [], allOf: [], authenticated: true },
  getPartAdjustmentHistory: { anyOf: ['workorder:parts:view'], allOf: [], authenticated: false },
  getPartsUsageHistory: { anyOf: ['workorder:parts:view'], allOf: [], authenticated: false },
  getPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  getPickedItems: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  getPositionAvailability: { anyOf: ['location:bay:read'], allOf: [], authenticated: false },
  getReopenedWorkorderAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], authenticated: false },
  getScheduledWorkorderBlockers: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getServicePosition: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getTechnicianAssignment: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getTechnicianLaborAnalytics: { anyOf: ['workorder:analytics:view'], allOf: [], authenticated: false },
  getWipDetail: { anyOf: ['workorder:wip:view'], allOf: [], authenticated: false },
  getWorkorder: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getWorkorderDetail: { anyOf: [], allOf: [], authenticated: true },
  getWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], authenticated: false },
  getWorkorderPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  getWorkorderSnapshots: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  getWorkorderStatusTransitions: { anyOf: ['workorder:analytics:view'], allOf: [], authenticated: false },
  getWorkorderTransitions: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  issueParts: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  listApprovalConfigurations: { anyOf: ['workorder:approval_config:view'], allOf: [], authenticated: false },
  listChangeRequests: { anyOf: ['workorder:change_request:view'], allOf: [], authenticated: false },
  listEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  listEstimatesByCustomer: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  listEstimatesByLocation: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  listEstimatesByShop: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  listLaborIntelligence: { anyOf: ['workorder:labor_intelligence:view'], allOf: [], authenticated: false },
  listOpenItems: { anyOf: ['workorder:open_item:view'], allOf: [], authenticated: false },
  listTravelSegments: { anyOf: ['workorder:labor:add', 'workorder:labor:view'], allOf: [], authenticated: false },
  listWipWorkorders: { anyOf: ['workorder:wip:view'], allOf: [], authenticated: false },
  listWorkorderNotes: { anyOf: ['workorder:note:view'], allOf: [], authenticated: false },
  listWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  overrideOperationalContext: { anyOf: ['workorder:operationalContext:override'], allOf: [], authenticated: false },
  patchEstimateStatus: { anyOf: ['workorder:estimate:edit'], allOf: [], authenticated: false },
  promoteEstimate: { anyOf: ['workorder:estimate:promote'], allOf: [], authenticated: false },
  putEstimateCheckIn: { anyOf: ['workorder:estimate:check_in'], allOf: [], authenticated: false },
  reassignTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], authenticated: false },
  recordCompletionSignOff: { anyOf: ['workorder:workorder:record_sign_off'], allOf: [], authenticated: false },
  releaseServicePosition: { anyOf: ['workorder:position:assign'], allOf: [], authenticated: false },
  releaseTechnician: { anyOf: ['workorder:workorder:assign-technician'], allOf: [], authenticated: false },
  reopenEstimate: { anyOf: ['workorder:estimate:reopen'], allOf: [], authenticated: false },
  reopenWorkorder: { anyOf: ['workorder:workorder:reopen_completed'], allOf: [], authenticated: false },
  requestWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:request'], allOf: [], authenticated: false },
  resolvePickScan: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  resolveWorkorderFleetAuthorization: { anyOf: ['workorder:fleet_auth:resolve'], allOf: [], authenticated: false },
  resolveWorkorderNumbers: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  returnParts: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  returnUnusedPartQuantity: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  searchEstimates: { anyOf: ['workorder:estimate:view'], allOf: [], authenticated: false },
  searchWorkorders: { anyOf: ['workorder:workorder:view'], allOf: [], authenticated: false },
  startBreakSegment: { anyOf: ['timekeeping:work_session:break_start'], allOf: [], authenticated: false },
  startLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  startTimer: { anyOf: ['workorder:labor:add', 'workorder:labor:add_on_behalf'], allOf: [], authenticated: false },
  startTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  startWorkexecWorkSession: { anyOf: ['timekeeping:work_session:create'], allOf: [], authenticated: false },
  startWorkorder: { anyOf: ['workorder:workorder:start'], allOf: [], authenticated: false },
  stopBreakSegment: { anyOf: ['timekeeping:work_session:break_stop'], allOf: [], authenticated: false },
  stopLaborSession: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  stopTimers: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  stopTravelSegment: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  stopWorkexecWorkSession: { anyOf: ['timekeeping:work_session:stop'], allOf: [], authenticated: false },
  submitEstimateForApproval: { anyOf: ['workorder:estimate:submit'], allOf: [], authenticated: false },
  submitTravelSegments: { anyOf: ['workorder:labor:add'], allOf: [], authenticated: false },
  substitutePart: { anyOf: ['workorder:parts:add'], allOf: [], authenticated: false },
  suggestWorkorderSubstitutes: { anyOf: [], allOf: [], authenticated: true },
  transferWorkorder: { anyOf: ['workorder:workorder:transfer'], allOf: [], authenticated: false },
  updateApprovalConfiguration: { anyOf: ['workorder:approval_config:edit'], allOf: [], authenticated: false },
  updateEstimateItem: { anyOf: ['workorder:estimate_item:edit'], allOf: [], authenticated: false },
  updateLocationSettings: { anyOf: ['workorder:location_settings:manage'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly WorkorderOperationId[] = [];
