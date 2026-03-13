---
name: tfw-ticket-audit
description: "Audit a completed ticket: read Implementor FOR AUDIT summary from docs/handoff/opus-to-codex.md, perform code-level audit per quality checklist, make corrections, write post-audit context to docs/handoff/codex-to-opus.md. On re-invocation resets handoff files."
---

# TFW Ticket Audit

Goal: Read FOR AUDIT from Implementor → strict code-level audit → correct → write post-audit context.

## Steps

1. **Check handoff files:**
   - Read `docs/handoff/opus-to-codex.md`
   - If **empty** → this is a re-invocation:
     - Reset `docs/handoff/codex-to-opus.md` and `docs/handoff/opus-to-codex.md`
     - Say: "Handoff files reset. Ready for next cycle."
     - STOP
   - If **has content** → continue with audit

2. **Read FOR AUDIT data:**
   - Ticket ID + scope
   - Changed files
   - Verify commands/results
   - Migrations: yes/no

3. **Perform strict code-level audit** (not audit of summary):
   - Read the actually changed files
   - Read ticket scope from the active backlog
   - Apply audit checklist:

   ### Audit Checklist
   - **Security:** safe defaults, clear error messages, no injection vectors
   - **Input validation:** boundaries checked at system edges
   - **Error handling:** proper try/catch, meaningful messages, no swallowed errors
   - **Code quality:** no dead code, consistent naming, reasonable sizes
   - **TypeScript:** strict mode, no unjustified `any`, proper async/await
   - **Scope match:** implementation covers acceptance criteria from the ticket
   - **Tests/QA:** critical paths are covered (if test framework exists)
   - **Architecture:** follows patterns from `docs/DECISIONS.md`

4. **Corrections:**
   - If there is a defect or scope mismatch **within ticket scope**:
     - Fix it
     - Validate the fix
     - Then finalize the audit
   - If the problem is **outside scope**:
     - Don't fix it
     - Ignore unless it blocks the current scope
     - If unclear → discuss with user

5. **Mark the ticket:**
   - Mark as `Done` in backlog tracker
   - Remove `FOR AUDIT` from the ticket
   - Do NOT checkpoint / commit / push

6. **Show summary:**
   - Audit result (pass / pass with corrections / fail)
   - List of applied corrections (if any)
   - Whether there are migrations to push

7. **Write post-audit context** to `docs/handoff/codex-to-opus.md`:
   - Audit complete
   - Corrections made/not made (brief description)
   - Implementor should run checkpoint + commit (by user command)
   - Implementor should NOT change already audited files and backlog statuses

## Guardrails
- Aim for high quality — no compromises.
- Do NOT finalize git operations.
- Explicitly state whether there are migrations.
- For unclear cases → stop and discuss with user.
