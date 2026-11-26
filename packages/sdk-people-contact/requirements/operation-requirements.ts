// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions and x-permission-conditions extensions of durion-positivity-backend/pos-people-contact/openapi.yaml.

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

/** Every operation of @durion-sdk/people-contact, by the name of its generated service method. */
export type PeopleContactOperationId =
  | 'assignRoleToPerson'
  | 'createPerson'
  | 'createUserPersonLink'
  | 'deleteOrganizationPostalAddress'
  | 'deletePerson'
  | 'deletePersonPostalAddress'
  | 'getCurrentPerson'
  | 'getLinksByPersonId'
  | 'getOrganizationPostalAddress'
  | 'getPeopleByIds'
  | 'getPersonById'
  | 'getPersonByUsername'
  | 'getPersonPostalAddress'
  | 'linkUserToPerson'
  | 'listAssignableRoles'
  | 'listPeople'
  | 'listRoleAssignments'
  | 'listUsernamesForPerson'
  | 'putOrganizationPostalAddress'
  | 'putPersonPostalAddress'
  | 'replaceContactPoints'
  | 'replayPersonFacts'
  | 'resolvePerson'
  | 'revokePersonRoleAssignment'
  | 'unlinkUserFromPerson'
  | 'updatePerson';

/**
 * What a caller must hold to call each operation: every `allOf` code and, when
 * `anyOf` is not empty, at least one `anyOf` code. A `conditional` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * `conditions`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleContactOperationId, OperationRequirement>>> = {
  assignRoleToPerson: { anyOf: ['people-contact:role:assign'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createPerson: { anyOf: ['people-contact:person:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  createUserPersonLink: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deleteOrganizationPostalAddress: { anyOf: ['people-contact:organization:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deletePerson: { anyOf: ['people-contact:person:delete'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  deletePersonPostalAddress: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getCurrentPerson: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getLinksByPersonId: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getOrganizationPostalAddress: { anyOf: ['people-contact:organization:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPeopleByIds: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPersonById: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPersonByUsername: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  getPersonPostalAddress: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  linkUserToPerson: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listAssignableRoles: { anyOf: ['people-contact:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listPeople: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listRoleAssignments: { anyOf: ['people-contact:role:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  listUsernamesForPerson: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  putOrganizationPostalAddress: { anyOf: ['people-contact:organization:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  putPersonPostalAddress: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replaceContactPoints: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  replayPersonFacts: { anyOf: ['people-contact:fact:replay'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  resolvePerson: { anyOf: ['people-contact:person:create'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  revokePersonRoleAssignment: { anyOf: ['people-contact:role:revoke'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  unlinkUserFromPerson: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false, conditions: {} },
  updatePerson: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false, conditions: {} },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleContactOperationId[] = [];
