// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-shop-manager/openapi.yaml.

/**
 * One permission check the operation makes beyond its authorization
 * expression, by the key the spec gives it. The same shape as
 * `OperationCondition` in @durion-sdk/transport, which documents it.
 */
export interface OperationCondition {
  readonly code: string;
  readonly kind: 'requiredWhen' | 'waives' | 'fields';
  readonly fields: readonly string[];
}

/**
 * What a caller must hold to call one operation. The same shape as
 * `OperationRequirement` in @durion-sdk/transport, which documents it and
 * evaluates it (`isOperationPermitted`). Declared here as well because a
 * generated package cannot import another workspace package at build time; the
 * two are interchangeable.
 */
export interface OperationRequirement {
  readonly anyOf: readonly string[];
  readonly allOf: readonly string[];
  readonly conditional: readonly string[];
  readonly authenticated: boolean;
  readonly conditions: Readonly<Record<string, OperationCondition>>;
}

/** Every operation of @durion-sdk/shop-manager, by the name of its generated service method. */
export type ShopManagerOperationId =
  | 'cancelAppointment'
  | 'createAppointment'
  | 'createAssignment'
  | 'executeConflictOverride'
  | 'getAppointmentById'
  | 'getScheduleCapacity'
  | 'getShopAuditEntry'
  | 'getShopDashboard'
  | 'getTechnicianPerson'
  | 'listAppointments'
  | 'listAssignments'
  | 'listLocationTechnicians'
  | 'listMechanics'
  | 'replayShopManagerOutbox'
  | 'rescheduleAppointment'
  | 'searchOpenings'
  | 'searchShopAudit'
  | 'upsertShop'
  | 'viewSchedule';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<ShopManagerOperationId, OperationRequirement>>> = {
  cancelAppointment: { anyOf: ['appointments:cancel'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAppointment: { anyOf: ['appointments:create', 'shop:schedule:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createAssignment: { anyOf: ['shop:bay:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  executeConflictOverride: { anyOf: ['shop:conflict:override'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getAppointmentById: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getScheduleCapacity: { anyOf: ['shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getShopAuditEntry: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getShopDashboard: { anyOf: ['shop:dashboard:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getTechnicianPerson: { anyOf: ['shop:technician:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAppointments: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAssignments: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listLocationTechnicians: { anyOf: ['shop:technician:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listMechanics: { anyOf: ['shop:technician:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayShopManagerOutbox: { anyOf: ['shop:events:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  rescheduleAppointment: { anyOf: ['appointments:reschedule'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchOpenings: { anyOf: ['shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  searchShopAudit: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  upsertShop: { anyOf: ['shop:schedule:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  viewSchedule: { anyOf: ['shop:schedule:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly ShopManagerOperationId[] = [];
