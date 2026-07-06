# Security Review Skill

## When to use

Use this skill when touching auth, permissions, secrets, external input, integrations, database access, logging, deployment, or CI/CD.

## What this skill does

- Reviews security-sensitive changes.
- Identifies data exposure, injection, unsafe logging, auth bypass, insecure defaults, and secrets risks.
- Recommends minimal safe fixes.

## What this skill does not do

- It does not approve production deployment.
- It does not read or print secrets.
- It does not disable security controls to make tests pass.

## Procedure

1. Identify changed security boundaries.
2. Check input validation.
3. Check auth/authz.
4. Check secret handling.
5. Check logging for sensitive data.
6. Check external integrations and timeouts.
7. Check database query safety.
8. Check CI/deployment risks.
9. Recommend fixes ordered by severity.

## Output format

```text
Security scope:
- ...

Critical findings:
- ...

High findings:
- ...

Medium/Low:
- ...

Safe fixes:
- ...

Manual review required:
- ...
```
