# CounselStack — Legal Practice Management Software Reviews

An affiliate/review site for legal practice management software, built with Next.js 14, Tailwind CSS, and TypeScript. Optimized for AI search engines (GEO) and traditional SEO.

**Brand:** CounselStack  
**Domain:** counselstack.io  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS  
**Deployment:** Vercel (zero-config)

---

## Pages Included

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, featured picks, trust signals |
| Reviews Index | `/reviews` | All platform reviews |
| Clio Review | `/reviews/clio` | Full in-depth review |
| MyCase Review | `/reviews/mycase` | Full in-depth review |
| PracticePanther | `/reviews/practicepanther` | Full in-depth review |
| Smokeball | `/reviews/smokeball` | Full in-depth review |
| CosmoLex | `/reviews/cosmolex` | Full in-depth review |
| Pricing Comparison | `/pricing` | Full pricing table |
| Best Overall 2026 | `/best/legal-practice-management-software-2026` | Top picks |
| Best for Solos | `/best/solo-practitioners` | Solo-focused picks |
| Best for Small Firms | `/best/small-law-firms` | Small firm picks |
| Best Free/Budget | `/best/free-budget-options` | Budget options |
| Clio vs MyCase | `/vs/clio-vs-mycase` | Comparison |
| Clio vs PracticePanther | `/vs/clio-vs-practicepanther` | Comparison |
| MyCase vs PracticePanther | `/vs/mycase-vs-practicepanther` | Comparison |
| Blog Index | `/blog` | All posts |
| Blog: How to Choose | `/blog/how-to-choose-legal-practice-management-software-2026` | 12-min guide |
| Blog: Hidden Costs | `/blog/hidden-costs-legal-pm-software` | 10-min guide |
| Blog: Migration Guide | `/blog/migrating-spreadsheets-to-legal-pm` | 11-min guide |
| About | `/about` | Editorial standards + affiliate disclosure |
| Contact | `/contact` | Contact form |

---

## Deploy to Vercel

### One-click deploy (recommended)

1. Push this repo to GitHub (already done: `github.com/Nabs6986/counsel-stack`)
2. Visit [vercel.com](https://vercel.com) and click "New Project"
3. Import from GitHub → select `counsel-stack`
4. Click "Deploy" — zero configuration needed

### Environment Variables

No environment variables required for static deployment.

For the contact form to send emails, add:
```
RESEND_API_KEY=your_resend_key_here
```
And update `app/contact/page.tsx` to POST to an API route using Resend.

### Custom Domain

After deploying, add `counselstack.io` in Vercel's domain settings.

---

## Local Development

```bash
git clone https://github.com/Nabs6986/counsel-stack.git
cd counsel-stack
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

---

## Monetization

### Affiliate Programs to Join

| Platform | Affiliate Program | Commission |
|----------|------------------|-----------|
| Clio | [clio.com/partners](https://www.clio.com/partners/) | Per referral |
| MyCase | Via Impact.com or direct | Per referral |
| PracticePanther | Direct partner program | Per referral |
| Smokeball | Direct | Per referral |
| CosmoLex | Via ProfitSolv | Per referral |

### Adding Affiliate Links

All affiliate links are in the data files:
- `app/reviews/_data/tools.ts` → `affiliateUrl` field per tool
- Replace `https://www.clio.com/signup/` with your actual affiliate tracking URL

---

## Content Architecture (GEO Optimized)

### JSON-LD Schemas Implemented

- `Organization` — global, in `layout.tsx`
- `FAQPage` — global (5 FAQs) + per-review + per-comparison + per-blog-post
- `Review` — per tool review page
- `Article` — per blog post
- `WebSite` + `WebPage` — global

### GEO Optimization Applied

Following the Princeton GEO research (arxiv.org/abs/2311.03735):
- ✅ Authoritative citations (vendor pricing sourced directly)
- ✅ Statistics with specificity ("$39/user/month", "150,000+ users")
- ✅ FAQ schema on every major page
- ✅ Answer-first content structure
- ✅ Entity-rich content (tool names, pricing, features as named entities)
- ✅ AI bot access in `robots.txt` (GPTBot, PerplexityBot, ClaudeBot)
- ✅ Structured data throughout

---

## Updating Content

### Adding a New Tool Review

1. Add the tool to `app/reviews/_data/tools.ts`
2. Create static page in `app/reviews/[slug]/page.tsx` (auto-generated from slug)
3. Add to sitemap (auto-generated via `app/sitemap.ts`)

### Adding a New Comparison

1. Add to `app/vs/_data/comparisons.ts`
2. Page auto-generates at `/vs/[slug]`

### Adding a Blog Post

1. Add to `app/blog/_data/posts.ts`
2. Page auto-generates at `/blog/[slug]`

---

## File Structure

```
counsel-stack/
├── app/
│   ├── layout.tsx              # Root layout + global JSON-LD
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── pricing/page.tsx
│   ├── best/
│   │   ├── legal-practice-management-software-2026/
│   │   ├── solo-practitioners/
│   │   ├── small-law-firms/
│   │   └── free-budget-options/
│   ├── reviews/
│   │   ├── _data/tools.ts      # All review data
│   │   ├── page.tsx            # Reviews index
│   │   └── [slug]/page.tsx     # Individual reviews
│   ├── vs/
│   │   ├── _data/comparisons.ts
│   │   └── [comparison]/page.tsx
│   └── blog/
│       ├── _data/posts.ts      # Blog content
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── marketing/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── AffiliateDisclosure.tsx
│   └── ui/
│       └── StarRating.tsx
├── lib/utils.ts
└── public/robots.txt
```
