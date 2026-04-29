import { Injectable, inject } from '@angular/core';
import { EstimateAPIService } from '../apis/estimateAPI.service';

@Injectable({ providedIn: 'root' })
export class WorkorderEstimateWorkflow {
  private readonly estimateApi = inject(EstimateAPIService);

  /** @operationId createEstimate */
  create(...args: unknown[]) {
    return (this.estimateApi.createEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId submitForApproval */
  submitForApproval(...args: unknown[]) {
    return (this.estimateApi.submitForApproval as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId approveEstimate */
  approve(...args: unknown[]) {
    return (this.estimateApi.approveEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId declineEstimate */
  decline(...args: unknown[]) {
    return (this.estimateApi.declineEstimate as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId promoteEstimateToWorkorder */
  promoteToWorkorder(...args: unknown[]) {
    return (this.estimateApi.promoteEstimateToWorkorder as (...a: unknown[]) => unknown)(...args);
  }
}
