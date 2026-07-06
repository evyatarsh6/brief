# CLAUDE.md

> `location ./CLAUDE.md`  
> `goal: short and simple commands for claude code.`
> `long or repet commands need to be at .claude/skills`.

---

## Project Overview

Project name: `<PROJECT_NAME>`

Purpose:
`<Write here in short sentences what the story does, who it is for, and what its main value is.>`

Primary users:
- `<User type 1>`
- `<User type 2>`

Core capabilities:
- `<Capability 1>`
- `<Capability 2>`
- `<Capability 3>`

Current stage:
`<Discovery | MVP | Beta | Production | Maintenance>`

---

## How Claude Should Work In This Repository

Claude must work incrementally:

1. Read relevant context before editing:
   - `docs/PRD.md`
   - `docs/ARCHITECTURE.md`
   - `docs/PROGRESS.md`
   - relevant source files
2. For every non-trivial change, propose a short plan before editing.
3. Keep changes small and scoped.
4. Prefer modifying existing patterns over introducing new abstractions.
5. Add or update tests for behavioral changes.
6. Run validation commands after changes.
7. Update `docs/PROGRESS.md` at the end of meaningful work.
8. Never claim work is complete unless checks were actually run or clearly marked as not run.

Claude must not:
- Rewrite large parts of the project without approval.
- Introduce new dependencies without explaining why.
- Change public APIs, database schema, auth, security, deployment, or CI without an explicit plan.
- Hide failing tests by weakening or deleting them.
- Touch secrets or environment files.

---

## Architecture Principles

Use these principles unless `docs/ARCHITECTURE.md` says otherwise:

- Keep boundaries explicit between UI, API, business logic, persistence, and external integrations.
- Prefer small modules with clear responsibility.
- Avoid circular dependencies.
- Keep domain logic independent from framework-specific code where practical.
- Make side effects explicit.
- Prefer simple, boring architecture over clever abstractions.
- Optimize for readability, testability, and maintainability before premature scalability.
- Do not introduce microservices, queues, caching, or background workers unless justified by requirements.

---

## Coding Standards

General:
- Use meaningful names.
- Prefer small functions.
- Avoid deeply nested code.
- Use early returns.
- Avoid duplicated logic.
- Keep files focused by responsibility.
- Do not leave dead code, commented-out code, or unexplained TODOs.
- Do not use magic strings/numbers without named constants when they represent domain meaning.

TypeScript:
- Strict typing is required.
- Do not use `any` unless explicitly justified in a comment.
- Prefer `unknown` over `any` for external input.
- Validate external input at boundaries.
- Use explicit return types for exported functions.
- Prefer arrow functions for new functions unless project style says otherwise.
- Keep types close to the domain they describe.
- Avoid large “types dumping ground” files.

Backend:
- Separate routes/controllers from business logic.
- Validate request payloads.
- Normalize errors into a consistent error model.
- Do not leak internal errors to clients.
- Log enough context for debugging, but never log secrets.
- External integrations must have timeout and error handling.
- Database access should be isolated behind focused functions/repositories.

Frontend:
- Prefer small components.
- Separate data fetching, state, and presentation where practical.
- Avoid giant components.
- Keep UI state local unless shared state is truly needed.
- Do not duplicate API types manually if generated/shared types exist.
- Handle loading, empty, error, and success states explicitly.

---

## Testing Rules

For behavioral changes:
- Add or update tests.
- Prefer tests that verify behavior, not implementation details.
- Cover success, failure, and edge cases.
- Do not delete tests unless the behavior is intentionally removed and documented.

Validation commands:

```bash
# Adjust these commands to the actual project stack.
npm run lint
npm run typecheck
npm test
npm run build
```

If a command cannot be run, Claude must state:
- Which command was not run.
- Why it was not run.
- What should be run manually.

---

## Git Workflow

- Work on a dedicated branch per feature/fix.
- Keep commits and PRs focused.
- Do not mix refactor and feature work unless approved.
- Before finishing, show:
  - `git status`
  - summary of changed files
  - tests/checks run
- Do not commit unless explicitly asked.

Branch naming:
- `feature/<short-name>`
- `fix/<short-name>`
- `refactor/<short-name>`
- `docs/<short-name>`

---

## Security Rules

Never read, print, edit, copy, or commit:
- `.env`
- `.env.*`
- `secrets/**`
- private keys
- tokens
- credentials
- production dumps

Never:
- Log secrets.
- Add secrets to test fixtures.
- Disable auth/security checks to make tests pass.
- Run destructive commands without explicit approval.
- Connect to production systems unless explicitly instructed and protected by a read-only workflow.

When handling external input:
- Validate it.
- Sanitize where needed.
- Use parameterized DB queries.
- Avoid unsafe eval/dynamic execution.

---

## Forbidden Actions

Claude must not perform these without explicit approval:

- Delete files or directories.
- Run destructive shell commands.
- Change database migrations.
- Modify CI/CD deployment behavior.
- Add new external services.
- Add new dependencies.
- Change authentication/authorization logic.
- Rewrite major architecture.
- Push commits or open PRs.
- Use `bypassPermissions`.

---

## Documentation Rules

Update documentation when:
- A feature behavior changes.
- Setup instructions change.
- Architecture changes.
- Public API changes.
- Environment variables are added/changed.
- A significant decision is made.

Use:
- `docs/PRD.md` for product requirements.
- `docs/ARCHITECTURE.md` for system design.
- `docs/DECISIONS.md` for architectural decisions.
- `docs/PROGRESS.md` for session/work progress.
- `README.md` for setup and usage.

---

## Progress Update Rules

At the end of meaningful work, update `docs/PROGRESS.md` with:

- Completed work.
- Files changed.
- Commands/tests actually run.
- Decisions made.
- Open questions.
- Next steps.
- Known risks.

Do not mark work as complete if validation was not run.

---

## Self-Review Checklist

Before finishing any task, Claude must check:

- Did I satisfy the original requirement?
- Did I change only relevant files?
- Did I reuse existing project patterns?
- Did I avoid unnecessary abstractions?
- Did I add/update tests?
- Did I run relevant checks?
- Did I update progress/docs?
- Are there security or data exposure risks?
- Are there breaking changes?
- Is there anything the human must review manually?

---

## When To Ask For Approval

Ask before:
- Large refactor.
- New dependency.
- Schema/database change.
- Security/auth change.
- CI/CD change.
- External integration.
- Destructive command.
- Ambiguous product decision.
