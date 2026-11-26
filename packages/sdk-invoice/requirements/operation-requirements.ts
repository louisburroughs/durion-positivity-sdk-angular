// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-invoice/openapi.yaml.

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

/** Every operation of @durion-sdk/invoice, by the name of its generated service method. */
export type InvoiceOperationId =
  | 'applyInvoiceAdjustment'
  | 'attachInvoiceEvidence'
  | 'cancelInvoice'
  | 'cancelPayment'
  | 'capturePayment'
  | 'createArtifactDownloadToken'
  | 'createDepositCredit'
  | 'createInvoice'
  | 'createInvoiceFromOrder'
  | 'createPaymentConnectionToken'
  | 'createPaymentLink'
  | 'createStandaloneInvoiceRefund'
  | 'createStandalonePartyRefund'
  | 'downloadInvoiceArtifact'
  | 'elevateManagerApproval'
  | 'finalizeInvoice'
  | 'generateReceipt'
  | 'getBillingRules'
  | 'getDepositCredit'
  | 'getInvoice'
  | 'getInvoiceByWorkorder'
  | 'getInvoicePayment'
  | 'getInvoicingLag'
  | 'getReceipt'
  | 'getRevenueByCustomer'
  | 'initiatePayment'
  | 'listAvailablePaymentReaders'
  | 'listDepositCreditsBySource'
  | 'listInvoiceArtifacts'
  | 'listInvoiceAttachments'
  | 'listInvoicePayments'
  | 'listInvoiceRefunds'
  | 'listMerchantAccounts'
  | 'listPaymentReaders'
  | 'listRecentInvoiceAttachments'
  | 'recordCashPayment'
  | 'recordReceiptEmailDelivery'
  | 'recordReceiptPrintDelivery'
  | 'refundDepositCredit'
  | 'refundPayment'
  | 'registerPaymentReader'
  | 'removeInvoiceAttachment'
  | 'reprintReceipt'
  | 'retirePaymentReader'
  | 'revertInvoice'
  | 'searchInvoiceLines'
  | 'searchInvoices'
  | 'sendInvoice'
  | 'startMerchantOnboarding'
  | 'upsertBillingRules'
  | 'viewInvoiceLink'
  | 'voidPayment';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InvoiceOperationId, OperationRequirement>>> = {
  applyInvoiceAdjustment: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  attachInvoiceEvidence: { anyOf: ['invoice:attachment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelInvoice: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelPayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  capturePayment: { anyOf: ['invoice:payment:capture'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createArtifactDownloadToken: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  createDepositCredit: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createInvoice: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createInvoiceFromOrder: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPaymentConnectionToken: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPaymentLink: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createStandaloneInvoiceRefund: { anyOf: ['invoice:refund:issue_manual'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createStandalonePartyRefund: { anyOf: ['invoice:refund:issue_manual'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  elevateManagerApproval: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  finalizeInvoice: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateReceipt: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBillingRules: { anyOf: ['invoice:billing-rules'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getDepositCredit: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInvoice: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInvoiceByWorkorder: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInvoicePayment: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInvoicingLag: { anyOf: ['invoice:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReceipt: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getRevenueByCustomer: { anyOf: ['invoice:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  initiatePayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAvailablePaymentReaders: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listDepositCreditsBySource: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInvoiceArtifacts: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  listInvoiceAttachments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInvoicePayments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInvoiceRefunds: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMerchantAccounts: { anyOf: ['invoice:merchant_account:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPaymentReaders: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listRecentInvoiceAttachments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordCashPayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordReceiptEmailDelivery: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordReceiptPrintDelivery: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  refundDepositCredit: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  refundPayment: { anyOf: ['invoice:payment:refund'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  registerPaymentReader: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeInvoiceAttachment: { anyOf: ['invoice:attachment:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reprintReceipt: { anyOf: [], allOf: [], conditional: [], authenticated: true, conditions: {} },
  retirePaymentReader: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revertInvoice: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchInvoiceLines: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchInvoices: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  sendInvoice: { anyOf: ['invoice:invoice:send'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  startMerchantOnboarding: { anyOf: ['invoice:merchant_account:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertBillingRules: { anyOf: ['invoice:billing-rules'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  voidPayment: { anyOf: ['invoice:payment:void'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InvoiceOperationId[] = [
  'downloadInvoiceArtifact',
  'viewInvoiceLink',
];
