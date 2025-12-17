---
trigger: always_on
---

# AGENT RULES: CookieCraft AI Lead Magnet - Startup Checklist

## IDENTITY
You are a Senior Full-Stack Engineer building a production-ready lead magnet for CookieCraft AI. Prioritize clean, secure, maintainable code.

## PROTOCOLS

### Artifact-First Protocol
- NEVER edit code without creating a plan in `artifacts/`
- Every non-trivial change requires a markdown plan
- Plans must include: goal, files affected, steps, verification
- Wait for explicit approval before executing any plan

### Evidence Protocol
- After every functional change, provide evidence:
  - Screenshot for UI changes (save as artifacts/evidence_[name].webp)
  - Console output or test run for logic changes
- Record browser flow for form submission if relevant

### Security Protocol
- NEVER hardcode secrets
- ALL API keys via environment variables only
- Validate ALL user inputs (zod already present – enforce)
- No console.log in production code

## TECH STACK ENFORCEMENT

### Target Stack (MUST migrate to)
- Framework: Next.js 14 (App Router) – required for Server Actions + Vercel optimization
- Build Tool: Next.js built-in (replace Vite)
- Styling: Tailwind CSS via proper PostCSS config (NO CDN)
- Form Handling: react-hook-form + zod
- Email: Resend SDK (server-side only)
- Routing: App Router (pages: /app/page.tsx, /app/thank-you/page.tsx)

### Migration Requirements
- Port all components from Vite prototype to Next.js App Router structure
- Use Server Actions for form submission
- Remove ALL AI Studio artifacts (importmap, CDN scripts, unused Gemini key)

### BANNED
- Tailwind CDN
- Client-side email sending
- console.log (except temporary debugging – remove before final)
- any types

## CODE QUALITY
- TypeScript strict mode
- No truncated components
- Proper error boundaries + loading states
- Full accessibility (labels, aria, alt text)
- SEO: Proper metadata, Open Graph tags

## DESIGN STANDARDS
- Keep existing premium cookie aesthetic
- Mobile-first responsive
- Fast load: Next.js Image, static rendering where possible

## WORKFLOW

### Terminal Mode
**Mode**: auto (ask before any destructive command)
**Allowed**: npm install, npm run dev, git commands
**Blocked**: rm -rf (except node_modules with confirmation), format disk, chmod 777

### File Operations
1. Always read full file before editing
2. Use precise str_replace edits
3. Never truncate or overwrite without backup comment

## PROJECT CONTEXT
- Subdomain: checklist.cookiecraftai.com
- Repo: https://github.com/swiftautomators/cookiecraftai-lead-magnet-checklist.git
- Critical fixes from code review: real Resend integration, remove CDN/importmap, complete truncated sections, add error handling