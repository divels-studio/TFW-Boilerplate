# TFW Boilerplate (Ticket‑First Workflow)

Универсален (language‑agnostic) boilerplate за дисциплиниран “ticket-first” начин на работа: backlog, протоколи, decision log, roadmap, changelog + HTML help сайт.

## Quick start (Docs / Help)

### Node (default)

Най-лесно (един вход):

- Windows: `scripts/tfw.ps1 help`
- macOS/Linux: `scripts/tfw.sh help`

### Docker (опция)

1. Копирай `tools/docs-site/.env.example` → `tools/docs-site/.env.local` (по избор)
2. Стартирай: `docker compose up --build docs`

## Repo contracts

- Backlog: `docs/backlogs/active/BACKLOG.md`
- Decisions: `docs/DECISIONS.md`
- Roadmap: `ROADMAP.md`
- Changelog: `CHANGELOG.md`
- Version: `VERSION`

## Session memory

- Handoff: `SESSION_MEMORY.md`
- Detailed log: `docs/workflow/SESSION_LOG.md`

## AI brief

- Quick context: `AI_BRIEF.md`

## Commands (one entry)

- `scripts/tfw.ps1 validate` / `scripts/tfw.sh validate`
- `scripts/tfw.ps1 checkpoint` / `scripts/tfw.sh checkpoint`
