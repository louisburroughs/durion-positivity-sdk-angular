export * from './tax.service';
import { TaxService } from './tax.service';
export * from './taxExemptionCertificates.service';
import { TaxExemptionCertificatesService } from './taxExemptionCertificates.service';
export const APIS = [TaxService, TaxExemptionCertificatesService];
