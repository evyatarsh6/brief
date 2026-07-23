---
name: frontend-architecture
description: Plan client-side architecture, component hierarchies, state boundaries (React Query, Jotai), real-time updates (WebSockets, SSE), mapping layers (OpenLayers), and testing strategies in a Turborepo + Vite + React + TypeScript app.
---

# Frontend Architecture

## Purpose

Enforces a clean architecture for frontend applications built with Vite, React, TypeScript, MUI, and Styled Components within a Turborepo workspace. It structures client state using Jotai and React Query, outlines map integration with OpenLayers, handles real-time streams (WebSockets, SSE), and establishes testing plans (Jest, Playwright, Cypress) before writing code.

## Allowed Tech Stack

- **Build & Monorepo:** Turborepo, Vite, TypeScript, JavaScript
- **UI & Styling:** React, MUI (Material UI), Styled Components
- **State Management:** React Query (TanStack Query) for server-state/caching, Jotai for atomic client/UI state (*Redux is strictly forbidden*)
- **Data Fetching & Real-Time:** Axios, WebSockets, Server-Sent Events (SSE), REST APIs
- **Geospatial:** OpenLayers
- **Validation:** Zod
- **Testing:** Jest, Playwright, Cypress

## When to Use

- Before creating new UI views, dashboards, GIS map components, or form flows.
- When integrating REST endpoints via Axios into React Query caching hooks.
- When setting up real-time streaming interfaces using WebSockets or SSE.
- When organizing client-side directory structures within a Turborepo package/app.

## What It Does

1. **Summarises Requirements & Scope.** Define target screens, user flows, and functional bounds.
2. **Maps Routes & Screen Layouts.** Detail view routing, layout wrappers, and modal/dialog entry points.
3. **Builds Component Hierarchy.** Deconstruct UI into components styled with MUI and Styled Components.
4. **Classifies Client State.** Categorize state explicitly into allowed tools:
   - *React Query:* Server state, REST API response caching via Axios, mutations, optimistic updates.
   - *Jotai:* Atomic, local, or global feature-scoped UI state (e.g., active tools, drawer toggles, map selection state).
5. **Architects Real-Time Data Flow.** Plan WebSocket connections or Server-Sent Events (SSE) listeners, syncing incoming streams into Jotai atoms or invalidating React Query caches.
6. **Architects Geospatial / Map Features.** Plan OpenLayers integration (map core, vector layers, feature styling, projection EPSG:4326/EPSG:3857) without causing React re-render loops.
7. **Defines Validation Schema (Zod).** Detail client-side form and API response validation schemas using Zod.
8. **Defines Testing & Verification Strategy.** Outline unit/component tests using Jest and end-to-end (E2E) testing scenarios using Playwright or Cypress.

## What It Must Not Do

- Do not write implementation code or modify codebase files.
- Do not use Redux or propose adding Redux packages.
- Do not store raw server data directly inside Jotai atoms when React Query should own it.
- Do not mount raw OpenLayers map instances directly inside non-memoized React render loops.

## Procedure

1. **Requirement & View Mapping:** List routes, pages, and interactive components.
2. **Component Tree:** Draw component hierarchy with props, styling (MUI / Styled Components), and validation rules (Zod).
3. **State Distribution Table:** Map every piece of state to its owner (`React Query`, `Jotai`, or `React.useState`).
4. **Real-Time & API Integration:** Detail Axios client config, WebSocket subscriptions, or SSE connection listeners.
5. **GIS / OpenLayers Strategy:** Detail map initialization, vector layer management, and event cleanup.
6. **Turborepo File Layout:** Outline directory paths (e.g., `apps/web/src/components`, `packages/ui/*`).
7. **Testing Specification:** Outline test files for Jest (unit/hooks), Playwright (E2E), or Cypress.