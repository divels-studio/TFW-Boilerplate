# How To (Vibe + Ticket‑First)

Тази секция е за “как се работи най-ефективно” с TFW, независимо от агента.

## Най-кратки правила

1. Винаги има `Next:` ticket.
2. Няма работа без ticket (освен emergency → после ticket).
3. Всеки ticket има `done` + `verify` + `docs_impact`.
4. Ново решение → запис в `docs/DECISIONS.md`.

## “Start Project” flow (какво прави агентът)

1. Пита: “Какъв проект ще правим днес?”
2. Изяснява: аудитория, цели, бюджет, срок, must‑have.
3. Предлага 1–2 stack опции и записва избора в `docs/DECISIONS.md`.
4. Генерира първи `docs/backlogs/active/BACKLOG.md` (MVP tickets).
5. Попълва минимум docs:
   - `docs/tech/STACK.md`
   - `docs/architecture/ARCHITECTURE.md`
   - `docs/foundations/FOUNDATIONS.md`
   - `docs/ui/UI_STANDARDS.md` (или N/A)

## Как се разработват “модули”

Минимален модулен цикъл:

- Ticket за модула (scope + DoD + verify)
- Decision ако въвеждаш нов патърн/граница
- UI standards update ако модула има UI
- Verify steps, които може да повториш

## Какво трябва да автоматизира TFW (цел)

- `validate`: checks за backlog формата + `Next:` + frontmatter consistency.
- `enforce-docs`: когато има non-docs промени → изисква docs/decision update (локално soft, CI hard).
- `checkpoint`: update на `SESSION_MEMORY.md` + append в `docs/workflow/SESSION_LOG.md`.

## Команди (за nuub/vibe)

- `scripts/tfw.ps1 help` / `scripts/tfw.sh help` — HTML docs
- `scripts/tfw.ps1 validate` / `scripts/tfw.sh validate` — проверки (локално soft)
- `scripts/tfw.ps1 checkpoint` / `scripts/tfw.sh checkpoint` — handoff + session log
- `scripts/tfw.ps1 start` / `scripts/tfw.sh start` — генерира initial backlog + baseline docs
