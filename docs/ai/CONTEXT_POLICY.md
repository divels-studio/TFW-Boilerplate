# CONTEXT_POLICY — "Context Diet"

Goal: minimal startup context + stable source of truth in repo.

## Source of Truth
- Workflow rules: `docs/ai/*` + `docs/workflow/*` (not chat history).
- Current state (handoff): `SESSION_MEMORY.md` (short) + `docs/workflow/SESSION_LOG.md` (details).

## What to include when starting a ticket
Minimum:
1. Project-specific rules (if any)
2. Ticket text (per template)
3. Specific file paths the ticket affects

## What NOT to include
- Long histories, old plans, entire repo "just in case".
- Vague instructions like "fix everything".

## Stop conditions
If critical information is missing (schema, UX rule, business rule) → ask questions and stop.
