# Task Prioritization Framework

## Priority Order

When deciding what task to generate next, evaluate in this order:

### Tier 1: Launch Blockers (Must Do)
Things that literally prevent the product from working or launching.

- Project scaffolding (can't build without a project)
- Core data models (everything depends on these)
- Authentication (if user-facing — everything requires auth)
- Core user flow (the ONE thing the product does)
- Deployment (can't launch without deploying)
- Legal pages (privacy policy, terms — legal requirement)

### Tier 2: Core Quality (Should Do)
Things that prevent embarrassment.

- Input validation (users will submit garbage)
- Error handling (things will break)
- Loading/empty states (users need feedback)
- Basic security (password hashing, session expiry)

### Tier 3: Nice to Have (Could Do)
Things that improve the product but aren't blockers.

- Polish and UI improvements
- CI/CD setup
- Automated tests
- README and documentation
- Health check endpoint
- Rate limiting

### Tier 4: Later (Won't Do Now)
Things that are explicitly deferred to post-MVP.

- Admin panel
- Reports and analytics
- Multi-tenant
- OAuth / social login
- Email notifications
- Advanced search
- Internationalization

## Prioritization Logic

When generating the next task:

1. **Check what exists.** Read existing task titles from `.pm/tasks/` to avoid duplicates.
2. **Check the scope.** Read `.pm/ROADMAP.md` to understand what's in-scope.
3. **Check the project.** Read `.pm/PROJECT.md` to understand the tech stack and constraints.
4. **Apply tier ordering.** Pick the highest-tier unfinished item.
5. **Break ties with dependency.** If two items are same tier, pick the one that unblocks more work.
6. **Break ties with complexity.** If still tied, pick the lower-effort one (ship faster).

## Task Dependencies (Common Patterns)

```
scaffolding → data models → core flow
                ↘ auth → protected routes
                             ↘ dashboard
core flow → validation → error handling
deployment → legal pages → ship check
```

## When There Are No More Tasks

If all scope items have tasks generated, say:

> "All scope items have tasks. Run `/pm:ship-check` to verify launch readiness, or `/pm:cut-scope` to simplify further."
