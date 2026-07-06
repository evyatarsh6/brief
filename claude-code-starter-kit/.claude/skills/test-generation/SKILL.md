# Test Generation Skill

## When to use

Use this skill when adding tests for new behavior, fixing a bug, or increasing confidence before refactor.

## What this skill does

- Identifies behavior that should be tested.
- Adds focused tests for success, failure, edge cases, and regressions.
- Keeps tests readable and stable.

## What this skill does not do

- It does not test implementation details unnecessarily.
- It does not mock everything by default.
- It does not weaken existing tests.

## Procedure

1. Read the requirement or bug.
2. Identify the public behavior/API.
3. Inspect existing test patterns.
4. Propose test cases.
5. Add tests using existing conventions.
6. Run relevant test command.
7. Report coverage gaps.

## Test categories

Include where relevant:
- happy path
- validation errors
- missing/invalid input
- external service failure
- permissions/auth
- edge cases
- regression test for bug

## Output format

```text
Test plan:
- ...

Tests added:
- ...

Commands run:
- ...

Remaining gaps:
- ...
```
