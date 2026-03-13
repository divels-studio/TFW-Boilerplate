# TFW — Claude Code entrypoint

> **IMPORTANT:** On EVERY conversation start (including "hi", "hello", any greeting), you MUST follow Session Start below. Do NOT just reply with a greeting.

## Session Start (mandatory)
1. Read `AI_BRIEF.md` and `SESSION_MEMORY.md`
2. Read the active backlog in `docs/backlogs/active/`
3. **If VERSION is `0.0.0` or backlog Brief is empty → this is a NEW project. Go to "Start Project" below.**
4. Otherwise: take the ticket in `Next:` from the backlog
5. Check `docs/handoff/codex-to-opus.md` for pending Auditor context

## Start Project (new project detected)
When you detect an empty/new project:
1. Tell the user: "This is a fresh TFW project. Let's set it up!"
2. Ask these 5 questions (one at a time or grouped):
   - What are we building? (product/tool description)
   - Who is the target audience?
   - What are the must-have features for MVP?
   - Any technical constraints? (language, framework, hosting)
   - What are the non-goals? (what we explicitly won't build)
3. Propose 1-2 stack options → record in `docs/DECISIONS.md`
4. Read these files for ticket format and rules:
   - `docs/ai/TICKETS_TEMPLATE.md` — full ticket structure
   - `docs/ai/NON_NEGOTIABLES.md` — quality guardrails
   - `docs/ai/DEFINITION_OF_DONE.md` — when a ticket is done
5. Fill `## Brief` in the backlog (Goal, Status, Next Actions, Key Paths)
6. Generate 10-15 MVP tickets using the **full ticket format** from the template. Each ticket MUST have: Goal, Scope, Out of scope, Acceptance Criteria, Risks, Affected paths, Verify commands.
7. Add `## Ticket Tracker` with checkboxes (`- [ ] T-001 — Title`), Progress, Next
8. Set `VERSION` to `0.1.0` and update `SESSION_MEMORY.md`

## Quality Standard
- Aim for **production-grade** quality, not toy demos
- Tickets must be **one-pass implementable** — detailed enough that the agent doesn't need to guess
- Every ticket needs concrete verify commands (exact shell commands or specific manual steps)
- Consider: error handling, input validation, accessibility, responsive design, SEO
- For DB/API/auth tickets: include Implementation Notes (Enterprise) section
- Follow `docs/ai/NON_NEGOTIABLES.md` at all times

## Canon
- `AI_BRIEF.md` — project overview
- `AGENTS.md` — detailed agent rules
- `docs/backlogs/active/BACKLOG*.md` — active backlogs
- `docs/DECISIONS.md` — decision log
- `docs/handoff/` — cross-model handoff files

## Reference
- Detailed rules: `AGENTS.md`
- Checkpoint protocol: `docs/guides/CHECKPOINT_PROTOCOL.md`
- Handoff rules: `docs/ai/HANDOFF_RULES.md`
