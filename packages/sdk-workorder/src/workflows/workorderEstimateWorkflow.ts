import { Injectable, inject } from '@angular/core';
import { EstimateAPIService } from '../apis/estimateAPI.service';

@Injectable({ providedIn: 'root' })
export class WorkorderEstimateWorkflow {
  private readonly estimateApi = inject(EstimateAPIService);

  /** @operationId createEstimate */
  create(...args: unknown[]) {
    return (this.estimateApi.createEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId submitEstimateForApproval */
  submitForApproval(...args: unknown[]) {
    return (this.estimateApi.submitEstimateForApproval as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId approveEstimate */
  approve(...args: unknown[]) {
    return (this.estimateApi.approveEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId declineEstimate */
  decline(...args: unknown[]) {
    return (this.estimateApi.declineEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId promoteEstimate */
  promoteToWorkorder(...args: unknown[]) {
    return (this.estimateApi.promoteEstimate as (...a: unknown[]) => unknown)(...args);
  }
}
