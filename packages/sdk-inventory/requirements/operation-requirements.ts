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
  readonly conditional: readonly string[];
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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InventoryOperationId, OperationRequirement>>> = {
  acceptPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  approveAdjustmentRequest: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false },
  approveCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false },
  approveReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false },
  approveRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false },
  approveScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], conditional: [], authenticated: false },
  approveTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], conditional: [], authenticated: false },
  bulkIngestCycleCountPlans: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  bulkIngestInventoryAdjustments: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  bulkIngestOpeningStock: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  bulkIngestPutawayRules: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false },
  cancelPickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  cancelReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  cancelReservationForSalesOrderLine: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  cancelTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], conditional: [], authenticated: false },
  claimPutawayTask: { anyOf: ['inventory:putaway:claim'], allOf: [], conditional: [], authenticated: false },
  completePutawayTask: { anyOf: ['inventory:putaway:execute'], allOf: [], conditional: [], authenticated: false },
  confirmPickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  confirmPickingList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  consumePickedItems: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  convertPurchaseSuggestions: { anyOf: ['inventory:replenishment:manage', 'order:purchase_order:create'], allOf: [], conditional: [], authenticated: false },
  countPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false },
  createAdHocCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  createAdjustmentRequest: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  createAsn: { anyOf: ['inventory:asn:create'], allOf: [], conditional: [], authenticated: false },
  createCycleCountAdjustment: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  createCycleCountPlan: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  createCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  createCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false },
  createGoodsReceipt: { anyOf: ['inventory:goods_receipt:create'], allOf: [], conditional: [], authenticated: false },
  createOrUpdateReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  createPickList: { anyOf: ['inventory:pick_list:create'], allOf: [], conditional: [], authenticated: false },
  createPurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], conditional: [], authenticated: false },
  createPutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false },
  createReceipt: { anyOf: ['inventory:receiving:complete', 'inventory:receiving:create'], allOf: [], conditional: [], authenticated: false },
  createReceivingSession: { anyOf: ['inventory:receiving:create'], allOf: [], conditional: [], authenticated: false },
  createReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  createRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false },
  createScrap: { anyOf: ['inventory:scrap:create'], allOf: [], conditional: [], authenticated: false },
  createStockMovement: { anyOf: ['inventory:stock_movement:create'], allOf: [], conditional: [], authenticated: false },
  createTransfer: { anyOf: ['inventory:stock_movement:create', 'inventory:transfer:create'], allOf: [], conditional: [], authenticated: false },
  createTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], conditional: [], authenticated: false },
  createVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false },
  crossDockReceivingLine: { anyOf: ['inventory:issue:parts', 'inventory:receiving:complete'], allOf: [], conditional: [], authenticated: false },
  deactivateCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  deactivateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  deactivateInventoryLocation: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  deactivateSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  deleteCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false },
  deletePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false },
  deleteVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false },
  dismissPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  dispatchTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], conditional: [], authenticated: false },
  executePutaway: { anyOf: ['inventory:putaway:execute'], allOf: [], conditional: [], authenticated: false },
  generateCycleCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  generatePutawayTasks: { anyOf: ['inventory:putaway:generate'], allOf: [], conditional: [], authenticated: false },
  getAsn: { anyOf: ['inventory:asn:view'], allOf: [], conditional: [], authenticated: false },
  getAvailabilityByProduct: { anyOf: ['inventory:availability:search'], allOf: [], conditional: [], authenticated: false },
  getAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false },
  getBackorder: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountPlan: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountQueue: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountSchedule: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountTask: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  getCycleCountTolerance: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  getGoodsReceipt: { anyOf: ['inventory:goods_receipt:view'], allOf: [], conditional: [], authenticated: false },
  getInventoryItemDetail: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getInventoryLeadTime: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false },
  getInventoryLedgerEntry: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false },
  getInventoryLot: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getInventorySettings: { anyOf: ['inventory:settings:view'], allOf: [], conditional: [], authenticated: false },
  getInventoryValuation: { anyOf: ['inventory:valuation:view'], allOf: [], conditional: [], authenticated: false },
  getLocationInventory: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getLocationInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getLocationTree: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  getPurchaseSuggestion: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getPutawayRule: { anyOf: ['inventory:putaway_rule:view'], allOf: [], conditional: [], authenticated: false },
  getReceivingSession: { anyOf: ['inventory:receiving:view'], allOf: [], conditional: [], authenticated: false },
  getRevaluation: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], conditional: [], authenticated: false },
  getScrap: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], conditional: [], authenticated: false },
  getSerialUnit: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getSiteDefaultLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  getSiteInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getStockStatusCounts: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  getSyncLog: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  getTransferOrder: { anyOf: ['inventory:transfer:view'], allOf: [], conditional: [], authenticated: false },
  listAdjustmentReasons: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false },
  listBackorders: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false },
  listCostingMethodConfigs: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  listCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountAuditorTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountHistory: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountInterferingMovements: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountPlanTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountPlans: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountSchedules: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listCycleCountTolerances: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false },
  listExpectedReceipts: { anyOf: ['inventory:receiving:view'], allOf: [], conditional: [], authenticated: false },
  listInventoryLedger: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false },
  listInventoryLocationZones: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listInventoryLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listInventoryLots: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listInventorySettingsHistory: { anyOf: ['inventory:settings:view'], allOf: [], conditional: [], authenticated: false },
  listInventoryStorageLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listLocationInventoryItems: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listMoveReasons: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false },
  listPendingReceipts: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false },
  listPickListsForWorkorder: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  listPickTasksForPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  listPurchaseShortfalls: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listPurchaseSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listPutawayAlternatives: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false },
  listPutawayQueue: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false },
  listPutawayRules: { anyOf: ['inventory:putaway_rule:view'], allOf: [], conditional: [], authenticated: false },
  listPutawayTasks: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false },
  listReplenishmentNeeds: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listReplenishmentPolicies: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listReplenishmentSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listReplenishmentTasks: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listReservationsForWorkorder: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false },
  listReturnReasonCodes: { anyOf: ['inventory:return:view'], allOf: [], conditional: [], authenticated: false },
  listReturnableItems: { anyOf: ['inventory:return:view'], allOf: [], conditional: [], authenticated: false },
  listRevaluations: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], conditional: [], authenticated: false },
  listScraps: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], conditional: [], authenticated: false },
  listSerialUnits: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listShortageOptions: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false },
  listSourcingStrategyConfigs: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  listStagedPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  listStock: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listStockingLevelHistory: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listStockingLevels: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  listStorageTypes: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listSupplierStockHintsByCode: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], conditional: [], authenticated: false },
  listSupplierStockHintsByProduct: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], conditional: [], authenticated: false },
  listSyncLogs: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false },
  listTransferOrders: { anyOf: ['inventory:transfer:view'], allOf: [], conditional: [], authenticated: false },
  listUnmappedFeedVendors: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  listUnplannedReceiptReasons: { anyOf: ['inventory:receiving:view', 'inventory:settings:view'], allOf: [], conditional: [], authenticated: false },
  listVendorFeedMappings: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  listWorkorderPicksQueue: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false },
  moveStock: { anyOf: ['inventory:stock_movement:create'], allOf: [], conditional: [], authenticated: false },
  promoteReservationAllocation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  queryInventorySummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view', 'inventory:pick_list:view', 'inventory:putaway:view', 'inventory:receiving:view'], allOf: [], conditional: [], authenticated: false },
  querySiteSummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  reallocateAllocations: { anyOf: ['inventory:allocations:reallocate'], allOf: [], conditional: [], authenticated: false },
  receiveItemsIntoStaging: { anyOf: ['inventory:receiving:complete'], allOf: [], conditional: [], authenticated: false },
  receiveTransferOrder: { anyOf: ['inventory:transfer:receive'], allOf: [], conditional: [], authenticated: false },
  rejectAdjustmentRequest: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  rejectCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false },
  rejectReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false },
  rejectRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false },
  rejectScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], conditional: [], authenticated: false },
  releasePickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  reportSkuCategoryImpact: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  resolveCode: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false },
  resolveShortage: { anyOf: ['inventory:shortage:resolve'], allOf: [], conditional: [], authenticated: false },
  returnStagedPickTask: { anyOf: ['inventory:pick_list:return_staged'], allOf: [], conditional: [], authenticated: false },
  runReplenishmentScan: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  searchCrossDockWorkorders: { anyOf: ['inventory:issue:parts', 'inventory:receiving:complete'], allOf: [], conditional: [], authenticated: false },
  shortCloseTransferOrder: { anyOf: ['inventory:transfer:short_close'], allOf: [], conditional: [], authenticated: false },
  snoozeReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  submitCycleCount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false },
  submitCycleCountRecount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false },
  submitReturnToStock: { anyOf: ['inventory:return:write'], allOf: [], conditional: [], authenticated: false },
  traceInventoryLot: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false },
  traceSerialUnit: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false },
  triggerLocationSync: { anyOf: ['inventory:location:sync'], allOf: [], conditional: [], authenticated: false },
  updateCycleCountPlanStatus: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false },
  updateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false },
  updateCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false },
  updateInventoryAvailability: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false },
  updateInventoryLotExpiration: { anyOf: ['inventory:lot:manage'], allOf: [], conditional: [], authenticated: false },
  updateInventoryLotStatus: { anyOf: ['inventory:lot:manage'], allOf: [], conditional: [], authenticated: false },
  updateInventorySettings: { anyOf: ['inventory:settings:manage'], allOf: [], conditional: [], authenticated: false },
  updatePickListStatus: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false },
  updatePurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], conditional: [], authenticated: false },
  updatePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false },
  updateReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
  updateSiteDefaultLocations: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  updateVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false },
  upsertCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  upsertSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false },
  upsertStockingLevel: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InventoryOperationId[] = [];
