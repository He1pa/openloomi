import type { JobTimezoneSource } from "@/lib/cron/types";

import { pickEffectiveTimezone } from "./pick-effective-timezone";
import {
  normalizeExplicitTimezone,
  resolveUserTimezone,
} from "./resolve-user-timezone";

/**
 * A scheduled job's materialized timezone and where it came from.
 *
 * This is the single value object every write path produces; it maps 1:1 to the
 * `scheduledJobs.timezone` + `scheduledJobs.timezoneSource` columns.
 */
export interface MaterializedJobTimezone {
  /** The job's stored execution/display timezone — always a valid IANA id. */
  timezone: string;
  /** Provenance: does the job own its timezone, or follow the account preference? */
  timezoneSource: JobTimezoneSource;
}

/**
 * THE single rule for a scheduled job's materialized timezone + provenance.
 *
 * - A valid explicit override => the job owns its timezone ("explicit"); it is
 *   NOT rewritten when the account preference later changes.
 * - Otherwise the job follows the account's effective timezone
 *   ("user_preference") and is re-aligned by {@link applyTimezoneToUserJobs}
 *   whenever the account timezone changes.
 *
 * The schedule type (cron / interval / once) is deliberately NOT an input here:
 * it only affects whether the *next run* is timezone-sensitive (handled by
 * `computeNextRun` / `recomputeJobsForTimezone`), never whether an explicit
 * timezone is honored. Every entry point must derive its stored timezone +
 * source from this one function instead of branching on schedule type, which is
 * the root cause of the recurring timezone bugs.
 *
 * @param explicitTimezone raw caller-provided override (a `schedule.timezone`,
 *   a form field, an MCP tool arg). `undefined` / `null` / blank => no override.
 *   A non-blank but invalid IANA string throws `InvalidScheduleTimezoneError`
 *   (via {@link normalizeExplicitTimezone}) so a bad value never silently falls
 *   through to the account timezone.
 * @param accountTimezone the already-resolved effective user timezone, used when
 *   there is no explicit override. Defended with a UTC fallback so the stored
 *   timezone is always a valid IANA id even if a caller passes a bad value.
 */
export function materializeJobTimezone(input: {
  explicitTimezone?: unknown;
  accountTimezone: string;
}): MaterializedJobTimezone {
  const explicit = normalizeExplicitTimezone(input.explicitTimezone);
  if (explicit) {
    return { timezone: explicit, timezoneSource: "explicit" };
  }
  return {
    timezone: pickEffectiveTimezone(input.accountTimezone, undefined, "UTC"),
    timezoneSource: "user_preference",
  };
}

/**
 * Async convenience for entry points that have a `userId`/`request` but have not
 * yet resolved the account timezone (HTTP routes, bootstrap). Resolves the
 * account preference only when there is no explicit override, then applies the
 * same {@link materializeJobTimezone} rule.
 *
 * A `null` / blank `explicitTimezone` therefore means "follow the account"
 * (resolved here) — this is the single seam that also expresses "revert a job
 * back to following the account timezone".
 */
export async function resolveJobTimezone(input: {
  userId: string;
  request?: Request;
  explicitTimezone?: unknown;
}): Promise<MaterializedJobTimezone> {
  const explicit = normalizeExplicitTimezone(input.explicitTimezone);
  if (explicit) {
    return { timezone: explicit, timezoneSource: "explicit" };
  }
  const accountTimezone = await resolveUserTimezone(
    input.userId,
    input.request,
  );
  return { timezone: accountTimezone, timezoneSource: "user_preference" };
}
