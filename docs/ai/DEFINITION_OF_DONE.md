# DEFINITION_OF_DONE — Tickets

Unified DoD for all tickets (unless the ticket specifies otherwise).

## Required
- Implementation covers all acceptance criteria.
- No changes outside the ticket scope (except minimal refactors needed to pass checks).
- No hardcoded user-facing text (i18n respected, if applicable).
- Scoping (user/org/company) respected everywhere it's needed.
- Error handling: graceful failures, meaningful error messages.

## Verification (choose applicable)
- Type-check / lint passes: `npm run type-check` or equivalent
- If UI ticket: manual smoke test (page loads, no runtime errors, responsive)
- If logic ticket: unit tests / update existing tests (if any)
- If API ticket: endpoint responds correctly, error cases handled
- Run the verify commands specified in the ticket

## Documentation (lightweight)
- If ticket changes workflow/architecture: update relevant doc in `docs/`.
- If ticket closes a milestone: update `SESSION_MEMORY.md` (brief) + `docs/workflow/SESSION_LOG.md` (detailed).
- Docs policy: keep it minimal, don't over-document obvious code.
