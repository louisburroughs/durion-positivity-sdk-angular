import { Injectable, inject } from '@angular/core';
import { AccountingEventsService } from '../apis/accountingEvents.service';

@Injectable({ providedIn: 'root' })
export class AccountingEventWorkflow {
  private readonly accountingEventsApi = inject(AccountingEventsService);

  /** @operationId retryEventProcessing */
  retry(...args: unknown[]) {
    return (this.accountingEventsApi.retryEventProcessing as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId reprocessSuspendedEvent */
  reprocess(...args: unknown[]) {
    return (this.accountingEventsApi.reprocessSuspendedEvent as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId submitEvent */
  submit(...args: unknown[]) {
    return (this.accountingEventsApi.submitEvent as (...a: unknown[]) => unknown)(...args);
  }
}
