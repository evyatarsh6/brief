---
name: feature-implementation
description: Implement new features, screens or refactors in small, verified steps. This skill guides you through exploring the codebase, planning changes, implementing in slices, running checks and updating progress documentation.
---

# Feature Implementation

## Purpose

Use this skill to implement a feature or fix in a controlled, incremental way. It follows Claude Code’s best‑practice workflow: explore, plan, implement, verify and document【350392073191311†L147-L156】. Plan Mode is used for uncertain or multi‑file changes; small slices avoid large diffs. Each slice is verified with lint, typechecks and tests before proceeding【350392073191311†L130-L156】.

## When to Use

- Starting a new feature, screen or refactor.
- Implementing a bug fix that spans multiple files.
- Adding tests or updating build scripts.
- Integrating a new API endpoint.
- When Plan Mode is appropriate for complex changes【350392073191311†L147-L156】.

## What It Does

1. **Identify the task.** Restate the problem and confirm its scope.
2. **Explore.** Search and read relevant files to understand patterns and dependencies. Do not edit.
3. **Plan.** In Plan Mode, propose which files to change, what new files to create, and what tests to add or update. Wait for approval before editing.
4. **Implement slices.** Exit Plan Mode; implement the first slice (one file or small group). Run `lint`, `typecheck`, and tests. Present the diff and wait for approval. Repeat for each slice.
5. **Verify.** After the feature is complete, run the full test suite and build to ensure everything works【350392073191311†L130-L156】.
6. **Document progress.** Update `docs/PROGRESS.md` with what was done, files changed, decisions made and next steps.
7. **Wrap up.** Ask for a final code review with the appropriate skill (e.g. `react-typescript-clean-code`).

## What It Must Not Do

- Do not skip exploration or planning for non‑trivial tasks.
- Do not implement multiple unrelated tasks in one slice.
- Do not modify tests just to satisfy incorrect code.
- Do not skip running checks before asking for approval.
- Do not fail to update progress documentation.

## Required Context

- `CLAUDE.md`, `docs/PRD.md`, `docs/ARCHITECTURE.md` for overall rules.
- Figma or screen specifications for the feature.
- API contracts and data models.
- Existing files that will be changed or referenced.

## Procedure

1. **Clarify the requirement.** Summarise what needs to be built or fixed.
2. **Explore the codebase.** Use search tools to locate related files; read them and note patterns.
3. **Enter Plan Mode** if the change involves multiple files or uncertain scope. Write a plan listing files to modify, new files to create, tests to update, and commands to run. Ask for approval.
4. **Implement the first slice.** Exit Plan Mode; implement a small part of the plan. Run `npm run lint`, `npm run typecheck`, and relevant tests. Present the diff for approval.
5. **Repeat slices.** Continue implementing small pieces, running checks and seeking approval after each slice.
6. **Run full verification.** When the feature is complete, run the entire test suite and build. Ensure there are no regressions.
7. **Update documentation.** Edit `docs/PROGRESS.md` to record the work done, decisions, next steps and any unresolved issues.
8. **Request final review.** Use `react-typescript-clean-code` or `code-review` skill to review the changes.

## Expected Output

During planning, return a plan with file changes, test updates and open questions. During implementation, return the diff and test results. At the end, update progress documentation and summarise the outcome.

## Safety Rules

- Always use Plan Mode for multi‑file or uncertain changes【350392073191311†L147-L156】.
- Never commit changes without running lint, typecheck and tests.
- Do not bypass permission prompts.
- Do not access or modify secrets.