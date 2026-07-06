# Bug Investigation Skill

## When to use

Use this skill when behavior is broken, tests fail, logs show errors, or the root cause is unclear.

## What this skill does

- Investigates before changing code.
- Forms hypotheses.
- Finds relevant files and execution paths.
- Suggests minimal fix and regression tests.

## What this skill does not do

- It does not edit code before investigation.
- It does not guess root cause without evidence.
- It does not silence errors.

## Procedure

1. Capture the observed behavior.
2. Capture expected behavior.
3. Inspect logs/errors/test failures.
4. Trace the execution path.
5. Identify likely root causes.
6. Rank hypotheses by evidence.
7. Propose minimal fix.
8. Add regression test.
9. Run relevant validation.

## Output format

```text
Observed:
- ...

Expected:
- ...

Evidence:
- ...

Likely root cause:
- ...

Fix plan:
1. ...

Regression test:
- ...

Validation:
- ...
```
