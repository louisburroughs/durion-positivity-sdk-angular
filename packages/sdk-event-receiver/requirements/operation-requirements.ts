// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-event-receiver/openapi.yaml.

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

/** Every operation of @durion-sdk/event-receiver, by the name of its generated service method. */
export type EventReceiverOperationId =
  | 'createEventType'
  | 'deleteEventType'
  | 'getEventSummaryLastDay'
  | 'getEventSummaryLastHour'
  | 'getEventSummaryLastWeek'
  | 'getEventTypeByCode'
  | 'getEventTypeById'
  | 'listActiveEventTypes'
  | 'listEventTypes'
  | 'queryEventsByEntity'
  | 'receiveEvent'
  | 'updateEventType'
  | 'upsertEventType';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<EventReceiverOperationId, OperationRequirement>>> = {
  createEventType: { anyOf: [], allOf: [], authenticated: true },
  deleteEventType: { anyOf: [], allOf: [], authenticated: true },
  getEventSummaryLastDay: { anyOf: [], allOf: [], authenticated: true },
  getEventSummaryLastHour: { anyOf: [], allOf: [], authenticated: true },
  getEventSummaryLastWeek: { anyOf: [], allOf: [], authenticated: true },
  getEventTypeByCode: { anyOf: [], allOf: [], authenticated: true },
  getEventTypeById: { anyOf: [], allOf: [], authenticated: true },
  listActiveEventTypes: { anyOf: [], allOf: [], authenticated: true },
  listEventTypes: { anyOf: [], allOf: [], authenticated: true },
  queryEventsByEntity: { anyOf: [], allOf: [], authenticated: true },
  receiveEvent: { anyOf: [], allOf: [], authenticated: true },
  updateEventType: { anyOf: [], allOf: [], authenticated: true },
  upsertEventType: { anyOf: [], allOf: [], authenticated: true },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly EventReceiverOperationId[] = [];
