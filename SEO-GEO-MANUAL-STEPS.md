# CounselStack SEO + GEO Manual Steps

Date: 2026-02-20

## Search Console
- Replace placeholder Google verification token in `app/layout.tsx`:
  - `verification.google: "ADD_YOUR_GSC_VERIFICATION_CODE_HERE"`
- Re-submit sitemap after deploy:
  - `https://counselstack.io/sitemap.xml`

## Structured Data Validation
- Validate representative URLs in Schema Validator / Rich Results Test:
  - Home
  - One review page
  - One compare page (`/compare/*`)
  - One blog page
  - One best page

## Canonical + Redirect Hygiene
- If `/vs/*` should be deprecated long-term, add permanent redirects (`301`) from `/vs/*` to `/compare/*` in Next config after traffic evaluation.

## Content Enhancements (Optional Next Pass)
- Add/expand FAQ coverage to pages with fewer than 5 FAQs.
- Add source-backed citations to major data claims for stronger AI-answer reliability.
