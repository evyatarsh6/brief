---
name: api-proxy-bff-design
description: Design the API layer and backend‑for‑frontend (BFF) that lives in the same project and serves requests under the same port. Use this skill to plan route structure, request forwarding, error handling, caching, security and observability for the proxy/BFF.
---

# API Proxy / BFF Design

## Purpose

This skill helps you design a backend‑for‑frontend (BFF) or API proxy layer that sits alongside your React frontend. A well‑designed BFF isolates client‑specific logic, reduces coupling to backend services, improves security and performance, and centralises cross‑cutting concerns like authentication and error handling【372222814486731†L425-L449】【372222814486731†L453-L490】.

## When to Use

- When adding a new API endpoint or refactoring existing API code.
- When you need to aggregate or transform data from multiple services.
- When implementing authentication, authorization or rate limiting.
- When adding caching, retry or timeout logic.
- When exposing a consistent error model to the frontend.

## What It Does

1. **Defines endpoint design.** Specify route paths, HTTP methods, request and response schemas, and status codes. Keep the public API surface minimal; do not expose unnecessary backend details.
2. **Plans proxy configuration.** For local development with Vite or a similar tool, configure the dev server’s proxy to forward API requests to the BFF or backend. Avoid disabling host checks; use an explicit list to prevent DNS rebinding【868820475057007†L185-L190】. Set `server.origin` or use static asset proxies when serving through a traditional backend【527128705487619†L169-L250】.
3. **Implements request forwarding.** Forward requests to upstream services (REST, GraphQL or other) using a Node/Express/Fastify router. Normalize headers and parameters. Validate inputs and sanitize to prevent injection.
4. **Adds cross‑cutting middleware.** Handle authentication, authorization, rate limiting, retries, timeouts, logging, metrics and correlation IDs.
5. **Normalizes errors.** Map upstream errors to a consistent JSON error format with an error code, message and optional details. Do not leak internal stack traces.
6. **Caches and batches.** Implement caching for read‑heavy endpoints when appropriate and safe. Use batching or parallel calls when multiple resources are needed.
7. **Observability.** Add logging, metrics and tracing. Include request IDs and timings. Export metrics for dashboards.
8. **Security.** Ensure CORS settings are appropriate. Strip or set headers as needed. Validate input to prevent XSS, injection or other attacks. Do not allow the proxy to disable host checks or accept any origin【868820475057007†L185-L190】.
9. **Documentation.** Provide OpenAPI/Swagger or markdown documentation describing endpoints, schemas and error codes.

## What It Must Not Do

- Do not bypass backend authentication or authorization.
- Do not forward secrets or internal tokens to the client.
- Do not disable host checks (`server.allowedHosts=true`) or use wildcards for allowed hosts【868820475057007†L185-L190】.
- Do not expose private backend URLs or sensitive information.
- Do not implement business logic in the proxy that belongs in the backend.
- Do not aggregate or cache data without considering staleness and invalidation.

## Required Context

- Backend API contracts or documentation.
- Existing proxy configuration (`vite.config.js` or server middleware).
- Current authentication and authorization scheme.
- Performance requirements and acceptable latency.
- Security requirements (e.g., allowed origins, CORS).

## Procedure

1. **List endpoints.** For each new or existing endpoint, define method, path, request params, body, response schema and status codes.
2. **Map upstream calls.** Identify which upstream services each endpoint calls. Determine if calls can be parallelised or batched.
3. **Define middleware.** Choose or implement middleware for auth, rate limiting, logging, metrics and error handling.
4. **Write proxy rules.** Configure development proxy (e.g., Vite) to forward `/api/*` to your BFF or backend. Set `server.origin` if integrating with a traditional backend【527128705487619†L169-L250】.
5. **Implement handlers.** Write functions to forward requests and return normalized responses. Ensure timeouts and retries are configured.
6. **Normalize errors.** Create a consistent error object with a code and message. Map upstream error codes to these objects. Avoid exposing internal details.
7. **Add caching and batching.** Where beneficial, implement caching (e.g., for read‑heavy GETs) and combine calls to reduce round trips.
8. **Add observability.** Log each request with context; emit metrics and traces. Include error counts and latency.
9. **Review security.** Validate all inputs; sanitize user content; enforce allowed origins; do not use wildcards for allowed hosts【868820475057007†L185-L190】. Strip or set headers like `X-Powered-By` and `Server`.
10. **Document.** Produce endpoint documentation with request/response examples. Include authentication requirements and error codes.

## Expected Output

Return a design document summarizing endpoint specs, proxy rules, middleware, error formats, caching strategy, security considerations and open questions. Do not implement code.

## Safety Rules

- Never disable host checks or allow all origins【868820475057007†L185-L190】.
- Never expose internal backend URLs or credentials.
- Do not read or write `.env` or secret files.
- Always sanitize inputs and outputs.