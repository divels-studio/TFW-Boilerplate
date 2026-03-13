# NON_NEGOTIABLES

Rules that are NEVER violated. Quality and security guardrails.

> Customize this file for your project. Add project-specific rules below.

## Architecture
- **Multi-tenancy**: if your app has multiple users/orgs, every query/CRUD must be scoped (e.g., `user_id`, `org_id`, `company_id`).
- **Auth boundaries**: never expose server-only data to the client. Secrets, API keys, raw DB responses stay server-side.

## Frontend (if applicable)
- **i18n**: no hardcoded user-facing text (use translation keys or a translation system).
- **Accessibility**: semantic HTML, proper ARIA labels, keyboard navigation.
- **Responsive**: all pages must work on mobile, tablet, and desktop.

## Dev Workflow
- Don't make "side" changes outside the current ticket scope.
- If backlog has a `## Ticket Tracker`: update it after every DONE ticket (progress + next).
- Every backlog in `docs/backlogs/active/` must have `## Brief` at the top.
- After completing a ticket: mark `[x]`, update `Progress: X/Y` and `Next:`.

## Security
- Validate all user input (client AND server-side).
- No SQL injection, XSS, or command injection.
- Sanitize file uploads, limit sizes.
- Never commit secrets (.env, API keys, credentials).
