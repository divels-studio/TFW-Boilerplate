# Agent Packs (Codex / Cursor / Claude / Gemini)

Цел: nuub/vibe dev да “инсталира” skeleton-а и агентът да започне работа по Ticket‑First без да мисли за версии, процеси и структура.

## Канон (общ за всички агенти)

Тези файлове/правила са source of truth и не зависят от агента:

- `AI_BRIEF.md`
- `docs/backlogs/active/BACKLOG.md` (един файл, много tickets; задължителен `## Brief`)
- `docs/DECISIONS.md`
- `docs/guides/HOW_TO.md`
- `docs/workflow/*`

Agent pack-ът е само “адаптер”, който:

- дава entrypoint (“Start Project”)
- гарантира, че агентът чете канона и работи по `Next:`
- добавя удобни команди/процедури за съответния агент

## Start Project (универсален entrypoint)

Агентът винаги започва с:

1. Прочита `AI_BRIEF.md` и `SESSION_MEMORY.md` (ако съществува).
2. Отваря `docs/backlogs/active/BACKLOG.md` и взима `Next:`.
3. Ако проектът е нов/празен: пита “Какъв проект ще правим днес?” и събира:
   - аудитория
   - must‑have цели (до 5)
   - ограничения (срок/бюджет/хостинг)
   - non‑goals
4. Предлага 1–2 stack опции (без да налага език) и записва избора в `docs/DECISIONS.md`.
5. Обновява `## Brief` в backlog-а и генерира първите tickets (MVP).
6. Попълва минимум docs: `STACK.md`, `ARCHITECTURE.md`, `FOUNDATIONS.md`, `UI_STANDARDS.md` (или N/A).

## Codex (OpenAI Codex CLI)

Пакетът живее в `.codex/skills/`:

- `.codex/skills/tfw-start/SKILL.md` — “Start Project” entrypoint

## Cursor

Пакетът живее в `.cursor/rules/`:

- `.cursor/rules/tfw.md` — правила за агента + entrypoint

## Claude Code

Пакетът живее в `.claude/`:

- `.claude/CLAUDE.md` — кратък entrypoint

## Gemini

Пакетът е един файл:

- `GEMINI.md` — инструкции + entrypoint

