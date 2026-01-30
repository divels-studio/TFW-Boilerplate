# Decisions

Този файл е единственият “decision log”.

## Decision triggers (кога се записва)

- Нова/сменена зависимост с последствия (DX, security, performance).
- Нов архитектурен слой/граница, data flow, auth model, caching.
- Нов UI стандарт / промяна в UX правила (ако проектът има UI).
- Ново “правило” за работа (naming, branching, error handling, validation).

---

## 2026-01-30 — TFW-000: Universal, docs-first boilerplate

**Context:** Boilerplate-ът трябва да работи за всякакви проекти (Node/Python/Go/…).

**Decision:** Root repo е language-agnostic. Версията е в `VERSION`. Документацията е source of truth в `docs/`.

**Consequences:** Node tooling (help site) е изолиран в `tools/docs-site/`.

## 2026-01-30 — TFW-001: Help site hybrid (Node default + Docker option)

**Context:** Някои dev-и нямат/не искат Node локално.

**Decision:** Default старт е Node (Next). Има Docker wrapper като опция.

**Consequences:** Поддържаме `docker compose` конфигурация за docs.

## 2026-01-30 — TFW-002: Enforcement default soft locally, hard in CI

**Context:** Локално не трябва да спира “вайб” работа, но в CI трябва да пазим дисциплина.

**Decision:** `TFW_ENFORCEMENT=soft` локално; в CI се override-ва на `hard`.

**Consequences:** Добавяме CI job, който fail-ва при non-docs промени без docs/decision/changelog update.

## 2026-01-30 — TFW-003: Skeleton-only + agent chooses stack

**Context:** Boilerplate-ът е за nuub/vibe dev и трябва да работи за всякакви проекти.

**Decision:** TFW доставя само workflow skeleton. Агентът пита “Какъв проект ще правим днес?” и после избира stack/език.

**Consequences:** Не поддържаме “готов app template” като канон; това е responsibility на агента/профила.

## 2026-01-30 — TFW-004: Universal single-file backlog

**Context:** Искаме един формат, който работи еднакво за Codex/Cursor/Claude/Gemini.

**Decision:** Backlog-ът е един активен файл с много tickets: `docs/backlogs/active/BACKLOG.md`.

**Consequences:** Tooling-ът валидира `Next:` и frontmatter полета, вместо да разчита на структура от много файлове.

## 2026-01-30 — TFW-005: Versioning is for TFW, not for the user

**Context:** Vibe dev-ът не трябва да мисли за версии.

**Decision:** SemVer + tags са за развитие на TFW repo. Потребителят работи със skeleton-а, а tooling/agent pack-ите трябва да са “zero‑maintenance”.

**Consequences:** Добавяме “how-to” и future automation (checkpoint/update) така че user да не управлява версии ръчно.
