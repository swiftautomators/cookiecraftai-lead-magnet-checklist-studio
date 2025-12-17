---
trigger: always_on
---

# MISSION: CookieCraft AI Lead Magnet - Startup Checklist

## OBJECTIVE
Deliver a production-ready, isolated lead magnet at checklist.cookiecraftai.com that captures emails, sends the interactive PDF checklist instantly, and upsells the Cookie Business Accelerator via thank-you page and welcome email.

## CORE FEATURES
1. Landing page with exact copy, hero, benefits, email form
2. Server Action form submit → add to Resend audience → send welcome email with PDF link → redirect to thank-you
3. Thank-you page with video embed + upsell CTA
4. Full email sequence ready (templates for emails 2-3 optional stretch)

## SUCCESS CRITERIA
- [ ] Real email capture + delivery working (test with real address)
- [ ] No Tailwind CDN or importmap
- [ ] All sections complete (no truncation)
- [ ] Error handling + user feedback on submit
- [ ] Proper SEO/metadata
- [ ] Responsive on mobile + desktop
- [ ] Deployable to Vercel (next build + next start work)
- [ ] Environment variables only for secrets

## CONSTRAINTS
- Must use Next.js 14 App Router (migrate from Vite prototype)
- Server-side only for Resend calls
- Follow rules.md exactly
- Artifact-first for every change

## DEPLOYMENT TARGET
- Vercel project connected to repo
- Shared RESEND_API_KEY env var
- Public /checklist.pdf hosted in public folder