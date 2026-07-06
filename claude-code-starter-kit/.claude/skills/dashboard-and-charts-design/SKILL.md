---
name: dashboard-and-charts-design
description: Use this skill to design and implement dashboards, KPIs and charts in the frontend. It helps plan the architecture, choose appropriate chart libraries, handle large datasets, design view models, and ensure performance, accessibility, and consistency before coding.
---

# Dashboard and Charts Design

## Purpose

This skill guides Claude Code to design dashboards, KPI cards, and charts for a React + TypeScript application using MUI X Charts or Apache ECharts (or other justified libraries). It ensures charts are accessible, performant and match the system’s design. It also covers handling large datasets, data transformations, and reusable dashboard components.

## When To Use This Skill

- Before implementing any dashboard view or analytics tab.
- When adding a new chart, KPI card, or analytics component.
- When refactoring existing dashboards or charts.
- When choosing or changing chart libraries.
- When planning interactions between filters, time ranges and charts.

## What This Skill Does

It produces an architecture and implementation plan for dashboards and charts. It should:

1. Summarize the business requirements for the dashboard or analytics view.
2. Identify the KPI metrics and chart types required (e.g. line, bar, pie, scatter, heatmap, candlestick).
3. Compare available charting libraries (e.g. **MUI X Charts** vs **Apache ECharts**) using official documentation:
   - MUI X Charts provides React charts integrated with the MUI design system, supports customization, stacking, composition, axes, zoom and pan, and uses SVG for most charts; the Premium tier adds WebGL-based charts for dense datasets【510651272418091†L140-L219】.
   - Apache ECharts supports both Canvas and SVG rendering, progressive and real‑time rendering of very large datasets (tens of millions of data points), and a wide variety of chart types, making it suitable for high-scale data visualization【489395383441443†L70-L94】.
4. Select a chart library based on performance, features, licensing, team familiarity and integration with MUI.
5. Design the dashboard layout, including reusable container components, grid or flexbox, responsive behavior and alignment with the MUI theme.
6. Define reusable chart component abstractions that accept data, configuration and styling props and encapsulate underlying library specifics.
7. Define view-model mapping: map raw API responses to chart-ready structures, formatting numbers, aggregating data on the server if needed and using memoized transformations.
8. Define cross‑component interactions: filters, date ranges, drill‑down, synchronized zoom and cross‑highlighting.
9. Plan loading, empty, error and success states for each chart or KPI; ensure skeletons or spinners are displayed while data loads.
10. Plan large‑data strategies: progressive loading, server aggregation, virtualization for table‑like charts, and use of WebGL if necessary.
11. Plan accessibility: include alternative text, keyboard navigation, focus management and tooltips; ensure color palettes meet contrast requirements.
12. Define test strategy: verify charts render with correct data, handle loading/error, respond to filter changes, and support keyboard navigation.
13. Produce a folder structure plan for dashboard components, view models, hooks and tests.

## What This Skill Must Not Do

- Do not select a chart library without justification.
- Do not embed raw API data directly into chart components without transformation.
- Do not design a single monolithic dashboard component with all charts; separate into modular widgets.
- Do not ignore performance concerns for large datasets.
- Do not ignore accessibility (e.g. alt text, ARIA labels).
- Do not implement code before the dashboard plan is approved.
- Do not duplicate state between charts, tables and filters.
- Do not rely on client‑side aggregation for large datasets when server‑side aggregation is available.

## Required Context To Read First

Before using this skill, read:

- `CLAUDE.md` for project standards.
- `docs/PRD.md` for business requirements and analytics goals.
- `docs/ARCHITECTURE.md` for system architecture and existing modules.
- `docs/API_CONTRACTS.md` for endpoints that supply analytical data.
- `docs/DATA_MODEL.md` for entity definitions and field types.
- existing chart or dashboard components if refactoring.
- Figma designs or dashboard mockups if available.

## Procedure

1. **Requirement Summary:** Summarize the business questions the dashboard should answer, including KPIs, time ranges, user roles, and desired interactions.
2. **Library Selection:** Research MUI X Charts and Apache ECharts (or other libraries) and choose the best fit. Document reasons (e.g. MUI integration vs performance needs【510651272418091†L140-L219】【489395383441443†L70-L94】).
3. **Layout Design:** Draw a wireframe or describe the layout: grid rows/columns, cards, charts, filters.
4. **Component Decomposition:** Define reusable components (e.g. `KpiCard`, `ChartCard`, `DashboardContainer`).
5. **Data Model and View Models:** Define API calls (query keys, variables) and data transformations. Consider using TanStack Query for server data and Jotai for filter state. Define view-model types separate from raw data.
6. **Large‑Data Strategy:** Plan server‑side aggregation or pagination. When the dataset is too large for the chosen chart library, consider progressive loading or WebGL (Premium MUI Charts)【510651272418091†L140-L219】 or Canvas/ECharts progressive rendering【489395383441443†L70-L94】.
7. **State and Interaction:** Define filter atoms, date range atoms, query keys, and how charts respond to changes.
8. **Loading/Error/Empty States:** Plan skeletons or placeholders for each card and define user-friendly error messages.
9. **Accessibility:** Plan alt text, color palettes, ARIA labels, keyboard navigation and focus management.
10. **Testing:** Plan unit tests for view models and utilities; integration tests using Testing Library to simulate user interactions and verify chart rendering; use MSW to mock API data.
11. **Folder Structure and Naming:** Propose directory structure (e.g. `features/analytics/`) with subfolders for components, hooks, state, api, types and tests.
12. **Output Plan:** Provide a markdown plan covering all sections above; ask for approval before implementation.

## Expected Output Format

Return the dashboard/charts plan in this format:

```text
# Dashboard and Charts Plan

## 1. Requirement Summary
...

## 2. Chart Library Selection
Choice: ...
Justification: ...

## 3. Layout
...

## 4. Component Structure
...

## 5. Data Model / View Models
...

## 6. Large‑Data Strategy
...

## 7. State and Interaction
...

## 8. States (Loading/Empty/Error)
...

## 9. Accessibility
...

## 10. Testing
...

## 11. Folder Structure
...

## 12. Risks / Open Questions
...

## 13. Implementation Plan
Step 1: ...
Step 2: ...

## Approval Needed
Do not implement until approved.
```

## Safety Rules

- Never read or expose `.env` files, secrets, tokens, certificates or production credentials.
- Never embed real user data or sensitive values in the plan; use placeholders.
- Do not install unapproved chart libraries.
- Do not load untrusted external scripts.
- Do not hardcode colors or break the project’s theme.
- Do not skip accessibility and performance considerations.