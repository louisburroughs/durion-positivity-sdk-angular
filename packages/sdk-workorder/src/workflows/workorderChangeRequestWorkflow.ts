import { Injectable, inject } from '@angular/core';
import { ChangeRequestAPIService } from '../apis/changeRequestAPI.service';

@Injectable({ providedIn: 'root' })
export class WorkorderChangeRequestWorkflow {
  private readonly changeRequestApi = inject(ChangeRequestAPIService);

  /** @operationId createChangeRequest */
  submit(...args: unknown[]) {
    return (this.changeRequestApi.createChangeRequest as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId approveChangeRequest */
  approve(...args: unknown[]) {
    return (this.changeRequestApi.approveChangeRequest as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId declineChangeRequest */
  decline(...args: unknown[]) {
    return (this.changeRequestApi.declineChangeRequest as (...a: unknown[]) => unknown)(...args);
  }
}
