// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-order/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<OrderOperationId, OperationRequirement>>> = {
  addCartItem: { anyOf: ['order:line:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyPriceOverride: { anyOf: ['order:price_override:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approvePriceOverride: { anyOf: ['order:price_override:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approvePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveReturn: { anyOf: ['order:return:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  beginSessionClose: { anyOf: ['order:session:close'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelOrder: { anyOf: ['order:order:cancel'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelPurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelPurchaseOrderLine: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkoutOrder: { anyOf: ['order:order:checkout'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  clearOrderDiscount: { anyOf: ['order:order:discount'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  closePurchaseOrder: { anyOf: ['order:purchase_order:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmSessionClose: { anyOf: ['order:session:close'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCart: { anyOf: ['order:order:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCashMovementOptions: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCurrentRegisterSession: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getOrder: { anyOf: ['order:order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPriceOverride: { anyOf: ['order:price_override:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPurchaseOrder: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPurchaseOrderSupplierAvailability: { anyOf: ['order:purchase_order:availability_view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPurchaseOrderUnitsBySku: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPurchaseOrderVendor: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRegisterSession: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReturn: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSessionPolicy: { anyOf: ['order:session_policy:manage', 'order:session_policy:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSessionXReport: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSessionZReport: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  linkOrderSource: { anyOf: ['order:order:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCarts: { anyOf: ['order:order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCashMovements: { anyOf: ['order:session:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPendingPriceOverrides: { anyOf: ['order:price_override:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPurchaseOrderTransmissionEvents: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPurchaseOrderVendors: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReturnableLines: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReturns: { anyOf: ['order:return:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  openRegisterSession: { anyOf: ['order:session:open'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  processReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  quoteCart: { anyOf: ['order:order:quote'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordCashMovement: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordCashTender: { anyOf: ['order:order:checkout'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectPriceOverride: { anyOf: ['order:price_override:reject'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectReturn: { anyOf: ['order:return:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeCartItem: { anyOf: ['order:line:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reopenPurchaseOrderLine: { anyOf: ['order:purchase_order:reopen'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reopenQuote: { anyOf: ['order:order:quote'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestCashMovementApproval: { anyOf: ['order:session:cash_movement'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  retryOrderCancellation: { anyOf: ['order:order:cancel'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  retryReturn: { anyOf: ['order:return:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revisePurchaseOrder: { anyOf: ['order:purchase_order:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchPriceOverrides: { anyOf: ['order:price_override:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setCartCustomer: { anyOf: ['order:order:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  summarizePurchaseOrders: { anyOf: ['order:purchase_order:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  transmitPurchaseOrder: { anyOf: ['order:purchase_order:transmit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCartItemQuantity: { anyOf: ['order:line:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateSessionPolicy: { anyOf: ['order:session_policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  voidOrder: { anyOf: ['order:order:void'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly OrderOperationId[] = [];
