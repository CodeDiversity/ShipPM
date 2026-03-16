# Launch Checklist

## Purpose
Universal items to verify before putting a product in front of real users. Used by `/pm:ship-check`.

## Core Product
- [ ] Core user flow works end-to-end (happy path)
- [ ] Basic error handling (doesn't crash on bad input)
- [ ] Empty states exist (what does the user see with no data?)
- [ ] 404 / not found page exists

## Auth & Security (if applicable)
- [ ] Passwords are hashed (NEVER plaintext — check for bcrypt, argon2, scrypt)
- [ ] Sessions/tokens expire (not immortal)
- [ ] Password reset flow exists (users WILL forget passwords)
- [ ] Rate limiting on auth endpoints (prevent brute force)
- [ ] No secrets in source code (grep for API keys, passwords, tokens)
- [ ] CORS configured properly (not wildcard `*` in production)
- [ ] HTTPS enforced

## Legal
- [ ] Privacy policy page exists and is linked
- [ ] Terms of service page exists and is linked
- [ ] Cookie consent banner (if using analytics/tracking in EU-relevant markets)

## Billing (if applicable)
- [ ] Webhook handling for payment provider (Stripe, etc.)
- [ ] Customer portal / subscription management link
- [ ] Failed payment handling (what happens when a charge fails?)
- [ ] Subscription change events handled (upgrade, downgrade, cancel)

## Ops & Infrastructure
- [ ] README exists with setup instructions
- [ ] .env.example documents all required env vars
- [ ] Health check endpoint exists (GET /health → 200)
- [ ] Deployment is documented or automated
- [ ] Error logging/monitoring configured (even basic)

## Quality
- [ ] Tests exist for core flow (at minimum)
- [ ] No console.log / print debugging left in production code
- [ ] Build/compile succeeds without warnings
- [ ] Database migrations are clean and reversible

## UX
- [ ] Loading indicators for async operations
- [ ] Error messages are user-friendly (not stack traces)
- [ ] Form validation with inline errors
- [ ] Responsive on mobile (if web)
- [ ] Favicon and page title set

## Not Required for v1 (Common Over-Engineering)
These are NOT required to launch. Don't let them block you:
- ~~CI/CD pipeline~~ (deploy manually if needed)
- ~~100% test coverage~~ (test the core flow)
- ~~Multi-environment setup~~ (one environment is fine)
- ~~Custom domain~~ (your-app.vercel.app is fine)
- ~~Performance optimization~~ (works > fast)
- ~~Accessibility audit~~ (basic semantics is enough for v1)
- ~~SEO optimization~~ (unless SEO is your acquisition channel)
