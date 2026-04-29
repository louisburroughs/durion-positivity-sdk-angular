import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DurionSdkConfig } from './config';
import { DURION_SDK_CONFIG } from './transport.token';
import { DurionTransportInterceptor } from './transport.interceptor';

export function provideDurionTransport(config: DurionSdkConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: DURION_SDK_CONFIG, useValue: config },
    DurionTransportInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: DurionTransportInterceptor,
      multi: true,
    },
  ]);
}
