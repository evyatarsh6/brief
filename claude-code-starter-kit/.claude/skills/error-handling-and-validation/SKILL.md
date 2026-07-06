---
name: error-handling-and-validation
description: Establish consistent error handling and validation patterns across the frontend and proxy/BFF. Use this skill to design error models, normalize errors, display user‑friendly messages, implement retries and validation, and log issues appropriately.
---

# Error Handling & Validation

## Purpose

This skill helps design and review error handling and validation for both client and server interactions. Errors should be detected, normalized and reported consistently. Inputs and user actions must be validated before submitting to the backend. This skill draws on React Query’s requirement to throw errors in query functions【977584424545852†L668-L672】, best practices for BFF error normalization【372222814486731†L453-L490】 and Testing Library guidance for user feedback【94744529534805†L28-L41】.

## When to Use

- Designing a new API or mutation.
- Implementing forms or user input.
- Handling API errors or network failures.
- Standardizing error messages across the app.
- Adding validations for complex forms or data structures.

## What It Does

1. **Defines an error model.** Create a consistent error object with `code`, `message` and optional `details`. All backend errors are normalized to this model in the proxy/BFF.【372222814486731†L453-L490】
2. **Ensures errors are thrown.** React Query query functions must throw errors when the response is not OK so that queries can mark themselves as errored【977584424545852†L668-L672】.
3. **Implements client‑side error parsing.** Write a helper to map normalized errors to user‑friendly messages. Do not expose internal stack traces or sensitive data.
4. **Centralizes error handling.** Use a common layer (e.g. React Query `onError` handler or BFF middleware) to log errors, show notifications and trigger retries.
5. **Implements retries and fallbacks.** Configure React Query retries for transient errors; use exponential backoff; provide fallback UI for offline or degraded situations.
6. **Validates inputs.** Validate form fields on the client before sending to the server. Use schema validation or custom checks. Provide accessible feedback near fields.
7. **Adds error and empty states in UI.** For each component and view, plan how loading, empty, error and success states will be displayed【94744529534805†L28-L41】.
8. **Logs and monitors errors.** Log errors with context (user ID, request ID). Integrate with monitoring tools to track error rates.
9. **Security.** Never display raw error stacks or sensitive information. Sanitize and encode error messages to prevent XSS. Use generic messages for server errors.

## What It Must Not Do

- Do not swallow errors silently; always either throw or handle them.
- Do not leak stack traces, tokens or personal data in error messages.
- Do not return HTTP 200 for error conditions.
- Do not implement retry loops without backoff.
- Do not validate on the client only; server should re‑validate.
- Do not ignore accessibility; error messages must be perceivable by screen readers.

## Required Context

- API contracts including error responses.
- Current proxy/BFF error handling mechanisms.
- UI components needing error or validation handling.
- Existing validation libraries or patterns.

## Procedure

1. **Define error format.** Decide on fields (`code`, `message`, `details`) and document them.
2. **Normalize errors in the BFF.** Map upstream errors to the error format. Remove internal fields.
3. **Update query functions.** Ensure they throw errors when the response is not OK【977584424545852†L668-L672】.
4. **Implement client error helper.** Map error objects to localized user messages. Provide default fallback.
5. **Configure React Query.** Set retry policies; use `onError` to log and show toasts; use `onSuccess` to clear messages.
6. **Add validations.** For each form, define required fields, types, ranges and patterns. Provide inline error messages and disable submit until valid.
7. **Design UI states.** For each page or widget, define and implement UI for loading, empty, error and success states【94744529534805†L28-L41】.
8. **Log errors.** Integrate with logging/monitoring; include context and user safe identifiers.
9. **Test.** Write tests for error and validation scenarios to ensure correct behaviour.

## Expected Output

Return a plan or report with the error model, changes required to normalize errors, updates to query functions, validation rules for forms, UI state definitions and logging integrations. Include sample error messages and test cases.

## Safety Rules

- Never expose internal server details or secrets.
- Sanitize error messages to prevent XSS.
- Validate user input on both client and server.