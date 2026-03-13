# AGENTS — TFW (detailed rules)

> Detailed agent rules. Short auto-loaded entrypoint: `.claude/CLAUDE.md`

## Hard Rules

- **NEVER** revert/restore/reset/clean or any operation that undoes changes, unless the user explicitly requested it.
- **NEVER** touch files outside the requested scope (don't change/revert/clean files the user didn't ask about).

## Communication

- Follow user's language preference
- Be **concise** — skip obvious steps
- **No code in summaries** — code is in files

---

## Session Start

1. Read `AI_BRIEF.md`
2. Read `SESSION_MEMORY.md` (handoff)
3. Open the active backlog in `docs/backlogs/active/` (prefer the one mentioned in `SESSION_MEMORY.md`) and take the ticket in `Next:` from `## Ticket Tracker`
4. If cross-model handoff exists: check `docs/handoff/codex-to-opus.md` for pending context

---

## Skills

| Task | Skill |
|------|-------|
| Session start | Agent-specific entrypoint |
| Ticket work | Work on `Next:` ticket |
| Checkpoint | Update SESSION_MEMORY + SESSION_LOG + backlog tracker |

---

## Cross-Model Handoff

Two temp files enable Implementor ↔ Auditor communication:

| File | Written by | Read by |
|------|-----------|---------|
| `docs/handoff/opus-to-codex.md` | Implementor (after ticket) | Auditor (before audit) |
| `docs/handoff/codex-to-opus.md` | Auditor (after audit / next ticket) | Implementor (before work) |

Both files are **reset** (emptied) during checkpoint. They are `.gitignore`-d.

---

## Workflow Cycle

1. **Auditor** picks next ticket → writes context to `codex-to-opus.md`
2. **Implementor** reads context → implements ticket → writes FOR AUDIT summary to `opus-to-codex.md`
3. **Auditor** reads summary → audits code → writes findings to `codex-to-opus.md`
4. **Checkpoint** → reset handoff files → next cycle

---

## Ticket Quality

Every ticket must be **one-pass implementable** — no guessing, no ambiguity.

### Required files (read before creating/working tickets)
- `docs/ai/TICKETS_TEMPLATE.md` — full ticket structure
- `docs/ai/NON_NEGOTIABLES.md` — rules that are never violated
- `docs/ai/DEFINITION_OF_DONE.md` — when a ticket is truly done

### Required sections per ticket
- **Goal** — what and why (1-2 sentences)
- **Scope** — what's in (2-5 bullets)
- **Out of scope** — what's explicitly out
- **Acceptance Criteria** — testable conditions (numbered list)
- **Risks / Edge cases** — what could go wrong
- **Affected paths** — files/dirs to touch
- **Verify** — exact commands to validate

### Enterprise notes (for DB/API/auth/complex tickets)
Add `## Implementation Notes (Enterprise)` with:
- Must-fix blockers (2-6 bullets)
- Cache/Idempotency key (components + collision policy)
- Server-only boundaries (what MUST NOT reach client)
- Multi-tenancy scoping
- DoD tests (minimum 2-4)
- Failure modes (error codes + UX)

### Quality expectations
- Production-grade, not toy demos
- Error handling, input validation, edge cases
- Responsive design and accessibility where applicable
- Concrete verify commands, not vague "check visually"

## Don'ts

- Don't finalize git operations unless the user explicitly asks
- Don't work outside the current ticket scope
- Don't skip verify steps

---

## Documentation Files

Update these after completing work:

1. `SESSION_MEMORY.md` — Handoff summary (keep short)
2. `docs/workflow/SESSION_LOG.md` — Full session log (details)
3. Backlog tracker — Mark ticket done + update `Next:`

---

## Quick Reference

| Path | Purpose |
|------|---------|
| `docs/backlogs/active/` | Active backlogs (ticket tracker + tickets) |
| `docs/backlogs/archive/` | Archived backlog snapshots |
| `docs/handoff/` | Cross-model handoff files |
| `docs/DECISIONS.md` | Decision log |
| `SESSION_MEMORY.md` | Session state |

---

**Version:** 0.2.0
