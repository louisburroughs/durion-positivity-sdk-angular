// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-accounting/openapi.yaml.

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

/** Every operation of @durion-sdk/accounting, by the name of its generated service method. */
export type AccountingOperationId =
  | 'acceptReconciliationMatch'
  | 'activateGLAccount'
  | 'addReconciliationAdjustment'
  | 'allocateApPayment'
  | 'applyCustomerCredit'
  | 'applyPayment'
  | 'approveVendorBill'
  | 'archiveGLAccount'
  | 'archivePostingRuleSet'
  | 'attachBillIntake'
  | 'autoMatchReconciliation'
  | 'cancelReconciliation'
  | 'changeBillIntakeEmailAddress'
  | 'changeRegisterFloat'
  | 'changeTaxRegistration'
  | 'clearReconciliationOutstandingItemInGap'
  | 'closeAccountingPeriod'
  | 'commitBankImport'
  | 'confirmBillIntake'
  | 'confirmVendorRemitTo'
  | 'createBankImport'
  | 'createBankStatement'
  | 'createCreditMemo'
  | 'createDefaultMapping'
  | 'createGLAccount'
  | 'createGLMapping'
  | 'createJournalEntry'
  | 'createMappingKey'
  | 'createPettyExpenseCategory'
  | 'createPostingCategory'
  | 'createPostingRuleSet'
  | 'createReconciliation'
  | 'createReconciliationMatch'
  | 'createVendorBillFromGoodsReceived'
  | 'creditPaymentRemainder'
  | 'deactivateDefaultMapping'
  | 'deactivateGLAccount'
  | 'deactivateMappingKey'
  | 'deactivatePettyExpenseCategory'
  | 'deactivatePostingCategory'
  | 'deleteBillSourceFile'
  | 'discardBankImport'
  | 'discardBillIntake'
  | 'discardVendorStatement'
  | 'downloadBankImportFile'
  | 'downloadBillSourceFile'
  | 'downloadReportExport'
  | 'drilldownToAccounts'
  | 'drilldownToJournalLines'
  | 'enableRetreadPlantAddOn'
  | 'establishBankOpeningBalance'
  | 'establishGoLiveRegisterFloat'
  | 'excludeBankTransaction'
  | 'executeApPayment'
  | 'finalizeReconciliation'
  | 'freezeTaxLiabilitySnapshot'
  | 'generateAgedPayables'
  | 'generateAgedReceivables'
  | 'generateBalanceSheet'
  | 'generateGeneralLedger'
  | 'generateIncomeStatement'
  | 'generateLaborOverheadReport'
  | 'generateTaxLiabilityReport'
  | 'generateTrialBalance'
  | 'getAccountingBillingRules'
  | 'getAccountingEvent'
  | 'getAccountingHardLockDate'
  | 'getAccountingPeriodCloseReadiness'
  | 'getAgedThresholds'
  | 'getApApprovalPolicy'
  | 'getApPayment'
  | 'getApPaymentByRef'
  | 'getAuditTrailByActor'
  | 'getAuditTrailByDateRange'
  | 'getAuditTrailByInvoice'
  | 'getAuditTrailByOrder'
  | 'getAuditTrailByOrder1'
  | 'getAuditTrailByType'
  | 'getBankDeposit'
  | 'getBankImport'
  | 'getBankReconciliationPolicy'
  | 'getBankStatement'
  | 'getBankTransaction'
  | 'getBillIntake'
  | 'getBillIntakeCounts'
  | 'getBillIntakeSettings'
  | 'getCashOutlook'
  | 'getCashPosition'
  | 'getCashSafetyCushion'
  | 'getCollectionsAnalytics'
  | 'getCreditMemo'
  | 'getCustomerCredit'
  | 'getDefaultMapping'
  | 'getEventContract'
  | 'getEventProcessingLog'
  | 'getEventReprocessingHistory'
  | 'getExportStatus'
  | 'getGLAccount'
  | 'getGLAccountBalance'
  | 'getInputTaxRecovery'
  | 'getInvoiceStatus'
  | 'getJournalEntry'
  | 'getJournalEntryTraceability'
  | 'getMappingKey'
  | 'getMonthEndPacketReadiness'
  | 'getPaymentLagCohorts'
  | 'getPostingCategory'
  | 'getPostingRuleSet'
  | 'getReconciliation'
  | 'getReconciliationAudit'
  | 'getReconciliationReport'
  | 'getReconciliationReview'
  | 'getReportExportStatus'
  | 'getTaxLiabilitySnapshot'
  | 'getTenantTemplateStatus'
  | 'getUnappliedReceivables'
  | 'getUnpaidWalkInSales'
  | 'getVendorBillById'
  | 'getVendorBillByOriginEventId'
  | 'getVendorBillStageCounts'
  | 'getVendorById'
  | 'getVendorSpend'
  | 'getVendorStatement'
  | 'importBillSpreadsheet'
  | 'listAccountingEventStatuses'
  | 'listAccountingEventTypes'
  | 'listAccountingEvents'
  | 'listAccountingPeriods'
  | 'listApBills'
  | 'listApPayFromAccounts'
  | 'listApPaymentsInFlight'
  | 'listAutomaticPaymentApplications'
  | 'listAutomaticWorkItems'
  | 'listBankAccounts'
  | 'listBankImportRows'
  | 'listBankImports'
  | 'listBankStatements'
  | 'listBankTransactions'
  | 'listBillIntake'
  | 'listBillIntakeEmails'
  | 'listBillIntakeMappingTemplates'
  | 'listBillIntakeMatchSuggestions'
  | 'listCreditMemos'
  | 'listCustomerCredits'
  | 'listCustomerOpenInvoices'
  | 'listDefaultMappings'
  | 'listExportHistory'
  | 'listGLAccounts'
  | 'listGlobalDefaultMappings'
  | 'listInformationReturnForms'
  | 'listJournalEntries'
  | 'listMappingKeysByCategory'
  | 'listPaymentApplications'
  | 'listPettyExpenseCategories'
  | 'listPostingCategories'
  | 'listPostingRuleSets'
  | 'listPostingRuleVersions'
  | 'listReconciliationAdjustmentTypes'
  | 'listReconciliationCandidates'
  | 'listReconciliations'
  | 'listReportExports'
  | 'listSettlementLines'
  | 'listTaxLiabilitySnapshots'
  | 'listTaxRegimes'
  | 'listTaxRegistrations'
  | 'listUnappliedPayments'
  | 'listUndepositedSessions'
  | 'listVendorBillExpenseCategories'
  | 'listVendorBillMatchCandidates'
  | 'listVendorBills'
  | 'listVendorBillsByStage'
  | 'listVendorStatements'
  | 'listWorkItems'
  | 'mapBillIntakeColumns'
  | 'matchSettlementLine'
  | 'matchVendorInvoice'
  | 'postJournalEntry'
  | 'previewBillSourceFile'
  | 'publishPostingRuleSet'
  | 'reaffirmReconciliationOutstandingItem'
  | 'reconcileApPaymentGateway'
  | 'reconcileInvoiceRevenue'
  | 'reconcileVendorStatement'
  | 'recordApPaymentReturn'
  | 'recordBankDeposit'
  | 'recordCancellationAudit'
  | 'recordPriceOverrideAudit'
  | 'recordRefundAudit'
  | 'recordTaxRegistration'
  | 'refundCustomerCredit'
  | 'regenerateInvoiceFromWorkorder'
  | 'registerReconciliationOutstandingItem'
  | 'rejectReconciliationMatch'
  | 'rejectVendorBill'
  | 'releaseReconciliationOutstandingItem'
  | 'relocateRegisterFloat'
  | 'remapPettyExpenseCategory'
  | 'reopenAccountingPeriod'
  | 'replayCustomerBalanceFacts'
  | 'reprocessSuspendedEvent'
  | 'requestExport'
  | 'requestReportExport'
  | 'resolveDefaultMapping'
  | 'resolveGLMapping'
  | 'resolveTestMapping'
  | 'resolveVendorBillMatchException'
  | 'restoreBankTransaction'
  | 'retryAccountingEvent'
  | 'retryApPaymentGlPosting'
  | 'retryBillIntakeExtraction'
  | 'returnReconciliation'
  | 'reverseBankDeposit'
  | 'reverseJournalEntry'
  | 'reversePayment'
  | 'reversePaymentApplication'
  | 'reverseReconciliationAdjustment'
  | 'reviewBankTransactionDuplicate'
  | 'reviewBankTransactionDuplicates'
  | 'searchDefaultMappings'
  | 'searchVendors'
  | 'selectVendorBillMatchCandidate'
  | 'setAccountingHardLockDate'
  | 'setAccountingTimeZone'
  | 'setAgedThresholds'
  | 'setApApprovalPolicy'
  | 'setBankAccountProfile'
  | 'setBankImportMapping'
  | 'setBankReconciliationPolicy'
  | 'setBillSourceFileLegalHold'
  | 'setCashSafetyCushion'
  | 'setPettyExpenseCategoryTaxRecovery'
  | 'setVendorApSettings'
  | 'setVendorBillDueDate'
  | 'settleVendorBillReceipt'
  | 'submitAccountingEvent'
  | 'submitReconciliation'
  | 'submitVendorBillForApproval'
  | 'supersedeReconciliation'
  | 'unmatchReconciliationMatch'
  | 'updateBankImportRow'
  | 'updateBillIntake'
  | 'updateBillIntakeSettings'
  | 'updateDefaultMapping'
  | 'updateGLAccount'
  | 'updateJournalEntry'
  | 'updateMappingKey'
  | 'updatePettyExpenseCategory'
  | 'updatePostingCategory'
  | 'updatePostingRuleSet'
  | 'updateVendorStatement'
  | 'uploadBillDocuments'
  | 'uploadVendorStatement'
  | 'verifyTaxLiabilitySnapshot'
  | 'voidCreditMemo'
  | 'voidPaymentApplication'
  | 'voidVendorBill'
  | 'writeOffSettlementLine';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<AccountingOperationId, OperationRequirement>>> = {
  acceptReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  activateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], conditional: [], authenticated: false },
  addReconciliationAdjustment: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  allocateApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  applyCustomerCredit: { anyOf: ['accounting:customer-credit:apply'], allOf: [], conditional: [], authenticated: false },
  applyPayment: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false },
  approveVendorBill: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false },
  archiveGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], conditional: [], authenticated: false },
  archivePostingRuleSet: { anyOf: ['accounting:posting_rules:archive'], allOf: [], conditional: [], authenticated: false },
  attachBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  autoMatchReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  cancelReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  changeBillIntakeEmailAddress: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false },
  changeRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: [], authenticated: false },
  changeTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], conditional: [], authenticated: false },
  clearReconciliationOutstandingItemInGap: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  closeAccountingPeriod: { anyOf: ['accounting:period:close'], allOf: [], conditional: [], authenticated: false },
  commitBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  confirmBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  confirmVendorRemitTo: { anyOf: ['accounting:ap:approve'], allOf: [], conditional: [], authenticated: false },
  createBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  createBankStatement: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  createCreditMemo: { anyOf: ['accounting:credit-memo:create'], allOf: [], conditional: [], authenticated: false },
  createDefaultMapping: { anyOf: ['accounting:default-mapping:create'], allOf: [], conditional: [], authenticated: false },
  createGLAccount: { anyOf: ['accounting:coa:create'], allOf: [], conditional: [], authenticated: false },
  createGLMapping: { anyOf: ['accounting:gl-mapping:create'], allOf: [], conditional: [], authenticated: false },
  createJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], conditional: [], authenticated: false },
  createMappingKey: { anyOf: ['accounting:mapping-key:create'], allOf: [], conditional: [], authenticated: false },
  createPettyExpenseCategory: { anyOf: [], allOf: ['accounting:gl-mapping:create', 'accounting:mapping-key:create'], conditional: [], authenticated: false },
  createPostingCategory: { anyOf: ['accounting:posting-category:create'], allOf: [], conditional: [], authenticated: false },
  createPostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], conditional: [], authenticated: false },
  createReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  createReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  createVendorBillFromGoodsReceived: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  creditPaymentRemainder: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false },
  deactivateDefaultMapping: { anyOf: ['accounting:default-mapping:delete'], allOf: [], conditional: [], authenticated: false },
  deactivateGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], conditional: [], authenticated: false },
  deactivateMappingKey: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], conditional: [], authenticated: false },
  deactivatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], conditional: [], authenticated: false },
  deactivatePostingCategory: { anyOf: ['accounting:posting-category:deactivate'], allOf: [], conditional: [], authenticated: false },
  deleteBillSourceFile: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], conditional: [], authenticated: false },
  discardBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  discardBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  discardVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  downloadBankImportFile: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  downloadBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  downloadReportExport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  drilldownToAccounts: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  drilldownToJournalLines: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  enableRetreadPlantAddOn: { anyOf: ['accounting:coa:create'], allOf: [], conditional: [], authenticated: false },
  establishBankOpeningBalance: { anyOf: [], allOf: ['accounting:je:create', 'accounting:je:post'], conditional: [], authenticated: false },
  establishGoLiveRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: [], authenticated: false },
  excludeBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  executeApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  finalizeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  freezeTaxLiabilitySnapshot: { anyOf: ['accounting:tax-snapshot:freeze'], allOf: [], conditional: [], authenticated: false },
  generateAgedPayables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateAgedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateBalanceSheet: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateGeneralLedger: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateIncomeStatement: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateLaborOverheadReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateTaxLiabilityReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  generateTrialBalance: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getAccountingBillingRules: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getAccountingEvent: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAccountingHardLockDate: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false },
  getAccountingPeriodCloseReadiness: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false },
  getAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  getApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false },
  getApPayment: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getApPaymentByRef: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByActor: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByDateRange: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByInvoice: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByOrder: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByOrder1: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getAuditTrailByType: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: [], authenticated: false },
  getBankImport: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getBankReconciliationPolicy: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false },
  getBankStatement: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getBankTransaction: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getBillIntakeCounts: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false },
  getCashOutlook: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getCashPosition: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  getCollectionsAnalytics: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getCreditMemo: { anyOf: ['accounting:credit-memo:read'], allOf: [], conditional: [], authenticated: false },
  getCustomerCredit: { anyOf: ['accounting:customer-credit:view'], allOf: [], conditional: [], authenticated: false },
  getDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false },
  getEventContract: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getEventProcessingLog: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getEventReprocessingHistory: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  getExportStatus: { anyOf: ['accounting:export:view'], allOf: [], conditional: [], authenticated: false },
  getGLAccount: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false },
  getGLAccountBalance: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false },
  getInputTaxRecovery: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false },
  getInvoiceStatus: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getJournalEntry: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false },
  getJournalEntryTraceability: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false },
  getMappingKey: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false },
  getMonthEndPacketReadiness: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false },
  getPaymentLagCohorts: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getPostingCategory: { anyOf: ['accounting:posting-category:view'], allOf: [], conditional: [], authenticated: false },
  getPostingRuleSet: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false },
  getReconciliation: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getReconciliationAudit: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getReconciliationReport: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getReconciliationReview: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  getReportExportStatus: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false },
  getTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getTenantTemplateStatus: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false },
  getUnappliedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getUnpaidWalkInSales: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  getVendorBillById: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getVendorBillByOriginEventId: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getVendorBillStageCounts: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getVendorById: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  getVendorSpend: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false },
  getVendorStatement: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  importBillSpreadsheet: { anyOf: [], allOf: ['accounting:bill_intake:create'], conditional: ['accounting:bill_intake:manage'], authenticated: false },
  listAccountingEventStatuses: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  listAccountingEventTypes: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  listAccountingEvents: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false },
  listAccountingPeriods: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false },
  listApBills: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listApPayFromAccounts: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  listApPaymentsInFlight: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listAutomaticPaymentApplications: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false },
  listAutomaticWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:payment:apply', 'accounting:payment:reverse', 'accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBankAccounts: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBankImportRows: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBankImports: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBankStatements: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBankTransactions: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listBillIntakeEmails: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listBillIntakeMappingTemplates: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listBillIntakeMatchSuggestions: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listCreditMemos: { anyOf: ['accounting:credit-memo:read'], allOf: [], conditional: [], authenticated: false },
  listCustomerCredits: { anyOf: ['accounting:customer-credit:view'], allOf: [], conditional: [], authenticated: false },
  listCustomerOpenInvoices: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false },
  listDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false },
  listExportHistory: { anyOf: ['accounting:export:view'], allOf: [], conditional: [], authenticated: false },
  listGLAccounts: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false },
  listGlobalDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false },
  listInformationReturnForms: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listJournalEntries: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false },
  listMappingKeysByCategory: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false },
  listPaymentApplications: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false },
  listPettyExpenseCategories: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false },
  listPostingCategories: { anyOf: ['accounting:posting-category:view'], allOf: [], conditional: [], authenticated: false },
  listPostingRuleSets: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false },
  listPostingRuleVersions: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false },
  listReconciliationAdjustmentTypes: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listReconciliationCandidates: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listReconciliations: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listReportExports: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false },
  listSettlementLines: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false },
  listTaxLiabilitySnapshots: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  listTaxRegimes: { anyOf: ['accounting:tax_registration:view'], allOf: [], conditional: [], authenticated: false },
  listTaxRegistrations: { anyOf: ['accounting:tax_registration:view'], allOf: [], conditional: [], authenticated: false },
  listUnappliedPayments: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false },
  listUndepositedSessions: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: [], authenticated: false },
  listVendorBillExpenseCategories: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listVendorBillMatchCandidates: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listVendorBills: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false },
  listVendorBillsByStage: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listVendorStatements: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  listWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:pay', 'accounting:ap:view', 'accounting:deposit:create', 'accounting:je:post', 'accounting:payment:apply', 'accounting:reconciliation:adjust', 'accounting:reconciliation:approve', 'reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  mapBillIntakeColumns: { anyOf: [], allOf: ['accounting:bill_intake:create'], conditional: ['accounting:bill_intake:manage'], authenticated: false },
  matchSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  matchVendorInvoice: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  postJournalEntry: { anyOf: ['accounting:je:post'], allOf: [], conditional: [], authenticated: false },
  previewBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  publishPostingRuleSet: { anyOf: ['accounting:posting_rules:publish'], allOf: [], conditional: [], authenticated: false },
  reaffirmReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  reconcileApPaymentGateway: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  reconcileInvoiceRevenue: { anyOf: ['accounting:gl:reconcile'], allOf: [], conditional: [], authenticated: false },
  reconcileVendorStatement: { anyOf: ['accounting:vendor_statement:reconcile'], allOf: [], conditional: [], authenticated: false },
  recordApPaymentReturn: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  recordBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: [], authenticated: false },
  recordCancellationAudit: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false },
  recordPriceOverrideAudit: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false },
  recordRefundAudit: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false },
  recordTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], conditional: [], authenticated: false },
  refundCustomerCredit: { anyOf: ['accounting:customer-credit:refund'], allOf: [], conditional: [], authenticated: false },
  regenerateInvoiceFromWorkorder: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  registerReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  rejectReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  rejectVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], conditional: [], authenticated: false },
  releaseReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  relocateRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: [], authenticated: false },
  remapPettyExpenseCategory: { anyOf: ['accounting:gl-mapping:create'], allOf: [], conditional: [], authenticated: false },
  reopenAccountingPeriod: { anyOf: ['accounting:period:reopen'], allOf: [], conditional: [], authenticated: false },
  replayCustomerBalanceFacts: { anyOf: ['accounting:events:reprocess'], allOf: [], conditional: [], authenticated: false },
  reprocessSuspendedEvent: { anyOf: ['accounting:events:reprocess'], allOf: [], conditional: [], authenticated: false },
  requestExport: { anyOf: ['accounting:export:request'], allOf: [], conditional: [], authenticated: false },
  requestReportExport: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false },
  resolveDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false },
  resolveGLMapping: { anyOf: ['accounting:gl-mapping:resolve'], allOf: [], conditional: [], authenticated: false },
  resolveTestMapping: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false },
  resolveVendorBillMatchException: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:reject'], allOf: [], conditional: [], authenticated: false },
  restoreBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  retryAccountingEvent: { anyOf: ['accounting:events:retry'], allOf: [], conditional: [], authenticated: false },
  retryApPaymentGlPosting: { anyOf: ['accounting:je:post'], allOf: [], conditional: [], authenticated: false },
  retryBillIntakeExtraction: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  returnReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  reverseBankDeposit: { anyOf: ['accounting:deposit:reverse'], allOf: [], conditional: [], authenticated: false },
  reverseJournalEntry: { anyOf: ['accounting:je:reverse'], allOf: [], conditional: [], authenticated: false },
  reversePayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  reversePaymentApplication: { anyOf: ['accounting:payment:reverse'], allOf: [], conditional: [], authenticated: false },
  reverseReconciliationAdjustment: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  reviewBankTransactionDuplicate: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  reviewBankTransactionDuplicates: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  searchDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false },
  searchVendors: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false },
  selectVendorBillMatchCandidate: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false },
  setAccountingHardLockDate: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  setAccountingTimeZone: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  setAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  setApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false },
  setBankAccountProfile: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  setBankImportMapping: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  setBankReconciliationPolicy: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  setBillSourceFileLegalHold: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], conditional: [], authenticated: false },
  setCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false },
  setPettyExpenseCategoryTaxRecovery: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false },
  setVendorApSettings: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false },
  setVendorBillDueDate: { anyOf: ['accounting:ap:approve'], allOf: [], conditional: [], authenticated: false },
  settleVendorBillReceipt: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false },
  submitAccountingEvent: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false },
  submitReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  submitVendorBillForApproval: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false },
  supersedeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false },
  unmatchReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  updateBankImportRow: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
  updateBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  updateBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false },
  updateDefaultMapping: { anyOf: ['accounting:default-mapping:edit'], allOf: [], conditional: [], authenticated: false },
  updateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], conditional: [], authenticated: false },
  updateJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], conditional: [], authenticated: false },
  updateMappingKey: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false },
  updatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false },
  updatePostingCategory: { anyOf: ['accounting:posting-category:edit'], allOf: [], conditional: [], authenticated: false },
  updatePostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], conditional: [], authenticated: false },
  updateVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  uploadBillDocuments: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  uploadVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false },
  verifyTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false },
  voidCreditMemo: { anyOf: ['accounting:credit-memo:void'], allOf: [], conditional: [], authenticated: false },
  voidPaymentApplication: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false },
  voidVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], conditional: [], authenticated: false },
  writeOffSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly AccountingOperationId[] = [];
