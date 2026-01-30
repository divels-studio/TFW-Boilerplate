# Ticket Protocol

Един ticket е секция в `docs/backlogs/active/BACKLOG.md`, с frontmatter блок.

## ID формат

- ID-то е универсално: `<PREFIX>-<NUMBER>` (пример: `PRJ-001`).
- `TFW-xxx` е запазено за развитието на този boiler.

## Шаблон за нов backlog файл

Когато създаваш нов backlog файл, започни от `docs/backlogs/TEMPLATE_BACKLOG.md` и запази секцията `## Brief` (задължителна).

Задължителни полета:

- `id`, `type`, `status`, `priority`
- `done` (какво значи “готово”)
- `verify` (как се проверява)
- `docs_impact` (кои docs ще се пипнат; може да е празно, но трябва да е явно)

## Статуси (минимум)

- `next` — активният ticket (едновременно 1)
- `queued` — в опашка
- `done` — приключен

## Процедура

1. Работи само по `Next:`.
2. При приключване: изпълни `verify`, обнови `docs_impact`, маркирай ticket-а `done`.
3. Премести `Next:` към следващия ticket.
