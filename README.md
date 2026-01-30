# TFW Boilerplate (Ticket‑First Workflow)

Универсален (language‑agnostic) boilerplate за дисциплиниран “ticket-first” начин на работа: backlog, протоколи, decision log, roadmap, changelog + HTML help сайт.

## Quick start (Docs / Help)

### Node (default)

1. Влез в `tools/docs-site`
2. Копирай `tools/docs-site/.env.example` → `tools/docs-site/.env.local` (по избор)
3. Стартирай:
   - Windows: `scripts/help.ps1`
   - macOS/Linux: `scripts/help.sh`

### Docker (опция)

1. Копирай `tools/docs-site/.env.example` → `tools/docs-site/.env.local` (по избор)
2. Стартирай: `docker compose up --build docs`

## Repo contracts

- Backlog: `docs/backlogs/active/BACKLOG.md`
- Decisions: `docs/DECISIONS.md`
- Roadmap: `ROADMAP.md`
- Changelog: `CHANGELOG.md`
- Version: `VERSION`
