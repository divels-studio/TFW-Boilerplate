---
name: tfw-start-audit
description: "Start a new audit session: reset handoff files, read project context, pick next ticket from active backlog, and write first context to docs/handoff/codex-to-opus.md. Use at the beginning of every Codex audit session."
---

# TFW Start Audit

Goal: Start an audit session — reset handoff files, load context, write first ticket context.

## Steps

1. **Reset handoff files** if they contain data:
   - Read `docs/handoff/codex-to-opus.md` and `docs/handoff/opus-to-codex.md`
   - If either contains text → clear the content (keep empty file)
   - This ensures a clean start without leftovers from previous session

2. **Read project context:**
   - `AI_BRIEF.md`
   - `SESSION_MEMORY.md`
   - `AGENTS.md` (workflow rules)

3. **Select active backlog:**
   - Prefer the backlog from `SESSION_MEMORY.md`
   - Otherwise open `docs/backlogs/active/` and pick the most relevant
   - Read `## Ticket Tracker` + the tickets

4. **Generate context for Implementor:**
   - Pick the next unchecked ticket from the tracker
   - Write a strict context block including:
     - Exact ticket scope
     - `IN SCOPE` / `OUT OF SCOPE` boundaries
     - Verify commands/steps from the ticket
     - Completion instructions (mark `FOR AUDIT`, not `Done`)
   - Write context to `docs/handoff/codex-to-opus.md`

5. **Show the user:**
   - Active backlog: `<path>`
   - Next ticket: `<ID> — <Title>`
   - "Context written to `docs/handoff/codex-to-opus.md`. Tell the Implementor to start."

## Guardrails
- Do NOT finalize git operations.
- Do NOT implement tickets — you are a strict auditor, not an implementor.
- If critical information is missing → ask up to 7 questions and stop.
