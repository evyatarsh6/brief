# Claude Code Hooks

> Location: `.claude/hooks/README.md`
> Purpose: Document recommended hooks. The actual hook configuration should be placed in `.claude/settings.json`.

---

## 1. Lint After File Changes

Purpose:

* Remind the user or Claude to run lint after file changes.

When:

* `PostToolUse` after `Edit`, `MultiEdit`, or `Write`.

Risk:

* Running a full lint command after every change can be too slow. In large projects, prefer a reminder or targeted linting.

Example:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Run lint before finishing this task.'"
          }
        ]
      }
    ]
  }
}
```

---

## 2. Typecheck

Purpose:

* Ensure TypeScript changes do not break type safety.

When:

* Before ending a session or before preparing a PR.

Risk:

* A full typecheck can be slow. Do not run it after every edit in large projects.

Example:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "npm run typecheck"
          }
        ]
      }
    ]
  }
}
```

---

## 3. Unit Tests

Purpose:

* Ensure existing behavior was not broken.

When:

* Before finishing a feature or fix.
* Before preparing a PR.

Risk:

* If the test suite is long, prefer running targeted tests during development and the full suite in CI.

Example:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "npm test"
          }
        ]
      }
    ]
  }
}
```

---

## 4. Secret Scanning

Purpose:

* Prevent secrets from being introduced into the codebase.

When:

* Before commit or PR.
* After file changes.

Risk:

* Requires a suitable project tool such as `gitleaks` or `detect-secrets`.

Example:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "gitleaks detect --no-git || true"
          }
        ]
      }
    ]
  }
}
```

Note:

* In a real project, avoid using `|| true` if you want the scan to block the action. It is included here only as an example to prevent failure in environments where the tool is not installed.

---

## 5. Block Sensitive Files

Purpose:

* Prevent reading or editing sensitive files.

When:

* Through permissions in `.claude/settings.json`.

Example:

```json
{
  "permissions": {
    "deny": [
      "Read(.env)",
      "Read(.env.*)",
      "Read(secrets/**)",
      "Edit(.env)",
      "Edit(.env.*)",
      "Edit(secrets/**)"
    ]
  }
}
```

---

## 6. Notify When Claude Waits For Approval

Purpose:

* Help identify when Claude is waiting for input or approval.

When:

* Through notification hooks or a simple command.

Example:

```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Claude is waiting for input or approval.'"
          }
        ]
      }
    ]
  }
}
```
