# TFW — Claude Code entrypoint

> **IMPORTANT:** On EVERY conversation start (including "hi", "hello", any greeting), you MUST follow Session Start below. Do NOT just reply with a greeting.

## Session Start (mandatory)
1. Read `AI_BRIEF.md` and `SESSION_MEMORY.md`
2. Read the active backlog in `docs/backlogs/active/`
3. **If VERSION is `0.0.0` or backlog Brief is empty → this is a NEW project. Go to "Start Project" below.**
4. Otherwise: take the ticket in `Next:` from the backlog's `## Ticket Tracker`
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
4. **Enter Plan Mode** — this is MANDATORY. Plan the full project architecture:
   - System modules, data model, key flows
   - Package breakdown (logical groups of related work)
   - Dependencies between packages (which must complete before others start)
   - Risk areas requiring Enterprise-level ticket detail
5. **Wait for user approval** of the plan. Do NOT proceed without explicit "yes"/"approved"/"go".
6. After plan approval → run `/tfw:backlog` to create the ticket system from the plan.
7. After backlog is created → **STOP. Ask the user:** "Backlog is ready. Want me to start executing, or do you want to review first?"
8. Set `VERSION` to `0.1.0` and update `SESSION_MEMORY.md`

## Planning Rules (critical)
- **Always plan before creating tickets.** Never generate tickets without a plan.
- Plans must be in **Plan Mode** (use the plan tool/mode, not inline text).
- Tickets are organized in **packages** (logical groups), not flat lists.
- There is **no limit** on ticket count — create as many as the project needs (10, 50, 500+).
- Each package has **gate exit criteria** — what must be true before moving to the next package.
- Packages have **explicit prerequisites** — which packages must be Done before this one starts.

## Quality Standard
- Aim for **production-grade, enterprise-level** quality, not toy demos
- Tickets must be **one-pass implementable** — detailed enough that the agent doesn't need to guess
- Every ticket needs concrete verify commands (exact shell commands or specific manual steps)
- Consider: error handling, input validation, accessibility, responsive design, SEO
- For DB/API/auth tickets: include Implementation Notes (Enterprise) section
- Read `docs/ai/TICKETS_TEMPLATE.md` for the full ticket format
- Read `docs/ai/NON_NEGOTIABLES.md` for quality guardrails
- Read `docs/ai/DEFINITION_OF_DONE.md` for completion criteria
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
