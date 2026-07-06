---
name: react-testing
description: Use this skill to design, write and review tests for React + TypeScript applications using Testing Library, Jest/Vitest, MSW and Playwright. It ensures tests resemble user interactions, cover states, and remain maintainable and fast.
---

# React Testing

## Purpose

This skill guides Claude Code to plan and create comprehensive tests for React components, hooks and pages using Testing Library, Vitest/Jest, MSW and Playwright. It ensures tests are focused on user behavior, not implementation details, and that all critical states and edge cases are covered.

## When To Use This Skill

- After implementing or refactoring a component, hook, page or feature.
- When adding a new API call or data mutation.
- When preparing a pull request.
- When adding tests for previously untested code.
- When designing test strategy for a new module (e.g. table, map, dashboard).

## What This Skill Does

This skill helps you:

1. Plan the test scope and strategy.
2. Use **Testing Library** to write component and integration tests that simulate user interactions; the library’s guiding principle is that tests should mirror how users interact with your software and avoid testing implementation details【94744529534805†L28-L41】.
3. Use **MSW (Mock Service Worker)** to mock API responses and simulate loading, error and success scenarios without hitting real servers.
4. Use **Vitest/Jest** for running tests with TypeScript support and snapshots when appropriate.
5. Use **Playwright** (or another E2E framework) for end‑to‑end tests when user flows span multiple screens; but only if necessary for coverage.
6. Design tests for all UI states: loading, empty, success, error, permission denied, and edge cases (e.g. pagination beyond range, slow responses).
7. Avoid testing internal implementation details like component internals, hook state, or library internals【94744529534805†L65-L70】.
8. Encourage test-driven development (TDD) where feasible: write tests before code to define expected behavior.
9. Plan test file naming and placement consistent with the project’s structure.

## What This Skill Must Not Do

- Do not test implementation details such as state variables, internal functions, or underlying library behavior【94744529534805†L28-L41】.
- Do not rely on excessive snapshot tests; use snapshots only for stable, simple UI.
- Do not make tests brittle by depending on specific CSS classes or DOM structure; prefer roles, labels and accessible queries.
- Do not combine too many responsibilities in a single test; test one behavior at a time.
- Do not skip edge cases like error states, large data, or permission errors.
- Do not write tests without reviewing the requirement or acceptance criteria.
- Do not ignore performance: tests should be fast and not block continuous integration.

## Required Context To Read First

Before writing or reviewing tests, inspect:

- `docs/PRD.md` for acceptance criteria and core flows.
- `docs/ARCHITECTURE.md` to understand component hierarchy and data flow.
- Implementation files of the component/hook being tested.
- `docs/API_CONTRACTS.md` to understand expected API responses and errors.
- Existing tests for similar components as patterns.
- Mocks and utilities available in the test setup.

## Test Design Procedure

1. **Define Test Goals:** List what needs to be tested: user flows, states, edge cases, accessibility requirements, and regression concerns.
2. **Identify Test Type:** Choose between unit test (for utility functions or small hooks), component test (for a single component), integration test (for component + hook + API), or E2E test (for end‑to‑end flows).
3. **Setup Test Environment:** Import `render` from Testing Library configured with project providers (Jotai, React Query, MUI theme). Mock API endpoints with MSW. Clear caches and reset mocks before each test.
4. **Write Tests:** For each test:
   - Render the component with props and context.
   - Simulate user interactions via Testing Library events (clicks, typing, keyboard navigation).
   - Wait for asynchronous behavior using `await screen.findBy...` or `waitFor`.
   - Assert using accessible queries like `getByRole`, `getByLabelText` and `getByText`.
   - Check for loading skeleton, empty state, error message, success data.
   - For API errors, simulate error responses with MSW and assert error UI.
   - For charts or maps, ensure the container renders and state changes correctly; avoid asserting internal chart library DOM structure.
5. **Test Edge Cases:** Simulate unusual inputs, empty responses, slow responses, large datasets, and invalid parameters. Ensure the UI handles them gracefully.
6. **Test Accessibility:** Use `axe` or built‑in roles to check accessible names, roles, keyboard navigation and focus management.
7. **Write E2E Tests Only If Necessary:** Use Playwright to test full flows; stub backend with MSW or a test server. Keep E2E tests minimal due to maintenance cost.
8. **Evaluate Coverage:** Ensure key user paths are covered; do not aim for 100 % coverage at all costs, but avoid untested critical flows.
9. **Update Documentation:** Document what was tested, what remains, and how to run tests.

## Expected Output Format

When planning or reviewing tests, return a structured plan:

```text
# Test Plan for <Component/Feature>

## 1. Goals
- ...

## 2. Test Types
- unit / component / integration / e2e

## 3. Test Cases
- Case name: description
  - Setup:
  - Actions:
  - Assertions:

## 4. Edge Cases
- ...

## 5. Accessibility
- ...

## 6. Test Utilities / Mocks
- ...

## 7. Follow-up
- Missing tests:
- Questions:
```

## Safety Rules

- Never read or expose `.env`, secrets or user data.
- Do not test with real credentials; use mocks.
- Do not skip error state tests.
- Do not rely on unstable DOM selectors; use accessible queries.
- Do not ignore asynchronous behavior; use appropriate wait methods.