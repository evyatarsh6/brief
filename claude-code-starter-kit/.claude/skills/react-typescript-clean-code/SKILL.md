---
name: react-typescript-clean-code
description: Review and improve React + TypeScript code with strict typing, clear component boundaries, proper hooks usage, state separation, query integration and testability. Use this skill after implementing or during code review to keep the codebase maintainable and production‑ready.
---

# React TypeScript Clean Code

## Purpose

Act as a senior engineer reviewing or refactoring React + TypeScript code. Enforce strong typing, small focused components, correct hooks usage, proper state management, clean API/query integration, MUI usage, error handling, performance awareness and testability.

## When to Use

- After implementing a component or feature.
- Before opening a pull request.
- During code review.
- When a file becomes large or confusing.
- When you encounter weak typing or `any`.
- When mixing UI, state and API logic in one file.

## What It Does

1. **Summarises the code purpose.** Identify what the component or hook does, its inputs/outputs and its place in the flow.
2. **Checks TypeScript.** Ensure there is no `any`; avoid unsafe type assertions; type API responses and props; handle optional fields explicitly; use discriminated unions for status variants【43463590152427†L109-L144】.
3. **Reviews component boundaries.** Each component must have a single responsibility. If the file mixes UI, state and business logic, suggest extracting child components or hooks. Map the UI structure to the data model and break into a hierarchy【593077305455729†L95-L154】.
4. **Reviews hooks.** Hooks should be called at the top level. Use custom hooks to encapsulate logic. Avoid using `useEffect` for computed values; compute during render. Memoise expensive calculations or stable configs. Provide stable references for atoms and selectors to avoid infinite loops【519096412913333†L23-L132】.
5. **Classifies state.** Distinguish between local UI state, Jotai atoms and React Query state. Do not store derived or duplicate state【842245843935333†L210-L219】. Split data into atomic parts and use `selectAtom` or `focusAtom` only when necessary【237572044801423†L152-L177】. Do not copy server data into atoms.
6. **Reviews queries and mutations.** Ensure query keys include all variables【444413767954226†L489-L601】; query functions throw errors to propagate failures【977584424545852†L668-L672】; invalidation is targeted and optimistic updates include rollback【835040861778263†L492-L567】【476674860429372†L489-L661】.
7. **Checks MUI & styling.** Use MUI components and theming; avoid magic numbers or colours; customise using `ThemeProvider` and `createTheme`【39404304658691†L76-L99】. Do not deeply override MUI internals unless necessary.
8. **Reviews error handling.** Centralise error parsing; display user‑friendly messages; avoid swallowing errors.
9. **Considers performance.** Identify unnecessary re‑renders; memoise heavy computations; use virtualization for large lists and tables【172589116611369†L414-L479】; prefer server‑side operations for huge datasets.
10. **Evaluates file structure.** Ensure code resides in the correct feature module; types, API clients, hooks, components and tests are separated.
11. **Assesses testability.** Ensure the code can be tested with Testing Library and MSW; identify missing tests for loading, empty, success and error states【94744529534805†L28-L41】.

## What It Must Not Do

- Do not rewrite large sections without a plan.
- Do not change business behaviour while cleaning code.
- Do not add dependencies without justification.
- Do not silence type errors with `any` or casts.
- Do not store server data in Jotai or local state.
- Do not remove tests to make code pass.
- Do not expose secrets or private information.

## Required Context

- Source files to review.
- Nearby components/hooks for pattern reference.
- API types and clients.
- Jotai atoms used by the feature.
- Tests and TypeScript configuration.

## Procedure

1. **Understand the code purpose.** Summarise the file’s intent, behaviour and dependencies.
2. **Review TypeScript.** Identify implicit `any`, unsafe casts and missing return types. Replace them with proper generics, interfaces or unions.
3. **Check component boundaries.** If the component is too large or mixes concerns, propose extracting child components or hooks.
4. **Evaluate hooks usage.** Check that hooks are called at the top level; dependencies are correct; heavy computations are memoised; custom hooks encapsulate repeated logic; stable references are used for atoms and selectors.
5. **Classify state.** List each piece of state; decide if it belongs to local state, Jotai, React Query or URL state; remove duplicates; ensure atoms are small and named clearly.
6. **Review queries.** Check query keys and variables; ensure error handling and invalidation patterns follow TanStack Query guidelines【444413767954226†L489-L601】【835040861778263†L492-L567】.
7. **Check MUI usage.** Ensure design tokens come from the theme; avoid inline magic values; keep accessibility; avoid deep overrides.
8. **Assess error handling.** Verify errors are normalised and user‑friendly; internal errors are not exposed.
9. **Review performance.** Look for large lists without virtualization; heavy filtering in render; repeated re‑renders from unstable props.
10. **Check file structure.** Confirm the file is in the correct folder; types, API functions, hooks and components are separated.
11. **Review testing.** Identify missing tests for different states and user interactions; propose adding tests.
12. **Summarise findings.** Group issues by severity (blockers, high/medium/low) and propose a minimal fix plan.

## Expected Output

Return a report in sections: summary, blockers, high/medium/low priority issues, suggested fix plan, files to change and missing tests. Provide actionable recommendations without rewriting code.

## Safety Rules

- Never read or modify `.env`, secrets or private keys.
- Do not run destructive commands or bypass permissions.
- Do not alter authentication or security logic.