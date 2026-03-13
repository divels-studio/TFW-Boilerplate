---
description: Create or update a backlog (ticket-first)
argument-hint: [name] [scope]
allowed-tools: Read, Edit, Write, AskUserQuestion
---

# /backlog - Create or Update Backlog

Create or update a backlog in `docs/backlogs/active/`.

## Instructions

1. If backlog exists: open it and append/adjust tickets (no duplicates).
2. If not: create `docs/backlogs/active/BACKLOG_[NAME].md`.
3. **Read these files** for format and rules:
   - `docs/ai/TICKETS_TEMPLATE.md` — full ticket format
   - `docs/ai/NON_NEGOTIABLES.md` — quality guardrails
   - `docs/ai/DEFINITION_OF_DONE.md` — when a ticket is truly done
4. Ask up to **7 critical questions** if info is missing, then stop.
5. Ensure the backlog has:
   - `## Brief` at the top (Goal, Status, Next Actions, Key Paths)
   - `## Ticket Tracker` with `Progress: X/N`, `Next: <ID>`, checklist `- [ ] <ID> — <Title>`

## Ticket Format (mandatory)

Each ticket MUST include:

- **ID + Title** — `T-001 — Short description`
- **Goal** — what and why (1-2 sentences)
- **Scope** — what's in (2-5 bullets)
- **Out of scope** — what's explicitly out
- **Acceptance Criteria** — testable conditions (numbered list)
- **Risks / Edge cases** — what could go wrong
- **Affected paths** — files/dirs to touch
- **Verify** — exact commands to validate (no vague "check visually")

### Enterprise notes (for DB/API/auth/complex logic tickets)

Add `## Implementation Notes (Enterprise)` with:
- Must-fix blockers (2-6 bullets)
- Cache/Idempotency key (components + collision policy)
- Server-only boundaries (what MUST NOT reach client)
- Multi-tenancy scoping
- DoD tests (minimum 2-4 concrete tests)
- Failure modes (error codes + user-facing UX)

### Notes for the agent (at bottom of each ticket)
- Don't touch anything outside the ticket scope.
- If critical info is missing: **stop and ask** (up to 7 questions).

Ticket IDs: `[NAME]-001`, `[NAME]-002`, ...

## Closing a Backlog

When all tickets are DONE:
1. Move to `docs/backlogs/archive/` as `XXX_BACKLOG_[NAME]_YYYY-MM-DD.md`
2. Update `SESSION_MEMORY.md`
