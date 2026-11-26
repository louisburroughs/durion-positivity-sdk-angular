// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-marketing/openapi.yaml.

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

/** Every operation of @durion-sdk/marketing, by the name of its generated service method. */
export type MarketingOperationId =
  | 'cancelCampaign'
  | 'createCampaign'
  | 'createMessageTemplate'
  | 'deleteMessageTemplate'
  | 'dispatchCampaign'
  | 'getCampaignById'
  | 'getCampaignOverview'
  | 'getCampaignStats'
  | 'getMessageTemplateById'
  | 'getProgramStats'
  | 'listCampaignSends'
  | 'listCampaigns'
  | 'listMarketingStarters'
  | 'listMessageTemplates'
  | 'pauseCampaign'
  | 'previewAudienceBeforeCampaign'
  | 'previewCampaignAudience'
  | 'resumeCampaign'
  | 'scheduleCampaign'
  | 'updateCampaign'
  | 'updateMessageTemplate';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<MarketingOperationId, OperationRequirement>>> = {
  cancelCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createCampaign: { anyOf: ['marketing:campaign:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  dispatchCampaign: { anyOf: ['marketing:campaign:send'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCampaignById: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCampaignOverview: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCampaignStats: { anyOf: ['marketing:stats:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getMessageTemplateById: { anyOf: ['marketing:template:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getProgramStats: { anyOf: ['marketing:stats:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCampaignSends: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listCampaigns: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMarketingStarters: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMessageTemplates: { anyOf: ['marketing:template:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  pauseCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  previewAudienceBeforeCampaign: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  previewCampaignAudience: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resumeCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  scheduleCampaign: { anyOf: ['marketing:campaign:schedule'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateCampaign: { anyOf: ['marketing:campaign:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updateMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly MarketingOperationId[] = [];
