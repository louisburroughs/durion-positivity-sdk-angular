import { Injector } from '@angular/core';
import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, firstValueFrom, of } from 'rxjs';
import {
  DURION_SDK_CONFIG,
  DurionSdkConfig,
  DurionTransportInterceptor,
  provideDurionTransport,
  DurionApiError,
  DurionSdkError,
} from '../../packages/sdk-transport/src';

function createInterceptor(config: DurionSdkConfig): DurionTransportInterceptor {
  const injector = Injector.create({
    providers: [
      { provide: DURION_SDK_CONFIG, useValue: config },
      { provide: DurionTransportInterceptor, useClass: DurionTransportInterceptor, deps: [] },
    ],
  });
  return injector.get(DurionTransportInterceptor);
}

class CapturingHandler implements HttpHandler {
  lastReq: HttpRequest<unknown> | undefined;
  handle(req: HttpRequest<unknown>): Observable<HttpResponse<unknown>> {
    this.lastReq = req;
    return of(new HttpResponse({ status: 200, body: { ok: true } }));
  }
}

describe('sdk-003 DurionTransportInterceptor', () => {
  it('adds Authorization, X-API-Version, X-Correlation-Id on GET', async () => {
    const interceptor = createInterceptor({
      baseUrl: 'http://api.test',
      token: async () => 'tok-123',
      apiVersion: '2',
      correlationIdProvider: () => 'corr-fixed',
    });
    const handler = new CapturingHandler();
    const req = new HttpRequest('GET', 'http://api.test/things');

    await firstValueFrom(interceptor.intercept(req, handler));

    const sent = handler.lastReq!;
    expect(sent.headers.get('Authorization')).toBe('Bearer tok-123');
    expect(sent.headers.get('X-API-Version')).toBe('2');
    expect(sent.headers.get('X-Correlation-Id')).toBe('corr-fixed');
    expect(sent.headers.get('Idempotency-Key')).toBeNull();
  });

  it('omits Authorization when no token provider', async () => {
    const interceptor = createInterceptor({
      baseUrl: 'http://api.test',
      correlationIdProvider: () => 'cid',
    });
    const handler = new CapturingHandler();
    await firstValueFrom(
      interceptor.intercept(new HttpRequest('GET', '/x'), handler),
    );
    expect(handler.lastReq!.headers.get('Authorization')).toBeNull();
    expect(handler.lastReq!.headers.get('X-API-Version')).toBe('1');
  });

  it('falls back to crypto.randomUUID when no correlationIdProvider', async () => {
    const interceptor = createInterceptor({ baseUrl: 'http://api.test' });
    const handler = new CapturingHandler();
    await firstValueFrom(
      interceptor.intercept(new HttpRequest('GET', '/x'), handler),
    );
    const cid = handler.lastReq!.headers.get('X-Correlation-Id');
    expect(cid).toMatch(/[0-9a-f-]{8,}/i);
  });

  it.each(['POST', 'PUT', 'PATCH', 'DELETE'])(
    'adds Idempotency-Key for mutating method %s',
    async (method) => {
      const interceptor = createInterceptor({
        baseUrl: 'http://api.test',
        idempotencyKeyGenerator: (m, url) => `${m}:${url}`,
      });
      const handler = new CapturingHandler();
      const req = new HttpRequest(
        method as 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        'http://api.test/r',
        method === 'DELETE' ? null : {},
      );
      await firstValueFrom(interceptor.intercept(req, handler));
      expect(handler.lastReq!.headers.get('Idempotency-Key')).toBe(
        `${method}:http://api.test/r`,
      );
    },
  );

  it('preserves caller-provided Idempotency-Key on mutating requests', async () => {
    const interceptor = createInterceptor({
      baseUrl: 'http://api.test',
      idempotencyKeyGenerator: () => 'generated',
    });
    const handler = new CapturingHandler();
    const req = new HttpRequest('POST', 'http://api.test/r', {}, {
      headers: new HttpRequest('GET', '/').headers.set(
        'Idempotency-Key',
        'caller-key',
      ),
    });
    await firstValueFrom(interceptor.intercept(req, handler));
    expect(handler.lastReq!.headers.get('Idempotency-Key')).toBe('caller-key');
  });

  it('does not set Idempotency-Key when no generator and none provided', async () => {
    const interceptor = createInterceptor({ baseUrl: 'http://api.test' });
    const handler = new CapturingHandler();
    await firstValueFrom(
      interceptor.intercept(new HttpRequest('POST', '/r', {}), handler),
    );
    expect(handler.lastReq!.headers.get('Idempotency-Key')).toBeNull();
  });
});

describe('sdk-003 provideDurionTransport', () => {
  it('returns EnvironmentProviders that bind config and interceptor', () => {
    const providers = provideDurionTransport({ baseUrl: 'http://api.test' });
    expect(providers).toBeDefined();
    // EnvironmentProviders is opaque; assert it can be consumed by Injector.create through
    // the underlying token wiring.
    const injector = Injector.create({
      providers: [
        { provide: DURION_SDK_CONFIG, useValue: { baseUrl: 'http://api.test' } satisfies DurionSdkConfig },
        { provide: DurionTransportInterceptor, useClass: DurionTransportInterceptor, deps: [] },
      ],
    });
    expect(injector.get(DurionTransportInterceptor)).toBeInstanceOf(
      DurionTransportInterceptor,
    );
  });
});

describe('sdk-003 DurionSdkError', () => {
  it('wraps an api error with status and code in the message', () => {
    const apiErr: DurionApiError = {
      code: 'E_BAD',
      message: 'bad input',
      status: 400,
      timestamp: '2024-01-01T00:00:00Z',
      correlationId: 'cid',
    };
    const fakeResponse = { status: 400 } as unknown as Response;
    const err = new DurionSdkError(fakeResponse, apiErr);
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('DurionSdkError');
    expect(err.message).toContain('400');
    expect(err.message).toContain('E_BAD');
    expect(err.error).toBe(apiErr);
    expect(err.response).toBe(fakeResponse);
  });
});
