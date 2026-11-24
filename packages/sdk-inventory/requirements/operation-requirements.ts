// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-inventory/openapi.yaml.

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

/** Every operation of @durion-sdk/inventory, by the name of its generated service method. */
export type InventoryOperationId =
  | 'acceptPurchaseSuggestion'
  | 'approveAdjustmentRequest'
  | 'approveCycleCountAdjustment'
  | 'approveReceipt'
  | 'approveRevaluation'
  | 'approveScrap'
  | 'approveTransferOrder'
  | 'bulkIngestCycleCountPlans'
  | 'bulkIngestInventoryAdjustments'
  | 'bulkIngestOpeningStock'
  | 'bulkIngestPutawayRules'
  | 'cancelPickList'
  | 'cancelReservation'
  | 'cancelReservationForSalesOrderLine'
  | 'cancelTransferOrder'
  | 'claimPutawayTask'
  | 'completePutawayTask'
  | 'confirmPickTask'
  | 'confirmPickingList'
  | 'consumePickedItems'
  | 'convertPurchaseSuggestions'
  | 'countPendingCycleCountAdjustments'
  | 'createAdHocCountTasks'
  | 'createAdjustmentRequest'
  | 'createAsn'
  | 'createCycleCountAdjustment'
  | 'createCycleCountPlan'
  | 'createCycleCountSchedule'
  | 'createCycleCountTolerance'
  | 'createGoodsReceipt'
  | 'createOrUpdateReservation'
  | 'createPickList'
  | 'createPurchaseSuggestion'
  | 'createPutawayRule'
  | 'createReceipt'
  | 'createReceivingSession'
  | 'createReplenishmentPolicy'
  | 'createRevaluation'
  | 'createScrap'
  | 'createStockMovement'
  | 'createTransfer'
  | 'createTransferOrder'
  | 'createVendorFeedMapping'
  | 'crossDockReceivingLine'
  | 'deactivateCostingMethodConfig'
  | 'deactivateCycleCountSchedule'
  | 'deactivateInventoryLocation'
  | 'deactivateSourcingStrategyConfig'
  | 'deleteCycleCountTolerance'
  | 'deletePutawayRule'
  | 'deleteVendorFeedMapping'
  | 'dismissPurchaseSuggestion'
  | 'dispatchTransferOrder'
  | 'executePutaway'
  | 'generateCycleCountTasks'
  | 'generatePutawayTasks'
  | 'getAsn'
  | 'getAvailabilityByProduct'
  | 'getAvailabilityBySku'
  | 'getBackorder'
  | 'getCycleCountAdjustment'
  | 'getCycleCountPlan'
  | 'getCycleCountQueue'
  | 'getCycleCountSchedule'
  | 'getCycleCountTask'
  | 'getCycleCountTolerance'
  | 'getGoodsReceipt'
  | 'getInventoryItemDetail'
  | 'getInventoryLeadTime'
  | 'getInventoryLedgerEntry'
  | 'getInventoryLot'
  | 'getInventorySettings'
  | 'getInventoryValuation'
  | 'getLocationInventory'
  | 'getLocationInventoryRollup'
  | 'getLocationTree'
  | 'getPickList'
  | 'getPurchaseSuggestion'
  | 'getPutawayRule'
  | 'getReceivingSession'
  | 'getRevaluation'
  | 'getScrap'
  | 'getSerialUnit'
  | 'getSiteDefaultLocations'
  | 'getSiteInventoryRollup'
  | 'getStockStatusCounts'
  | 'getSyncLog'
  | 'getTransferOrder'
  | 'listAdjustmentReasons'
  | 'listAvailabilityBySku'
  | 'listBackorders'
  | 'listCostingMethodConfigs'
  | 'listCycleCountAdjustments'
  | 'listCycleCountAuditorTasks'
  | 'listCycleCountHistory'
  | 'listCycleCountInterferingMovements'
  | 'listCycleCountPlanTasks'
  | 'listCycleCountPlans'
  | 'listCycleCountSchedules'
  | 'listCycleCountTolerances'
  | 'listExpectedReceipts'
  | 'listInventoryLedger'
  | 'listInventoryLocationZones'
  | 'listInventoryLocations'
  | 'listInventoryLots'
  | 'listInventorySettingsHistory'
  | 'listInventoryStorageLocations'
  | 'listLocationInventoryItems'
  | 'listMoveReasons'
  | 'listPendingCycleCountAdjustments'
  | 'listPendingReceipts'
  | 'listPickListsForWorkorder'
  | 'listPickTasksForPickList'
  | 'listPurchaseShortfalls'
  | 'listPurchaseSuggestions'
  | 'listPutawayAlternatives'
  | 'listPutawayQueue'
  | 'listPutawayRules'
  | 'listPutawayTasks'
  | 'listReplenishmentNeeds'
  | 'listReplenishmentPolicies'
  | 'listReplenishmentSuggestions'
  | 'listReplenishmentTasks'
  | 'listReservationsForWorkorder'
  | 'listReturnReasonCodes'
  | 'listReturnableItems'
  | 'listRevaluations'
  | 'listScraps'
  | 'listSerialUnits'
  | 'listShortageOptions'
  | 'listSourcingStrategyConfigs'
  | 'listStagedPickTasks'
  | 'listStock'
  | 'listStockingLevelHistory'
  | 'listStockingLevels'
  | 'listStorageTypes'
  | 'listSupplierStockHintsByCode'
  | 'listSupplierStockHintsByProduct'
  | 'listSyncLogs'
  | 'listTransferOrders'
  | 'listUnmappedFeedVendors'
  | 'listUnplannedReceiptReasons'
  | 'listVendorFeedMappings'
  | 'listWorkorderPicksQueue'
  | 'moveStock'
  | 'promoteReservationAllocation'
  | 'queryInventorySummary'
  | 'querySiteSummary'
  | 'reallocateAllocations'
  | 'receiveItemsIntoStaging'
  | 'receiveTransferOrder'
  | 'rejectAdjustmentRequest'
  | 'rejectCycleCountAdjustment'
  | 'rejectReceipt'
  | 'rejectRevaluation'
  | 'rejectScrap'
  | 'releasePickList'
  | 'reportSkuCategoryImpact'
  | 'resolveCode'
  | 'resolveShortage'
  | 'returnStagedPickTask'
  | 'runReplenishmentScan'
  | 'searchCrossDockWorkorders'
  | 'shortCloseTransferOrder'
  | 'snoozeReplenishmentPolicy'
  | 'submitCycleCount'
  | 'submitCycleCountRecount'
  | 'submitReturnToStock'
  | 'traceInventoryLot'
  | 'traceSerialUnit'
  | 'triggerLocationSync'
  | 'updateCycleCountPlanStatus'
  | 'updateCycleCountSchedule'
  | 'updateCycleCountTolerance'
  | 'updateInventoryAvailability'
  | 'updateInventoryLotExpiration'
  | 'updateInventoryLotStatus'
  | 'updateInventorySettings'
  | 'updatePickListStatus'
  | 'updatePurchaseSuggestion'
  | 'updatePutawayRule'
  | 'updateReplenishmentPolicy'
  | 'updateSiteDefaultLocations'
  | 'updateVendorFeedMapping'
  | 'upsertCostingMethodConfig'
  | 'upsertSourcingStrategyConfig'
  | 'upsertStockingLevel';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InventoryOperationId, OperationRequirement>>> = {
  acceptPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  approveAdjustmentRequest: { anyOf: ['inventory:adjustment:approve'], allOf: [], authenticated: false },
  approveCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], authenticated: false },
  approveReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], authenticated: false },
  approveRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], authenticated: false },
  approveScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], authenticated: false },
  approveTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], authenticated: false },
  bulkIngestCycleCountPlans: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  bulkIngestInventoryAdjustments: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  bulkIngestOpeningStock: { anyOf: [], allOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], authenticated: false },
  bulkIngestPutawayRules: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], authenticated: false },
  cancelPickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  cancelReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  cancelReservationForSalesOrderLine: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  cancelTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], authenticated: false },
  claimPutawayTask: { anyOf: ['inventory:putaway:claim'], allOf: [], authenticated: false },
  completePutawayTask: { anyOf: ['inventory:putaway:execute'], allOf: [], authenticated: false },
  confirmPickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  confirmPickingList: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  consumePickedItems: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  convertPurchaseSuggestions: { anyOf: [], allOf: ['inventory:replenishment:manage', 'order:purchase_order:create'], authenticated: false },
  countPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], authenticated: false },
  createAdHocCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  createAdjustmentRequest: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  createAsn: { anyOf: ['inventory:asn:create'], allOf: [], authenticated: false },
  createCycleCountAdjustment: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  createCycleCountPlan: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  createCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  createCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], authenticated: false },
  createGoodsReceipt: { anyOf: ['inventory:goods_receipt:create'], allOf: [], authenticated: false },
  createOrUpdateReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  createPickList: { anyOf: ['inventory:pick_list:create'], allOf: [], authenticated: false },
  createPurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], authenticated: false },
  createPutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], authenticated: false },
  createReceipt: { anyOf: [], allOf: ['inventory:receiving:complete', 'inventory:receiving:create'], authenticated: false },
  createReceivingSession: { anyOf: ['inventory:receiving:create'], allOf: [], authenticated: false },
  createReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  createRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], authenticated: false },
  createScrap: { anyOf: ['inventory:scrap:create'], allOf: [], authenticated: false },
  createStockMovement: { anyOf: ['inventory:stock_movement:create'], allOf: [], authenticated: false },
  createTransfer: { anyOf: ['inventory:stock_movement:create', 'inventory:transfer:create'], allOf: [], authenticated: false },
  createTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], authenticated: false },
  createVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], authenticated: false },
  crossDockReceivingLine: { anyOf: [], allOf: ['inventory:issue:parts', 'inventory:receiving:complete'], authenticated: false },
  deactivateCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  deactivateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  deactivateInventoryLocation: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  deactivateSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  deleteCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], authenticated: false },
  deletePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], authenticated: false },
  deleteVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], authenticated: false },
  dismissPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  dispatchTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], authenticated: false },
  executePutaway: { anyOf: ['inventory:putaway:execute'], allOf: [], authenticated: false },
  generateCycleCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  generatePutawayTasks: { anyOf: ['inventory:putaway:generate'], allOf: [], authenticated: false },
  getAsn: { anyOf: ['inventory:asn:view'], allOf: [], authenticated: false },
  getAvailabilityByProduct: { anyOf: ['inventory:availability:search'], allOf: [], authenticated: false },
  getAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], authenticated: false },
  getBackorder: { anyOf: ['inventory:shortage:view'], allOf: [], authenticated: false },
  getCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], authenticated: false },
  getCycleCountPlan: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  getCycleCountQueue: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  getCycleCountSchedule: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  getCycleCountTask: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  getCycleCountTolerance: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  getGoodsReceipt: { anyOf: ['inventory:goods_receipt:view'], allOf: [], authenticated: false },
  getInventoryItemDetail: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getInventoryLeadTime: { anyOf: ['inventory:availability:read'], allOf: [], authenticated: false },
  getInventoryLedgerEntry: { anyOf: ['inventory:ledger:view'], allOf: [], authenticated: false },
  getInventoryLot: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getInventorySettings: { anyOf: ['inventory:settings:view'], allOf: [], authenticated: false },
  getInventoryValuation: { anyOf: ['inventory:valuation:view'], allOf: [], authenticated: false },
  getLocationInventory: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getLocationInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getLocationTree: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  getPurchaseSuggestion: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getPutawayRule: { anyOf: ['inventory:putaway_rule:view'], allOf: [], authenticated: false },
  getReceivingSession: { anyOf: ['inventory:receiving:view'], allOf: [], authenticated: false },
  getRevaluation: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], authenticated: false },
  getScrap: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], authenticated: false },
  getSerialUnit: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getSiteDefaultLocations: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  getSiteInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getStockStatusCounts: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  getSyncLog: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  getTransferOrder: { anyOf: ['inventory:transfer:view'], allOf: [], authenticated: false },
  listAdjustmentReasons: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], authenticated: false },
  listBackorders: { anyOf: ['inventory:shortage:view'], allOf: [], authenticated: false },
  listCostingMethodConfigs: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  listCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], authenticated: false },
  listCycleCountAuditorTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountHistory: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountInterferingMovements: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountPlanTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountPlans: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountSchedules: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listCycleCountTolerances: { anyOf: ['inventory:cycle_count:view'], allOf: [], authenticated: false },
  listExpectedReceipts: { anyOf: ['inventory:receiving:view'], allOf: [], authenticated: false },
  listInventoryLedger: { anyOf: ['inventory:ledger:view'], allOf: [], authenticated: false },
  listInventoryLocationZones: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listInventoryLocations: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listInventoryLots: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listInventorySettingsHistory: { anyOf: ['inventory:settings:view'], allOf: [], authenticated: false },
  listInventoryStorageLocations: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listLocationInventoryItems: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listMoveReasons: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], authenticated: false },
  listPendingReceipts: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], authenticated: false },
  listPickListsForWorkorder: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  listPickTasksForPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  listPurchaseShortfalls: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listPurchaseSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listPutawayAlternatives: { anyOf: ['inventory:putaway:view'], allOf: [], authenticated: false },
  listPutawayQueue: { anyOf: ['inventory:putaway:view'], allOf: [], authenticated: false },
  listPutawayRules: { anyOf: ['inventory:putaway_rule:view'], allOf: [], authenticated: false },
  listPutawayTasks: { anyOf: ['inventory:putaway:view'], allOf: [], authenticated: false },
  listReplenishmentNeeds: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listReplenishmentPolicies: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listReplenishmentSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listReplenishmentTasks: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listReservationsForWorkorder: { anyOf: ['inventory:shortage:view'], allOf: [], authenticated: false },
  listReturnReasonCodes: { anyOf: ['inventory:return:view'], allOf: [], authenticated: false },
  listReturnableItems: { anyOf: ['inventory:return:view'], allOf: [], authenticated: false },
  listRevaluations: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], authenticated: false },
  listScraps: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], authenticated: false },
  listSerialUnits: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listShortageOptions: { anyOf: ['inventory:shortage:view'], allOf: [], authenticated: false },
  listSourcingStrategyConfigs: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  listStagedPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  listStock: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listStockingLevelHistory: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listStockingLevels: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  listStorageTypes: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listSupplierStockHintsByCode: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], authenticated: false },
  listSupplierStockHintsByProduct: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], authenticated: false },
  listSyncLogs: { anyOf: ['inventory:location:view'], allOf: [], authenticated: false },
  listTransferOrders: { anyOf: ['inventory:transfer:view'], allOf: [], authenticated: false },
  listUnmappedFeedVendors: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  listUnplannedReceiptReasons: { anyOf: ['inventory:receiving:view', 'inventory:settings:view'], allOf: [], authenticated: false },
  listVendorFeedMappings: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  listWorkorderPicksQueue: { anyOf: ['inventory:pick_list:view'], allOf: [], authenticated: false },
  moveStock: { anyOf: ['inventory:stock_movement:create'], allOf: [], authenticated: false },
  promoteReservationAllocation: { anyOf: ['inventory:adjustment:create'], allOf: [], authenticated: false },
  queryInventorySummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view', 'inventory:pick_list:view', 'inventory:putaway:view', 'inventory:receiving:view'], allOf: [], authenticated: false },
  querySiteSummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view'], allOf: [], authenticated: false },
  reallocateAllocations: { anyOf: ['inventory:allocations:reallocate'], allOf: [], authenticated: false },
  receiveItemsIntoStaging: { anyOf: ['inventory:receiving:complete'], allOf: [], authenticated: false },
  receiveTransferOrder: { anyOf: ['inventory:transfer:receive'], allOf: [], authenticated: false },
  rejectAdjustmentRequest: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], authenticated: false },
  rejectCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], authenticated: false },
  rejectReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], authenticated: false },
  rejectRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], authenticated: false },
  rejectScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], authenticated: false },
  releasePickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  reportSkuCategoryImpact: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  resolveCode: { anyOf: ['inventory:on_hand:view'], allOf: [], authenticated: false },
  resolveShortage: { anyOf: ['inventory:shortage:resolve'], allOf: [], authenticated: false },
  returnStagedPickTask: { anyOf: ['inventory:pick_list:return_staged'], allOf: [], authenticated: false },
  runReplenishmentScan: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  searchCrossDockWorkorders: { anyOf: [], allOf: ['inventory:issue:parts', 'inventory:receiving:complete'], authenticated: false },
  shortCloseTransferOrder: { anyOf: ['inventory:transfer:short_close'], allOf: [], authenticated: false },
  snoozeReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  submitCycleCount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], authenticated: false },
  submitCycleCountRecount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], authenticated: false },
  submitReturnToStock: { anyOf: ['inventory:return:write'], allOf: [], authenticated: false },
  traceInventoryLot: { anyOf: ['inventory:ledger:view'], allOf: [], authenticated: false },
  traceSerialUnit: { anyOf: ['inventory:ledger:view'], allOf: [], authenticated: false },
  triggerLocationSync: { anyOf: ['inventory:location:sync'], allOf: [], authenticated: false },
  updateCycleCountPlanStatus: { anyOf: ['inventory:cycle_count:complete'], allOf: [], authenticated: false },
  updateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], authenticated: false },
  updateCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], authenticated: false },
  updateInventoryAvailability: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], authenticated: false },
  updateInventoryLotExpiration: { anyOf: ['inventory:lot:manage'], allOf: [], authenticated: false },
  updateInventoryLotStatus: { anyOf: ['inventory:lot:manage'], allOf: [], authenticated: false },
  updateInventorySettings: { anyOf: ['inventory:settings:manage'], allOf: [], authenticated: false },
  updatePickListStatus: { anyOf: ['inventory:pick_list:execute'], allOf: [], authenticated: false },
  updatePurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], authenticated: false },
  updatePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], authenticated: false },
  updateReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
  updateSiteDefaultLocations: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  updateVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], authenticated: false },
  upsertCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  upsertSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], authenticated: false },
  upsertStockingLevel: { anyOf: ['inventory:replenishment:manage'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InventoryOperationId[] = [];
