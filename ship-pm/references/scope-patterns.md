# Scope Patterns by Project Type

## Purpose
Common scope patterns for different types of projects. Use these as starting points when scoping — adapt based on the specific project.

## SaaS Web App

### Usually In Scope
- User signup + login (email/password)
- Core CRUD for primary resource
- Primary dashboard/list view
- Basic settings page
- Single deployment target
- Privacy policy + terms pages

### Usually Out of Scope
- OAuth / social login
- Team/organization features
- Role-based access
- Billing (unless it IS the product)
- Admin panel
- Real-time features
- Mobile app

## CLI Tool

### Usually In Scope
- Core commands (2-4 commands max for v1)
- Help text + usage docs
- Config file support
- stdin/stdout piping
- Error messages with actionable guidance

### Usually Out of Scope
- Interactive TUI
- Shell completions
- Plugin system
- Auto-updating
- GUI wrapper

## API / Backend

### Usually In Scope
- 3-5 core endpoints
- Request validation
- Consistent error responses
- Auth (token/API key)
- One database
- Health check endpoint

### Usually Out of Scope
- API versioning
- Rate limiting
- Pagination (unless core flow needs it)
- OpenAPI/Swagger docs
- Multi-database
- Message queues

## Mobile App

### Usually In Scope
- One platform (iOS OR Android — not both)
- Core flow (3-5 screens max)
- Local data persistence
- Basic navigation (tab or stack)

### Usually Out of Scope
- Both platforms simultaneously
- Push notifications
- Offline sync
- In-app purchases
- Deep linking
- Widget/complications

## Marketplace / Two-Sided Platform

### Usually In Scope
- One side first (supply OR demand — not both equally)
- Basic listing/profile creation
- Search/browse for the other side
- One contact/transaction mechanism

### Usually Out of Scope
- Reviews/ratings
- Messaging system
- Payment handling
- Verification/trust features
- Recommendation algorithm

## Common Across All Types

### Always In Scope
- The core flow works end-to-end
- Basic error handling
- Minimal viable onboarding

### Always Out of Scope for v1
- Analytics
- Admin panel
- Internationalization
- Accessibility beyond basics
- Performance optimization
- A/B testing
