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
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<AccountingOperationId, OperationRequirement>>> = {
  acceptReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  activateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], authenticated: false },
  addReconciliationAdjustment: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  allocateApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  applyCustomerCredit: { anyOf: ['accounting:customer-credit:apply'], allOf: [], authenticated: false },
  applyPayment: { anyOf: ['accounting:payment:apply'], allOf: [], authenticated: false },
  approveVendorBill: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], authenticated: false },
  archiveGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], authenticated: false },
  archivePostingRuleSet: { anyOf: ['accounting:posting_rules:archive'], allOf: [], authenticated: false },
  attachBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  autoMatchReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  cancelReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  changeBillIntakeEmailAddress: { anyOf: ['accounting:bill_intake:manage'], allOf: [], authenticated: false },
  changeRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], authenticated: false },
  changeTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], authenticated: false },
  clearReconciliationOutstandingItemInGap: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  closeAccountingPeriod: { anyOf: ['accounting:period:close'], allOf: [], authenticated: false },
  commitBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  confirmBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  confirmVendorRemitTo: { anyOf: ['accounting:ap:approve'], allOf: [], authenticated: false },
  createBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  createBankStatement: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  createCreditMemo: { anyOf: ['accounting:credit-memo:create'], allOf: [], authenticated: false },
  createDefaultMapping: { anyOf: ['accounting:default-mapping:create'], allOf: [], authenticated: false },
  createGLAccount: { anyOf: ['accounting:coa:create'], allOf: [], authenticated: false },
  createGLMapping: { anyOf: ['accounting:gl-mapping:create'], allOf: [], authenticated: false },
  createJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], authenticated: false },
  createMappingKey: { anyOf: ['accounting:mapping-key:create'], allOf: [], authenticated: false },
  createPettyExpenseCategory: { anyOf: [], allOf: ['accounting:gl-mapping:create', 'accounting:mapping-key:create'], authenticated: false },
  createPostingCategory: { anyOf: ['accounting:posting-category:create'], allOf: [], authenticated: false },
  createPostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], authenticated: false },
  createReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  createReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  createVendorBillFromGoodsReceived: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  creditPaymentRemainder: { anyOf: ['accounting:payment:apply'], allOf: [], authenticated: false },
  deactivateDefaultMapping: { anyOf: ['accounting:default-mapping:delete'], allOf: [], authenticated: false },
  deactivateGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], authenticated: false },
  deactivateMappingKey: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], authenticated: false },
  deactivatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], authenticated: false },
  deactivatePostingCategory: { anyOf: ['accounting:posting-category:deactivate'], allOf: [], authenticated: false },
  deleteBillSourceFile: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], authenticated: false },
  discardBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  discardBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  discardVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  downloadBankImportFile: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  downloadBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  downloadReportExport: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  drilldownToAccounts: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  drilldownToJournalLines: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  enableRetreadPlantAddOn: { anyOf: ['accounting:coa:create'], allOf: [], authenticated: false },
  establishBankOpeningBalance: { anyOf: [], allOf: ['accounting:je:create', 'accounting:je:post'], authenticated: false },
  establishGoLiveRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], authenticated: false },
  excludeBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  executeApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  finalizeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  freezeTaxLiabilitySnapshot: { anyOf: ['accounting:tax-snapshot:freeze'], allOf: [], authenticated: false },
  generateAgedPayables: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateAgedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateBalanceSheet: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateGeneralLedger: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateIncomeStatement: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateLaborOverheadReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateTaxLiabilityReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  generateTrialBalance: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getAccountingBillingRules: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getAccountingEvent: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAccountingHardLockDate: { anyOf: ['accounting:period:view'], allOf: [], authenticated: false },
  getAccountingPeriodCloseReadiness: { anyOf: ['accounting:period:view'], allOf: [], authenticated: false },
  getAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  getApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], authenticated: false },
  getApPayment: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getApPaymentByRef: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getAuditTrailByActor: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAuditTrailByDateRange: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAuditTrailByInvoice: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAuditTrailByOrder: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAuditTrailByOrder1: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getAuditTrailByType: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], authenticated: false },
  getBankImport: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getBankReconciliationPolicy: { anyOf: ['accounting:period:view'], allOf: [], authenticated: false },
  getBankStatement: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getBankTransaction: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getBillIntakeCounts: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], authenticated: false },
  getCashOutlook: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getCashPosition: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  getCollectionsAnalytics: { anyOf: ['accounting:analytics:view'], allOf: [], authenticated: false },
  getCreditMemo: { anyOf: ['accounting:credit-memo:read'], allOf: [], authenticated: false },
  getCustomerCredit: { anyOf: ['accounting:customer-credit:view'], allOf: [], authenticated: false },
  getDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], authenticated: false },
  getEventContract: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getEventProcessingLog: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getEventReprocessingHistory: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  getExportStatus: { anyOf: ['accounting:export:view'], allOf: [], authenticated: false },
  getGLAccount: { anyOf: ['accounting:coa:view'], allOf: [], authenticated: false },
  getGLAccountBalance: { anyOf: ['accounting:coa:view'], allOf: [], authenticated: false },
  getInputTaxRecovery: { anyOf: ['accounting:mapping-key:view'], allOf: [], authenticated: false },
  getInvoiceStatus: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getJournalEntry: { anyOf: ['accounting:je:view'], allOf: [], authenticated: false },
  getJournalEntryTraceability: { anyOf: ['accounting:je:view'], allOf: [], authenticated: false },
  getMappingKey: { anyOf: ['accounting:mapping-key:view'], allOf: [], authenticated: false },
  getMonthEndPacketReadiness: { anyOf: ['accounting:report:export'], allOf: [], authenticated: false },
  getPaymentLagCohorts: { anyOf: ['accounting:analytics:view'], allOf: [], authenticated: false },
  getPostingCategory: { anyOf: ['accounting:posting-category:view'], allOf: [], authenticated: false },
  getPostingRuleSet: { anyOf: ['accounting:posting_rules:view'], allOf: [], authenticated: false },
  getReconciliation: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getReconciliationAudit: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getReconciliationReport: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getReconciliationReview: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  getReportExportStatus: { anyOf: ['accounting:report:export'], allOf: [], authenticated: false },
  getTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getTenantTemplateStatus: { anyOf: ['accounting:coa:view'], allOf: [], authenticated: false },
  getUnappliedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getUnpaidWalkInSales: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  getVendorBillById: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getVendorBillByOriginEventId: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getVendorBillStageCounts: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getVendorById: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  getVendorSpend: { anyOf: ['accounting:analytics:view'], allOf: [], authenticated: false },
  getVendorStatement: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  importBillSpreadsheet: { anyOf: ['accounting:bill_intake:manage'], allOf: ['accounting:bill_intake:create'], authenticated: false },
  listAccountingEventStatuses: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  listAccountingEventTypes: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  listAccountingEvents: { anyOf: ['accounting:events:view'], allOf: [], authenticated: false },
  listAccountingPeriods: { anyOf: ['accounting:period:view'], allOf: [], authenticated: false },
  listApBills: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listApPayFromAccounts: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  listApPaymentsInFlight: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listAutomaticPaymentApplications: { anyOf: ['accounting:payment:apply'], allOf: [], authenticated: false },
  listAutomaticWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:payment:apply', 'accounting:payment:reverse', 'accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBankAccounts: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBankImportRows: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBankImports: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBankStatements: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBankTransactions: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listBillIntakeEmails: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listBillIntakeMappingTemplates: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listBillIntakeMatchSuggestions: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listCreditMemos: { anyOf: ['accounting:credit-memo:read'], allOf: [], authenticated: false },
  listCustomerCredits: { anyOf: ['accounting:customer-credit:view'], allOf: [], authenticated: false },
  listCustomerOpenInvoices: { anyOf: ['accounting:payment:apply'], allOf: [], authenticated: false },
  listDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], authenticated: false },
  listExportHistory: { anyOf: ['accounting:export:view'], allOf: [], authenticated: false },
  listGLAccounts: { anyOf: ['accounting:coa:view'], allOf: [], authenticated: false },
  listGlobalDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], authenticated: false },
  listInformationReturnForms: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listJournalEntries: { anyOf: ['accounting:je:view'], allOf: [], authenticated: false },
  listMappingKeysByCategory: { anyOf: ['accounting:mapping-key:view'], allOf: [], authenticated: false },
  listPaymentApplications: { anyOf: ['accounting:analytics:view'], allOf: [], authenticated: false },
  listPettyExpenseCategories: { anyOf: ['accounting:mapping-key:view'], allOf: [], authenticated: false },
  listPostingCategories: { anyOf: ['accounting:posting-category:view'], allOf: [], authenticated: false },
  listPostingRuleSets: { anyOf: ['accounting:posting_rules:view'], allOf: [], authenticated: false },
  listPostingRuleVersions: { anyOf: ['accounting:posting_rules:view'], allOf: [], authenticated: false },
  listReconciliationAdjustmentTypes: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listReconciliationCandidates: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listReconciliations: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listReportExports: { anyOf: ['accounting:report:export'], allOf: [], authenticated: false },
  listSettlementLines: { anyOf: ['accounting:reconciliation:view'], allOf: [], authenticated: false },
  listTaxLiabilitySnapshots: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  listTaxRegimes: { anyOf: ['accounting:tax_registration:view'], allOf: [], authenticated: false },
  listTaxRegistrations: { anyOf: ['accounting:tax_registration:view'], allOf: [], authenticated: false },
  listUnappliedPayments: { anyOf: ['accounting:payment:apply'], allOf: [], authenticated: false },
  listUndepositedSessions: { anyOf: ['accounting:deposit:create'], allOf: [], authenticated: false },
  listVendorBillExpenseCategories: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listVendorBillMatchCandidates: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listVendorBills: { anyOf: ['accounting:analytics:view'], allOf: [], authenticated: false },
  listVendorBillsByStage: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listVendorStatements: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  listWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:pay', 'accounting:ap:view', 'accounting:deposit:create', 'accounting:je:post', 'accounting:payment:apply', 'accounting:reconciliation:adjust', 'accounting:reconciliation:approve', 'reporting:view:financial-statements'], allOf: [], authenticated: false },
  mapBillIntakeColumns: { anyOf: ['accounting:bill_intake:manage'], allOf: ['accounting:bill_intake:create'], authenticated: false },
  matchSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  matchVendorInvoice: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  postJournalEntry: { anyOf: ['accounting:je:post'], allOf: [], authenticated: false },
  previewBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  publishPostingRuleSet: { anyOf: ['accounting:posting_rules:publish'], allOf: [], authenticated: false },
  reaffirmReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  reconcileApPaymentGateway: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  reconcileInvoiceRevenue: { anyOf: ['accounting:gl:reconcile'], allOf: [], authenticated: false },
  reconcileVendorStatement: { anyOf: ['accounting:vendor_statement:reconcile'], allOf: [], authenticated: false },
  recordApPaymentReturn: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  recordBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], authenticated: false },
  recordCancellationAudit: { anyOf: ['accounting:events:submit'], allOf: [], authenticated: false },
  recordPriceOverrideAudit: { anyOf: ['accounting:events:submit'], allOf: [], authenticated: false },
  recordRefundAudit: { anyOf: ['accounting:events:submit'], allOf: [], authenticated: false },
  recordTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], authenticated: false },
  refundCustomerCredit: { anyOf: ['accounting:customer-credit:refund'], allOf: [], authenticated: false },
  regenerateInvoiceFromWorkorder: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  registerReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  rejectReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  rejectVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], authenticated: false },
  releaseReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  relocateRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], authenticated: false },
  remapPettyExpenseCategory: { anyOf: ['accounting:gl-mapping:create'], allOf: [], authenticated: false },
  reopenAccountingPeriod: { anyOf: ['accounting:period:reopen'], allOf: [], authenticated: false },
  replayCustomerBalanceFacts: { anyOf: ['accounting:events:reprocess'], allOf: [], authenticated: false },
  reprocessSuspendedEvent: { anyOf: ['accounting:events:reprocess'], allOf: [], authenticated: false },
  requestExport: { anyOf: ['accounting:export:request'], allOf: [], authenticated: false },
  requestReportExport: { anyOf: ['accounting:report:export'], allOf: [], authenticated: false },
  resolveDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], authenticated: false },
  resolveGLMapping: { anyOf: ['accounting:gl-mapping:resolve'], allOf: [], authenticated: false },
  resolveTestMapping: { anyOf: ['accounting:posting_rules:view'], allOf: [], authenticated: false },
  resolveVendorBillMatchException: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:reject'], allOf: [], authenticated: false },
  restoreBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  retryAccountingEvent: { anyOf: ['accounting:events:retry'], allOf: [], authenticated: false },
  retryApPaymentGlPosting: { anyOf: ['accounting:je:post'], allOf: [], authenticated: false },
  retryBillIntakeExtraction: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  returnReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  reverseBankDeposit: { anyOf: ['accounting:deposit:reverse'], allOf: [], authenticated: false },
  reverseJournalEntry: { anyOf: ['accounting:je:reverse'], allOf: [], authenticated: false },
  reversePayment: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  reversePaymentApplication: { anyOf: ['accounting:payment:reverse'], allOf: [], authenticated: false },
  reverseReconciliationAdjustment: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  reviewBankTransactionDuplicate: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  reviewBankTransactionDuplicates: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  searchDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], authenticated: false },
  searchVendors: { anyOf: ['accounting:ap:view'], allOf: [], authenticated: false },
  selectVendorBillMatchCandidate: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], authenticated: false },
  setAccountingHardLockDate: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  setAccountingTimeZone: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  setAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  setApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], authenticated: false },
  setBankAccountProfile: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  setBankImportMapping: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  setBankReconciliationPolicy: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  setBillSourceFileLegalHold: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], authenticated: false },
  setCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], authenticated: false },
  setPettyExpenseCategoryTaxRecovery: { anyOf: ['accounting:mapping-key:edit'], allOf: [], authenticated: false },
  setVendorApSettings: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], authenticated: false },
  setVendorBillDueDate: { anyOf: ['accounting:ap:approve'], allOf: [], authenticated: false },
  settleVendorBillReceipt: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], authenticated: false },
  submitAccountingEvent: { anyOf: ['accounting:events:submit'], allOf: [], authenticated: false },
  submitReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  submitVendorBillForApproval: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], authenticated: false },
  supersedeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], authenticated: false },
  unmatchReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  updateBankImportRow: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
  updateBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  updateBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], authenticated: false },
  updateDefaultMapping: { anyOf: ['accounting:default-mapping:edit'], allOf: [], authenticated: false },
  updateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], authenticated: false },
  updateJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], authenticated: false },
  updateMappingKey: { anyOf: ['accounting:mapping-key:edit'], allOf: [], authenticated: false },
  updatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:edit'], allOf: [], authenticated: false },
  updatePostingCategory: { anyOf: ['accounting:posting-category:edit'], allOf: [], authenticated: false },
  updatePostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], authenticated: false },
  updateVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  uploadBillDocuments: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  uploadVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], authenticated: false },
  verifyTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], authenticated: false },
  voidCreditMemo: { anyOf: ['accounting:credit-memo:void'], allOf: [], authenticated: false },
  voidPaymentApplication: { anyOf: ['accounting:ap:pay'], allOf: [], authenticated: false },
  voidVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], authenticated: false },
  writeOffSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly AccountingOperationId[] = [];
