// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-customer/openapi.yaml.

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

/** Every operation of @durion-sdk/customer, by the name of its generated service method. */
export type CustomerOperationId =
  | 'activateServiceAgreement'
  | 'addSegmentMembers'
  | 'addSuppressionEntry'
  | 'assignFollowUpTask'
  | 'assignInquiry'
  | 'assignTagToParty'
  | 'browseParties'
  | 'bulkIngestCommercialAccounts'
  | 'bulkIngestCustomers'
  | 'captureInquiry'
  | 'checkAddressSuppression'
  | 'checkCustomerRequirementsMet'
  | 'checkPartyDuplicates'
  | 'checkVehicleContact'
  | 'completeFollowUpTask'
  | 'convertInquiry'
  | 'countDuplicateCandidates'
  | 'createCrmCommercialAccount'
  | 'createCrmPerson'
  | 'createCustomer'
  | 'createFollowUpTask'
  | 'createPartyRelationship'
  | 'createSegment'
  | 'createServiceAgreement'
  | 'createTag'
  | 'createVehicleForParty'
  | 'deactivatePartyRelationship'
  | 'deleteCustomer'
  | 'deleteSegment'
  | 'deleteTag'
  | 'designatePrimaryBillingContact'
  | 'dismissDuplicateCandidate'
  | 'dismissFollowUpTask'
  | 'getAccountCommunicationPreferences'
  | 'getAccountTier'
  | 'getCommercialAccountContacts'
  | 'getCommercialWatchList'
  | 'getCommunicationPreferences'
  | 'getConsentHistory'
  | 'getContactsWithRoles'
  | 'getCustomerById'
  | 'getCustomerInsightsOverview'
  | 'getCustomerSummary'
  | 'getFollowUpQueue'
  | 'getFollowUpTask'
  | 'getInquiry'
  | 'getMarketingConsent'
  | 'getParty'
  | 'getPartyBillingRules'
  | 'getPerson'
  | 'getSegment'
  | 'getServiceAgreement'
  | 'getSnapshotByParty'
  | 'getSnapshotByVehicle'
  | 'getTag'
  | 'getVehicleForCustomer'
  | 'getVehiclePartySummary'
  | 'linkVehicleDriver'
  | 'listBillingTerms'
  | 'listCustomers'
  | 'listDuplicateCandidates'
  | 'listInquiries'
  | 'listPartyFollowUps'
  | 'listPartyInteractions'
  | 'listPartyTags'
  | 'listPromotionRedemptionsByCustomer'
  | 'listSegmentAttributes'
  | 'listSegments'
  | 'listServiceAgreementRenewals'
  | 'listServiceAgreements'
  | 'listSuppressionEntries'
  | 'listTags'
  | 'listVehiclesForCustomer'
  | 'lookupParties'
  | 'mergeParties'
  | 'reconcilePersonLinks'
  | 'recordInteraction'
  | 'recordPromotionRedemption'
  | 'removeSegmentMember'
  | 'removeSuppressionEntry'
  | 'removeTagFromParty'
  | 'renewServiceAgreement'
  | 'replayPartyFacts'
  | 'resolveAccountTier'
  | 'resolveMarketingEligibility'
  | 'resolvePartyNames'
  | 'resolveSegment'
  | 'searchParties'
  | 'searchPersons'
  | 'setAccountMarketingGate'
  | 'submitPublicInquiry'
  | 'summaryLookupParties'
  | 'terminateServiceAgreement'
  | 'unlinkVehicleDriver'
  | 'updateContactRoles'
  | 'updateCustomer'
  | 'updateInquiryStatus'
  | 'updateMarketingConsent'
  | 'updateSegment'
  | 'updateServiceAgreement'
  | 'updateTag'
  | 'upsertAccountCommunicationPreferences'
  | 'upsertCommunicationPreferences'
  | 'upsertPartyBillingRules';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<CustomerOperationId, OperationRequirement>>> = {
  activateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], authenticated: false },
  addSegmentMembers: { anyOf: ['crm:segment:manage'], allOf: [], authenticated: false },
  addSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], authenticated: false },
  assignFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], authenticated: false },
  assignInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], authenticated: false },
  assignTagToParty: { anyOf: ['crm:tag:assign'], allOf: [], authenticated: false },
  browseParties: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  bulkIngestCommercialAccounts: { anyOf: ['crm:party:create'], allOf: [], authenticated: false },
  bulkIngestCustomers: { anyOf: ['crm:party:create'], allOf: [], authenticated: false },
  captureInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], authenticated: false },
  checkAddressSuppression: { anyOf: ['crm:suppression:view'], allOf: [], authenticated: false },
  checkCustomerRequirementsMet: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  checkPartyDuplicates: { anyOf: ['crm:party:search'], allOf: [], authenticated: false },
  checkVehicleContact: { anyOf: ['crm:vehicle_contact:check'], allOf: [], authenticated: false },
  completeFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], authenticated: false },
  convertInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], authenticated: false },
  countDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], authenticated: false },
  createCrmCommercialAccount: { anyOf: ['crm:party:create'], allOf: [], authenticated: false },
  createCrmPerson: { anyOf: ['crm:person:create'], allOf: [], authenticated: false },
  createCustomer: { anyOf: ['crm:party:create'], allOf: [], authenticated: false },
  createFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], authenticated: false },
  createPartyRelationship: { anyOf: ['crm:relationship:create'], allOf: [], authenticated: false },
  createSegment: { anyOf: ['crm:segment:manage'], allOf: [], authenticated: false },
  createServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], authenticated: false },
  createTag: { anyOf: ['crm:tag:manage'], allOf: [], authenticated: false },
  createVehicleForParty: { anyOf: ['crm:vehicle:create'], allOf: [], authenticated: false },
  deactivatePartyRelationship: { anyOf: ['crm:relationship:delete'], allOf: [], authenticated: false },
  deleteCustomer: { anyOf: ['crm:party:deactivate'], allOf: [], authenticated: false },
  deleteSegment: { anyOf: ['crm:segment:manage'], allOf: [], authenticated: false },
  deleteTag: { anyOf: ['crm:tag:manage'], allOf: [], authenticated: false },
  designatePrimaryBillingContact: { anyOf: ['crm:relationship:update'], allOf: [], authenticated: false },
  dismissDuplicateCandidate: { anyOf: ['crm:party:merge'], allOf: [], authenticated: false },
  dismissFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], authenticated: false },
  getAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], authenticated: false },
  getAccountTier: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getCommercialAccountContacts: { anyOf: ['crm:relationship:read'], allOf: [], authenticated: false },
  getCommercialWatchList: { anyOf: ['crm:insights:view'], allOf: [], authenticated: false },
  getCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], authenticated: false },
  getConsentHistory: { anyOf: ['crm:consent:view'], allOf: [], authenticated: false },
  getContactsWithRoles: { anyOf: ['crm:contact:view'], allOf: [], authenticated: false },
  getCustomerById: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getCustomerInsightsOverview: { anyOf: ['crm:insights:view'], allOf: [], authenticated: false },
  getCustomerSummary: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getFollowUpQueue: { anyOf: ['crm:followup:view'], allOf: [], authenticated: false },
  getFollowUpTask: { anyOf: ['crm:followup:view'], allOf: [], authenticated: false },
  getInquiry: { anyOf: ['crm:inquiry:view'], allOf: [], authenticated: false },
  getMarketingConsent: { anyOf: ['crm:consent:view'], allOf: [], authenticated: false },
  getParty: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getPartyBillingRules: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getPerson: { anyOf: ['crm:person:read'], allOf: [], authenticated: false },
  getSegment: { anyOf: ['crm:segment:view'], allOf: [], authenticated: false },
  getServiceAgreement: { anyOf: ['crm:agreement:view'], allOf: [], authenticated: false },
  getSnapshotByParty: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getSnapshotByVehicle: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  getTag: { anyOf: ['crm:tag:view'], allOf: [], authenticated: false },
  getVehicleForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], authenticated: false },
  getVehiclePartySummary: { anyOf: ['crm:vehicle_contact:check'], allOf: [], authenticated: false },
  linkVehicleDriver: { anyOf: ['crm:vehicle_driver:create'], allOf: [], authenticated: false },
  listBillingTerms: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  listCustomers: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  listDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], authenticated: false },
  listInquiries: { anyOf: ['crm:inquiry:view'], allOf: [], authenticated: false },
  listPartyFollowUps: { anyOf: ['crm:followup:view'], allOf: [], authenticated: false },
  listPartyInteractions: { anyOf: ['crm:interaction:view'], allOf: [], authenticated: false },
  listPartyTags: { anyOf: ['crm:tag:view'], allOf: [], authenticated: false },
  listPromotionRedemptionsByCustomer: { anyOf: ['crm:promotion_redemption:view'], allOf: [], authenticated: false },
  listSegmentAttributes: { anyOf: ['crm:segment:view'], allOf: [], authenticated: false },
  listSegments: { anyOf: ['crm:segment:view'], allOf: [], authenticated: false },
  listServiceAgreementRenewals: { anyOf: ['crm:agreement:view'], allOf: [], authenticated: false },
  listServiceAgreements: { anyOf: ['crm:agreement:view'], allOf: [], authenticated: false },
  listSuppressionEntries: { anyOf: ['crm:suppression:view'], allOf: [], authenticated: false },
  listTags: { anyOf: ['crm:tag:view'], allOf: [], authenticated: false },
  listVehiclesForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], authenticated: false },
  lookupParties: { anyOf: ['crm:party:search'], allOf: [], authenticated: false },
  mergeParties: { anyOf: ['crm:party:merge'], allOf: [], authenticated: false },
  reconcilePersonLinks: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  recordInteraction: { anyOf: ['crm:interaction:manage'], allOf: [], authenticated: false },
  recordPromotionRedemption: { anyOf: ['crm:promotion_redemption:record'], allOf: [], authenticated: false },
  removeSegmentMember: { anyOf: ['crm:segment:manage'], allOf: [], authenticated: false },
  removeSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], authenticated: false },
  removeTagFromParty: { anyOf: ['crm:tag:assign'], allOf: [], authenticated: false },
  renewServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], authenticated: false },
  replayPartyFacts: { anyOf: ['crm:fact:replay'], allOf: [], authenticated: false },
  resolveAccountTier: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  resolveMarketingEligibility: { anyOf: ['crm:consent:view'], allOf: [], authenticated: false },
  resolvePartyNames: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  resolveSegment: { anyOf: ['crm:segment:resolve'], allOf: [], authenticated: false },
  searchParties: { anyOf: ['crm:party:view'], allOf: [], authenticated: false },
  searchPersons: { anyOf: ['crm:person:read'], allOf: [], authenticated: false },
  setAccountMarketingGate: { anyOf: ['crm:consent:manage'], allOf: [], authenticated: false },
  summaryLookupParties: { anyOf: ['crm:party_summary:search'], allOf: [], authenticated: false },
  terminateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], authenticated: false },
  unlinkVehicleDriver: { anyOf: ['crm:vehicle_driver:delete'], allOf: [], authenticated: false },
  updateContactRoles: { anyOf: ['crm:contact_role:assign'], allOf: [], authenticated: false },
  updateCustomer: { anyOf: ['crm:party:edit'], allOf: [], authenticated: false },
  updateInquiryStatus: { anyOf: ['crm:inquiry:manage'], allOf: [], authenticated: false },
  updateMarketingConsent: { anyOf: ['crm:consent:manage'], allOf: [], authenticated: false },
  updateSegment: { anyOf: ['crm:segment:manage'], allOf: [], authenticated: false },
  updateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], authenticated: false },
  updateTag: { anyOf: ['crm:tag:manage'], allOf: [], authenticated: false },
  upsertAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], authenticated: false },
  upsertCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], authenticated: false },
  upsertPartyBillingRules: { anyOf: ['crm:billing_rules:edit'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly CustomerOperationId[] = [
  'submitPublicInquiry',
];
