// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of `npm run generate`)
// from the x-required-permissions extensions of durion-positivity-backend/pos-people-contact/openapi.yaml.

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
 * asked for on some calls only and is never demanded here. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * `isOperationPermitted` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleContactOperationId, OperationRequirement>>> = {
  assignRoleToPerson: { anyOf: ['people-contact:role:assign'], allOf: [], conditional: [], authenticated: false },
  createPerson: { anyOf: ['people-contact:person:create'], allOf: [], conditional: [], authenticated: false },
  createUserPersonLink: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false },
  deleteOrganizationPostalAddress: { anyOf: ['people-contact:organization:edit'], allOf: [], conditional: [], authenticated: false },
  deletePerson: { anyOf: ['people-contact:person:delete'], allOf: [], conditional: [], authenticated: false },
  deletePersonPostalAddress: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false },
  getCurrentPerson: { anyOf: ['people:self:view'], allOf: [], conditional: [], authenticated: false },
  getLinksByPersonId: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false },
  getOrganizationPostalAddress: { anyOf: ['people-contact:organization:view'], allOf: [], conditional: [], authenticated: false },
  getPeopleByIds: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false },
  getPersonById: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false },
  getPersonByUsername: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false },
  getPersonPostalAddress: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false },
  linkUserToPerson: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false },
  listAssignableRoles: { anyOf: ['people-contact:role:view'], allOf: [], conditional: [], authenticated: false },
  listPeople: { anyOf: ['people-contact:person:view'], allOf: [], conditional: [], authenticated: false },
  listRoleAssignments: { anyOf: ['people-contact:role:view'], allOf: [], conditional: [], authenticated: false },
  listUsernamesForPerson: { anyOf: ['people-contact:userLink:view'], allOf: [], conditional: [], authenticated: false },
  putOrganizationPostalAddress: { anyOf: ['people-contact:organization:edit'], allOf: [], conditional: [], authenticated: false },
  putPersonPostalAddress: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false },
  replaceContactPoints: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false },
  replayPersonFacts: { anyOf: ['people-contact:fact:replay'], allOf: [], conditional: [], authenticated: false },
  resolvePerson: { anyOf: ['people-contact:person:create'], allOf: [], conditional: [], authenticated: false },
  revokePersonRoleAssignment: { anyOf: ['people-contact:role:revoke'], allOf: [], conditional: [], authenticated: false },
  unlinkUserFromPerson: { anyOf: ['people-contact:userLink:write'], allOf: [], conditional: [], authenticated: false },
  updatePerson: { anyOf: ['people-contact:person:edit'], allOf: [], conditional: [], authenticated: false },
};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleContactOperationId[] = [];
