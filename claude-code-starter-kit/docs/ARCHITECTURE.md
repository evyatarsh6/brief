# ARCHITECTURE.md

> location: `docs/ARCHITECTURE.md`  
> Objective: To document how the system is built, why it is built that way, and what the limits of responsibility are.

---

## 1. System Overview

`<Brief description of the system, the main components, and the interaction between them.>`

High-level responsibilities:
- `<Responsibility 1>`
- `<Responsibility 2>`
- `<Responsibility 3>`

---

## 2. Architecture Principles

- Keep modules small and focused.
- Keep domain logic separate from framework-specific code where practical.
- Prefer explicit data flow.
- Prefer simple solutions over premature abstractions.
- Make integration boundaries clear.
- Validate external input at system boundaries.
- Treat observability and error handling as first-class concerns.

---

## 3. Components

| Component | Responsibility | Owned Data | Dependencies |
|---|---|---|---|
| `<Component A>` | `<What it does>` | `<Data>` | `<Dependencies>` |
| `<Component B>` | `<What it does>` | `<Data>` | `<Dependencies>` |

### Component Details

#### `<Component A>`
Purpose:
`<Explain purpose>`

Main files/modules:
- `<path/to/file>`
- `<path/to/module>`

Important rules:
- `<Rule 1>`
- `<Rule 2>`

---

## 4. Data Flow

### Flow: `<Flow name>`

1. `<Actor/System>` sends `<request/event>`.
2. `<Component>` validates `<data>`.
3. `<Component>` performs `<logic>`.
4. `<Component>` persists/returns/publishes `<result>`.
5. `<Client/System>` receives `<response/event>`.

Failure points:
- `<Failure point 1>`
- `<Failure point 2>`

Recovery:
- `<Retry / error / compensation strategy>`

---

## 5. API Boundaries

### External API

| Method | Path | Purpose | Auth | Notes |
|---|---|---|---|---|
| GET | `/api/...` | `<Purpose>` | Required/None | `<Notes>` |
| POST | `/api/...` | `<Purpose>` | Required/None | `<Notes>` |

### Internal Boundaries

- Controllers/routes should not contain business logic.
- Business logic should not depend directly on HTTP request objects.
- Database access should be isolated.
- External integrations should be wrapped with focused clients.

---

## 6. Database Model

Database:
`<PostgreSQL | MongoDB | Redis | S3 | Other>`

Main entities:

| Entity | Purpose | Key Fields | Relationships |
|---|---|---|---|
| `<Entity>` | `<Purpose>` | `<Fields>` | `<Relationships>` |

Migration strategy:
`<How schema changes are handled>`

Data retention:
`<Retention rules if relevant>`

Indexing:
`<Important indexes and why>`

---

## 7. Integrations

| Integration | Direction | Purpose | Auth | Failure Handling |
|---|---|---|---|---|
| `<Service>` | Inbound/Outbound | `<Purpose>` | `<Auth>` | `<Retries / fallback>` |

Rules:
- Use timeouts for external calls.
- Normalize external errors.
- Do not leak external implementation details into domain logic.
- Log integration failures with correlation/context IDs when possible.

---

## 8. Error Handling

Error categories:
- Validation errors.
- Authentication/authorization errors.
- Domain/business errors.
- External service errors.
- Infrastructure/database errors.
- Unexpected errors.

Rules:
- Return safe public messages to clients.
- Keep internal details in logs only.
- Do not expose stack traces in production.
- Include correlation/request IDs where possible.
- Use typed/domain errors for expected failures.

---

## 9. Observability

Logging:
- `<Logger/tool>`
- Include request ID / correlation ID.
- Do not log secrets or PII unless explicitly approved and masked.

Metrics:
- `<Metric 1>`
- `<Metric 2>`

Tracing:
- `<Tracing approach if relevant>`

Audit:
- `<What actions should be audited?>`

---

## 10. Security

Authentication:
`<How users/services authenticate>`

Authorization:
`<How permissions are enforced>`

Sensitive data:
- `<What data is sensitive?>`
- `<How it is protected?>`

Security rules:
- Validate all external input.
- Do not store secrets in repo.
- Use least privilege for integrations.
- Avoid logging credentials/tokens.
- Protect admin/internal endpoints.

---

## 11. Deployment

Runtime:
`<Node.js / Python / Docker / Kubernetes / OpenShift / Serverless / Other>`

Environments:
- Local
- Development
- Staging
- Production

Configuration:
- Use environment variables.
- Keep `.env.example` updated.
- Never commit real secrets.

Deployment flow:
1. `<Step 1>`
2. `<Step 2>`
3. `<Step 3>`

Rollback:
`<Rollback strategy>`

---

## 12. Trade-offs

| Decision | Benefit | Cost | Reason |
|---|---|---|---|
| `<Decision>` | `<Benefit>` | `<Cost>` | `<Reason>` |

---

## 13. Future Extensions

Potential future improvements:
- `<Extension 1>`
- `<Extension 2>`
- `<Extension 3>`

Do not implement these before they are required:
- `<Premature feature 1>`
- `<Premature feature 2>`
