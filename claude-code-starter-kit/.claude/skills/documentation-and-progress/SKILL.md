---
name: documentation-and-progress
description: Use this skill to update project documentation, track progress, decisions, and open questions. It ensures continuity between sessions and helps maintain an accurate record of what was done, what remains, and why decisions were made.
---

# Documentation and Progress

## Purpose

This skill helps Claude Code and the team maintain up‑to‑date documentation and progress tracking in a multi‑session project. It ensures that after every work session, the project’s documents reflect the current state, completed tasks, decisions, and next steps. Good documentation supports onboarding, context recall, and auditability.

## When To Use This Skill

- At the end of every session or workday.
- After completing a feature or a significant step.
- Before switching tasks or starting a new phase.
- Before handing off the project to another developer.
- When updating long‑living documents like `PRD.md`, `ARCHITECTURE.md`, `API_CONTRACTS.md` or `DECISIONS.md`.

## What This Skill Does

It guides you to:

1. Summarize what has been completed, including features implemented, bugs fixed, refactors performed and tests added.
2. Record files that were changed and important commit IDs or PR links if available.
3. Document decisions made and the rationale behind them (Architecture Decision Records).
4. Capture any assumptions or open questions that need resolution.
5. Identify blocked tasks and dependencies, with reasons and possible resolutions.
6. Update relevant documents:
   - `docs/PROGRESS.md` – list completed, in‑process, blocked and upcoming tasks.
   - `docs/PRD.md` – refine or clarify requirements if needed.
   - `docs/ARCHITECTURE.md` – adjust architecture details if design changed.
   - `docs/DECISIONS.md` – add new ADR entries with context, decision, alternatives and consequences.
   - any feature spec or API contract documents affected by the session.
7. Log what tests were added or run and whether they passed.
8. Plan next steps for the following session.
9. Save the updates to the repository using git, ensuring all documentation files are committed.

## What This Skill Must Not Do

- Do not fabricate progress: only record tasks actually completed.
- Do not omit significant changes or decisions.
- Do not write vague or ambiguous updates; be specific and concise.
- Do not forget to link or reference commit IDs when relevant.
- Do not delay documentation until later sessions; update immediately for accuracy.
- Do not ignore dependencies or blockers; document them clearly.

## Required Context To Read First

Before updating documentation, review:

- `docs/PROGRESS.md` – existing progress entries.
- `docs/DECISIONS.md` – existing decisions and their status.
- The PRD, architecture and other docs for sections impacted by the session.
- Git commit history or PR diff for the session if needed.

## Procedure

1. **Gather Facts:** List what was done: features, bug fixes, refactors, tests, docs. Include file paths and commit IDs if applicable.
2. **Update `docs/PROGRESS.md`:**
   - **Completed:** New work done.
   - **In Process:** Ongoing work.
   - **Blocked:** Items blocked (with reasons).
   - **Next Steps:** Tasks to start in the next session.
3. **Record Decisions:** For each significant decision, add or update an entry in `docs/DECISIONS.md` using the standard ADR format: context, decision, alternatives, consequences, status. If a decision is still pending, mark status as `proposed`.
4. **Update Specs:** If the session changed requirements or data models, update the PRD, API contracts, or architecture docs accordingly.
5. **List Open Questions:** Document any unclear issues that need clarification or approval.
6. **Summarize Tests:** Record which test files were created or modified and what scenarios they cover. Note if any tests failed or are missing.
7. **Save and Commit:** Use git to stage and commit changes to documentation. Write a clear commit message summarizing updates.
8. **Ask For Review:** If necessary, create or update a PR summarizing the progress and tagging reviewers.

## Expected Output Format

Return a progress report like this:

```text
# Progress Report (YYYY‑MM‑DD)

## Completed
- Implemented: ...
- Fixed: ...
- Refactored: ...
- Added tests: ...

## In Process
- ...

## Blocked
- Item: reason, next action

## Decisions
- ADR-001: Short description (status: accepted/proposed/deprecated)
- ...

## Docs Updated
- files changed: `docs/PROGRESS.md`, `docs/DECISIONS.md`, ...

## Tests Updated
- `file.spec.tsx`: added tests for ...
- ...

## Next Steps
- ...

## Open Questions
- ...
```

## Safety Rules

- Never record sensitive information in documentation (passwords, tokens, secrets, private URLs).
- Never fabricate work; maintain integrity of progress tracking.
- Do not commit secrets or internal endpoints to the repository.