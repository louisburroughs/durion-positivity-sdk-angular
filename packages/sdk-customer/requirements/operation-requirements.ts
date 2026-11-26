// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-customer/openapi.yaml.

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
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<CustomerOperationId, OperationRequirement>>> = {
  activateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addSegmentMembers: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  addSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  assignTagToParty: { anyOf: ['crm:tag:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  browseParties: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestCommercialAccounts: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  bulkIngestCustomers: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  captureInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkAddressSuppression: { anyOf: ['crm:suppression:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkCustomerRequirementsMet: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkPartyDuplicates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  checkVehicleContact: { anyOf: ['crm:vehicle_contact:check'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  completeFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  convertInquiry: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  countDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCrmCommercialAccount: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCrmPerson: { anyOf: ['crm:person:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCustomer: { anyOf: ['crm:party:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPartyRelationship: { anyOf: ['crm:relationship:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createVehicleForParty: { anyOf: ['crm:vehicle:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deactivatePartyRelationship: { anyOf: ['crm:relationship:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteCustomer: { anyOf: ['crm:party:deactivate'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  designatePrimaryBillingContact: { anyOf: ['crm:relationship:update'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dismissDuplicateCandidate: { anyOf: ['crm:party:merge'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dismissFollowUpTask: { anyOf: ['crm:followup:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAccountTier: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCommercialAccountContacts: { anyOf: ['crm:relationship:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCommercialWatchList: { anyOf: ['crm:insights:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCommunicationPreferences: { anyOf: ['crm:contact_preference:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getConsentHistory: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getContactsWithRoles: { anyOf: ['crm:contact:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCustomerById: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCustomerInsightsOverview: { anyOf: ['crm:insights:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCustomerSummary: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getFollowUpQueue: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getFollowUpTask: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getInquiry: { anyOf: ['crm:inquiry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMarketingConsent: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getParty: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPartyBillingRules: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPerson: { anyOf: ['crm:person:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSegment: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getServiceAgreement: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSnapshotByParty: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getSnapshotByVehicle: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTag: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVehicleForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getVehiclePartySummary: { anyOf: ['crm:vehicle_contact:check'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  linkVehicleDriver: { anyOf: ['crm:vehicle_driver:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listBillingTerms: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCustomers: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listDuplicateCandidates: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listInquiries: { anyOf: ['crm:inquiry:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPartyFollowUps: { anyOf: ['crm:followup:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPartyInteractions: { anyOf: ['crm:interaction:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPartyTags: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPromotionRedemptionsByCustomer: { anyOf: ['crm:promotion_redemption:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSegmentAttributes: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSegments: { anyOf: ['crm:segment:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServiceAgreementRenewals: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listServiceAgreements: { anyOf: ['crm:agreement:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listSuppressionEntries: { anyOf: ['crm:suppression:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listTags: { anyOf: ['crm:tag:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listVehiclesForCustomer: { anyOf: ['crm:vehicle:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  lookupParties: { anyOf: ['crm:party:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  mergeParties: { anyOf: ['crm:party:merge'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  reconcilePersonLinks: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordInteraction: { anyOf: ['crm:interaction:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  recordPromotionRedemption: { anyOf: ['crm:promotion_redemption:record'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeSegmentMember: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeSuppressionEntry: { anyOf: ['crm:suppression:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  removeTagFromParty: { anyOf: ['crm:tag:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  renewServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayPartyFacts: { anyOf: ['crm:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveAccountTier: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveMarketingEligibility: { anyOf: ['crm:consent:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolvePartyNames: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolveSegment: { anyOf: ['crm:segment:resolve'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchParties: { anyOf: ['crm:party:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchPersons: { anyOf: ['crm:person:read'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  setAccountMarketingGate: { anyOf: ['crm:consent:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  summaryLookupParties: { anyOf: ['crm:party_summary:search'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  terminateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  unlinkVehicleDriver: { anyOf: ['crm:vehicle_driver:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateContactRoles: { anyOf: ['crm:contact_role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCustomer: { anyOf: ['crm:party:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateInquiryStatus: { anyOf: ['crm:inquiry:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateMarketingConsent: { anyOf: ['crm:consent:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateSegment: { anyOf: ['crm:segment:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateServiceAgreement: { anyOf: ['crm:agreement:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateTag: { anyOf: ['crm:tag:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertAccountCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertCommunicationPreferences: { anyOf: ['crm:contact_preference:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertPartyBillingRules: { anyOf: ['crm:billing_rules:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly CustomerOperationId[] = [
  'submitPublicInquiry',
];
