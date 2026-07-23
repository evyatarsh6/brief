---
name: fullstack-architecture
description: Plan complete end-to-end features spanning React/Vite frontends, NestJS/Express backends, Prisma/TypeORM, databases (PostgreSQL/MongoDB), real-time (WebSockets, SSE), messaging (RabbitMQ/BullMQ), and E2E testing in a Turborepo workspace.
---

# Full-Stack Feature Architecture

## Purpose

Coordinates multi-tier architectural plans bridging React/Vite clients to NestJS/Express backends within a Turborepo project. Synchronizes data models, shared Zod validation schemas, Axios API layers, real-time protocols (WebSockets, SSE), messaging queues, and cross-stack testing strategies.

## Allowed Tech Stack

- **Monorepo Workspace:** Turborepo, TypeScript, JavaScript
- **Frontend Layer:** Vite, React, MUI, Styled Components, React Query, Jotai (*No Redux*), Axios, OpenLayers
- **Backend Layer:** Node.js, NestJS, Express.js, GraphQL, REST APIs
- **Real-Time Layer:** WebSockets, Server-Sent Events (SSE)
- **Database & Caching Layer:** PostgreSQL, MongoDB, Prisma, TypeORM, Redis
- **Async Messaging Layer:** BullMQ, RabbitMQ
- **Validation & Schemas:** Zod (shared across client/server)
- **Testing Frameworks:** Jest, Playwright, Cypress

## When to Use

- When building complete features requiring database updates, backend job handling, API routes, and React components.
- When planning real-time streaming flows (e.g., pushing background BullMQ worker status updates via WebSockets/SSE to React/Jotai UI components or OpenLayers map layers).

## What It Does

1. **End-to-End Workflow Mapping.** Trace user actions from UI interactions -> Jotai / React Query -> Axios -> NestJS / Express Controller -> Service -> Queue / Database -> WebSockets/SSE feedback.
2. **Shared Schema Definition.** Create shared Zod validation schemas and TypeScript DTOs in a shared Turborepo package (e.g., `packages/shared-types`).
3. **Backend & Persistence Design.** Define PostgreSQL schemas (Prisma/TypeORM), MongoDB collections, Redis caching, and RabbitMQ/BullMQ pipelines.
4. **Frontend UI & State Design.** Structure React components (MUI / Styled Components), client state (Jotai + React Query), and OpenLayers map features.
5. **Unified Turborepo File Blueprint.** Map file paths across apps and packages (`apps/web`, `apps/server`, `packages/shared-types`).
6. **Full-Stack Testing Blueprint.** Map unit tests (Jest) and cross-tier integration/E2E tests (Playwright or Cypress).

## What It Must Not Do

- Do not write implementation code or modify codebase files.
- Do not introduce Redux into any tier.
- Do not create mismatched types or duplicate validation rules between client API callers and server controllers.

## Procedure

1. **Requirement & Data Flow Mapping:** Trace the full lifecycle of data across frontend, real-time layers, backend, and databases.
2. **Data Model & Shared Schemas:** Define Prisma/TypeORM/MongoDB schemas, REST/GraphQL endpoints, and shared Zod schemas.
3. **Queue & Real-Time Plan:** Outline BullMQ/RabbitMQ worker pipelines and WebSockets/SSE event handlers.
4. **Frontend Architecture:** Outline React UI hierarchy, state assignment (Jotai, React Query), and styling.
5. **Turborepo File Layout:** Map out directory locations across apps and packages.
6. **E2E Testing Plan:** Write test scenarios covering full workflows using Playwright or Cypress.