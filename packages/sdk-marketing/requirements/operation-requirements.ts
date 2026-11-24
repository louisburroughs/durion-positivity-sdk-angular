// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-marketing/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<MarketingOperationId, OperationRequirement>>> = {
  cancelCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false },
  createCampaign: { anyOf: ['marketing:campaign:create'], allOf: [], conditional: [], authenticated: false },
  createMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false },
  deleteMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false },
  dispatchCampaign: { anyOf: ['marketing:campaign:send'], allOf: [], conditional: [], authenticated: false },
  getCampaignById: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  getCampaignOverview: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  getCampaignStats: { anyOf: ['marketing:stats:view'], allOf: [], conditional: [], authenticated: false },
  getMessageTemplateById: { anyOf: ['marketing:template:view'], allOf: [], conditional: [], authenticated: false },
  getProgramStats: { anyOf: ['marketing:stats:view'], allOf: [], conditional: [], authenticated: false },
  listCampaignSends: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  listCampaigns: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  listMarketingStarters: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  listMessageTemplates: { anyOf: ['marketing:template:view'], allOf: [], conditional: [], authenticated: false },
  pauseCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false },
  previewAudienceBeforeCampaign: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  previewCampaignAudience: { anyOf: ['marketing:campaign:view'], allOf: [], conditional: [], authenticated: false },
  resumeCampaign: { anyOf: ['marketing:campaign:manage'], allOf: [], conditional: [], authenticated: false },
  scheduleCampaign: { anyOf: ['marketing:campaign:schedule'], allOf: [], conditional: [], authenticated: false },
  updateCampaign: { anyOf: ['marketing:campaign:edit'], allOf: [], conditional: [], authenticated: false },
  updateMessageTemplate: { anyOf: ['marketing:template:manage'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly MarketingOperationId[] = [];
