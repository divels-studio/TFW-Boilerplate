# Backlog (Active)

## Brief

TFW е workflow skeleton за “vibe coding” с AI агенти (Codex/Cursor/Claude/Gemini), базиран на Ticket‑First.

- Канон (rules+docs): `AI_BRIEF.md`
- Работи по `Next:` ticket
- Всеки ticket има `done` + `verify` + `docs_impact`
- Нови решения → `docs/DECISIONS.md`

## Ticket Tracker

- Next: TFW-005

---

## TFW-001 — MVP: Help site renders `docs/` markdown

---
id: TFW-001
type: feature
status: queued
priority: p0
docs_impact:
  - docs/workflow/VERIFY_PROTOCOL.md
verify:
  - Start help site and open 3 docs pages
done:
  - Help site renders markdown from docs folder
  - Basic nav works
---

## TFW-002 — CI: lint/build docs-site + enforcement (hard)

---
id: TFW-002
type: chore
status: queued
priority: p0
docs_impact:
  - docs/setup/ENV.md
verify:
  - GitHub Actions passes on main
done:
  - CI runs lint + build for docs-site
  - CI runs enforcement in hard mode
---

## TFW-003 — Protocols: ticket/verify/release baseline

---
id: TFW-003
type: docs
status: queued
priority: p1
docs_impact:
  - docs/workflow/TICKET_PROTOCOL.md
  - docs/workflow/VERIFY_PROTOCOL.md
  - docs/workflow/RELEASE_PROTOCOL.md
verify:
  - Read-through for clarity
done:
  - Clear minimal workflow docs
---

## TFW-004 — Docs: “How To” for vibe + ticket-first

---
id: TFW-004
type: docs
status: queued
priority: p0
docs_impact:
  - docs/guides/HOW_TO.md
verify:
  - Read-through and follow as checklist
done:
  - Has “Start Project” flow
  - Has module development rules
  - Lists what automation should do
---

## TFW-005 — Agent Packs: Codex/Cursor/Claude/Gemini adapters

---
id: TFW-005
type: feature
status: next
priority: p0
docs_impact:
  - docs/ai/AGENT_PACKS.md
verify:
  - Each agent has a minimal “Start Project” entrypoint
done:
  - Separate packs that don’t modify the canon docs format
  - Consistent commands/UX across agents
---

## TFW-006 — Tooling: checkpoint updates memory + session log

---
id: TFW-006
type: chore
status: queued
priority: p1
docs_impact:
  - SESSION_MEMORY.md
  - docs/workflow/SESSION_LOG.md
verify:
  - Run checkpoint once and see files updated
done:
  - One command updates session memory + appends session log
---
