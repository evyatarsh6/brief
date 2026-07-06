---
name: jotai-and-react-query-state
description: Design and review state management using Jotai for client/UI state and TanStack React Query for server state. This skill guides you to classify state, structure atoms, avoid render loops, and integrate queries and mutations with proper caching, invalidation and optimistic updates.
---

# Jotai & React Query State

## Purpose

Use this skill when planning or reviewing state management. It helps you decide where to store data (local React state, Jotai atoms, URL state, React Query) and how to structure atoms, queries and mutations. It draws on Jotai’s performance guidelines (split data into atomic parts, heavy computations outside React)【237572044801423†L152-L177】 and React Query’s requirements for unique query keys and targeted invalidation【444413767954226†L489-L601】【835040861778263†L492-L567】.

## When to Use

- Designing a new feature or refactoring existing state.
- Debugging performance or render issues due to state.
- Introducing Jotai or React Query for the first time.
- Integrating a new API endpoint or mutation.

## What It Does

1. **Classifies each piece of state.** Decide whether data belongs in local component state, Jotai, URL state or React Query server state.
2. **Designs atoms.** Create small, descriptive atoms; split large objects into separate atoms; use derived atoms for computed values. Avoid deep dependency chains that cause stack overflows【237572044801423†L152-L177】.
3. **Ensures stable references.** When using `selectAtom` or `focusAtom`, provide stable references via `useMemo` or `useCallback` to avoid infinite loops【519096412913333†L23-L132】.
4. **Separates server state.** Use React Query for API data; do not copy server data into atoms or local state. Query keys must include all variables used by the query function to ensure correct caching and refetching【444413767954226†L489-L601】.
5. **Plans queries and mutations.** For each query, define a key, function, stale time, refetch policy and error handling. For mutations, define invalidation, optimistic updates and rollback using `onMutate`, `onError` and `onSettled`【835040861778263†L492-L567】【476674860429372†L489-L661】.
6. **Handles errors.** Ensure query functions throw errors so React Query can detect failures【977584424545852†L668-L672】. Centralize error parsing and display user‑friendly messages.
7. **Integrates with UI.** Use derived atoms or selectors to subscribe to only the necessary parts of large objects. Use URL state for filters and sorting that need to persist across refreshes. Avoid mixing Jotai and Query in one hook unless there is a clear separation of concerns.

## What It Must Not Do

- Do not store API responses or server data in Jotai.
- Do not create a single global atom for all state; splitting into atomic pieces is key【237572044801423†L152-L177】.
- Do not duplicate or derive state unnecessarily【842245843935333†L210-L219】.
- Do not create atoms inside render functions without memoization, as this causes infinite loops【519096412913333†L23-L132】.
- Do not design query keys that omit variables used in the query function【444413767954226†L489-L601】.
- Do not invalidate all queries blindly; prefer targeted invalidation【835040861778263†L492-L567】.
- Do not ignore optimistic update rollback and error handling【476674860429372†L489-L661】.

## Required Context

- List of state variables and their current location.
- API contracts and expected server responses.
- Existing Jotai atoms and React Query hooks.
- Components or pages using the state.

## Procedure

1. **Inventory state.** List each state variable and note where it is currently stored.
2. **Classify state type:**
   - Local UI state (e.g. modal open/closed).
   - Shared UI state (e.g. selected item, filters) → Jotai.
   - URL state (shareable filters, pagination).
   - Server state (API data) → React Query.
   - Derived data (compute on the fly; do not store).
3. **Design atoms.** For each shared UI state, define a new atom or use an existing one. Ensure names are descriptive, values are small and independent, and heavy computations are done outside React.
4. **Design queries.** For each API call, define a query key including all variables; implement a query function that throws errors; set stale time and refetch policies; define error handling and loading states.
5. **Design mutations.** For each POST/PUT/DELETE, implement a mutation function; define `onMutate` to perform optimistic updates; return a rollback value; define `onError` to roll back; call `invalidateQueries` in `onSettled`【476674860429372†L489-L661】.
6. **Integrate with components.** Use `useAtom` for Jotai state; use custom hooks for queries and mutations; combine multiple atoms with derived atoms or `selectAtom`. Use `useMemo`/`useCallback` to provide stable references when selecting nested state【519096412913333†L23-L132】.
7. **Document.** Update `docs/DATA_MODEL.md` and `docs/STATE_AND_PERMISSIONS.md` to reflect state design.

## Expected Output

Return a table listing each state variable, its owner (local/Jotai/Query/URL), reason for placement, and any new atoms or query keys needed. Summarize queries and mutations with their keys, policies and invalidation. Identify any issues in the current state design and propose fixes.

## Safety Rules

- Never store secrets or user tokens in Jotai or local storage.
- Never duplicate server state in atoms.
- Always provide stable references to avoid infinite loops【519096412913333†L23-L132】.