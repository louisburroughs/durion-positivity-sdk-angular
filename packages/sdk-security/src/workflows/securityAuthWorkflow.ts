import { Injectable, inject } from '@angular/core';
import { AuthAPIService } from '../apis/authAPI.service';
import { JWTAPIService } from '../apis/jWTAPI.service';

@Injectable({ providedIn: 'root' })
export class SecurityAuthWorkflow {
  private readonly authApi = inject(AuthAPIService);
  private readonly jwtApi = inject(JWTAPIService);

  /** @operationId login */
  login(...args: unknown[]) {
    return (this.authApi.login as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId refreshAccessToken */
  refresh(...args: unknown[]) {
    return (this.jwtApi.refreshAccessToken as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId validateToken */
  validate(...args: unknown[]) {
    return (this.jwtApi.validateToken as (...a: unknown[]) => unknown)(...args);
  }

  /** @operationId revokeToken */
  revoke(...args: unknown[]) {
    return (this.jwtApi.revokeToken as (...a: unknown[]) => unknown)(...args);
  }
}
