/**
 * What a caller must hold to be allowed to call one backend operation
 * (ADR-0079 section 8). Every generated package exports a map of these as
 * `OPERATION_REQUIREMENTS`, keyed by the name of the generated service method.
 */
export interface OperationRequirement {
  /** When not empty, the caller must hold at least one of these permission codes. */
  readonly anyOf: readonly string[];
  /** The caller must hold every one of these permission codes. */
  readonly allOf: readonly string[];
  /**
   * Codes the operation asks for on some calls only: when a parameter is set, or
   * when the caller is not reading their own record. Not needed to be permitted.
   * A caller without them can still be refused with 403 on a call that needs
   * one, so gate the control that makes such a call on the code as well.
   */
  readonly conditional: readonly string[];
  /**
   * The operation's authorization names the "any signed-in caller" sentinel.
   * With `anyOf`, `allOf` and `conditional` all empty, signing in is all the
   * operation asks.
   */
  readonly authenticated: boolean;
}

/**
 * Whether a signed-in caller holding `held` may call an operation.
 *
 * A missing requirement means the operation's needs are unknown, and the
 * answer is `false`: the caller is refused rather than let through
 * (fail closed). Pass the looked-up entry as is, `undefined` included.
 *
 * `conditional` codes are not asked for: `true` means the caller holds what
 * every call of the operation needs, not that no call can be refused.
 */
export function isOperationPermitted(
  requirement: OperationRequirement | undefined,
  held: { has(code: string): boolean },
): boolean {
  if (!requirement) return false;
  if (!requirement.allOf.every((code) => held.has(code))) return false;
  return requirement.anyOf.length === 0 || requirement.anyOf.some((code) => held.has(code));
}
