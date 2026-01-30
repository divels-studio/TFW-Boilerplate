# SESSION_MEMORY (TFW-Boilerplate)

Кратка “handoff” памет за следващи сесии.

## Какво правим

TFW Boilerplate е **workflow skeleton** за “вайб” разработка с AI агенти (Codex/Cursor/Claude/Gemini), базиран на **Ticket‑First**.

Проектът е **language‑agnostic**: не налага stack/език. Агентът избира stack след като попита: “Какъв проект ще правим днес?”.

## Канон (source of truth)

- Backlog: `docs/backlogs/active/BACKLOG.md` (един файл, много tickets, Markdown + frontmatter)
- Decisions: `docs/DECISIONS.md` (един файл)
- Протоколи: `docs/workflow/`
- Foundations/Architecture/Stack/UI standards: `docs/*`
- Версия на boiler-а: `VERSION` (SemVer) + tags `vX.Y.Z`

## HTML документация

- Help site (Next) е само viewer за `docs/` и служи като “how-to”.
- Стартира се с `scripts/help.ps1` / `scripts/help.sh` или Docker (`docker compose up --build docs`).

## Важни решения (кратко)

- Boiler-ът е за nuub/vibe dev → **той не мисли за версии**; versioning е за развитието на TFW.
- Инсталацията е “skeleton” + agent pack-и; stack изборът се случва след старта.
- Backlog форматът е универсален за всички агенти/проекти.

## Next (какво следва)

- Направи “Agent Packs” (Codex/Cursor/Claude/Gemini) като отделни адаптери, без да пипат канона.
- Добави “Start Project” протокол: агентът пита за идея → генерира първи backlog + основни docs + първи decisions.
- Добави automation за:
  - session memory updates
  - decision triggers checks
  - changelog discipline (по избор)

## Last checkpoint

- Date: 2026-01-30
- Next: TFW-007
- Branch: master
- Head: 4f47496 chore: add checkpoint tool (TFW-006)
