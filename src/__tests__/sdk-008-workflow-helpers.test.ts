import { Injector, ProviderToken, Type } from '@angular/core';
import { of } from 'rxjs';

import { SecurityAuthWorkflow } from '../../packages/sdk-security/src/workflows/securityAuthWorkflow';
import { AuthAPIService } from '../../packages/sdk-security/src/apis/authAPI.service';
import { JWTAPIService } from '../../packages/sdk-security/src/apis/jWTAPI.service';

import { AccountingEventWorkflow } from '../../packages/sdk-accounting/src/workflows/accountingEventWorkflow';
import { AccountingEventsService } from '../../packages/sdk-accounting/src/apis/accountingEvents.service';

import { OrderPriceOverrideWorkflow } from '../../packages/sdk-order/src/workflows/orderPriceOverrideWorkflow';
import { PriceOverridesService } from '../../packages/sdk-order/src/apis/priceOverrides.service';

import { WorkorderChangeRequestWorkflow } from '../../packages/sdk-workorder/src/workflows/workorderChangeRequestWorkflow';
import { ChangeRequestAPIService } from '../../packages/sdk-workorder/src/apis/changeRequestAPI.service';

import { WorkorderEstimateWorkflow } from '../../packages/sdk-workorder/src/workflows/workorderEstimateWorkflow';
import { EstimateAPIService } from '../../packages/sdk-workorder/src/apis/estimateAPI.service';

import { InventoryProcureToReceiveWorkflow } from '../../packages/sdk-inventory/src/workflows/inventoryProcureToReceiveWorkflow';
import { PurchaseOrdersService } from '../../packages/sdk-inventory/src/apis/purchaseOrders.service';
import { ASNService } from '../../packages/sdk-inventory/src/apis/aSN.service';
import { ReceivingService } from '../../packages/sdk-inventory/src/apis/receiving.service';
import { InventoryAvailabilityService } from '../../packages/sdk-inventory/src/apis/inventoryAvailability.service';

interface MockEntry {
  token: ProviderToken<unknown>;
  methods: string[];
}

function buildWorkflow<T>(
  workflow: Type<T>,
  mocks: MockEntry[],
): { instance: T; mocks: Map<ProviderToken<unknown>, Record<string, jest.Mock>> } {
  const mockMap = new Map<ProviderToken<unknown>, Record<string, jest.Mock>>();
  const providers: any[] = mocks.map(({ token, methods }) => {
    const stub: Record<string, jest.Mock> = {};
    for (const m of methods) {
      stub[m] = jest.fn().mockReturnValue(of({ ok: true, method: m }));
    }
    mockMap.set(token, stub);
    return { provide: token, useValue: stub };
  });
  providers.push({ provide: workflow, useClass: workflow as any, deps: [] });
  const injector = Injector.create({ providers });
  return { instance: injector.get(workflow), mocks: mockMap };
}

describe('sdk-008 SecurityAuthWorkflow', () => {
  it('delegates each method to the correct api', () => {
    const { instance, mocks } = buildWorkflow(SecurityAuthWorkflow, [
      { token: AuthAPIService, methods: ['login'] },
      { token: JWTAPIService, methods: ['refreshAccessToken', 'validateToken', 'revokeToken'] },
    ]);
    (instance as any).login('a' as any);
    (instance as any).refresh('b' as any);
    (instance as any).validate('c' as any);
    (instance as any).revoke('d' as any);
    expect(mocks.get(AuthAPIService)!['login']).toHaveBeenCalledWith('a');
    expect(mocks.get(JWTAPIService)!['refreshAccessToken']).toHaveBeenCalledWith('b');
    expect(mocks.get(JWTAPIService)!['validateToken']).toHaveBeenCalledWith('c');
    expect(mocks.get(JWTAPIService)!['revokeToken']).toHaveBeenCalledWith('d');
  });
});

describe('sdk-008 AccountingEventWorkflow', () => {
  it('delegates retry/reprocess/submit', () => {
    const { instance, mocks } = buildWorkflow(AccountingEventWorkflow, [
      {
        token: AccountingEventsService,
        methods: ['retryEventProcessing', 'reprocessSuspendedEvent', 'submitEvent'],
      },
    ]);
    (instance as any).retry('id' as any);
    (instance as any).reprocess('id' as any);
    (instance as any).submit('payload' as any);
    const stub = mocks.get(AccountingEventsService)!;
    expect(stub['retryEventProcessing']).toHaveBeenCalledWith('id');
    expect(stub['reprocessSuspendedEvent']).toHaveBeenCalledWith('id');
    expect(stub['submitEvent']).toHaveBeenCalledWith('payload');
  });
});

describe('sdk-008 OrderPriceOverrideWorkflow', () => {
  it('delegates submit/approve/reject/getPending', () => {
    const { instance, mocks } = buildWorkflow(OrderPriceOverrideWorkflow, [
      {
        token: PriceOverridesService,
        methods: [
          'applyPriceOverride',
          'approvePriceOverride',
          'rejectPriceOverride',
          'getPendingApprovals',
        ],
      },
    ]);
    (instance as any).submit('s' as any);
    (instance as any).approve('a' as any);
    (instance as any).reject('r' as any);
    (instance as any).getPending('p' as any);
    const stub = mocks.get(PriceOverridesService)!;
    expect(stub['applyPriceOverride']).toHaveBeenCalledWith('s');
    expect(stub['approvePriceOverride']).toHaveBeenCalledWith('a');
    expect(stub['rejectPriceOverride']).toHaveBeenCalledWith('r');
    expect(stub['getPendingApprovals']).toHaveBeenCalledWith('p');
  });
});

describe('sdk-008 WorkorderChangeRequestWorkflow', () => {
  it('delegates submit/approve/decline', () => {
    const { instance, mocks } = buildWorkflow(WorkorderChangeRequestWorkflow, [
      {
        token: ChangeRequestAPIService,
        methods: ['createChangeRequest', 'approveChangeRequest', 'declineChangeRequest'],
      },
    ]);
    (instance as any).submit('s' as any);
    (instance as any).approve('a' as any);
    (instance as any).decline('d' as any);
    const stub = mocks.get(ChangeRequestAPIService)!;
    expect(stub['createChangeRequest']).toHaveBeenCalledWith('s');
    expect(stub['approveChangeRequest']).toHaveBeenCalledWith('a');
    expect(stub['declineChangeRequest']).toHaveBeenCalledWith('d');
  });
});

describe('sdk-008 WorkorderEstimateWorkflow', () => {
  it('delegates create/submit/approve/decline/promote', () => {
    const { instance, mocks } = buildWorkflow(WorkorderEstimateWorkflow, [
      {
        token: EstimateAPIService,
        methods: [
          'createEstimate',
          'submitForApproval',
          'approveEstimate',
          'declineEstimate',
          'promoteEstimateToWorkorder',
        ],
      },
    ]);
    (instance as any).create('c' as any);
    (instance as any).submitForApproval('s' as any);
    (instance as any).approve('a' as any);
    (instance as any).decline('d' as any);
    (instance as any).promoteToWorkorder('p' as any);
    const stub = mocks.get(EstimateAPIService)!;
    expect(stub['createEstimate']).toHaveBeenCalledWith('c');
    expect(stub['submitForApproval']).toHaveBeenCalledWith('s');
    expect(stub['approveEstimate']).toHaveBeenCalledWith('a');
    expect(stub['declineEstimate']).toHaveBeenCalledWith('d');
    expect(stub['promoteEstimateToWorkorder']).toHaveBeenCalledWith('p');
  });
});

describe('sdk-008 InventoryProcureToReceiveWorkflow', () => {
  it('delegates the procure-to-receive chain', () => {
    const { instance, mocks } = buildWorkflow(InventoryProcureToReceiveWorkflow, [
      {
        token: PurchaseOrdersService,
        methods: ['createPurchaseOrder', 'approvePurchaseOrder'],
      },
      { token: ASNService, methods: ['createAsn'] },
      {
        token: ReceivingService,
        methods: ['createReceivingSession', 'receiveItemsIntoStaging'],
      },
      {
        token: InventoryAvailabilityService,
        methods: ['getInventoryAvailability'],
      },
    ]);

    (instance as any).createPurchaseOrder('po' as any);
    (instance as any).approvePurchaseOrder('apo' as any);
    (instance as any).registerAsn('asn' as any);
    (instance as any).startReceivingSession('sess' as any);
    (instance as any).receiveItems('items' as any);
    (instance as any).checkAvailability('avail' as any);

    expect(mocks.get(PurchaseOrdersService)!['createPurchaseOrder']).toHaveBeenCalledWith('po');
    expect(mocks.get(PurchaseOrdersService)!['approvePurchaseOrder']).toHaveBeenCalledWith('apo');
    expect(mocks.get(ASNService)!['createAsn']).toHaveBeenCalledWith('asn');
    expect(mocks.get(ReceivingService)!['createReceivingSession']).toHaveBeenCalledWith('sess');
    expect(mocks.get(ReceivingService)!['receiveItemsIntoStaging']).toHaveBeenCalledWith('items');
    expect(mocks.get(InventoryAvailabilityService)!['getInventoryAvailability']).toHaveBeenCalledWith('avail');
  });
});
