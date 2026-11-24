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
  readonly conditional: readonly string[];
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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<OrderOperationId, OperationRequirement>>> = {
  addCartItem: { anyOf: ['order:line:create'], allOf: [], conditional: [], authenticated: false },
  applyOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], conditional: [], authenticated: false },
  applyPriceOverride: { anyOf: ['order:price_override:apply'], allOf: [], conditional: [], authenticated: false },
  approvePriceOverride: { anyOf: ['order:price_override:approve'], allOf: [], conditional: [], authenticated: false },
  approvePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false },
  approveReturn: { anyOf: ['order:return:approve'], allOf: [], conditional: [], authenticated: false },
  beginSessionClose: { anyOf: ['order:session:close'], allOf: [], conditional: [], authenticated: false },
  cancelOrder: { anyOf: ['order:order:cancel'], allOf: [], conditional: [], authenticated: false },
  cancelPurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false },
  cancelPurchaseOrderLine: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false },
  checkoutOrder: { anyOf: ['order:order:checkout'], allOf: [], conditional: [], authenticated: false },
  clearOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], conditional: [], authenticated: false },
  closePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false },
  confirmSessionClose: { anyOf: ['order:session:close'], allOf: [], conditional: [], authenticated: false },
  createCart: { anyOf: ['order:order:create'], allOf: [], conditional: [], authenticated: false },
  createPurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], conditional: [], authenticated: false },
  createReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false },
  getCashMovementOptions: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false },
  getCurrentRegisterSession: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false },
  getOrder: { anyOf: ['order:order:view'], allOf: [], conditional: [], authenticated: false },
  getPriceOverride: { anyOf: ['order:price_override:view'], allOf: [], conditional: [], authenticated: false },
  getPurchaseOrder: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  getPurchaseOrderSupplierAvailability: { anyOf: ['order:purchase_order:availability_view'], allOf: [], conditional: [], authenticated: false },
  getPurchaseOrderUnitsBySku: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  getPurchaseOrderVendor: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  getRegisterSession: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false },
  getReturn: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false },
  getSessionPolicy: { anyOf: ['order:session_policy:manage', 'order:session_policy:view'], allOf: [], conditional: [], authenticated: false },
  getSessionXReport: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false },
  getSessionZReport: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false },
  linkOrderSource: { anyOf: ['order:order:edit'], allOf: [], conditional: [], authenticated: false },
  listCarts: { anyOf: ['order:order:view'], allOf: [], conditional: [], authenticated: false },
  listCashMovements: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false },
  listPendingPriceOverrides: { anyOf: ['order:price_override:approve'], allOf: [], conditional: [], authenticated: false },
  listPurchaseOrderTransmissionEvents: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  listPurchaseOrderVendors: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  listPurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  listReturnableLines: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false },
  listReturns: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false },
  openRegisterSession: { anyOf: ['order:session:open'], allOf: [], conditional: [], authenticated: false },
  processReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false },
  quoteCart: { anyOf: ['order:order:quote'], allOf: [], conditional: [], authenticated: false },
  recordCashMovement: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false },
  recordCashTender: { anyOf: ['order:order:checkout'], allOf: [], conditional: [], authenticated: false },
  rejectPriceOverride: { anyOf: ['order:price_override:reject'], allOf: [], conditional: [], authenticated: false },
  rejectReturn: { anyOf: ['order:return:approve'], allOf: [], conditional: [], authenticated: false },
  removeCartItem: { anyOf: ['order:line:delete'], allOf: [], conditional: [], authenticated: false },
  reopenPurchaseOrderLine: { anyOf: ['order:purchase_order:reopen'], allOf: [], conditional: [], authenticated: false },
  reopenQuote: { anyOf: ['order:order:quote'], allOf: [], conditional: [], authenticated: false },
  requestCashMovementApproval: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false },
  retryOrderCancellation: { anyOf: ['order:order:cancel'], allOf: [], conditional: [], authenticated: false },
  retryReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false },
  revisePurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], conditional: [], authenticated: false },
  searchPriceOverrides: { anyOf: ['order:price_override:view'], allOf: [], conditional: [], authenticated: false },
  setCartCustomer: { anyOf: ['order:order:edit'], allOf: [], conditional: [], authenticated: false },
  summarizePurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false },
  transmitPurchaseOrder: { anyOf: ['order:purchase_order:transmit'], allOf: [], conditional: [], authenticated: false },
  updateCartItemQuantity: { anyOf: ['order:line:edit'], allOf: [], conditional: [], authenticated: false },
  updateSessionPolicy: { anyOf: ['order:session_policy:manage'], allOf: [], conditional: [], authenticated: false },
  voidOrder: { anyOf: ['order:order:void'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly OrderOperationId[] = [];
