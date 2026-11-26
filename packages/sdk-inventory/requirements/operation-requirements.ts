// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-inventory/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InventoryOperationId, OperationRequirement>>> = {
  acceptPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveAdjustmentRequest: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestCycleCountPlans: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestInventoryAdjustments: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestOpeningStock: { anyOf: [], allOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], conditional: [], authenticated: false, conditions: {} },
  bulkIngestPutawayRules: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelPickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelReservationForSalesOrderLine: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  claimPutawayTask: { anyOf: ['inventory:putaway:claim'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completePutawayTask: { anyOf: ['inventory:putaway:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmPickTask: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmPickingList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  consumePickedItems: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  convertPurchaseSuggestions: { anyOf: [], allOf: ['inventory:replenishment:manage', 'order:purchase_order:create'], conditional: [], authenticated: false, conditions: {} },
  countPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAdHocCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAdjustmentRequest: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAsn: { anyOf: ['inventory:asn:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCycleCountAdjustment: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCycleCountPlan: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createGoodsReceipt: { anyOf: ['inventory:goods_receipt:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createOrUpdateReservation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPickList: { anyOf: ['inventory:pick_list:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createReceipt: { anyOf: [], allOf: ['inventory:receiving:complete', 'inventory:receiving:create'], conditional: [], authenticated: false, conditions: {} },
  createReceivingSession: { anyOf: ['inventory:receiving:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createScrap: { anyOf: ['inventory:scrap:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createStockMovement: { anyOf: ['inventory:stock_movement:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTransfer: { anyOf: ['inventory:stock_movement:create', 'inventory:transfer:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTransferOrder: { anyOf: ['inventory:transfer:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  crossDockReceivingLine: { anyOf: [], allOf: ['inventory:issue:parts', 'inventory:receiving:complete'], conditional: [], authenticated: false, conditions: {} },
  deactivateCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateInventoryLocation: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deletePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dismissPurchaseSuggestion: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dispatchTransferOrder: { anyOf: ['inventory:transfer:dispatch'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  executePutaway: { anyOf: ['inventory:putaway:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateCycleCountTasks: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generatePutawayTasks: { anyOf: ['inventory:putaway:generate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAsn: { anyOf: ['inventory:asn:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAvailabilityByProduct: { anyOf: ['inventory:availability:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBackorder: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountPlan: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountQueue: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountSchedule: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountTask: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCycleCountTolerance: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getGoodsReceipt: { anyOf: ['inventory:goods_receipt:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventoryItemDetail: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventoryLeadTime: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventoryLedgerEntry: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventoryLot: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventorySettings: { anyOf: ['inventory:settings:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInventoryValuation: { anyOf: ['inventory:valuation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationInventory: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLocationTree: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPurchaseSuggestion: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPutawayRule: { anyOf: ['inventory:putaway_rule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReceivingSession: { anyOf: ['inventory:receiving:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRevaluation: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getScrap: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSerialUnit: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSiteDefaultLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSiteInventoryRollup: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getStockStatusCounts: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSyncLog: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTransferOrder: { anyOf: ['inventory:transfer:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAdjustmentReasons: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAvailabilityBySku: { anyOf: ['inventory:availability:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBackorders: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCostingMethodConfigs: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountAuditorTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountHistory: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountInterferingMovements: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountPlanTasks: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountPlans: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountSchedules: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCycleCountTolerances: { anyOf: ['inventory:cycle_count:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listExpectedReceipts: { anyOf: ['inventory:receiving:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventoryLedger: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventoryLocationZones: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventoryLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventoryLots: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventorySettingsHistory: { anyOf: ['inventory:settings:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInventoryStorageLocations: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationInventoryItems: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMoveReasons: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPendingCycleCountAdjustments: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPendingReceipts: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPickListsForWorkorder: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPickTasksForPickList: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPurchaseShortfalls: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPurchaseSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPutawayAlternatives: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPutawayQueue: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPutawayRules: { anyOf: ['inventory:putaway_rule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPutawayTasks: { anyOf: ['inventory:putaway:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReplenishmentNeeds: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReplenishmentPolicies: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReplenishmentSuggestions: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReplenishmentTasks: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReservationsForWorkorder: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReturnReasonCodes: { anyOf: ['inventory:return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReturnableItems: { anyOf: ['inventory:return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listRevaluations: { anyOf: ['inventory:valuation:adjust', 'inventory:valuation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listScraps: { anyOf: ['inventory:scrap:approve', 'inventory:scrap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSerialUnits: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listShortageOptions: { anyOf: ['inventory:shortage:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSourcingStrategyConfigs: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStagedPickTasks: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStock: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStockingLevelHistory: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStockingLevels: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listStorageTypes: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierStockHintsByCode: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSupplierStockHintsByProduct: { anyOf: ['inventory:supplier_stock_hint:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSyncLogs: { anyOf: ['inventory:location:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTransferOrders: { anyOf: ['inventory:transfer:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUnmappedFeedVendors: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUnplannedReceiptReasons: { anyOf: ['inventory:receiving:view', 'inventory:settings:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorFeedMappings: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listWorkorderPicksQueue: { anyOf: ['inventory:pick_list:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  moveStock: { anyOf: ['inventory:stock_movement:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  promoteReservationAllocation: { anyOf: ['inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  queryInventorySummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view', 'inventory:pick_list:view', 'inventory:putaway:view', 'inventory:receiving:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  querySiteSummary: { anyOf: ['inventory:cycle_count:view', 'inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reallocateAllocations: { anyOf: ['inventory:allocations:reallocate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  receiveItemsIntoStaging: { anyOf: ['inventory:receiving:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  receiveTransferOrder: { anyOf: ['inventory:transfer:receive'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectAdjustmentRequest: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectCycleCountAdjustment: { anyOf: ['inventory:adjustment:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectReceipt: { anyOf: ['inventory:receiving:approve_unplanned'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectRevaluation: { anyOf: ['inventory:valuation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectScrap: { anyOf: ['inventory:scrap:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  releasePickList: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reportSkuCategoryImpact: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveCode: { anyOf: ['inventory:on_hand:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveShortage: { anyOf: ['inventory:shortage:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  returnStagedPickTask: { anyOf: ['inventory:pick_list:return_staged'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  runReplenishmentScan: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchCrossDockWorkorders: { anyOf: [], allOf: ['inventory:issue:parts', 'inventory:receiving:complete'], conditional: [], authenticated: false, conditions: {} },
  shortCloseTransferOrder: { anyOf: ['inventory:transfer:short_close'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  snoozeReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitCycleCount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitCycleCountRecount: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitReturnToStock: { anyOf: ['inventory:return:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  traceInventoryLot: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  traceSerialUnit: { anyOf: ['inventory:ledger:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  triggerLocationSync: { anyOf: ['inventory:location:sync'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCycleCountPlanStatus: { anyOf: ['inventory:cycle_count:complete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCycleCountSchedule: { anyOf: ['inventory:cycle_count:initiate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCycleCountTolerance: { anyOf: ['inventory:cycle_count_tolerance:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateInventoryAvailability: { anyOf: ['inventory:adjustment:approve', 'inventory:adjustment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateInventoryLotExpiration: { anyOf: ['inventory:lot:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateInventoryLotStatus: { anyOf: ['inventory:lot:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateInventorySettings: { anyOf: ['inventory:settings:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePickListStatus: { anyOf: ['inventory:pick_list:execute'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePurchaseSuggestion: { anyOf: ['inventory:purchase_request:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePutawayRule: { anyOf: ['inventory:putaway_rule:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateReplenishmentPolicy: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateSiteDefaultLocations: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateVendorFeedMapping: { anyOf: ['inventory:vendor_feed_mapping:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertCostingMethodConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertSourcingStrategyConfig: { anyOf: ['inventory:location:admin'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertStockingLevel: { anyOf: ['inventory:replenishment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InventoryOperationId[] = [];
