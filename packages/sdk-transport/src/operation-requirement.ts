/**
 * One permission check an operation makes beyond its authorization expression
 * (backend #4067: `@PermissionCondition`, published as `x-permission-conditions`).
 * It is never demanded to call the operation; it names the code a page gates
 * one control or section on.
 */
export interface OperationCondition {
  /** The permission code the check asks for. */
  readonly code: string;
  /**
   * - `requiredWhen`: some calls are refused (403, or the module's documented
   *   refusal) without the code, as when a parameter is set or an amount is over
   *   a limit. Gate the control that makes such a call on it.
   * - `waives`: a holder skips a step every other caller must take (an approval
   *   token). Never a refusal on its own.
   * - `fields`: every call succeeds, but the `fields` of the response are null or
   *   absent without the code. Gate the section that shows them on it.
   */
  readonly kind: 'requiredWhen' | 'waives' | 'fields';
  /**
   * For `fields`: the 2xx response properties served only to holders, as JSON
   * paths (`items[].clockState`). Empty for every other kind.
   */
  readonly fields: readonly string[];
}

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
  /**
   * The operation's declared conditions by key (the spec's
   * `x-permission-conditions`), in declaration order; `{}` when it declares
   * none. The `requiredWhen` and `waives` codes are in `conditional` too, unless
   * `allOf` already has them; a `fields` code need not be. Not asked for by
   * `isOperationPermitted`.
   */
  readonly conditions: Readonly<Record<string, OperationCondition>>;
}

/**
 * Whether a signed-in caller holding `held` may call an operation.
 *
 * A missing requirement means the operation's needs are unknown, and the
 * answer is `false`: the caller is refused rather than let through
 * (fail closed). Pass the looked-up entry as is, `undefined` included.
 *
 * `conditional` codes and `conditions` are not asked for: `true` means the caller holds what
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
