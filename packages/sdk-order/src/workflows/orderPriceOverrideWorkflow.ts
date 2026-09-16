import { Injectable, inject } from '@angular/core';
import { PriceOverridesService } from '../apis/priceOverrides.service';

@Injectable({ providedIn: 'root' })
export class OrderPriceOverrideWorkflow {
  private readonly priceOverridesApi = inject(PriceOverridesService);

  /** @operationId applyPriceOverride */
  submit(...args: unknown[]) {
    return (this.priceOverridesApi.applyPriceOverride as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId approvePriceOverride */
  approve(...args: unknown[]) {
    return (this.priceOverridesApi.approvePriceOverride as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId rejectPriceOverride */
  reject(...args: unknown[]) {
    return (this.priceOverridesApi.rejectPriceOverride as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId listPendingPriceOverrides */
  getPending(...args: unknown[]) {
    return (this.priceOverridesApi.listPendingPriceOverrides as (...a: unknown[]) => unknown)(...args);
  }
}
