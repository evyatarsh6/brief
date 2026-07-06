# Code Review Skill

## When to use

Use this skill when reviewing a completed diff, feature branch, PR, or meaningful code change.

## What this skill does

- Reviews correctness, maintainability, readability, security, error handling, tests, and documentation.
- Prioritizes findings by severity.
- Separates blockers from suggestions.
- Avoids editing files before presenting findings.

## What this skill does not do

- It does not rewrite the code immediately.
- It does not approve merge.
- It does not delete tests or weaken validation.

## Procedure

1. Read the requirement or task description.
2. Inspect the current diff.
3. Check changed files only, unless broader context is required.
4. Identify:
   - correctness issues
   - missing edge cases
   - duplicated logic
   - inconsistent patterns
   - weak error handling
   - missing tests
   - security risks
   - documentation drift
5. Return findings ordered by severity:
   - Blocker
   - High
   - Medium
   - Low
   - Nit
6. Suggest the smallest safe fixes.
7. Ask for approval before editing.

## Output format

```text
Summary:
- ...

Blockers:
- ...

High:
- ...

Medium:
- ...

Low/Nits:
- ...

Missing tests:
- ...

Recommended minimal fixes:
- ...
```
