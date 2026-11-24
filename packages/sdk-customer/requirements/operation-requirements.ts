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
  readonly conditional: readonly string[];
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
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<CustomerOperationId, OperationRequirement>>> = {
  activateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false },
  addSegmentMembers: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false },
  addSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], conditional: [], authenticated: false },
  assignFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false },
  assignInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false },
  assignTagToParty: { anyOf: ['crm:tag:assign'], allOf: [], conditional: [], authenticated: false },
  browseParties: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  bulkIngestCommercialAccounts: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false },
  bulkIngestCustomers: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false },
  captureInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false },
  checkAddressSuppression: { anyOf: ['crm:suppression:view'], allOf: [], conditional: [], authenticated: false },
  checkCustomerRequirementsMet: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  checkPartyDuplicates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false },
  checkVehicleContact: { anyOf: ['crm:vehicle_contact:check'], allOf: [], conditional: [], authenticated: false },
  completeFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false },
  convertInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false },
  countDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false },
  createCrmCommercialAccount: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false },
  createCrmPerson: { anyOf: ['crm:person:create'], allOf: [], conditional: [], authenticated: false },
  createCustomer: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false },
  createFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false },
  createPartyRelationship: { anyOf: ['crm:relationship:create'], allOf: [], conditional: [], authenticated: false },
  createSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false },
  createServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false },
  createTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false },
  createVehicleForParty: { anyOf: ['crm:vehicle:create'], allOf: [], conditional: [], authenticated: false },
  deactivatePartyRelationship: { anyOf: ['crm:relationship:delete'], allOf: [], conditional: [], authenticated: false },
  deleteCustomer: { anyOf: ['crm:party:deactivate'], allOf: [], conditional: [], authenticated: false },
  deleteSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false },
  deleteTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false },
  designatePrimaryBillingContact: { anyOf: ['crm:relationship:update'], allOf: [], conditional: [], authenticated: false },
  dismissDuplicateCandidate: { anyOf: ['crm:party:merge'], allOf: [], conditional: [], authenticated: false },
  dismissFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false },
  getAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], conditional: [], authenticated: false },
  getAccountTier: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getCommercialAccountContacts: { anyOf: ['crm:relationship:read'], allOf: [], conditional: [], authenticated: false },
  getCommercialWatchList: { anyOf: ['crm:insights:view'], allOf: [], conditional: [], authenticated: false },
  getCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], conditional: [], authenticated: false },
  getConsentHistory: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false },
  getContactsWithRoles: { anyOf: ['crm:contact:view'], allOf: [], conditional: [], authenticated: false },
  getCustomerById: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getCustomerInsightsOverview: { anyOf: ['crm:insights:view'], allOf: [], conditional: [], authenticated: false },
  getCustomerSummary: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getFollowUpQueue: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false },
  getFollowUpTask: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false },
  getInquiry: { anyOf: ['crm:inquiry:view'], allOf: [], conditional: [], authenticated: false },
  getMarketingConsent: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false },
  getParty: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getPartyBillingRules: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getPerson: { anyOf: ['crm:person:read'], allOf: [], conditional: [], authenticated: false },
  getSegment: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false },
  getServiceAgreement: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false },
  getSnapshotByParty: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getSnapshotByVehicle: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  getTag: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false },
  getVehicleForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], conditional: [], authenticated: false },
  getVehiclePartySummary: { anyOf: ['crm:vehicle_contact:check'], allOf: [], conditional: [], authenticated: false },
  linkVehicleDriver: { anyOf: ['crm:vehicle_driver:create'], allOf: [], conditional: [], authenticated: false },
  listBillingTerms: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  listCustomers: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  listDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false },
  listInquiries: { anyOf: ['crm:inquiry:view'], allOf: [], conditional: [], authenticated: false },
  listPartyFollowUps: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false },
  listPartyInteractions: { anyOf: ['crm:interaction:view'], allOf: [], conditional: [], authenticated: false },
  listPartyTags: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false },
  listPromotionRedemptionsByCustomer: { anyOf: ['crm:promotion_redemption:view'], allOf: [], conditional: [], authenticated: false },
  listSegmentAttributes: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false },
  listSegments: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false },
  listServiceAgreementRenewals: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false },
  listServiceAgreements: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false },
  listSuppressionEntries: { anyOf: ['crm:suppression:view'], allOf: [], conditional: [], authenticated: false },
  listTags: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false },
  listVehiclesForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], conditional: [], authenticated: false },
  lookupParties: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false },
  mergeParties: { anyOf: ['crm:party:merge'], allOf: [], conditional: [], authenticated: false },
  reconcilePersonLinks: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  recordInteraction: { anyOf: ['crm:interaction:manage'], allOf: [], conditional: [], authenticated: false },
  recordPromotionRedemption: { anyOf: ['crm:promotion_redemption:record'], allOf: [], conditional: [], authenticated: false },
  removeSegmentMember: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false },
  removeSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], conditional: [], authenticated: false },
  removeTagFromParty: { anyOf: ['crm:tag:assign'], allOf: [], conditional: [], authenticated: false },
  renewServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false },
  replayPartyFacts: { anyOf: ['crm:fact:replay'], allOf: [], conditional: [], authenticated: false },
  resolveAccountTier: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  resolveMarketingEligibility: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false },
  resolvePartyNames: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  resolveSegment: { anyOf: ['crm:segment:resolve'], allOf: [], conditional: [], authenticated: false },
  searchParties: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false },
  searchPersons: { anyOf: ['crm:person:read'], allOf: [], conditional: [], authenticated: false },
  setAccountMarketingGate: { anyOf: ['crm:consent:manage'], allOf: [], conditional: [], authenticated: false },
  summaryLookupParties: { anyOf: ['crm:party_summary:search'], allOf: [], conditional: [], authenticated: false },
  terminateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false },
  unlinkVehicleDriver: { anyOf: ['crm:vehicle_driver:delete'], allOf: [], conditional: [], authenticated: false },
  updateContactRoles: { anyOf: ['crm:contact_role:assign'], allOf: [], conditional: [], authenticated: false },
  updateCustomer: { anyOf: ['crm:party:edit'], allOf: [], conditional: [], authenticated: false },
  updateInquiryStatus: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false },
  updateMarketingConsent: { anyOf: ['crm:consent:manage'], allOf: [], conditional: [], authenticated: false },
  updateSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false },
  updateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false },
  updateTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false },
  upsertAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], conditional: [], authenticated: false },
  upsertCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], conditional: [], authenticated: false },
  upsertPartyBillingRules: { anyOf: ['crm:billing_rules:edit'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly CustomerOperationId[] = [
  'submitPublicInquiry',
];
