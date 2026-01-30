# AI_BRIEF (TFW-Boilerplate)

TFW е workflow skeleton за “vibe coding” с AI агенти (Codex/Cursor/Claude/Gemini), базиран на Ticket‑First.

## Канон

- Backlog: `docs/backlogs/active/BACKLOG.md` (един файл, много tickets, Markdown + frontmatter)
- Decisions: `docs/DECISIONS.md` (един файл)
- How-to: `docs/guides/HOW_TO.md`
- Protocols: `docs/workflow/`
- Версия на TFW (за развитие на boiler-а): `VERSION` + git tags `vX.Y.Z`

## Правила (минимум)

- Работи само по `Next:` ticket (освен emergency → после ticket).
- Всеки ticket има `done` + `verify` + `docs_impact`.
- Ново решение/патърн/инструмент → запис в `docs/DECISIONS.md`.

## Help (HTML docs)

- Node: `scripts/help.ps1` / `scripts/help.sh`
- Docker: `docker compose up --build docs`

## Handoff

- `SESSION_MEMORY.md` е краткото “какво правим” за нови сесии.

