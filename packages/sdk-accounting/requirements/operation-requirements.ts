// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-accounting/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<AccountingOperationId, OperationRequirement>>> = {
  acceptReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  activateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addReconciliationAdjustment: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  allocateApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyCustomerCredit: { anyOf: ['accounting:customer-credit:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  applyPayment: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  approveVendorBill: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  archiveGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  archivePostingRuleSet: { anyOf: ['accounting:posting_rules:archive'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  attachBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  autoMatchReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  cancelReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  changeBillIntakeEmailAddress: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  changeRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  changeTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  clearReconciliationOutstandingItemInGap: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  closeAccountingPeriod: { anyOf: ['accounting:period:close'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closeException: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  commitBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  confirmVendorRemitTo: { anyOf: ['accounting:ap:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createBankStatement: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCreditMemo: { anyOf: ['accounting:credit-memo:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createDefaultMapping: { anyOf: ['accounting:default-mapping:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createGLAccount: { anyOf: ['accounting:coa:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createGLMapping: { anyOf: ['accounting:gl-mapping:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createMappingKey: { anyOf: ['accounting:mapping-key:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPettyExpenseCategory: { anyOf: [], allOf: ['accounting:gl-mapping:create', 'accounting:mapping-key:create'], conditional: [], authenticated: false, conditions: {} },
  createPostingCategory: { anyOf: ['accounting:posting-category:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVendorBillFromGoodsReceived: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  creditPaymentRemainder: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateDefaultMapping: { anyOf: ['accounting:default-mapping:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateGLAccount: { anyOf: ['accounting:coa:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivateMappingKey: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivatePostingCategory: { anyOf: ['accounting:posting-category:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteBillSourceFile: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  discardBankImport: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  discardBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  discardVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  downloadBankImportFile: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  downloadBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  downloadReportExport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  drilldownToAccounts: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  drilldownToJournalLines: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  enableRetreadPlantAddOn: { anyOf: ['accounting:coa:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  establishBankOpeningBalance: { anyOf: [], allOf: ['accounting:je:create', 'accounting:je:post'], conditional: [], authenticated: false, conditions: {} },
  establishGoLiveRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  excludeBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  executeApPayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  finalizeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  freezeTaxLiabilitySnapshot: { anyOf: ['accounting:tax-snapshot:freeze'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateAgedPayables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateAgedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateBalanceSheet: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateGeneralLedger: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateIncomeStatement: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateLaborOverheadReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateTaxLiabilityReport: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  generateTrialBalance: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountingBillingRules: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountingEvent: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountingHardLockDate: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountingPeriodCloseReadiness: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getApPayment: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getApPaymentByRef: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByActor: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByDateRange: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByInvoice: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByOrder: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByOrder1: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAuditTrailByType: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBankImport: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBankReconciliationPolicy: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBankStatement: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBankTransaction: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBillIntakeCounts: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCashOutlook: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCashPosition: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: { statementFigures: { code: 'accounting:reconciliation:view', kind: 'fields', fields: ['inTheBank.accounts[].statementClosingBalance', 'inTheBank.accounts[].statementEndDate', 'inTheBank.accounts[].reconciledThrough', 'inTheBank.accounts[].depositsInTransit', 'inTheBank.accounts[].outstandingChecks', 'inTheBank.accounts[].unmatchedBankLineCount'] } } },
  getCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCollectionsAnalytics: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCreditMemo: { anyOf: ['accounting:credit-memo:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCustomerCredit: { anyOf: ['accounting:customer-credit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEventContract: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEventProcessingLog: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getEventReprocessingHistory: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getExportStatus: { anyOf: ['accounting:export:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getGLAccount: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getGLAccountBalance: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInputTaxRecovery: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInvoiceStatus: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getJournalEntry: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getJournalEntryTraceability: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMappingKey: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMonthEndPacketReadiness: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPaymentLagCohorts: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPostingCategory: { anyOf: ['accounting:posting-category:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPostingRuleSet: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReconciliation: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReconciliationAudit: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReconciliationReport: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReconciliationReview: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getReportExportStatus: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTenantTemplateStatus: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUnappliedReceivables: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getUnpaidWalkInSales: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorBillById: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorBillByOriginEventId: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorBillStageCounts: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorById: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorSpend: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVendorStatement: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  importBillSpreadsheet: { anyOf: [], allOf: ['accounting:bill_intake:create'], conditional: ['accounting:bill_intake:manage'], authenticated: false, conditions: { saveMapping: { code: 'accounting:bill_intake:manage', kind: 'requiredWhen', fields: [] } } },
  listAccountingEventStatuses: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAccountingEventTypes: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAccountingEvents: { anyOf: ['accounting:events:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAccountingPeriods: { anyOf: ['accounting:period:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listApBills: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listApPayFromAccounts: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listApPaymentsInFlight: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAutomaticPaymentApplications: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAutomaticWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:payment:apply', 'accounting:payment:reverse', 'accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBankAccounts: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBankImportRows: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBankImports: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBankStatements: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBankTransactions: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBillIntake: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBillIntakeEmails: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBillIntakeMappingTemplates: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBillIntakeMatchSuggestions: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCreditMemos: { anyOf: ['accounting:credit-memo:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCustomerCredits: { anyOf: ['accounting:customer-credit:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCustomerOpenInvoices: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listExportHistory: { anyOf: ['accounting:export:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listGLAccounts: { anyOf: ['accounting:coa:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listGlobalDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInformationReturnForms: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listJournalEntries: { anyOf: ['accounting:je:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMappingKeysByCategory: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPaymentApplications: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPettyExpenseCategories: { anyOf: ['accounting:mapping-key:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPostingCategories: { anyOf: ['accounting:posting-category:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPostingRuleSets: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPostingRuleVersions: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReconciliationAdjustmentTypes: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReconciliationCandidates: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReconciliations: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listReportExports: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSettlementLines: { anyOf: ['accounting:reconciliation:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTaxLiabilitySnapshots: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTaxRegimes: { anyOf: ['accounting:tax_registration:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTaxRegistrations: { anyOf: ['accounting:tax_registration:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUnappliedPayments: { anyOf: ['accounting:payment:apply'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUndepositedSessions: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorBillExpenseCategories: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorBillMatchCandidates: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorBills: { anyOf: ['accounting:analytics:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorBillsByStage: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVendorStatements: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listWorkItems: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:pay', 'accounting:ap:view', 'accounting:deposit:create', 'accounting:je:post', 'accounting:payment:apply', 'accounting:reconciliation:adjust', 'accounting:reconciliation:approve', 'reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  mapBillIntakeColumns: { anyOf: [], allOf: ['accounting:bill_intake:create'], conditional: ['accounting:bill_intake:manage'], authenticated: false, conditions: { saveMapping: { code: 'accounting:bill_intake:manage', kind: 'requiredWhen', fields: [] } } },
  matchSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  matchVendorInvoice: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  postJournalEntry: { anyOf: ['accounting:je:post'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  previewBillSourceFile: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  publishPostingRuleSet: { anyOf: ['accounting:posting_rules:publish'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reaffirmReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcileApPaymentGateway: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcileInvoiceRevenue: { anyOf: ['accounting:gl:reconcile'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcileVendorStatement: { anyOf: ['accounting:vendor_statement:reconcile'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordApPaymentReturn: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  recordBankDeposit: { anyOf: ['accounting:deposit:create'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  recordCancellationAudit: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordPriceOverrideAudit: { anyOf: ['accounting:price_override:approve_tier_1', 'accounting:price_override:approve_tier_2', 'accounting:price_override:approve_tier_3'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordRefundAudit: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordTaxRegistration: { anyOf: ['accounting:tax_registration:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  refundCustomerCredit: { anyOf: ['accounting:customer-credit:refund'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  regenerateInvoiceFromWorkorder: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  registerReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rejectVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  releaseReconciliationOutstandingItem: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  relocateRegisterFloat: { anyOf: ['accounting:float:manage'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  remapPettyExpenseCategory: { anyOf: ['accounting:gl-mapping:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reopenAccountingPeriod: { anyOf: ['accounting:period:reopen'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayCustomerBalanceFacts: { anyOf: ['accounting:events:reprocess'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reprocessSuspendedEvent: { anyOf: ['accounting:events:reprocess'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestExport: { anyOf: ['accounting:export:request'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  requestReportExport: { anyOf: ['accounting:report:export'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveDefaultMapping: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveGLMapping: { anyOf: ['accounting:gl-mapping:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveTestMapping: { anyOf: ['accounting:posting_rules:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveVendorBillMatchException: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit', 'accounting:ap:reject'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  restoreBankTransaction: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  retryAccountingEvent: { anyOf: ['accounting:events:retry'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  retryApPaymentGlPosting: { anyOf: ['accounting:je:post'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  retryBillIntakeExtraction: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  returnReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reverseBankDeposit: { anyOf: ['accounting:deposit:reverse'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  reverseJournalEntry: { anyOf: ['accounting:je:reverse'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  reversePayment: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reversePaymentApplication: { anyOf: ['accounting:payment:reverse'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reverseReconciliationAdjustment: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  reviewBankTransactionDuplicate: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reviewBankTransactionDuplicates: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchDefaultMappings: { anyOf: ['accounting:default-mapping:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchVendors: { anyOf: ['accounting:ap:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  selectVendorBillMatchCandidate: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setAccountingHardLockDate: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setAccountingTimeZone: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setAgedThresholds: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setApApprovalPolicy: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setBankAccountProfile: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setBankImportMapping: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setBankReconciliationPolicy: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setBillSourceFileLegalHold: { anyOf: ['accounting:bill_source_file:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setCashSafetyCushion: { anyOf: ['accounting:period:hard_lock'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setPettyExpenseCategoryTaxRecovery: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setVendorApSettings: { anyOf: ['accounting:ap_approval_policy:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setVendorBillDueDate: { anyOf: ['accounting:ap:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  settleVendorBillReceipt: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  submitAccountingEvent: { anyOf: ['accounting:events:submit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitReconciliation: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  submitVendorBillForApproval: { anyOf: ['accounting:ap:approve', 'accounting:ap:approve_over_limit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  supersedeReconciliation: { anyOf: ['accounting:reconciliation:approve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  unmatchReconciliationMatch: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateBankImportRow: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateBillIntake: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateBillIntakeSettings: { anyOf: ['accounting:bill_intake:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateDefaultMapping: { anyOf: ['accounting:default-mapping:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateGLAccount: { anyOf: ['accounting:coa:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateJournalEntry: { anyOf: ['accounting:je:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateMappingKey: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePettyExpenseCategory: { anyOf: ['accounting:mapping-key:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePostingCategory: { anyOf: ['accounting:posting-category:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePostingRuleSet: { anyOf: ['accounting:posting_rules:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  uploadBillDocuments: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  uploadVendorStatement: { anyOf: ['accounting:bill_intake:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  verifyTaxLiabilitySnapshot: { anyOf: ['reporting:view:financial-statements'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  voidCreditMemo: { anyOf: ['accounting:credit-memo:void'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  voidPaymentApplication: { anyOf: ['accounting:ap:pay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  voidVendorBill: { anyOf: ['accounting:ap:reject'], allOf: [], conditional: ['accounting:period:override'], authenticated: false, conditions: { closedPeriod: { code: 'accounting:period:override', kind: 'requiredWhen', fields: [] } } },
  writeOffSettlementLine: { anyOf: ['accounting:reconciliation:adjust'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly AccountingOperationId[] = [];
