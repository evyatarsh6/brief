---
name: react-architecture
description: Plan the structure and data flow for new screens, pages or features before you write a single line of code. This skill is for designing component hierarchies, state ownership, API boundaries, and folder structures in a React + TypeScript project that uses MUI, Jotai, TanStack Query, virtualized tables, dashboards, maps and a same‑port proxy/BFF.
---

# React Architecture

## Purpose

This skill helps you design a clean, maintainable React architecture before you start coding. It enforces best practices from React’s official guidance on breaking UIs into components and mapping UI structures to data models【593077305455729†L95-L154】. It integrates rules from Jotai, TanStack Query, OpenLayers, virtualization, and proxy/BFF patterns. Use it to avoid monolithic components, state duplication, unclear data flow, and security pitfalls.

## When to Use

- When starting a new page, screen, tab or major refactor.
- When adding a complex feature such as a data table, dashboard, map or multi‑step form.
- When integrating a new API or proxy endpoint.
- When the change touches UI, state, API and business logic across multiple files.
- Before writing any implementation code.

## What It Does

1. **Summarises the requirement.** Restate what you’re building and why.
2. **Defines scope and out‑of‑scope items.** Ensure clarity before design begins.
3. **Identifies routes/screens.** Map routes, tabs, dialogs, modals and entry points.
4. **Builds a component hierarchy.** Break the UI into nested components to match the data model【593077305455729†L95-L154】; avoid placing all logic in one file.
5. **Classifies state.** Decide what belongs in local state, Jotai atoms, TanStack Query or URL state. Do not store derived or duplicate state【842245843935333†L210-L219】. Split large objects into atomic pieces and use `selectAtom` only with stable references【237572044801423†L152-L177】【519096412913333†L23-L132】.
6. **Designs API & proxy boundaries.** Define API client functions, query hooks and proxy routes. Ensure query keys include all variables【444413767954226†L489-L601】 and mutations handle invalidation and optimistic updates【835040861778263†L492-L567】【476674860429372†L489-L661】.
7. **Plans tables, virtualization and dashboards.** For large datasets, decide between server‑side pagination/filtering and client‑side virtualization. TanStack Table does not include virtualization【949994982524675†L586-L590】, so plan integration with TanStack Virtual and overscan【172589116611369†L414-L479】. For dashboards, define chart cards, filters and data models.
8. **Plans map and geospatial features.** Choose an OpenLayers projection (EPSG:4326 is supported【185735763165509†L45-L51】) and decide which layers, sources and interactions belong in a reusable map core.
9. **Designs folder structure.** Recommend directories for pages, components, hooks, atoms, API, types and tests.
10. **Defines testing strategy.** Identify loading, empty, success and error states for Testing Library and MSW tests【94744529534805†L28-L41】.
11. **Identifies risks.** Note performance, state complexity, API constraints, virtualization limits and security.
12. **Produces a plan.** Provide a structured Markdown plan to review before implementation.

## What It Must Not Do

- Do not implement any code or edit files.
- Do not skip summarising requirements and scope.
- Do not design architecture without reading existing docs (`CLAUDE.md`, PRD, architecture). 
- Do not lump all state into a single atom or context. 
- Do not propose storing server data in Jotai or local state. 
- Do not plan virtualization without considering TanStack Table’s lack of built‑in virtualization【949994982524675†L586-L590】 and the need for TanStack Virtual【172589116611369†L414-L479】.
- Do not propose proxies that disable host checks (`server.allowedHosts=true`), as this is insecure【868820475057007†L185-L190】.

## Required Context

Before using this skill, read:

- `CLAUDE.md` for project rules.
- `docs/PRD.md` to understand the problem and users.
- `docs/ARCHITECTURE.md` to avoid diverging from existing design.
- `docs/API_CONTRACTS.md` if available, to understand endpoints.
- Any relevant Figma or screen specs.
- Existing feature folders and similar patterns.

If any of this is missing, list it as an open question.

## Procedure

1. **Requirement summary.** Describe the business goal and scope.
2. **Screen and route mapping.** List the routes, tabs and screens involved.
3. **Component hierarchy.** Draw a tree of components with names and responsibilities.
4. **State classification.** Create a table for each state: name, owner (local/Jotai/Query/URL), and reason.
5. **API & proxy plan.** Specify API functions, query hooks, mutations, query keys, proxy endpoints and error models.
6. **Table/virtualization plan.** Decide server‑side vs client‑side operations, column definitions, row actions and virtualization strategy.
7. **Map plan.** Describe map core, layers, projection (EPSG:4326), interactions and abstraction boundaries.
8. **Dashboard/Charts plan.** Define charts, KPIs, data transformations and library choice (MUI X Charts or ECharts). Note that MUI X Charts uses SVG with optional WebGL for dense datasets【510651272418091†L140-L219】; ECharts supports progressive rendering for very large datasets【489395383441443†L70-L94】.
9. **Folder structure proposal.** Outline directories and file names.
10. **Testing plan.** List tests to write for each state and API.
11. **Risks & open questions.** Highlight performance, security and missing details.
12. **Submit the plan.** Do not proceed with implementation until the plan is approved.

## Expected Output

Return a Markdown plan with numbered sections matching the procedure above, plus a final section for open questions and approvals. Do not include code. Provide enough detail for another engineer to understand the architecture.

## Safety Rules

- Never reveal or read secrets, tokens or `.env` files.
- Do not disable host checks or other security settings【868820475057007†L185-L190】.
- Do not expose internal URLs or credentials. 
- Do not skip reading existing docs before planning.