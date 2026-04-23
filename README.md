# durion-positivity-sdk-angular

Angular-native TypeScript client SDK for the [Durion Positivity POS](https://github.com/louisburroughs/durion-positivity-backend) backend platform. Provides strongly-typed, OpenAPI-generated Angular services (`@Injectable({ providedIn: 'root' })`) for every backend microservice, returning `Observable<T>` from all API methods for seamless integration with Angular's reactive ecosystem.

This is the **Angular-native** sibling of [durion-positivity-sdk](https://github.com/positivity-durion/durion-positivity-sdk) (the `typescript-fetch` variant). Choose this repo when building Angular applications; choose the fetch variant for framework-agnostic or Node.js use.

---

## Key Differences from durion-positivity-sdk

| Feature                  | `durion-positivity-sdk`             | `durion-positivity-sdk-angular`                |
| ------------------------ | ----------------------------------- | ---------------------------------------------- |
| OpenAPI generator        | `typescript-fetch`                  | `typescript-angular`                           |
| Return type              | `Promise<T>`                        | `Observable<T>`                                |
| Integration style        | `createXxxClient(config)` factory   | `inject(XxxService)` — Angular DI              |
| HTTP layer               | Native Fetch + `@durion-sdk/transport` | Angular `HttpClient` + `@durion-sdk/transport` |
| `provideHttpClient()`    | Not required                        | **Required** in `app.config.ts`                |
| Angular version target   | Peer dep only                       | `ngVersion: 21`                                |
| `@Injectable` scope      | N/A                                 | `providedIn: 'root'` (tree-shakeable)          |

---

## Table of Contents

- [durion-positivity-sdk-angular](#durion-positivity-sdk-angular)
  - [Key Differences from durion-positivity-sdk](#key-differences-from-durion-positivity-sdk)
  - [Table of Contents](#table-of-contents)
  - [Package Catalogue](#package-catalogue) (20 packages)
  - [Architecture](#architecture)
  - [Installation](#installation)
    - [In a monorepo (workspaces)](#in-a-monorepo-workspaces)
    - [In a consumer application (local path)](#in-a-consumer-application-local-path)
    - [From npm (when published)](#from-npm-when-published)
    - [Requirements](#requirements)
  - [App Setup](#app-setup)
    - [Providing HttpClient](#providing-httpclient)
    - [Auth token via interceptor (recommended)](#auth-token-via-interceptor-recommended)
    - [Auth token via transport config](#auth-token-via-transport-config)
  - [Quick Start](#quick-start)
  - [Configuration Reference](#configuration-reference)
    - [Headers injected on every request](#headers-injected-on-every-request)
    - [Token management](#token-management)
  - [Domain Clients](#domain-clients)
    - [Security (`@durion-sdk/security`)](#security-durion-sdksecurity)
    - [Order (`@durion-sdk/order`)](#order-durion-sdkorder)
    - [Accounting (`@durion-sdk/accounting`)](#accounting-durion-sdkaccounting)
  - [Workflow Helpers](#workflow-helpers)
    - [`SecurityAuthWorkflow`](#securityauthworkflow)
    - [`OrderPriceOverrideWorkflow`](#orderpriceoverrideworkflow)
    - [`WorkorderEstimateWorkflow`](#workorderestimateworkflow)
  - [Error Handling](#error-handling)
    - [`DurionApiError` shape](#durionapierror-shape)
  - [Generated Code](#generated-code)
    - [Regenerating clients](#regenerating-clients)
    - [What is generated vs. hand-written](#what-is-generated-vs-hand-written)
  - [Build \& Outputs](#build--outputs)
  - [Testing](#testing)
  - [Scripts Reference](#scripts-reference)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
---

## Package Catalogue

All packages are versioned together at `0.1.0-alpha` and scoped under `@durion-sdk`.

| Package                         | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| `@durion-sdk/transport`         | Shared `SdkHttpClient`, `DurionSdkConfig`, and error types |
| `@durion-sdk/security`          | Auth, JWT, roles, users, permissions                       |
| `@durion-sdk/order`             | Sales orders, price overrides, cancellations               |
| `@durion-sdk/inventory`         | Stock movements, returns, reservations                     |
| `@durion-sdk/workorder`         | Work orders, estimates, change requests                    |
| `@durion-sdk/accounting`        | GL, journal entries, payments, Stripe, financial reporting |
| `@durion-sdk/catalog`           | Product catalog management                                 |
| `@durion-sdk/customer`          | CRM: accounts, contacts, vehicles, promotions              |
| `@durion-sdk/invoice`           | Invoice generation and delivery                            |
| `@durion-sdk/location`          | Multi-store location management                            |
| `@durion-sdk/people`            | Employee profiles and assignments                          |
| `@durion-sdk/price`             | Dynamic pricing engine                                     |
| `@durion-sdk/shop-manager`      | Shop operations and dispatch                               |
| `@durion-sdk/image`             | Product and asset image management                         |
| `@durion-sdk/event-receiver`    | Internal event ingestion                                   |
| `@durion-sdk/vehicle-fitment`   | Part-to-vehicle compatibility data                         |
| `@durion-sdk/vehicle-inventory` | Vehicle stock tracking                                     |
| `@durion-sdk/documents`         | Document generation and management                         |
| `@durion-sdk/inquiry`           | Customer inquiry and quote management                      |
| `@durion-sdk/bulk-loader`       | Bulk data import and batch processing                      |

`@durion-sdk/internal` (private) covers the internal tax service and is not published.

---

## Architecture

```
Consumer Angular application
        │
        ▼
inject(XxxApiService)  ← Angular DI (@Injectable({ providedIn: 'root' }))
        │
        ▼
@durion-sdk/{domain} package
  ├── Generated @Injectable service classes   ← typescript-angular output (do not edit)
  ├── Generated model interfaces              ← do not edit
  └── Workflow helpers                        ← hand-written, compose Observable calls
        │
        ▼
Angular HttpClient  +  @durion-sdk/transport
  ├── Authorization: Bearer <token>   (via interceptor or transport config)
  ├── X-API-Version: {apiVersion}
  ├── X-Correlation-Id: {uuid}
  └── Idempotency-Key: {key}          (mutating methods only)
```

Generated service methods return `Observable<T>`. RxJS operators (`pipe`, `switchMap`, `takeUntilDestroyed`, etc.) work natively without any adapter.

---

## Installation

### In a monorepo (workspaces)

Install everything at the repo root:

```bash
npm install
```

npm workspaces links all `packages/*` as `@durion-sdk/*` automatically.

### In a consumer application (local path)

```bash
npm install /path/to/durion-positivity-sdk-angular/packages/sdk-security
npm install /path/to/durion-positivity-sdk-angular/packages/sdk-transport
```

### From npm (when published)

```bash
npm install @durion-sdk/security @durion-sdk/transport
```

### Requirements

- **Angular 21+**
- **Node.js 18+**
- **TypeScript 5.4+** for consumers using type declarations
- `crypto.randomUUID` available (modern browser or Node.js 19+; polyfill otherwise)

---

## App Setup

### Providing HttpClient

Angular services generated by the `typescript-angular` generator depend on `HttpClient`. Provide it in your `app.config.ts`:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    // ...
  ],
};
```

### Auth token via interceptor (recommended)

Use a functional Angular HTTP interceptor to attach the `Authorization` header on every outbound request. This approach works with the generated Angular services and respects Angular's DI lifecycle:

```typescript
// core/auth/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthTokenStore } from './auth-token-store.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthTokenStore).getAccessToken();
  if (!token) return next(req);

  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  }));
};
```

### Auth token via transport config

Alternatively, pass `token` via `DurionSdkConfig` in the hand-written `createXxxClient()` factory (for packages that still use the factory pattern):

```typescript
import { DurionSdkConfig } from '@durion-sdk/transport';

const config: DurionSdkConfig = {
  baseUrl: 'https://api.example.com',
  token: () => inject(AuthTokenStore).getAccessToken(),
};
```

---

## Quick Start

Inject services directly into Angular components and services. No factory setup required after Angular DI is configured:

```typescript
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthAPIApiService, TokenPairResponse } from '@durion-sdk/security';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthAPIApiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly state = signal<'idle' | 'loading' | 'error'>('idle');

  login(username: string, password: string): void {
    this.state.set('loading');
    this.authService
      .login({ loginRequest: { username, password } })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (tokens: TokenPairResponse) => {
          this.tokenStore.save(tokens);
          this.state.set('idle');
        },
        error: () => this.state.set('error'),
      });
  }
}
```

---

## Configuration Reference

The shared transport configuration is provided via `DurionSdkConfig` from `@durion-sdk/transport`. It controls cross-cutting request concerns that apply regardless of which HTTP adapter is in use.

```typescript
import { DurionSdkConfig } from '@durion-sdk/transport';

const config: DurionSdkConfig = {
  // Required — root URL of the API gateway
  baseUrl: 'https://api.example.com',

  // Optional — called before every request; can be async
  // Prefer Angular interceptors for auth instead (see App Setup above)
  token: async () => await myTokenStore.getAccessToken(),

  // Optional — sent as X-API-Version header (default: '1')
  apiVersion: '1',

  // Optional — override the default crypto.randomUUID() correlation ID
  correlationIdProvider: () => myTracer.currentSpanId(),

  // Optional — override the default idempotency key generator
  // Only called for POST, PUT, PATCH, DELETE
  idempotencyKeyGenerator: (method, url) => `${method}:${url}:${Date.now()}`,
};
```

### Headers injected on every request

| Header             | Value                  | Notes                                     |
| ------------------ | ---------------------- | ----------------------------------------- |
| `Authorization`    | `Bearer <token>`       | Via interceptor or `config.token`         |
| `X-API-Version`    | `config.apiVersion`    | Default `'1'`                             |
| `X-Correlation-Id` | UUID v4                | Per-request, from `correlationIdProvider` |
| `Idempotency-Key`  | Generated key          | Mutating methods only                     |
| `Content-Type`     | `application/json`     | When a request body is present            |

### Token management

Prefer an Angular HTTP interceptor (see [App Setup](#app-setup)) for token injection — it participates in Angular's DI lifecycle and integrates cleanly with `provideHttpClient`. The `config.token()` callback is also supported for scenarios where the factory pattern is used.

---

## Domain Clients

All generated services are `@Injectable({ providedIn: 'root' })`. Inject them with Angular's `inject()` function or constructor injection.

### Security (`@durion-sdk/security`)

```typescript
import { inject } from '@angular/core';
import {
  AdminAccountStateAPIApiService,
  AuditApiService,
  AuthAPIApiService,
  AuthorizationApiService,
  JWTAPIApiService,
  PermissionRegistryApiService,
  PrincipalRoleManagementApiService,
  RoleManagementApiService,
  SelfRegistrationReviewAPIApiService,
  UserAPIApiService,
  UserRoleManagementApiService,
} from '@durion-sdk/security';

// In a component or service:
private readonly authService = inject(AuthAPIApiService);
private readonly userService = inject(UserAPIApiService);
```

### Order (`@durion-sdk/order`)

```typescript
import { inject } from '@angular/core';
import {
  OrderCancellationApiService,
  PriceOverridesApiService,
  SalesOrdersApiService,
} from '@durion-sdk/order';

private readonly salesOrders = inject(SalesOrdersApiService);
private readonly priceOverrides = inject(PriceOverridesApiService);
```

### Accounting (`@durion-sdk/accounting`)

```typescript
import { inject } from '@angular/core';
import {
  ApPaymentsApiService,
  AccountingEventsApiService,
  AuditTrailApiService,
  CreditMemosApiService,
  FinancialReportingApiService,
  GlAccountsApiService,
  JournalEntriesApiService,
} from '@durion-sdk/accounting';

private readonly journalEntries = inject(JournalEntriesApiService);
private readonly financialReporting = inject(FinancialReportingApiService);
```

All other domains follow the same `inject(XxxApiService)` pattern. Refer to each package's `src/index.ts` for the full list of exported service classes.

---

## Workflow Helpers

Workflow classes compose multiple raw Observable API calls into named, intent-driven operations. They are hand-written (not generated) and return `Observable<T>` throughout. They live in each package's `src/workflows/` directory.

### `SecurityAuthWorkflow`

```typescript
import { inject } from '@angular/core';
import { SecurityAuthWorkflow, AuthAPIApiService, JWTAPIApiService } from '@durion-sdk/security';

// Compose in a service:
private readonly workflow = new SecurityAuthWorkflow(
  inject(AuthAPIApiService),
  inject(JWTAPIApiService),
);

// Usage (all return Observable<T>):
this.workflow.login({ loginRequest: { username, password } })
  .subscribe(tokens => this.tokenStore.save(tokens));

this.workflow.refresh({ refreshTokenRequest: { refresh_token } })
  .subscribe(tokens => this.tokenStore.save(tokens));
```

### `OrderPriceOverrideWorkflow`

```typescript
import { OrderPriceOverrideWorkflow, PriceOverridesApiService } from '@durion-sdk/order';

private readonly workflow = new OrderPriceOverrideWorkflow(inject(PriceOverridesApiService));

this.workflow.submit({ overrideRequest: { ... } }).subscribe();
this.workflow.approve({ approvalId, approvalRequest: { ... } }).subscribe();
this.workflow.reject({ approvalId, rejectionRequest: { ... } }).subscribe();
this.workflow.getPending().subscribe(overrides => this.overrides.set(overrides));
```

### `WorkorderEstimateWorkflow`

```typescript
import { WorkorderEstimateWorkflow, EstimateAPIApiService } from '@durion-sdk/workorder';

private readonly workflow = new WorkorderEstimateWorkflow(inject(EstimateAPIApiService));

this.workflow.create({ estimateRequest: { ... } }).subscribe(estimate => ...);
this.workflow.submitForApproval({ estimateId }).subscribe();
this.workflow.approve({ estimateId, approvalRequest: { ... } }).subscribe();
this.workflow.decline({ estimateId, declineRequest: { ... } }).subscribe();
this.workflow.promoteToWorkorder({ estimateId }).subscribe();
```

Other available workflows: `WorkorderChangeRequestWorkflow`, `AccountingEventWorkflow`.

---

## Error Handling

Non-2xx responses from the backend return a JSON body matching the `DurionApiError` interface. The SDK surfaces these as `DurionSdkError` instances in the Observable `error` channel.

```typescript
import { DurionSdkError } from '@durion-sdk/transport';

this.authService
  .login({ loginRequest: { username, password } })
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe({
    next: tokens => { /* ... */ },
    error: (err: unknown) => {
      if (err instanceof DurionSdkError) {
        const { status, code, message, correlationId, fieldErrors } = err.error;

        console.error(`[${status}] ${code}: ${message}`);
        console.error(`Correlation ID: ${correlationId}`);

        // Validation errors on 400 responses
        fieldErrors?.forEach(({ field, message }) => {
          console.error(`  ${field}: ${message}`);
        });
      }
    },
  });
```

### `DurionApiError` shape

```typescript
interface DurionApiError {
  code: string;            // Machine-readable error code, e.g. "INVALID_REQUEST"
  message: string;         // Human-readable description
  status: number;          // HTTP status code
  timestamp: string;       // ISO 8601
  correlationId: string;   // Matches the X-Correlation-Id sent with the request
  fieldErrors?: Array<{ field: string; message: string }>;
  referenceId?: string;    // Support ticket reference
  nextAction?: string;     // Suggested remediation for the caller
  supportAction?: string;
}
```

---

## Generated Code

Client services and model interfaces are generated by **OpenAPI Generator v7.5.0** (`typescript-angular` generator, `ngVersion: 21`) from the backend service OpenAPI specs.

**Do not edit files in `src/apis/` or `src/models/` directly** — they will be overwritten on the next `npm run generate`.

### Regenerating clients

```bash
# Regenerate all modules (uses generate_angular.sh internally)
npm run generate

# Regenerate a single module
./scripts/generate_angular.sh --module security
```

Valid module names: `security`, `order`, `inventory`, `workorder`, `accounting`, `catalog`, `customer`, `invoice`, `location`, `people`, `price`, `shop-manager`, `image`, `event-receiver`, `vehicle-fitment`, `vehicle-inventory`, `internal`, `documents`, `inquiry`, `bulk-loader`.

The generation script reads backend specs from the sibling `durion-positivity-backend/` repository:

```
../durion-positivity-backend/pos-security-service/openapi.yaml
../durion-positivity-backend/pos-order/openapi.yaml
# ... one spec per domain service
```

A post-processing step patches `sdk-inventory` to remove a duplicate `CycleCountAPIApi` export caused by multi-tag operations.

### What is generated vs. hand-written

| Path                            | Origin                                       |
| ------------------------------- | -------------------------------------------- |
| `packages/sdk-*/src/apis/`      | Generated — do not edit                      |
| `packages/sdk-*/src/models/`    | Generated — do not edit                      |
| `packages/sdk-*/src/runtime.ts` | Generated — do not edit                      |
| `packages/sdk-*/src/index.ts`   | Hand-written factory / service configuration |
| `packages/sdk-*/src/workflows/` | Hand-written workflow helpers                |
| `packages/sdk-transport/src/`   | Hand-written transport layer                 |

---

## Build & Outputs

Each package is compiled with `tsc` (no bundler) into two module formats:

| Format            | Output path         | `package.json` field |
| ----------------- | ------------------- | -------------------- |
| CommonJS          | `dist/index.js`     | `"main"`             |
| ES Module         | `dist/esm/index.js` | `"module"`           |
| Type declarations | `dist/index.d.ts`   | `"typings"`          |

The `"exports"` map in each `package.json` wires up the correct entry per resolver:

```json
"exports": {
  ".": {
    "types":   "./dist/index.d.ts",
    "import":  "./dist/esm/index.js",
    "require": "./dist/index.js",
    "default": "./dist/index.js"
  }
}
```

**Build all packages:**

```bash
npm run build
```

**Build a single package:**

```bash
cd packages/sdk-order && npm run build
```

---

## Testing

Tests are written with **Jest + ts-jest** and cover:

- Package structure and `package.json` validity
- OpenAPI generation pipeline correctness
- Transport layer (headers, auth, correlation, idempotency, URL normalisation)
- Angular service injection and `Observable` return types
- All 20 public modules exported correctly
- `DurionApiError` / `DurionSdkError` model
- Workflow delegation (each Observable method calls the correct underlying service)
- Contract diff validation

```bash
# Run full suite
npm test

# Run a single suite
npx jest src/sdk-003-transport.test.ts
```

**Coverage:** 80% threshold enforced across branches, functions, lines, and statements. Generated code (`apis/`, `models/`, `runtime.ts`) is excluded from coverage.

---

## Scripts Reference

| Script     | Command            | Description                                                        |
| ---------- | ------------------ | ------------------------------------------------------------------ |
| `build`    | `npm run build`    | Compile all packages (CJS + ESM + types)                           |
| `test`     | `npm test`         | Run Jest suite                                                     |
| `lint`     | `npm run lint`     | ESLint + TypeScript linting                                        |
| `generate` | `npm run generate` | Regenerate all clients from backend OpenAPI specs (Angular-native) |

**Manual generation scripts:**

| Script                            | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| `./scripts/generate-openapi.sh`   | Angular `typescript-angular` generation pipeline (primary)   |
| `./scripts/diff-contracts.sh`     | Diff current specs against previously generated contracts    |

---

## Project Structure

```
durion-positivity-sdk-angular/
├── packages/
│   ├── sdk-transport/            # @durion-sdk/transport — shared HTTP client & error types
│   │   └── src/
│   │       ├── SdkHttpClient.ts
│   │       ├── DurionSdkConfig.ts
│   │       └── index.ts
│   ├── sdk-security/             # @durion-sdk/security
│   │   └── src/
│   │       ├── apis/             # Generated Angular services (do not edit)
│   │       ├── models/           # Generated model interfaces (do not edit)
│   │       ├── workflows/        # Hand-written workflow helpers
│   │       ├── runtime.ts        # Generated (do not edit)
│   │       └── index.ts          # Service/module configuration
│   ├── sdk-order/                # @durion-sdk/order
│   ├── sdk-inventory/            # @durion-sdk/inventory
│   ├── sdk-workorder/            # @durion-sdk/workorder
│   ├── sdk-accounting/           # @durion-sdk/accounting
│   ├── sdk-catalog/              # @durion-sdk/catalog
│   ├── sdk-customer/             # @durion-sdk/customer
│   ├── sdk-invoice/              # @durion-sdk/invoice
│   ├── sdk-location/             # @durion-sdk/location
│   ├── sdk-people/               # @durion-sdk/people
│   ├── sdk-price/                # @durion-sdk/price
│   ├── sdk-shop-manager/         # @durion-sdk/shop-manager
│   ├── sdk-image/                # @durion-sdk/image
│   ├── sdk-event-receiver/       # @durion-sdk/event-receiver
│   ├── sdk-vehicle-fitment/      # @durion-sdk/vehicle-fitment
│   ├── sdk-vehicle-inventory/    # @durion-sdk/vehicle-inventory
│   ├── sdk-documents/            # @durion-sdk/documents
│   ├── sdk-inquiry/              # @durion-sdk/inquiry
│   ├── sdk-bulk-loader/          # @durion-sdk/bulk-loader
│   └── sdk-internal/             # private — internal tax service only
├── src/                          # Shared test utilities and fixtures
├── scripts/
│   ├── generate-openapi.sh       # Angular OpenAPI generation pipeline
│   └── diff-contracts.sh         # Contract diff tool
├── openapitools.json             # OpenAPI Generator config (typescript-angular)
├── jest.config.js                # Test configuration
├── tsconfig.json                 # Root TypeScript config (strict, ES2022)
└── package.json                  # npm workspaces root
```

---

## Contributing

1. **Install** — `npm install` from the repo root.
2. **Build** — `npm run build` before running tests.
3. **Use `generate-openapi.sh`** — this repo targets `typescript-angular`; run `npm run generate` to regenerate packages.
4. **Never edit generated files** — modify the backend OpenAPI spec and run `npm run generate` instead.
5. **Workflow helpers** — new multi-step operations belong in `packages/sdk-{domain}/src/workflows/`; they must return `Observable<T>` and use `inject()` or constructor injection, not factory functions.
6. **Transport changes** — any new header or request behaviour goes in `SdkHttpClient`; update the test in `sdk-007-transport-enhancements.test.ts`.
7. **Tests required** — coverage threshold is 80%; new workflow methods need a corresponding test. Angular-specific tests should assert Observable behaviour, not Promise.
8. **Lint** — `npm run lint` must pass before opening a PR.
9. **Interceptors over `config.token`** — for Angular applications, prefer Angular HTTP interceptors for auth rather than the `config.token` callback.


All packages are versioned together at `0.1.0-alpha` and scoped under `@durion-sdk`.

| Package                         | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| `@durion-sdk/transport`         | Shared `SdkHttpClient`, `DurionSdkConfig`, and error types |
| `@durion-sdk/security`          | Auth, JWT, roles, users, permissions                       |
| `@durion-sdk/order`             | Sales orders, price overrides, cancellations               |
| `@durion-sdk/inventory`         | Stock movements, returns, reservations                     |
| `@durion-sdk/workorder`         | Work orders, estimates, change requests                    |
| `@durion-sdk/accounting`        | GL, journal entries, payments, Stripe, financial reporting |
| `@durion-sdk/catalog`           | Product catalog management                                 |
| `@durion-sdk/customer`          | CRM: accounts, contacts, vehicles, promotions              |
| `@durion-sdk/invoice`           | Invoice generation and delivery                            |
| `@durion-sdk/location`          | Multi-store location management                            |
| `@durion-sdk/people`            | Employee profiles and assignments                          |
| `@durion-sdk/price`             | Dynamic pricing engine                                     |
| `@durion-sdk/shop-manager`      | Shop operations and dispatch                               |
| `@durion-sdk/image`             | Product and asset image management                         |
| `@durion-sdk/event-receiver`    | Internal event ingestion                                   |
| `@durion-sdk/vehicle-fitment`   | Part-to-vehicle compatibility data                         |
| `@durion-sdk/vehicle-inventory` | Vehicle stock tracking                                     |

`@durion-sdk/sdk-internal` (private) covers the internal tax service and is not published.

---

## Architecture

```
Consumer application
        │
        ▼
@durion-sdk/{domain}
  ├── createXxxClient(config)      ← factory function (public API)
  │     └── returns { xxxApi, yyyApi, ... }
  ├── Generated API classes        ← OpenAPI Generator output (do not edit)
  ├── Generated model interfaces   ← OpenAPI Generator output (do not edit)
  └── Workflow helpers             ← hand-written, compose API calls
        │
        ▼
@durion-sdk/transport
  └── SdkHttpClient(config)
        ├── Authorization: Bearer <token>  (from config.token())
        ├── X-API-Version: {apiVersion}
        ├── X-Correlation-Id: {uuid}
        └── Idempotency-Key: {key}         (mutating methods only)
```

Each domain package depends only on `@durion-sdk/transport`. The transport package has **zero runtime dependencies** — it uses the native Fetch API.

---

## Installation

### In a monorepo (workspaces)

Install everything at the root:

```bash
npm install
```

npm workspaces links all `packages/*` as `@durion-sdk/*` automatically.

### In a consumer application (local path)

```bash
npm install /path/to/durion-positivity-sdk/packages/sdk-security
npm install /path/to/durion-positivity-sdk/packages/sdk-transport
```

### From npm (when published)

```bash
npm install @durion-sdk/security @durion-sdk/transport
```

### Requirements

- **Node.js 18+** (Fetch API built-in; use a polyfill on 14–17)
- **TypeScript 5.4+** for consumers using type declarations
- `crypto.randomUUID` available (Node 19+ or modern browser; polyfill otherwise)

---

## Quick Start

```typescript
import { createSecurityClient } from "@durion-sdk/security";

const security = createSecurityClient({
  baseUrl: "https://api.example.com",
  token: async () => localStorage.getItem("access_token") ?? "",
});

// Login
const response = await security.authAPIApi.login({
  loginRequest: { username: "user@example.com", password: "secret" },
});

// Every other domain follows the same pattern
import { createOrderClient } from "@durion-sdk/order";

const orders = createOrderClient({
  baseUrl: "https://api.example.com",
  token: async () => getAccessToken(),
});

const salesOrders = await orders.salesOrdersApi.listOrders();
```

---

## Configuration Reference

All clients accept a single `DurionSdkConfig` object from `@durion-sdk/transport`.

```typescript
import { DurionSdkConfig } from "@durion-sdk/transport";

const config: DurionSdkConfig = {
  // Required — root URL of the API gateway
  baseUrl: "https://api.example.com",

  // Optional — called before every request; can be async
  token: async () => await myTokenStore.getAccessToken(),

  // Optional — sent as X-API-Version header (default: '1')
  apiVersion: "1",

  // Optional — override the default crypto.randomUUID() correlation ID
  correlationIdProvider: () => myTracer.currentSpanId(),

  // Optional — override the default idempotency key generator
  // Only called for POST, PUT, PATCH, DELETE
  idempotencyKeyGenerator: (method, url) => `${method}:${url}:${Date.now()}`,
};
```

### Headers injected on every request

| Header             | Value               | Notes                                     |
| ------------------ | ------------------- | ----------------------------------------- |
| `Authorization`    | `Bearer <token>`    | Only when `config.token` is set           |
| `X-API-Version`    | `config.apiVersion` | Default `'1'`                             |
| `X-Correlation-Id` | UUID v4             | Per-request, from `correlationIdProvider` |
| `Idempotency-Key`  | Generated key       | Mutating methods only                     |
| `Content-Type`     | `application/json`  | When a request body is present            |

### Token management

The SDK calls `config.token()` immediately before each request. **The application is responsible for token refresh and storage.** The SDK never caches or reuses a previously returned token value.

```typescript
// Angular example — delegate to your AuthService
token: () => inject(AuthService).getAccessToken(),

// Node.js example — read from a shared store
token: async () => tokenStore.get(),
```

---

## Domain Clients

Each `createXxxClient(config)` factory returns an object whose keys are the API group instances for that service.

### Security (`@durion-sdk/security`)

```typescript
import { createSecurityClient } from "@durion-sdk/security";

const {
  adminAccountStateAPIApi,
  auditApi,
  authAPIApi,
  authorizationApi,
  jwtAPIApi,
  permissionRegistryApi,
  principalRoleManagementApi,
  roleManagementApi,
  selfRegistrationReviewAPIApi,
  userAPIApi,
  userRoleManagementApi,
} = createSecurityClient(config);
```

### Order (`@durion-sdk/order`)

```typescript
import { createOrderClient } from "@durion-sdk/order";

const { orderCancellationApi, priceOverridesApi, salesOrdersApi } =
  createOrderClient(config);
```

### Accounting (`@durion-sdk/accounting`)

```typescript
import { createAccountingClient } from "@durion-sdk/accounting";

const {
  apPaymentsApi,
  accountingEventsApi,
  auditTrailApi,
  creditMemosApi,
  defaultGLMappingsApi,
  financialReportingApi,
  glAccountsApi,
  glMappingAPIApi,
  invoicePaymentsApi,
  journalEntriesApi,
  mappingKeysApi,
  paymentApplicationsApi,
  postingCategoriesApi,
  postingRulesApi,
  vendorBillAPIApi,
} = createAccountingClient(config);
```

All other domains follow the same `createXxxClient(config)` → `{ ...apiGroups }` pattern. Refer to each package's `src/index.ts` for the full list of API group keys.

---

## Workflow Helpers

Workflow classes compose multiple raw API calls into named, intent-driven operations. They live in each package's `src/workflows/` directory and are hand-written (not generated).

### `SecurityAuthWorkflow`

```typescript
import { SecurityAuthWorkflow } from "@durion-sdk/security";

const client = createSecurityClient(config);
const auth = new SecurityAuthWorkflow(client.authAPIApi, client.jwtAPIApi);

const tokens = await auth.login({ loginRequest: { username, password } });
const refreshed = await auth.refresh({
  refreshTokenRequest: { refresh_token },
});
await auth.validate({ token });
await auth.revoke({ token });
```

### `OrderPriceOverrideWorkflow`

```typescript
import { OrderPriceOverrideWorkflow } from '@durion-sdk/order';

const client = createOrderClient(config);
const overrides = new OrderPriceOverrideWorkflow(client.priceOverridesApi);

await overrides.submit({ overrideRequest: { ... } });
await overrides.approve({ approvalId, approvalRequest: { ... } });
await overrides.reject({ approvalId, rejectionRequest: { ... } });
const pending = await overrides.getPending();
```

### `WorkorderEstimateWorkflow`

```typescript
import { WorkorderEstimateWorkflow } from '@durion-sdk/workorder';

const client = createWorkorderClient(config);
const estimates = new WorkorderEstimateWorkflow(client.estimateAPIApi);

const estimate = await estimates.create({ estimateRequest: { ... } });
await estimates.submitForApproval({ estimateId });
await estimates.approve({ estimateId, approvalRequest: { ... } });
await estimates.decline({ estimateId, declineRequest: { ... } });
await estimates.promoteToWorkorder({ estimateId });
```

Other available workflows: `WorkorderChangeRequestWorkflow`, `AccountingEventWorkflow`.

---

## Error Handling

Non-2xx responses from the backend return a JSON body matching the `DurionApiError` interface. The SDK surfaces these as `DurionSdkError` instances.

```typescript
import { DurionSdkError } from "@durion-sdk/transport";

try {
  await client.authAPIApi.login({ loginRequest: { username, password } });
} catch (err) {
  if (err instanceof DurionSdkError) {
    const { status, code, message, correlationId, fieldErrors } = err.error;

    console.error(`[${status}] ${code}: ${message}`);
    console.error(`Correlation ID: ${correlationId}`);

    // Validation errors on 400 responses
    fieldErrors?.forEach(({ field, message }) => {
      console.error(`  ${field}: ${message}`);
    });
  }
}
```

### `DurionApiError` shape

```typescript
interface DurionApiError {
  code: string; // Machine-readable error code, e.g. "INVALID_REQUEST"
  message: string; // Human-readable description
  status: number; // HTTP status code
  timestamp: string; // ISO 8601
  correlationId: string; // Matches the X-Correlation-Id sent with the request
  fieldErrors?: Array<{ field: string; message: string }>;
  referenceId?: string; // Support ticket reference
  nextAction?: string; // Suggested remediation for the caller
  supportAction?: string;
}
```

---

## Generated Code

Client classes and model interfaces are generated by **OpenAPI Generator v7.5.0** (`typescript-fetch` generator) from the backend service OpenAPI specs.

**Do not edit files in `src/apis/` or `src/models/` directly** — they will be overwritten on the next `npm run generate`.

### Regenerating clients

```bash
npm run generate
```

The generation script (`scripts/generate-openapi.sh`) reads backend specs from the sibling `durion-positivity-backend/` repository:

```
../durion-positivity-backend/pos-security-service/openapi.yaml
../durion-positivity-backend/pos-order/openapi.yaml
../durion-positivity-backend/pos-inventory/openapi.yaml
# ... one spec per domain service
```

After generation, a post-processing step patches `sdk-inventory` to remove a duplicate export.

### What is generated vs. hand-written

| Path                            | Origin                        |
| ------------------------------- | ----------------------------- |
| `packages/sdk-*/src/apis/`      | Generated — do not edit       |
| `packages/sdk-*/src/models/`    | Generated — do not edit       |
| `packages/sdk-*/src/runtime.ts` | Generated — do not edit       |
| `packages/sdk-*/src/index.ts`   | Hand-written factory function |
| `packages/sdk-*/src/workflows/` | Hand-written workflow helpers |
| `packages/sdk-transport/src/`   | Hand-written transport layer  |

---

## Build & Outputs

Each package is compiled with `tsc` (no bundler) into two module formats:

| Format            | Output path         | `package.json` field |
| ----------------- | ------------------- | -------------------- |
| CommonJS          | `dist/index.js`     | `"main"`             |
| ES Module         | `dist/esm/index.js` | `"module"`           |
| Type declarations | `dist/index.d.ts`   | `"typings"`          |

The `"exports"` map in each `package.json` wires up the correct entry per resolver:

```json
"exports": {
  ".": {
    "types":   "./dist/index.d.ts",
    "import":  "./dist/esm/index.js",
    "require": "./dist/index.js",
    "default": "./dist/index.js"
  }
}
```

**Build all packages:**

```bash
npm run build
```

**Build a single package:**

```bash
cd packages/sdk-order && npm run build
```

---

## Testing

Tests are written with **Jest + ts-jest** and cover:

- Package structure and `package.json` validity
- OpenAPI generation pipeline correctness
- Transport layer (headers, auth, correlation, idempotency, URL normalisation)
- Client factory integration with transport
- All 16 public modules exported correctly
- `DurionApiError` / `DurionSdkError` model
- Workflow delegation (each method calls the correct underlying API)
- Contract diff validation

```bash
# Run full suite (392 tests, ~15 test files)
npm test

# Run a single suite
npx jest src/sdk-003-transport.test.ts
```

**Coverage:** 80% threshold enforced across branches, functions, lines, and statements. Generated code (`apis/`, `models/`, `runtime.ts`) is excluded from coverage.

---

## Scripts Reference

| Script     | Command            | Description                                       |
| ---------- | ------------------ | ------------------------------------------------- |
| `build`    | `npm run build`    | Compile all packages (CJS + ESM + types)          |
| `test`     | `npm test`         | Run Jest suite (392 tests)                        |
| `lint`     | `npm run lint`     | ESLint + TypeScript linting                       |
| `generate` | `npm run generate` | Regenerate all clients from backend OpenAPI specs |

---

## Project Structure

```
durion-positivity-sdk/
├── packages/
│   ├── sdk-transport/            # @durion-sdk/transport — shared HTTP client & error types
│   │   └── src/
│   │       ├── SdkHttpClient.ts
│   │       ├── DurionSdkConfig.ts
│   │       └── index.ts
│   ├── sdk-security/             # @durion-sdk/security
│   │   └── src/
│   │       ├── apis/             # Generated API classes (do not edit)
│   │       ├── models/           # Generated model interfaces (do not edit)
│   │       ├── workflows/        # Hand-written workflow helpers
│   │       ├── runtime.ts        # Generated (do not edit)
│   │       └── index.ts          # Factory: createSecurityClient()
│   ├── sdk-order/                # @durion-sdk/order
│   ├── sdk-inventory/            # @durion-sdk/inventory
│   ├── sdk-workorder/            # @durion-sdk/workorder
│   ├── sdk-accounting/           # @durion-sdk/accounting
│   ├── sdk-catalog/              # @durion-sdk/catalog
│   ├── sdk-customer/             # @durion-sdk/customer
│   ├── sdk-invoice/              # @durion-sdk/invoice
│   ├── sdk-location/             # @durion-sdk/location
│   ├── sdk-people/               # @durion-sdk/people
│   ├── sdk-price/                # @durion-sdk/price
│   ├── sdk-shop-manager/         # @durion-sdk/shop-manager
│   ├── sdk-image/                # @durion-sdk/image
│   ├── sdk-event-receiver/       # @durion-sdk/event-receiver
│   ├── sdk-vehicle-fitment/      # @durion-sdk/vehicle-fitment
│   ├── sdk-vehicle-inventory/    # @durion-sdk/vehicle-inventory
│   └── sdk-internal/             # private — internal tax service only
├── src/                          # Shared test utilities and fixtures
├── scripts/
│   ├── generate-openapi.sh       # Angular OpenAPI generation pipeline
│   └── diff-contracts.sh         # Contract diff tool
├── openapitools.json             # OpenAPI Generator configuration
├── jest.config.js                # Test configuration
├── tsconfig.json                 # Root TypeScript config (strict, ES2022)
└── package.json                  # npm workspaces root
```

---

## Contributing

1. **Install** — `npm install` from the repo root.
2. **Build** — `npm run build` before running tests.
3. **Never edit generated files** — modify the backend OpenAPI spec and run `npm run generate` instead.
4. **Workflow helpers** — new multi-step operations belong in `packages/sdk-{domain}/src/workflows/`, not in the consuming application.
5. **Transport changes** — any new header or request behaviour goes in `SdkHttpClient`; update the test in `sdk-007-transport-enhancements.test.ts`.
6. **Tests required** — coverage threshold is 80%; new workflow methods need a corresponding test in `sdk-008-workflow-helpers.test.ts` or a domain-specific test file.
7. **Lint** — `npm run lint` must pass before opening a PR.
