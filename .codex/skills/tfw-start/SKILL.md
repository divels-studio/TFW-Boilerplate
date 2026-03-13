# tfw-start

Goal: start a "vibe + ticket-first" project per the TFW canon.

## Start (always)

1. Read `AI_BRIEF.md`.
2. Read `SESSION_MEMORY.md` (if exists).
3. Read `AGENTS.md` (detailed rules).
4. Check `docs/handoff/codex-to-opus.md` for pending context from Auditor.
5. Open active backlog in `docs/backlogs/active/BACKLOG*.md` and take `Next:`.

## If project is new (no real feature tickets)

1. Ask: "What project are we building today?"
2. Ask 5 short questions:
   - Who is it for?
   - What are 3-5 must-have features?
   - What is forbidden/not wanted (non-goals)?
   - Any deadline/budget/hosting constraints?
   - Is there UI or is it CLI/backend?
3. Propose 1-2 stack options (without imposing a language) and ask for choice.
4. Record the choice as a decision in `docs/DECISIONS.md`.
5. Update `## Brief` in the active backlog.
6. Generate first MVP tickets (10-20), each with `done`, `verify`, `docs_impact`.

## Work cycle

1. Work only on `Next:` ticket.
2. After changes: run `verify` from the ticket.
3. If new decision/pattern: add entry in `docs/DECISIONS.md`.
4. If docs impact: update the relevant docs files.
5. Update ticket status and move `Next:` to the next one.
