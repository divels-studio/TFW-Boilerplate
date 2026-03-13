# CHECKPOINT_PROTOCOL — Canonical (Single Source of Truth)

> **Status:** ACTIVE | **Version:** 0.2.0
> This is the **only canonical file** for checkpoint workflow. All skills (Codex/Claude/etc.) must follow it.

## Goal
Consistent "trail" after every completed ticket, without touching too many status files.

## Mandatory (always on completed ticket / checkpoint)

1) `SESSION_MEMORY.md`
   - 1-3 bullets (handoff only) + absolute dates.
2) `docs/workflow/SESSION_LOG.md`
   - Details: what/why/files/risks/verify.
3) Active backlog tracker in `docs/backlogs/active/BACKLOG_*.md`
   - Mark `[x] ... (done YYYY-MM-DD)` + update `Progress:` and `Next:`.
4) **Reset handoff files** (if they exist and have content):
   - `docs/handoff/codex-to-opus.md` → clear content
   - `docs/handoff/opus-to-codex.md` → clear content
   - This ensures a clean start for the next Implementor ↔ Auditor cycle.

## By necessity (agent evaluates and **proposes**, doesn't auto-update)
The agent shows a short list "I propose to update:" and waits for confirmation.

### Hard guard for docs-only / analysis / audit work
If current work is:
- docs-only analysis
- docs-only inventory / audit
- backlog discovery / classification
- backlog-only tracker progress

then the agent **does NOT propose** and **does NOT auto-update**:
- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `ROADMAP.md`

In those cases only update:
- `SESSION_MEMORY.md`
- `docs/workflow/SESSION_LOG.md`
- Active backlog tracker

Exceptions only if at least one of the following is true:
- Closing a milestone / package / backlog with real status-level change
- Release/version sync work
- Real user-visible shipped progress that needs to go into status/release docs

### `CHANGELOG.md`
Propose update if:
- There is a user-visible change (new feature, behavior change, important bug fix).
- There is version/release synchronization.

### `ROADMAP.md`
Propose update only if:
- Priorities/direction change or a key initiative is added/removed.

## Output format (for agents)
- Outcome (1-3 bullets)
- Files changed (list only)
- Verify (only relevant)
- Next (which ticket / what follows)
