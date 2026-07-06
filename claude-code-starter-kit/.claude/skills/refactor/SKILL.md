# Refactor Skill

## When to use

Use this skill when improving code structure without changing behavior.

## What this skill does

- Identifies duplication, large functions, large components, unclear boundaries, and poor naming.
- Proposes small refactor steps.
- Preserves behavior.
- Requires tests or validation before and after.

## What this skill does not do

- It does not change product behavior.
- It does not introduce new architecture without approval.
- It does not mix refactor with feature work unless explicitly requested.

## Procedure

1. Identify the current behavior.
2. Locate existing tests.
3. Propose a refactor plan with small steps.
4. Confirm behavior-preserving intent.
5. Apply one focused refactor at a time.
6. Run tests/typecheck/lint.
7. Summarize changed files and any risks.

## Refactor rules

- Prefer extraction of focused functions over generic abstractions.
- Avoid over-generalization.
- Preserve public APIs unless approved.
- Keep names meaningful.
- Reduce nesting with early returns.
- Remove dead code only when clearly unused and validated.

## Output format

```text
Refactor target:
- ...

Current issues:
- ...

Plan:
1. ...
2. ...

Behavior changes:
- None expected

Validation:
- ...
```
