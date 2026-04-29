import { Injectable, inject } from '@angular/core';
import { PurchaseOrdersService } from '../apis/purchaseOrders.service';
import { ASNService } from '../apis/aSN.service';
import { ReceivingService } from '../apis/receiving.service';
import { InventoryAvailabilityService } from '../apis/inventoryAvailability.service';

@Injectable({ providedIn: 'root' })
export class InventoryProcureToReceiveWorkflow {
  private readonly purchaseOrdersApi = inject(PurchaseOrdersService);
  private readonly asnApi = inject(ASNService);
  private readonly receivingApi = inject(ReceivingService);
  private readonly availabilityApi = inject(InventoryAvailabilityService);

  /** @operationId createPurchaseOrder */
  createPurchaseOrder(...args: unknown[]) {
    return (this.purchaseOrdersApi.createPurchaseOrder as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId approvePurchaseOrder */
  approvePurchaseOrder(...args: unknown[]) {
    return (this.purchaseOrdersApi.approvePurchaseOrder as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId createAsn */
  registerAsn(...args: unknown[]) {
    return (this.asnApi.createAsn as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId createReceivingSession */
  startReceivingSession(...args: unknown[]) {
    return (this.receivingApi.createReceivingSession as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId receiveItemsIntoStaging */
  receiveItems(...args: unknown[]) {
    return (this.receivingApi.receiveItemsIntoStaging as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId getInventoryAvailability */
  checkAvailability(...args: unknown[]) {
    return (this.availabilityApi.getInventoryAvailability as (...a: unknown[]) => unknown)(...args);
  }
}
