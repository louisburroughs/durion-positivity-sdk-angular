import { Inject, Injectable, Optional, inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from, switchMap, of } from 'rxjs';
import { DurionSdkConfig } from './config';
import { DURION_SDK_CONFIG } from './transport.token';

const MUTATING_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

@Injectable()
export class DurionTransportInterceptor implements HttpInterceptor {
  private readonly config: DurionSdkConfig | undefined;

  constructor(
    @Optional() @Inject(DURION_SDK_CONFIG) ctorConfig?: DurionSdkConfig | null,
  ) {
    // Support both classical constructor injection and `inject()`-based resolution
    // (used by tests that build the interceptor with `Injector.create` and `deps: []`).
    if (ctorConfig) {
      this.config = ctorConfig;
    } else {
      let resolved: DurionSdkConfig | null | undefined;
      try {
        resolved = inject(DURION_SDK_CONFIG, { optional: true });
      } catch {
        resolved = undefined;
      }
      this.config = resolved ?? undefined;
    }
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const config = this.config;
    const tokenSource$: Observable<string | undefined> = config?.token
      ? from(Promise.resolve(config.token()))
      : of(undefined);

    return tokenSource$.pipe(
      switchMap((token) => {
        const setHeaders: Record<string, string> = {};

        if (token) {
          setHeaders['Authorization'] = `Bearer ${token}`;
        }

        setHeaders['X-API-Version'] = config?.apiVersion ?? '1';
        setHeaders['X-Correlation-Id'] = config?.correlationIdProvider?.() ?? cryptoRandomUUID();

        const method = req.method.toUpperCase();
        if (MUTATING_METHODS.has(method)) {
          const callerKey = req.headers.get('Idempotency-Key');
          if (callerKey) {
            // Caller-provided header wins; nothing to set (already on the request).
          } else if (config?.idempotencyKeyGenerator) {
            setHeaders['Idempotency-Key'] = config.idempotencyKeyGenerator(method, req.url);
          }
        }

        const updated = req.clone({ setHeaders });
        return next.handle(updated);
      }),
    );
  }
}

function cryptoRandomUUID(): string {
  const c: { randomUUID?: () => string } | undefined =
    typeof crypto === 'undefined' ? undefined : (crypto as { randomUUID?: () => string });
  if (c?.randomUUID) {
    return c.randomUUID();
  }
  // Fallback: RFC4122-ish v4 string for environments without crypto.randomUUID.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replaceAll(/[xy]/g, (ch) => {
    const r = Math.trunc(Math.random() * 16);
    const v = ch === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
