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
   * The operation's authorization names the "any signed-in caller" sentinel.
   * With `anyOf` and `allOf` both empty, signing in is all the operation asks.
   */
  readonly authenticated: boolean;
}

/**
 * Whether a signed-in caller holding `held` may call an operation.
 *
 * A missing requirement means the operation's needs are unknown, and the
 * answer is `false`: the caller is refused rather than let through
 * (fail closed). Pass the looked-up entry as is, `undefined` included.
 */
export function isOperationPermitted(
  requirement: OperationRequirement | undefined,
  held: { has(code: string): boolean },
): boolean {
  if (!requirement) return false;
  if (!requirement.allOf.every((code) => held.has(code))) return false;
  return requirement.anyOf.length === 0 || requirement.anyOf.some((code) => held.has(code));
}
