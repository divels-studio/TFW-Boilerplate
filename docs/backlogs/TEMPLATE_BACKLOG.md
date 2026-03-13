# Backlog (Template)

> **Naming convention:** `BACKLOG_<PROJECT_NAME>.md` (e.g., `BACKLOG_AUTH_SYSTEM.md`)
> Multiple active backlogs are supported in `docs/backlogs/active/`.
> `SESSION_MEMORY.md` should reference which backlog is currently active.

## Brief

### Goal
- What we're building and why (1-2 sentences)

### Scope
- Includes: (3-6 bullets)
- Does NOT include: (2-4 bullets)

### Execution Model
- How packages relate to each other
- Gate/audit rules (if any)

### Key Paths
- `src/...`
- `docs/...`

### Status
- **ACTIVE** — current state description

---

## Ticket Tracker

Progress: 0/N
Next: PRJ-001

### Package 0 — <Name> (e.g., Project Setup)
Prerequisites: none
Gate: <what must be true for this package to be Done>
- [ ] PRJ-001 — <Title>
- [ ] PRJ-002 — <Title>

### Package 1 — <Name> (e.g., Data Model)
Prerequisites: Package 0 Done
Gate: <exit criteria>
- [ ] PRJ-003 — <Title>
- [ ] PRJ-004 — <Title>

### Package 2 — <Name> (e.g., Core Features)
Prerequisites: Package 1 Done
Gate: <exit criteria>
- [ ] PRJ-005 — <Title>

---

## PRJ-001 — <Title>

**Goal:** What we're achieving and why.

**Scope:**
- What's included in this ticket (2-5 bullets)

**Out of scope:**
- What's explicitly NOT part of this ticket

**Acceptance Criteria:**
1. Criterion 1 (testable, specific)
2. Criterion 2
3. Criterion 3

**Affected paths:**
- `src/path/to/file.ts`
- `src/path/to/other.ts`

**Verify:**
```bash
# Exact commands to validate the work
npm run type-check
npm run test -- --filter=relevant-test
# Manual: navigate to /page and verify X
```

**Risks / Edge cases:**
- Edge cases to watch for
- Dependencies on other tickets

**Notes for the agent:**
- Don't touch anything outside the ticket scope.
- If critical info is missing: **stop and ask** (up to 7 questions).

---

### Metadata (optional YAML frontmatter per ticket)

```yaml
id: PRJ-001
type: feature | fix | chore | refactor
status: todo | in_progress | for_audit | done
priority: p0 | p1 | p2
package: 0
docs_impact:
  - docs/DECISIONS.md
```
