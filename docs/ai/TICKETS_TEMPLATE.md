# TICKETS_TEMPLATE

> Ticket template optimized for one-pass implementation. Copy this structure for every ticket.

## Backlog Brief (at top of backlog file)

### Goal
- ...

### Current Status (YYYY-MM-DD)
- ...

### Next Immediate Actions
1. ...
2. ...
3. ...

### Key Paths
- `src/...`

---

## Ticket

- **ID:** T-XXX
- **Title:** <short>
- **State:** TODO
- **Goal:** <1-2 sentences: what and why>
- **Scope:** <what's in>
- **Out of scope:** <what's NOT in>

## Implementation Notes (Enterprise)

> This section makes the ticket "1-pass implementable" without 3 audit iterations.
> Include for any ticket touching DB, API, auth, or complex business logic.

### Must-fix blockers
- <2-6 specific bullets: what MUST NOT be missed>

### Cache / Idempotency key (if applicable)
- Key components: <what goes into the key (userId/hash/version/etc.)>
- Collision policy: <how to avoid leaky hits>

### Server-only boundaries (if applicable)
- Server-only: <API calls, secrets, raw responses>
- Client-safe: <only aggregates/metadata, no PII/raw payloads>

### Multi-tenancy / scoping (if applicable)
- Scoping: <where and how to guarantee isolation>
- "No leaky queries": <which places are risky>

### DoD tests (minimum)
1. <most important test>
2. <second most important test>
3. <cache scoping / gating / failures if applicable>

### Failure modes
- Error codes: <what codes we return>
- UX: <what the user sees on failure>

## Acceptance Criteria
1. ...
2. ...
3. ...

## Risks / Edge cases
- ...

## Affected Areas (paths)
- `src/...`

## Run / Verify
```bash
# Exact commands — no vague "check visually"
npm run type-check
npm run test -- --filter=relevant
# Manual: navigate to /page, verify X works
```

## Notes for the agent
- Don't touch anything outside the ticket scope.
- If critical info is missing: **stop and ask** (up to 7 questions).
