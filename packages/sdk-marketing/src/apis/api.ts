export * from './marketingAnalytics.service';
import { MarketingAnalyticsService } from './marketingAnalytics.service';
export * from './marketingCampaigns.service';
import { MarketingCampaignsService } from './marketingCampaigns.service';
export * from './marketingTemplates.service';
import { MarketingTemplatesService } from './marketingTemplates.service';
export const APIS = [MarketingAnalyticsService, MarketingCampaignsService, MarketingTemplatesService];
