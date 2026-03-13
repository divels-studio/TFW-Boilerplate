---
description: Start a new session (read docs, detect project state)
allowed-tools: Read, Bash, Glob, AskUserQuestion
---

# /start - Session Start

Read project state and decide what to do.

## Instructions

1. Read `AI_BRIEF.md`, `SESSION_MEMORY.md`
2. Read active backlog in `docs/backlogs/active/`
3. Check `VERSION` file

**If VERSION is `0.0.0` or backlog Brief is empty → NEW PROJECT:**
- Tell user: "This is a fresh TFW project. Let's set it up!"
- Ask 5 questions (one at a time or grouped):
  1. What are we building? (product/tool description)
  2. Who is the target audience?
  3. What are the must-have features for MVP?
  4. Any technical constraints? (language, framework, hosting)
  5. What are the non-goals? (what we explicitly won't build)
- Propose 1-2 stack options → record in `docs/DECISIONS.md`
- Fill `## Brief` in the backlog and generate 10-15 MVP tickets
- Set `VERSION` to `0.1.0` and update `SESSION_MEMORY.md`

**If project exists → RESUME:**
- Show current state (branch, backlog progress, next ticket)
- Check `docs/handoff/codex-to-opus.md` for Auditor context
- Ask: "Continue with next ticket, or something else?"

**Exit:** Clear scope + next action ready.
