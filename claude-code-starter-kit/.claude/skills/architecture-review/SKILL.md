# Architecture Review Skill

## When to use

Use this skill before major implementation, after architecture changes, or when reviewing a design.

## What this skill does

- Reviews system boundaries, data flow, maintainability, scalability, reliability, security, and testability.
- Compares alternatives and trade-offs.
- Produces recommendations without jumping to code.

## What this skill does not do

- It does not implement code.
- It does not introduce new infrastructure without explicit approval.
- It does not optimize for scale before requirements justify it.

## Procedure

1. Read `docs/PRD.md`.
2. Read `docs/ARCHITECTURE.md`.
3. Identify core flows and constraints.
4. Review:
   - component boundaries
   - API boundaries
   - data ownership
   - database model
   - integration failure modes
   - observability
   - security
   - deployment complexity
5. List risks and trade-offs.
6. Recommend minimal changes.

## Output format

```text
Architecture summary:
- ...

Strengths:
- ...

Risks:
- ...

Trade-offs:
- ...

Recommended changes:
1. ...

Requires ADR?
- Yes/No
```
