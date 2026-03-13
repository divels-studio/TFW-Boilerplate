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
4. Fill `## Brief` in the backlog and generate 10-15 MVP tickets
5. Set `VERSION` to `0.1.0` and update `SESSION_MEMORY.md`

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
