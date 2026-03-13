# AI_BRIEF

<!-- One-paragraph project summary for AI agents -->

## Canon

- Backlog: `docs/backlogs/active/BACKLOG*.md` (multiple files supported)
- Decisions: `docs/DECISIONS.md` (single file)
- Agent rules: `AGENTS.md` (detailed rules for all agents)
- How-to: `docs/guides/HOW_TO.md`
- Protocols: `docs/workflow/`
- Handoff: `docs/handoff/` (cross-model Implementor ↔ Auditor communication)

## Rules (minimum)

- Work only on `Next:` ticket (except emergency → then create ticket).
- Every ticket has `done` + `verify` + `docs_impact`.
- New decision/pattern/tool → record in `docs/DECISIONS.md`.

## Help (HTML docs)

- Node: `scripts/tfw.ps1 help` / `scripts/tfw.sh help`
- Docker: `docker compose up --build docs`

## Handoff

- `SESSION_MEMORY.md` — short "what we're doing" for new sessions.
- `docs/handoff/` — cross-model handoff (see `docs/ai/HANDOFF_RULES.md`).
