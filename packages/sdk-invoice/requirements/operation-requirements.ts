// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-invoice/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<InvoiceOperationId, OperationRequirement>>> = {
  applyInvoiceAdjustment: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  attachInvoiceEvidence: { anyOf: ['invoice:attachment:create'], allOf: [], conditional: [], authenticated: false },
  cancelInvoice: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  cancelPayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  capturePayment: { anyOf: ['invoice:payment:capture'], allOf: [], conditional: [], authenticated: false },
  createArtifactDownloadToken: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  createDepositCredit: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  createInvoice: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  createInvoiceFromOrder: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  createPaymentConnectionToken: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  createPaymentLink: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  createStandaloneInvoiceRefund: { anyOf: ['invoice:refund:issue_manual'], allOf: [], conditional: [], authenticated: false },
  createStandalonePartyRefund: { anyOf: ['invoice:refund:issue_manual'], allOf: [], conditional: [], authenticated: false },
  elevateManagerApproval: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false },
  finalizeInvoice: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false },
  generateReceipt: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false },
  getBillingRules: { anyOf: ['invoice:billing-rules'], allOf: [], conditional: [], authenticated: false },
  getDepositCredit: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  getInvoice: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  getInvoiceByWorkorder: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  getInvoicePayment: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  getInvoicingLag: { anyOf: ['invoice:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getReceipt: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  getRevenueByCustomer: { anyOf: ['invoice:analytics:view'], allOf: [], conditional: [], authenticated: false },
  initiatePayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  listAvailablePaymentReaders: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  listDepositCreditsBySource: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  listInvoiceArtifacts: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  listInvoiceAttachments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  listInvoicePayments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  listInvoiceRefunds: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  listMerchantAccounts: { anyOf: ['invoice:merchant_account:manage'], allOf: [], conditional: [], authenticated: false },
  listPaymentReaders: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false },
  listRecentInvoiceAttachments: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  recordCashPayment: { anyOf: ['invoice:payment:process'], allOf: [], conditional: [], authenticated: false },
  recordReceiptEmailDelivery: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false },
  recordReceiptPrintDelivery: { anyOf: ['invoice:receipt:generate'], allOf: [], conditional: [], authenticated: false },
  refundDepositCredit: { anyOf: ['invoice:manage'], allOf: [], conditional: [], authenticated: false },
  refundPayment: { anyOf: ['invoice:payment:refund'], allOf: [], conditional: [], authenticated: false },
  registerPaymentReader: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false },
  removeInvoiceAttachment: { anyOf: ['invoice:attachment:create'], allOf: [], conditional: [], authenticated: false },
  reprintReceipt: { anyOf: [], allOf: [], conditional: [], authenticated: true },
  retirePaymentReader: { anyOf: ['invoice:payment_reader:manage'], allOf: [], conditional: [], authenticated: false },
  revertInvoice: { anyOf: ['invoice:finalize'], allOf: [], conditional: [], authenticated: false },
  searchInvoiceLines: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  searchInvoices: { anyOf: ['invoice:invoice:view'], allOf: [], conditional: [], authenticated: false },
  sendInvoice: { anyOf: ['invoice:invoice:send'], allOf: [], conditional: [], authenticated: false },
  startMerchantOnboarding: { anyOf: ['invoice:merchant_account:manage'], allOf: [], conditional: [], authenticated: false },
  upsertBillingRules: { anyOf: ['invoice:billing-rules'], allOf: [], conditional: [], authenticated: false },
  voidPayment: { anyOf: ['invoice:payment:void'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly InvoiceOperationId[] = [
  'downloadInvoiceArtifact',
  'viewInvoiceLink',
];
