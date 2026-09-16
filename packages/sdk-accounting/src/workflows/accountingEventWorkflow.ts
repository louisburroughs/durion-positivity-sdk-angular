import { Injectable, inject } from '@angular/core';
import { AccountingEventsService } from '../apis/accountingEvents.service';

@Injectable({ providedIn: 'root' })
export class AccountingEventWorkflow {
  private readonly accountingEventsApi = inject(AccountingEventsService);

  /** @operationId retryAccountingEvent */
  retry(...args: unknown[]) {
    return (this.accountingEventsApi.retryAccountingEvent as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId reprocessSuspendedEvent */
  reprocess(...args: unknown[]) {
    return (this.accountingEventsApi.reprocessSuspendedEvent as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId submitAccountingEvent */
  submit(...args: unknown[]) {
    return (this.accountingEventsApi.submitAccountingEvent as (...a: unknown[]) => unknown)(...args);
  }
}
