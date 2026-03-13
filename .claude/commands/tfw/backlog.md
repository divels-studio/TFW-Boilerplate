---
description: Create or update a backlog (ticket-first)
argument-hint: [name] [scope]
allowed-tools: Read, Edit, Write, AskUserQuestion
---

# /backlog - Create or Update Backlog

Create or update a backlog in `docs/backlogs/active/`.

## Instructions

1. If backlog exists: open it and append/adjust tickets (no duplicates).
2. If not: create `docs/backlogs/active/BACKLOG_[NAME].md` using `docs/backlogs/TEMPLATE_BACKLOG.md`.
3. Ask up to **7 critical questions** if info is missing, then stop.
4. Ensure the backlog has a `## Ticket Tracker` section:
   - `Progress: X/N`
   - `Next: <ID>`
   - Checklist: `- [ ] <ID> — <Title>`

## Ticket Format

Each ticket must include:
- **Goal** — what and why
- **Scope** — what's in
- **Out of scope** — what's explicitly out
- **Acceptance Criteria** — how to verify done
- **Affected paths** — files/dirs to touch
- **Verify** — exact commands to validate

Ticket IDs: `[NAME]-001`, `[NAME]-002`, ...

## Closing a Backlog

When all tickets are DONE:
1. Move to `docs/backlogs/archive/` as `XXX_BACKLOG_[NAME]_YYYY-MM-DD.md`
2. Update `SESSION_MEMORY.md`
