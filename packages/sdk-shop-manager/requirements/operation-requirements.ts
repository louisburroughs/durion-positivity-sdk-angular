// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-shop-manager/openapi.yaml.

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
  readonly authenticated: boolean;
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
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<ShopManagerOperationId, OperationRequirement>>> = {
  cancelAppointment: { anyOf: ['appointments:cancel'], allOf: [], authenticated: false },
  createAppointment: { anyOf: ['appointments:create', 'shop:schedule:edit'], allOf: [], authenticated: false },
  createAssignment: { anyOf: ['shop:bay:assign'], allOf: [], authenticated: false },
  executeConflictOverride: { anyOf: ['shop:conflict:override'], allOf: [], authenticated: false },
  getAppointmentById: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], authenticated: false },
  getScheduleCapacity: { anyOf: ['shop:schedule:view'], allOf: [], authenticated: false },
  getShopAuditEntry: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], authenticated: false },
  getShopDashboard: { anyOf: ['shop:dashboard:view'], allOf: [], authenticated: false },
  getTechnicianPerson: { anyOf: ['shop:technician:view'], allOf: [], authenticated: false },
  listAppointments: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], authenticated: false },
  listAssignments: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], authenticated: false },
  listLocationTechnicians: { anyOf: ['shop:technician:view'], allOf: [], authenticated: false },
  listMechanics: { anyOf: ['shop:technician:view'], allOf: [], authenticated: false },
  replayShopManagerOutbox: { anyOf: ['shop:events:replay'], allOf: [], authenticated: false },
  rescheduleAppointment: { anyOf: ['appointments:reschedule'], allOf: [], authenticated: false },
  searchOpenings: { anyOf: ['shop:schedule:view'], allOf: [], authenticated: false },
  searchShopAudit: { anyOf: ['appointments:view', 'shop:schedule:view'], allOf: [], authenticated: false },
  upsertShop: { anyOf: ['shop:schedule:edit'], allOf: [], authenticated: false },
  viewSchedule: { anyOf: ['shop:schedule:view'], allOf: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly ShopManagerOperationId[] = [];
