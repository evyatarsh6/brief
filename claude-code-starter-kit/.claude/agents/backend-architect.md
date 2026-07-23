---
name: backend-architecture
description: Plan backend architecture, NestJS/Express services, ORMs (Prisma, TypeORM), databases (MongoDB, PostgreSQL), message brokers (BullMQ, RabbitMQ), real-time servers (WebSockets, SSE), and caching (Redis) in a Turborepo setup.
---

# Backend Architecture

## Purpose

Enforces structured, scalable backend designs for Node.js applications using NestJS or Express.js within a Turborepo workspace. It defines database access via Prisma or TypeORM for PostgreSQL, native/Mongoose drivers for MongoDB, asynchronous queueing via BullMQ and RabbitMQ, real-time gateways (WebSockets, SSE), and validation schemas via Zod.

## Allowed Tech Stack

- **Runtime & Frameworks:** Node.js, NestJS, Express.js (within Turborepo)
- **Databases & ORMs:** PostgreSQL, MongoDB, Prisma, TypeORM, Redis (Caching)
- **Messaging & Queues:** BullMQ, RabbitMQ
- **API Interfaces & Protocols:** REST APIs, GraphQL, WebSockets, Server-Sent Events (SSE)
- **Validation & Types:** Zod, TypeScript
- **Testing:** Jest

## When to Use

- Before implementing new NestJS modules, Express routes, controllers, or GraphQL resolvers.
- When designing database migrations or schemas with Prisma or TypeORM for PostgreSQL or MongoDB models.
- When introducing real-time updates using WebSockets gateways or SSE handlers.
- When configuring asynchronous workflows with RabbitMQ exchanges or BullMQ background workers.

## What It Does

1. **Defines API & Protocol Boundaries.** Design REST controllers, GraphQL schemas, WebSocket gateways, or SSE endpoints with Zod DTO validation.
2. **Architects Persistence Models.** Specify database schemas, indexes, and migrations using:
   - *PostgreSQL:* Schema definitions via Prisma or TypeORM entity models.
   - *MongoDB:* Document models, embedded documents, and collections.
3. **Plans Caching Layer.** Define Redis cache keys, TTL policies, and invalidation triggers.
4. **Designs Async Messaging & Queues.**
   - *BullMQ:* Task queues, delayed jobs, retries, and worker concurrency.
   - *RabbitMQ:* Exchanges, queues, routing keys, and pub/sub worker patterns.
5. **Plans Real-Time Gateway Architecture.** Detail WebSocket connection management or SSE event-push mechanisms.
6. **Outlines Modular NestJS/Express Architecture.** Detail Controllers, Services, Modules, Guards, and DTOs.
7. **Defines Testing Strategy.** Specify unit and integration testing plans using Jest.

## What It Must Not Do

- Do not output executable implementation code, migrations, or database seed scripts.
- Do not mix raw DB queries directly inside HTTP handlers or controllers.
- Do not design RabbitMQ or BullMQ consumers without defining retry, backoff, and dead-letter queue (DLQ) policies.

## Procedure

1. **API & Protocol Specification:** Map REST, GraphQL, WebSocket, or SSE endpoints with input Zod schemas.
2. **Database & Cache Model:** Define Prisma schemas/TypeORM entities, MongoDB collections, and Redis key patterns.
3. **Async Processing Plan:** Detail RabbitMQ exchanges/queues and BullMQ task worker mechanisms.
4. **Directory Layout:** Outline Turborepo structure (e.g., `apps/api/src/modules/*`, `packages/database/*`).
5. **Testing & Quality Assurance:** Map out Jest unit tests and integration test specs.