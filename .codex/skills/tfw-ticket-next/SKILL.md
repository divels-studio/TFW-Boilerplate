---
name: tfw-ticket-next
description: "Generate strict context for the next ticket from the active backlog and write it to docs/handoff/codex-to-opus.md. Resets handoff files before writing. Use repeatedly after each audit cycle to keep the Implementor fed with work."
---

# TFW Ticket Next

Goal: Reset handoff → generate context for next ticket → write to handoff file.

## Steps

1. **Reset handoff files** if they contain data:
   - `docs/handoff/codex-to-opus.md` → clear content
   - `docs/handoff/opus-to-codex.md` → clear content

2. **Read the active backlog:**
   - `docs/backlogs/active/BACKLOG_*.md`
   - Find `## Ticket Tracker`
   - Take the next `- [ ] ...` ticket (or next few if batching is safe)

3. **Evaluate batching strategy:**
   - Architecture-defining / model-defining / high-risk → solo
   - Safely batchable without risk of wrong model → group
   - When in doubt → smaller scope

4. **Generate context:**
   - Exact ticket scope
   - `IN SCOPE` / `OUT OF SCOPE`
   - Explicit `MUST` / `MUST NOT` rules (from ticket + project decisions)
   - Exact verify commands
   - Completion instructions (mark `FOR AUDIT`, not `Done`)

5. **Write** context to `docs/handoff/codex-to-opus.md`

6. **Show the user:**
   - Next ticket: `<ID(s)> — <Title(s)>`
   - Batching decision (solo / grouped) + reason
   - "Context written. Tell the Implementor to start."

## Guardrails
- Do NOT implement tickets — you are an auditor.
- Do NOT invent scope, acceptance, or architecture beyond the backlog.
- Step only on real ticket IDs and numbering.
- If the backlog is ambiguous → clarify in the context with clear boundaries.
