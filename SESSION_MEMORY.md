# SESSION_MEMORY (TFW-Boilerplate)

Short "handoff" memory for next sessions.

## What we're building

TFW Boilerplate is a **workflow skeleton** for "vibe" development with AI agents (Codex/Cursor/Claude/Gemini), based on **Ticket-First**.

The project is **language-agnostic**: doesn't impose a stack/language. The agent chooses stack after asking: "What project are we building today?".

## Canon (source of truth)

- Backlog: `docs/backlogs/active/BACKLOG*.md` (multiple files, Markdown + frontmatter)
- Decisions: `docs/DECISIONS.md` (single file)
- Agent rules: `AGENTS.md`
- Protocols: `docs/workflow/`
- Handoff: `docs/handoff/` (cross-model communication)
- Foundations/Architecture/Stack/UI standards: `docs/*`
- Boilerplate version: `VERSION` (SemVer) + tags `vX.Y.Z`

## Key decisions (brief)

- Boilerplate is for nuub/vibe dev → **they don't think about versions**; versioning is for TFW development.
- Installation is "skeleton" + agent packs; stack choice happens after start.
- Backlog format is universal for all agents/projects.
- v0.2.0: Added cross-model handoff, hooks, audit skills, agents, checkpoint protocol.

## Last checkpoint

- Date: 2026-03-13
- Version: 0.2.0
- Branch: master
