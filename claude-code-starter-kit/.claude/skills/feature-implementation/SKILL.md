# Feature Implementation Skill

## When to use

Use this skill for implementing a new feature or a meaningful product behavior change.

## What this skill does

- Reads requirements.
- Locates relevant code.
- Proposes a plan.
- Implements small slices.
- Adds tests.
- Runs validation.
- Updates progress documentation.

## What this skill does not do

- It does not implement multiple unrelated features together.
- It does not change architecture without approval.
- It does not add dependencies without justification.
- It does not skip tests.

## Procedure

1. Read the requirement.
2. Read relevant docs:
   - `docs/PRD.md`
   - `docs/ARCHITECTURE.md`
   - `docs/PROGRESS.md`
3. Inspect relevant code.
4. Propose a plan before editing:
   - files to change
   - behavior to add
   - tests to add
   - risks
5. Implement smallest useful slice.
6. Add/update tests.
7. Run validation.
8. Update `docs/PROGRESS.md`.

## Output format

```text
Plan:
- ...

Files to change:
- ...

Risks:
- ...

Tests:
- ...

After implementation:
- changed files
- commands run
- remaining work
```
