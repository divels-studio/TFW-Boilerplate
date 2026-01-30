# tfw-start

Цел: да стартира “vibe + ticket-first” проект по TFW канона.

## Start (винаги)

1. Прочети `AI_BRIEF.md`.
2. Прочети `SESSION_MEMORY.md` (ако съществува).
3. Отвори `docs/backlogs/active/BACKLOG.md` и вземи `Next:`.

## Ако проектът е нов (няма реални feature tickets)

1. Попитай: “Какъв проект ще правим днес?”
2. Попитай 5 кратки въпроса:
   - За кого е?
   - Какви са 3–5 must‑have функции?
   - Какво е забранено/не искаме (non‑goals)?
   - Има ли срок/бюджет/хостинг ограничения?
   - Има ли UI или е CLI/бекенд?
3. Предложи 1–2 stack опции (без да налагаш език) и поискайте избор.
4. Запиши избора като decision в `docs/DECISIONS.md`.
5. Обнови `## Brief` в `docs/backlogs/active/BACKLOG.md`.
6. Генерирай първи MVP tickets (10–20), всеки с `done`, `verify`, `docs_impact`.

## Работа (цикъл)

1. Работи само по `Next:` ticket.
2. След промяна: изпълни `verify` от ticket-а.
3. Ако има ново решение/патърн: добави запис в `docs/DECISIONS.md`.
4. Ако има docs impact: обнови съответните docs файлове.
5. Обнови ticket status и премести `Next:` към следващия.

