// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-order/openapi.yaml.

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

/** Every operation of @durion-sdk/order, by the name of its generated service method. */
export type OrderOperationId =
  | 'addCartItem'
  | 'applyOrderDiscount'
  | 'applyPriceOverride'
  | 'approvePriceOverride'
  | 'approvePurchaseOrder'
  | 'approveReturn'
  | 'beginSessionClose'
  | 'cancelOrder'
  | 'cancelPurchaseOrder'
  | 'cancelPurchaseOrderLine'
  | 'checkoutOrder'
  | 'clearOrderDiscount'
  | 'closePurchaseOrder'
  | 'confirmSessionClose'
  | 'createCart'
  | 'createPurchaseOrder'
  | 'createReturn'
  | 'getCashMovementOptions'
  | 'getCurrentRegisterSession'
  | 'getOrder'
  | 'getPriceOverride'
  | 'getPurchaseOrder'
  | 'getPurchaseOrderSupplierAvailability'
  | 'getPurchaseOrderUnitsBySku'
  | 'getPurchaseOrderVendor'
  | 'getRegisterSession'
  | 'getReturn'
  | 'getSessionPolicy'
  | 'getSessionXReport'
  | 'getSessionZReport'
  | 'linkOrderSource'
  | 'listCarts'
  | 'listCashMovements'
  | 'listPendingPriceOverrides'
  | 'listPurchaseOrderTransmissionEvents'
  | 'listPurchaseOrderVendors'
  | 'listPurchaseOrders'
  | 'listReturnableLines'
  | 'listReturns'
  | 'openRegisterSession'
  | 'processReturn'
  | 'quoteCart'
  | 'recordCashMovement'
  | 'recordCashTender'
  | 'rejectPriceOverride'
  | 'rejectReturn'
  | 'removeCartItem'
  | 'reopenPurchaseOrderLine'
  | 'reopenQuote'
  | 'requestCashMovementApproval'
  | 'retryOrderCancellation'
  | 'retryReturn'
  | 'revisePurchaseOrder'
  | 'searchPriceOverrides'
  | 'setCartCustomer'
  | 'summarizePurchaseOrders'
  | 'transmitPurchaseOrder'
  | 'updateCartItemQuantity'
  | 'updateSessionPolicy'
  | 'voidOrder';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<OrderOperationId, OperationRequirement>>> = {
  addCartItem: { anyOf: ['order:line:create'], allOf: [], authenticated: false },
  applyOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], authenticated: false },
  applyPriceOverride: { anyOf: ['order:price_override:apply'], allOf: [], authenticated: false },
  approvePriceOverride: { anyOf: ['order:price_override:approve'], allOf: [], authenticated: false },
  approvePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], authenticated: false },
  approveReturn: { anyOf: ['order:return:approve'], allOf: [], authenticated: false },
  beginSessionClose: { anyOf: ['order:session:close'], allOf: [], authenticated: false },
  cancelOrder: { anyOf: ['order:order:cancel'], allOf: [], authenticated: false },
  cancelPurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], authenticated: false },
  cancelPurchaseOrderLine: { anyOf: ['order:purchase_order:approve'], allOf: [], authenticated: false },
  checkoutOrder: { anyOf: ['order:order:checkout'], allOf: [], authenticated: false },
  clearOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], authenticated: false },
  closePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], authenticated: false },
  confirmSessionClose: { anyOf: ['order:session:close'], allOf: [], authenticated: false },
  createCart: { anyOf: ['order:order:create'], allOf: [], authenticated: false },
  createPurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], authenticated: false },
  createReturn: { anyOf: ['order:return:create'], allOf: [], authenticated: false },
  getCashMovementOptions: { anyOf: ['order:session:cash_movement'], allOf: [], authenticated: false },
  getCurrentRegisterSession: { anyOf: ['order:session:view'], allOf: [], authenticated: false },
  getOrder: { anyOf: ['order:order:view'], allOf: [], authenticated: false },
  getPriceOverride: { anyOf: ['order:price_override:view'], allOf: [], authenticated: false },
  getPurchaseOrder: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  getPurchaseOrderSupplierAvailability: { anyOf: ['order:purchase_order:availability_view'], allOf: [], authenticated: false },
  getPurchaseOrderUnitsBySku: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  getPurchaseOrderVendor: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  getRegisterSession: { anyOf: ['order:session:view'], allOf: [], authenticated: false },
  getReturn: { anyOf: ['order:return:view'], allOf: [], authenticated: false },
  getSessionPolicy: { anyOf: ['order:session_policy:manage', 'order:session_policy:view'], allOf: [], authenticated: false },
  getSessionXReport: { anyOf: ['order:session:view'], allOf: [], authenticated: false },
  getSessionZReport: { anyOf: ['order:session:view'], allOf: [], authenticated: false },
  linkOrderSource: { anyOf: ['order:order:edit'], allOf: [], authenticated: false },
  listCarts: { anyOf: ['order:order:view'], allOf: [], authenticated: false },
  listCashMovements: { anyOf: ['order:session:view'], allOf: [], authenticated: false },
  listPendingPriceOverrides: { anyOf: ['order:price_override:approve'], allOf: [], authenticated: false },
  listPurchaseOrderTransmissionEvents: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  listPurchaseOrderVendors: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  listPurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  listReturnableLines: { anyOf: ['order:return:view'], allOf: [], authenticated: false },
  listReturns: { anyOf: ['order:return:view'], allOf: [], authenticated: false },
  openRegisterSession: { anyOf: ['order:session:open'], allOf: [], authenticated: false },
  processReturn: { anyOf: ['order:return:create'], allOf: [], authenticated: false },
  quoteCart: { anyOf: ['order:order:quote'], allOf: [], authenticated: false },
  recordCashMovement: { anyOf: ['order:session:cash_movement'], allOf: [], authenticated: false },
  recordCashTender: { anyOf: ['order:order:checkout'], allOf: [], authenticated: false },
  rejectPriceOverride: { anyOf: ['order:price_override:reject'], allOf: [], authenticated: false },
  rejectReturn: { anyOf: ['order:return:approve'], allOf: [], authenticated: false },
  removeCartItem: { anyOf: ['order:line:delete'], allOf: [], authenticated: false },
  reopenPurchaseOrderLine: { anyOf: ['order:purchase_order:reopen'], allOf: [], authenticated: false },
  reopenQuote: { anyOf: ['order:order:quote'], allOf: [], authenticated: false },
  requestCashMovementApproval: { anyOf: ['order:session:cash_movement'], allOf: [], authenticated: false },
  retryOrderCancellation: { anyOf: ['order:order:cancel'], allOf: [], authenticated: false },
  retryReturn: { anyOf: ['order:return:create'], allOf: [], authenticated: false },
  revisePurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], authenticated: false },
  searchPriceOverrides: { anyOf: ['order:price_override:view'], allOf: [], authenticated: false },
  setCartCustomer: { anyOf: ['order:order:edit'], allOf: [], authenticated: false },
  summarizePurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], authenticated: false },
  transmitPurchaseOrder: { anyOf: ['order:purchase_order:transmit'], allOf: [], authenticated: false },
  updateCartItemQuantity: { anyOf: ['order:line:edit'], allOf: [], authenticated: false },
  updateSessionPolicy: { anyOf: ['order:session_policy:manage'], allOf: [], authenticated: false },
  voidOrder: { anyOf: ['order:order:void'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly OrderOperationId[] = [];
