export interface PricingTier {
  name: string;
  price: string;
  billingNote: string;
  features: string[];
}

export interface ReviewTool {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  website: string;
  affiliateUrl: string;
  founded: number;
  headquarters: string;
  overallRating: number;
  ratings: {
    easeOfUse: number;
    features: number;
    valueForMoney: number;
    customerSupport: number;
    mobileApp: number;
  };
  pricing: PricingTier[];
  freeTrial: string;
  bestFor: string;
  notGreatFor: string;
  verdict: string;
  pros: string[];
  cons: string[];
  keyFeatures: string[];
  integrations: number;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  deepDive: string;
  faqs: { question: string; answer: string }[];
}

export const tools: Record<string, ReviewTool> = {
  clio: {
    slug: "clio",
    name: "Clio",
    tagline: "The industry's #1 legal software, used by 150,000+ attorneys worldwide",
    logo: "/logos/clio.svg",
    website: "https://www.clio.com",
    affiliateUrl: "https://www.clio.com/signup/",
    founded: 2008,
    headquarters: "Vancouver, BC, Canada",
    overallRating: 4.7,
    ratings: {
      easeOfUse: 4.5,
      features: 4.9,
      valueForMoney: 4.3,
      customerSupport: 4.8,
      mobileApp: 4.6,
    },
    pricing: [
      {
        name: "EasyStart",
        price: "$49/user/month",
        billingNote: "Billed annually ($59/month billed monthly)",
        features: [
          "Time tracking & billing",
          "Document management",
          "Built-in e-signatures",
          "Secure client communications",
          "Case/matter management",
        ],
      },
      {
        name: "Essentials",
        price: "$89/user/month",
        billingNote: "Billed annually ($99/month billed monthly)",
        features: [
          "Everything in EasyStart",
          "Document templates",
          "Client portal",
          "250+ app integrations",
          "Matter templates",
        ],
      },
      {
        name: "Advanced",
        price: "$119/user/month",
        billingNote: "Billed annually ($139/month billed monthly)",
        features: [
          "Everything in Essentials",
          "Automated workflows",
          "Custom reports",
          "Live onboarding",
          "Priority support",
          "Task automation",
        ],
      },
      {
        name: "Expand",
        price: "$149/user/month",
        billingNote: "Billed annually ($169/month billed monthly)",
        features: [
          "Everything in Advanced",
          "Clio Grow (legal CRM)",
          "Lead management & intake",
          "ROI marketing tracking",
          "Full client lifecycle management",
        ],
      },
    ],
    freeTrial: "7 days (no credit card required)",
    bestFor: "Mid-size to large law firms, attorneys who need deep integrations and a mature ecosystem",
    notGreatFor: "Solo practitioners on a tight budget, firms needing built-in accounting",
    verdict:
      "Clio is the gold standard in legal practice management software — and for good reason. With 150,000+ users, 250+ integrations, and a decade-plus of refinement, it's the most mature platform available. The EasyStart plan at $49/user/month is accessible for solos, but the real value emerges at the Essentials and Advanced tiers where workflows, integrations, and reporting unlock real efficiency gains. Our verdict: if budget isn't your primary constraint, Clio is the safest, most capable choice for most law firms.",
    pros: [
      "Largest integration ecosystem in legal software (250+ apps)",
      "Excellent mobile apps for iOS and Android",
      "Industry-leading customer support (24/7 on higher plans)",
      "Clio Grow CRM adds powerful client intake and lead tracking",
      "Continuous product development — new features released monthly",
      "Strong trust accounting and IOLTA compliance tools",
      "Largest user community (Clio Cloud Conference, active forums)",
    ],
    cons: [
      "Among the most expensive per-user pricing in the category",
      "No built-in accounting — QuickBooks integration required",
      "Can feel complex for solo practitioners who need simplicity",
      "Some features gated behind higher tiers feel like nickel-and-diming",
      "No built-in court filing integration on lower plans",
    ],
    keyFeatures: [
      "Matter and case management",
      "Time tracking (desktop, mobile, and browser extension)",
      "Billing and invoicing with LawPay integration",
      "Trust accounting (IOLTA compliant)",
      "Document management and automation",
      "Client portal (Clio Connect)",
      "Calendar and deadline management",
      "Conflict checking",
      "250+ third-party integrations",
      "Clio Grow (CRM/intake add-on)",
      "Custom reporting and analytics",
      "Task automation and workflows",
    ],
    integrations: 250,
    metaTitle: "Clio Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "In-depth Clio review for 2026. Real pricing ($49–$149/user/month), key features, pros, cons, and who it's best for. Updated with current information.",
    intro:
      "Clio has been the dominant force in legal practice management software since 2008. Today it serves over 150,000 legal professionals in 90+ countries, making it the most widely used platform in the category by a significant margin. But market dominance doesn't automatically equal the right fit for your practice — and at $49 to $149 per user per month, getting the decision right matters.",
    deepDive: `## Who Is Clio For?

Clio works best for law firms that are past the startup phase and ready to invest in a mature, integrated practice management platform. This typically means:

- **Solo attorneys** who plan to grow and want infrastructure that scales
- **Small firms (2–20 attorneys)** who need robust collaboration, billing, and client communication
- **Mid-size firms (20–100 attorneys)** who need workflow automation and reporting
- **Firms with multiple practice areas** who benefit from Clio's breadth of features

Clio is arguably overkill for a solo practitioner who primarily needs time tracking and invoicing — in that case, MyCase Basic at $39/user/month covers the essentials for less.

## Clio's Core Strengths

### The Integration Ecosystem

No competitor comes close to Clio's 250+ integrations. From accounting (QuickBooks, Xero) to document management (NetDocuments, Dropbox) to court filing (FileTime, One Legal) to CRM (Lawmatics) to communication tools — Clio plugs into the full stack of legal operations. If you already use specific tools, Clio likely connects to them.

### Time Tracking That Actually Works

Clio's time tracking is built for the way lawyers actually work. The desktop timer, Chrome extension, and mobile app all sync in real time. The "Activities" view shows unbilled time at a glance. Clio Payments lets clients pay invoices online in under a minute. Firms consistently report 15–25% increases in billed hours after switching to Clio, simply because it captures time that previously slipped through.

### Clio Grow: A Legal CRM Built In

The Expand plan ($149/user/month) includes Clio Grow, a full legal CRM that handles lead capture, intake forms, automated follow-up sequences, and conversion analytics. For firms running any kind of marketing or wanting to systematize client intake, Clio Grow is genuinely powerful — and there's no comparable native feature in most competitors.

### Customer Support

Clio's support consistently earns high marks from users. The Advanced and Expand plans include live onboarding specialists and priority support. The company maintains an extensive knowledge base, video library, and an active community forum. Clio also holds the annual Clio Cloud Conference, the largest legal technology conference in North America.

## Clio's Key Weaknesses

### No Built-In Accounting

This is the most significant limitation. Clio does not include a full double-entry accounting ledger. You'll need QuickBooks (or Xero) integration to run your firm's books. Trust accounting is included, but practice-wide accounting requires the external integration. For firms that want everything under one roof, CosmoLex is a better choice.

### Pricing Complexity

Clio's tiered pricing means the feature you need might be one plan above what you're currently on. Document automation, custom reports, and workflow automation require the Advanced plan at $119/user/month. For a five-attorney firm, that's nearly $600/month for mid-tier features — real money that adds up annually.

### Learning Curve for New Users

Clio is powerful, and that power comes with some complexity. New users often report feeling overwhelmed in the first few weeks. Clio has invested heavily in onboarding resources, but expect a 2–4 week ramp period before the firm reaches full productivity.

## Pricing Breakdown

| Plan | Annual Price | Monthly Price | Best For |
|------|-------------|---------------|---------|
| EasyStart | $49/user/mo | $59/user/mo | Solos moving off spreadsheets |
| Essentials | $89/user/mo | $99/user/mo | Growing firms needing integrations |
| Advanced | $119/user/mo | $139/user/mo | Firms wanting automation |
| Expand | $149/user/mo | $169/user/mo | Firms with active marketing |

All plans include a 7-day free trial with no credit card required.

## Bottom Line

Clio earns its reputation as the industry standard. If you want the most feature-rich, most integrated, most future-proof legal practice management platform available today, Clio is the answer. The price premium over competitors is real — but so is the value. For firms that take legal operations seriously, Clio pays for itself through captured billable time, reduced admin overhead, and client retention.`,
    faqs: [
      {
        question: "What does Clio cost per month?",
        answer:
          "Clio pricing ranges from $49 to $149 per user per month when billed annually. Plans are: EasyStart ($49/user/mo), Essentials ($89/user/mo), Advanced ($119/user/mo), and Expand ($149/user/mo). Monthly billing adds approximately $10–20 per user.",
      },
      {
        question: "Does Clio include trust accounting?",
        answer:
          "Yes, all Clio plans include trust accounting tools that are IOLTA compliant. Clio helps you manage client funds, generate trust ledger reports, and stay compliant with bar association regulations. However, full firm-wide accounting (P&L, balance sheets) requires integration with QuickBooks or Xero.",
      },
      {
        question: "Can Clio replace QuickBooks for a law firm?",
        answer:
          "Partially. Clio covers trust accounting, time billing, and invoicing — but it does not replace full accounting software. Most firms use Clio alongside QuickBooks or Xero. CosmoLex is the better choice if you want a single platform that includes complete accounting.",
      },
      {
        question: "Is there a free version of Clio?",
        answer:
          "No, Clio does not have a permanently free plan. They offer a 7-day free trial on all plans with no credit card required. The EasyStart plan at $49/user/month is their entry-level option.",
      },
      {
        question: "How does Clio compare to MyCase?",
        answer:
          "Clio has more integrations (250+ vs ~50) and a more mature feature set, but costs more and has a steeper learning curve. MyCase is simpler, slightly cheaper (starting at $39 vs $49/user/month), and better for firms that want simplicity. Clio is better for firms that need deep customization and integrations.",
      },
    ],
  },

  mycase: {
    slug: "mycase",
    name: "MyCase",
    tagline: "Simple, powerful legal practice management for modern law firms",
    logo: "/logos/mycase.svg",
    website: "https://www.mycase.com",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    founded: 2010,
    headquarters: "San Diego, CA",
    overallRating: 4.5,
    ratings: {
      easeOfUse: 4.8,
      features: 4.4,
      valueForMoney: 4.7,
      customerSupport: 4.5,
      mobileApp: 4.4,
    },
    pricing: [
      {
        name: "Basic",
        price: "$39/user/month",
        billingNote: "Billed annually ($49/user/month billed monthly)",
        features: [
          "Case and contact management",
          "Task management",
          "Client portal",
          "Time entry and expense tracking",
          "Billing and online payments",
          "Legal calendaring",
          "Unlimited document storage",
          "Basic financial reporting",
        ],
      },
      {
        name: "Pro",
        price: "$89/user/month",
        billingNote: "Billed annually ($99/user/month billed monthly)",
        features: [
          "Everything in Basic",
          "Legal AI (8am IQ writing assistant)",
          "Custom fields",
          "Unlimited 2-way texting",
          "Client intake management",
          "Unlimited eSignature",
          "Advanced billing and invoicing",
          "Google and Outlook integrations",
        ],
      },
      {
        name: "Advanced",
        price: "$109/user/month",
        billingNote: "Billed annually ($119/user/month billed monthly)",
        features: [
          "Everything in Pro",
          "MyCase DriveSync",
          "Full text search for conflict checks",
          "AI case assistant",
          "Advanced document automation",
          "Split billing",
          "Open API",
        ],
      },
    ],
    freeTrial: "10 days (no credit card required)",
    bestFor: "Small to mid-size law firms seeking the best value, firms prioritizing ease of use",
    notGreatFor: "Large enterprise firms needing complex custom workflows, firms with complex accounting needs",
    verdict:
      "MyCase offers the most value per dollar in legal practice management. Starting at $39/user/month, the Basic plan includes more than most competitors' mid-tier plans. The interface is genuinely intuitive — the cleanest in the category — and the AI features introduced in 2024 make it competitive with pricier alternatives. For most small and mid-size firms, MyCase hits the sweet spot of features, usability, and price.",
    pros: [
      "Most affordable entry-level pricing in the category ($39/user/month)",
      "Cleanest, most intuitive interface — shortest learning curve",
      "Strong client portal for secure communication and document sharing",
      "Built-in AI writing assistance (8am IQ) on Pro and Advanced plans",
      "Unlimited 2-way texting included on Pro plan",
      "Unlimited document storage on all plans",
      "Solid mobile apps for iOS and Android",
    ],
    cons: [
      "Fewer third-party integrations than Clio (roughly 50 vs 250+)",
      "No built-in trust accounting reconciliation on Basic plan",
      "Limited customization compared to Clio or PracticePanther",
      "Open API only available on Advanced plan",
      "Court filing integrations are limited",
    ],
    keyFeatures: [
      "Case and matter management",
      "Time tracking and billing",
      "Client portal with secure messaging",
      "Document management (unlimited storage)",
      "Legal AI writing assistant (Pro+)",
      "Two-way texting (Pro+)",
      "eSignature (Pro+)",
      "Client intake forms (Pro+)",
      "Calendar management with legal deadline rules",
      "Trust accounting",
      "Financial reporting",
    ],
    integrations: 50,
    metaTitle: "MyCase Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Honest MyCase review for 2026. Pricing starts at $39/user/month. See features, pros, cons, and how it compares to Clio and PracticePanther.",
    intro:
      "MyCase has quietly become one of the most loved legal practice management platforms, particularly among small and solo law firms. Founded in 2010 and now owned by AffiniPay (the same company behind LawPay), MyCase strikes a balance between simplicity and power that competitors struggle to match at its price point.",
    deepDive: `## Who Is MyCase For?

MyCase is ideal for:

- **Solo attorneys** who want professional-grade software without complexity or high cost
- **Small law firms (2–15 attorneys)** who prioritize ease of use and clean client communication
- **Firms switching from paper or spreadsheets** — the learning curve is the gentlest of any major platform
- **Client-focused practices** — the MyCase client portal is industry-leading for communication

## MyCase's Core Strengths

### Best Value at Entry-Level

At $39/user/month (annual), MyCase Basic includes more than you'd expect: full case management, time tracking, invoicing, a client portal, legal calendaring, and unlimited document storage. Most competitors charge $49–69/user/month for comparable features.

### The Cleanest Interface in Legal Software

This is consistently MyCase's top-rated attribute across G2, Capterra, and Trustpilot reviews. Menus are logical, workflows feel natural, and new staff members typically reach full productivity within days — not weeks. For practices where not everyone is tech-savvy, this matters enormously.

### Client Portal That Actually Gets Used

The MyCase client portal enables secure document sharing, messaging, billing, and appointment scheduling — all from the client's perspective. Importantly, clients actually use it: MyCase reports that 75% of their clients actively use the portal within the first month. That's because the interface is built for non-attorneys, not for software engineers.

### AI Features at a Competitive Price

MyCase introduced 8am IQ, their legal AI writing assistant, in 2024. Available on the Pro plan ($89/user/month), it helps draft correspondence, summarize documents, and assist with legal writing. At that price point, it's competitive with Clio's AI features which are gated behind higher-tier plans.

## MyCase's Key Weaknesses

### Fewer Integrations Than Clio

MyCase's integration library is smaller than Clio's — roughly 50 integrations versus Clio's 250+. For firms already embedded in specific tools (specialized document management, certain CRM systems, or niche legal databases), this can be a deal-breaker. The integrations that exist (QuickBooks, Google, Outlook, Dropbox) cover most firms' needs, but heavy integration users should compare carefully.

### Limited Customization

MyCase's simplicity is a feature, not a bug — but it means less configurability. Custom workflows, complex billing arrangements, and granular permission sets are limited compared to Clio or PracticePanther. Growing firms eventually hit these ceilings.

## Pricing Comparison

| Plan | Annual | Monthly | Standout Feature |
|------|--------|---------|-----------------|
| Basic | $39/user/mo | $49/user/mo | Best entry-level value |
| Pro | $89/user/mo | $99/user/mo | AI + unlimited texting |
| Advanced | $109/user/mo | $119/user/mo | Full API + doc automation |

## Bottom Line

For small and solo law firms, MyCase is often the right answer. It's affordable, easy to learn, and covers everything a typical practice needs. The Basic plan at $39/user/month is genuinely hard to beat for the price. If you're a firm of 1–10 attorneys who wants to spend more time practicing law than managing software, MyCase deserves serious consideration.`,
    faqs: [
      {
        question: "Is MyCase cheaper than Clio?",
        answer:
          "Yes. MyCase Basic starts at $39/user/month (annual) compared to Clio EasyStart at $49/user/month. At equivalent plan levels, MyCase is typically $10–30 cheaper per user per month, making it significantly more affordable for smaller firms.",
      },
      {
        question: "Does MyCase have a mobile app?",
        answer:
          "Yes, MyCase has free iOS and Android apps. The mobile app covers case management, time tracking, messaging, billing, and document access. User reviews rate the MyCase mobile app highly for everyday tasks, though some advanced features are desktop-only.",
      },
      {
        question: "Can MyCase handle trust accounting?",
        answer:
          "Yes, MyCase includes trust accounting tools for IOLTA compliance. All plans support trust fund management, though the Advanced plan adds three-way trust reconciliation via the MyCase Accounting add-on ($39/month per accounting user).",
      },
      {
        question: "Does MyCase integrate with QuickBooks?",
        answer:
          "Yes, MyCase integrates with QuickBooks Online for accounting. You can sync time entries, invoices, and payments between the platforms. The integration is available on the Pro and Advanced plans.",
      },
      {
        question: "What is the MyCase free trial?",
        answer:
          "MyCase offers a 10-day free trial with full access to all features. No credit card is required to start. After the trial, you choose a plan and billing cycle.",
      },
    ],
  },

  practicepanther: {
    slug: "practicepanther",
    name: "PracticePanther",
    tagline: "The intuitive legal software trusted by 40,000+ attorneys",
    logo: "/logos/practicepanther.svg",
    website: "https://www.practicepanther.com",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    founded: 2012,
    headquarters: "Miami, FL",
    overallRating: 4.5,
    ratings: {
      easeOfUse: 4.6,
      features: 4.5,
      valueForMoney: 4.4,
      customerSupport: 4.6,
      mobileApp: 4.3,
    },
    pricing: [
      {
        name: "Solo",
        price: "$49/user/month",
        billingNote: "Billed annually ($59/user/month billed monthly)",
        features: [
          "Matter and contact management",
          "Time tracking and billing",
          "PantherPayments (online payments)",
          "Client portal",
          "Document templates",
          "Task and event workflows",
          "Daily agenda email",
          "Internal chat",
        ],
      },
      {
        name: "Essential",
        price: "$69/user/month",
        billingNote: "Billed annually ($79/user/month billed monthly)",
        features: [
          "Everything in Solo",
          "Custom fields",
          "Custom security roles",
          "Invoice read alerts",
          "Multiple bank accounts",
        ],
      },
      {
        name: "Business",
        price: "$89/user/month",
        billingNote: "Billed annually ($99/user/month billed monthly)",
        features: [
          "Everything in Essential",
          "Native 2-way texting",
          "Intake forms",
          "Native eSignature (unlimited)",
          "Attorney revenue reports",
          "Free data migration",
          "LEDES billing",
          "VIP support",
          "UTBMS coding",
        ],
      },
    ],
    freeTrial: "7 days (no credit card required)",
    bestFor: "Solo practitioners and small firms that want an intuitive all-in-one with strong billing",
    notGreatFor: "Large firms needing complex custom workflows, firms requiring enterprise reporting",
    verdict:
      "PracticePanther is a well-rounded platform that earns consistently high marks for its intuitive interface and strong billing features. The Solo plan at $49/user/month packs serious value for solo practitioners, and the Business plan's native eSignature and 2-way texting eliminate the need for third-party tools. It's not the cheapest option, but it's among the most user-friendly at its price point.",
    pros: [
      "Native eSignature included (no DocuSign add-on needed) on Business plan",
      "Built-in PantherPayments for online client billing",
      "Strong workflow automation (task and event workflows on all plans)",
      "Free data migration on Business plan",
      "Two-way texting built in (no third-party app needed) on Business",
      "UTBMS/LEDES billing for corporate clients",
      "24/7 VIP support on Business plan",
    ],
    cons: [
      "Mid-tier pricing — not the cheapest, not the most full-featured",
      "Fewer integrations than Clio",
      "No built-in accounting (QuickBooks integration required)",
      "Some features that should be standard (custom fields) require upgrading",
    ],
    keyFeatures: [
      "Matter and contact management",
      "Time tracking and expense tracking",
      "PantherPayments (integrated payment processing)",
      "Trust accounting and ledger reconciliation",
      "Document templates and automation",
      "Task and event workflows",
      "Native eSignature (Business plan)",
      "Native 2-way business texting (Business plan)",
      "Client intake forms (Business plan)",
      "QuickBooks and Dropbox integration",
      "API and Zapier integration (Business plan)",
      "LEDES/UTBMS billing for insurance defense",
    ],
    integrations: 40,
    metaTitle: "PracticePanther Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Full PracticePanther review for 2026. Pricing from $49/user/month. See who it's best for, key features, and how it compares to Clio and MyCase.",
    intro:
      "PracticePanther has built a loyal following among solo practitioners and small law firms since its 2012 launch. Now owned by ProfitSolv (alongside CosmoLex and Bill4Time), it serves 40,000+ attorneys across 35+ countries with a focus on intuitive design and strong billing capabilities.",
    deepDive: `## Who Is PracticePanther For?

PracticePanther hits its stride for:

- **Solo practitioners** who need an affordable, easy-to-use all-in-one platform
- **Small firms (2–20 attorneys)** that want native texting and eSignature without paying for third-party tools
- **Billing-intensive practices** that need strong invoicing, LEDES billing, and payment tracking
- **Firms switching from paper** who need a short ramp-up time

## PracticePanther's Core Strengths

### Native eSignature and Two-Way Texting

The Business plan ($89/user/month) includes native eSignature with unlimited sends and native two-way business texting. Most competitors charge extra for these capabilities or require third-party integrations. If your practice relies on digital signature workflows and communicates with clients via text, PracticePanther eliminates two extra monthly subscriptions.

### Billing and Payment Flexibility

PantherPayments, the built-in payment processing, covers credit cards, ACH bank transfers, and trust retainer deposits. The platform handles LEDES billing (essential for insurance defense firms) and UTBMS coding for billing to corporate clients. Attorney Revenue Reports on the Business plan show individual attorney productivity and billing performance.

### Workflow Automation on Every Plan

Unlike some competitors that gate basic automation behind premium tiers, PracticePanther includes task and event workflows on all plans. This means you can set up automated checklists triggered by matter type — when a new client intake is created, the platform automatically assigns tasks, schedules events, and creates document deadlines.

## PracticePanther's Key Weaknesses

### No Built-In Accounting

Like Clio and MyCase, PracticePanther requires QuickBooks for full firm accounting. Trust accounting is included, but profit and loss statements, balance sheets, and bank reconciliation require the QuickBooks integration.

### Limited Integrations

With roughly 40 native integrations, PracticePanther has a smaller ecosystem than Clio (250+). The essentials are covered (QuickBooks, Dropbox, Box.com, Zapier, MailChimp), but specialized tools often need Zapier to connect.

## Pricing Summary

| Plan | Annual | Monthly | Highlight |
|------|--------|---------|-----------|
| Solo | $49/user/mo | $59/user/mo | Core features for solos |
| Essential | $69/user/mo | $79/user/mo | Custom fields and roles |
| Business | $89/user/mo | $99/user/mo | eSign + texting + LEDES |

## Bottom Line

PracticePanther is a strong choice for solo practitioners and small firms that value intuitive design, strong billing, and native eSignature/texting capabilities. It won't beat Clio on breadth or MyCase on price, but it carves out a solid middle ground. The Business plan at $89/user/month is particularly compelling for practices that would otherwise pay separately for eSignature and texting tools.`,
    faqs: [
      {
        question: "What is PracticePanther's pricing for solo attorneys?",
        answer:
          "PracticePanther's Solo plan is $49/user/month billed annually ($59/month billed monthly). It includes matter management, time tracking, billing, PantherPayments, a client portal, document templates, and workflow automation — everything a solo practitioner needs to run their practice.",
      },
      {
        question: "Does PracticePanther include eSignature?",
        answer:
          "Yes, PracticePanther's Business plan ($89/user/month, annual) includes native unlimited eSignature. Unlike competitors that require a DocuSign or HelloSign integration, PracticePanther's eSignature is fully built in. The Solo and Essential plans do not include eSignature.",
      },
      {
        question: "How does PracticePanther compare to Clio?",
        answer:
          "PracticePanther is simpler and slightly cheaper than Clio at mid-tier, but has fewer integrations (40 vs 250+) and a smaller ecosystem. PracticePanther includes native eSignature and texting that Clio typically requires third-party tools for. Clio is better for firms needing deep integrations; PracticePanther is better for firms wanting a self-contained, easy-to-use platform.",
      },
      {
        question: "Is data migration free with PracticePanther?",
        answer:
          "Free data migration is included with the Business plan. PracticePanther's VIP team helps import matters, contacts, documents, and billing history from your previous platform. The Solo and Essential plans support DIY migration with documentation and support.",
      },
    ],
  },

  smokeball: {
    slug: "smokeball",
    name: "Smokeball",
    tagline: "The productivity law firm platform with automatic time tracking",
    logo: "/logos/smokeball.svg",
    website: "https://www.smokeball.com",
    affiliateUrl: "https://www.smokeball.com/free-trial/",
    founded: 2012,
    headquarters: "Chicago, IL",
    overallRating: 4.4,
    ratings: {
      easeOfUse: 4.2,
      features: 4.7,
      valueForMoney: 4.0,
      customerSupport: 4.5,
      mobileApp: 4.0,
    },
    pricing: [
      {
        name: "Bill",
        price: "From $149/month",
        billingNote: "Annual contract required; per-user pricing for 12-month terms",
        features: [
          "Invoicing and billing",
          "Time and expense tracking",
          "Online payments",
          "Trust accounting and reporting",
          "QuickBooks integration",
        ],
      },
      {
        name: "Boost",
        price: "From $149/month",
        billingNote: "Annual contract required; pricing scales with firm size",
        features: [
          "Everything in Bill",
          "Browser-based access",
          "Client and matter management",
          "Task and calendar management",
          "Microsoft 365 Outlook and Word integration",
          "Client portal",
          "Automated letterhead templates",
        ],
      },
      {
        name: "Grow",
        price: "From $149/month",
        billingNote: "Annual contract required; pricing scales with users",
        features: [
          "Everything in Boost",
          "Practice area templates",
          "Advanced document automation",
          "Automated court forms",
          "Email management",
          "Smokeball AI (Communicate)",
        ],
      },
      {
        name: "Prosper+",
        price: "From $149/month",
        billingNote: "Annual contract required; includes Autotime, Intake, and Workflows",
        features: [
          "Everything in Grow",
          "Firm Insights reporting",
          "Lead management",
          "Advanced matter intake",
          "Custom workflows",
          "Staff activity reporting",
          "Profitability reporting",
          "AI intake (powered by Smokeball AI)",
          "Autotime (automatic time tracking)",
        ],
      },
    ],
    freeTrial: "Free trial available (contact required)",
    bestFor: "High-volume practices focused on document-intensive work (real estate, family law, estate planning), firms that want automatic time tracking",
    notGreatFor: "Solo practitioners on a budget, firms that prefer month-to-month contracts, practices with minimal document drafting",
    verdict:
      "Smokeball stands apart from competitors with two genuinely unique capabilities: Autotime (automatic time tracking based on your actual computer activity) and the deepest practice area document automation library in the industry. For volume-driven practices in real estate, family law, or estate planning, these features can meaningfully increase revenue and reduce admin time. The annual contract requirement and opaque pricing are real drawbacks, but the product quality justifies serious evaluation for the right practice.",
    pros: [
      "Autotime: AI-powered automatic time tracking from computer activity",
      "Largest practice area document library (automated court forms, templates)",
      "Deep Microsoft 365 Word integration — documents stay in Word",
      "Strong matter-specific workflow automation",
      "AI features (Smokeball AI for communications and intake)",
      "Excellent for high-volume, document-intensive practices",
    ],
    cons: [
      "Annual contract required — no month-to-month option",
      "Pricing is opaque — 'from $149/month' hides actual costs",
      "Steeper learning curve than MyCase or PracticePanther",
      "Mobile app less polished than Clio or MyCase",
      "Primarily optimized for Windows (Mac support has improved)",
    ],
    keyFeatures: [
      "Autotime (automatic time tracking from computer activity)",
      "Practice area document templates (court forms, contracts)",
      "Advanced document automation with Word integration",
      "Matter management with practice-area workflows",
      "Client portal",
      "Trust accounting",
      "Microsoft 365 deep integration",
      "Smokeball AI for client communication",
      "Lead management and intake (Prosper+)",
      "Firm profitability reporting (Prosper+)",
      "Custom workflows (Prosper+)",
    ],
    integrations: 30,
    metaTitle: "Smokeball Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "In-depth Smokeball review for 2026. Unique automatic time tracking, document automation, and practice area templates. See who it's best for.",
    intro:
      "Smokeball occupies a unique niche in legal practice management software: it's the platform built for law firms whose work is inherently document-intensive. Founded in Chicago in 2012, Smokeball has found its strongest audience among real estate attorneys, family lawyers, and estate planning practices where drafting speed and accuracy determine profitability.",
    deepDive: `## Who Is Smokeball For?

Smokeball makes the most sense for:

- **Real estate attorneys** who draft high volumes of contracts, closing documents, and deeds
- **Family law practices** where forms and filings are the core of daily work
- **Estate planning attorneys** with standard document libraries they use repeatedly
- **Firms where time capture is a problem** — Autotime solves time leakage automatically

## Smokeball's Core Strengths

### Autotime: Automatic Time Tracking

Smokeball's Autotime feature is genuinely unique in the industry. Using AI, it passively tracks your time by monitoring your computer activity — documents opened, emails sent, calls made — and converts them to time entries automatically. Studies of Smokeball users show an average increase of 30+ minutes of captured billable time per day, per attorney. At $300/hour, that's significant revenue recovery.

### Document Automation That Goes Deep

Smokeball's document library is the largest in legal software: thousands of practice area-specific forms, contracts, and templates — including state-specific court forms — that auto-populate from matter data. When you create a new family law matter, Smokeball pre-loads the applicable discovery forms, court pleadings, and client letters for your jurisdiction. No other platform goes this deep on document automation.

### Microsoft 365 Integration Without Sacrificing Word

Unlike platforms that force you into a proprietary document editor, Smokeball keeps documents in Microsoft Word and Outlook. The integration is deep — Word documents open directly from matters, time is captured as you draft, and Outlook emails sync to matter timelines. For firms already embedded in the Microsoft ecosystem, this is a major advantage.

## Smokeball's Key Weaknesses

### Annual Contract Requirement

This is a significant constraint. Smokeball requires annual contracts, meaning you're committed for 12 months minimum. The starting price of "from $149/month" is misleading — actual pricing depends on firm size and selected plan, and the true per-user cost is typically higher than competitors. Request a full pricing quote before committing.

### Learning Curve

Smokeball's power comes with complexity. New users typically need several weeks of training before reaching full productivity. The platform has improved onboarding resources, but it's more demanding than MyCase or PracticePanther.

## Bottom Line

Smokeball is the best legal practice management platform for document-intensive practices. If your attorneys spend significant time drafting documents, Autotime and the document library will pay for the platform multiple times over. If your practice is less document-focused or you prefer flexible month-to-month pricing, other platforms serve you better.`,
    faqs: [
      {
        question: "How does Smokeball's automatic time tracking work?",
        answer:
          "Smokeball's Autotime feature (included in Prosper+ plan) uses AI to passively monitor your computer activity — documents opened, emails written, calls logged — and automatically converts that activity into billable time entries assigned to the correct matter. Attorneys typically capture 30+ additional billable minutes per day using Autotime.",
      },
      {
        question: "Does Smokeball require an annual contract?",
        answer:
          "Yes, Smokeball requires annual contracts (12-month or 36-month terms). Month-to-month billing is not available. This is an important consideration — you cannot cancel mid-term without penalty. Ensure Smokeball is right for your firm before committing.",
      },
      {
        question: "Is Smokeball good for real estate attorneys?",
        answer:
          "Yes — Smokeball is considered the best legal practice management software for real estate attorneys. Its practice area document library includes state-specific closing documents, deeds, purchase agreements, and title instruments that auto-populate from matter data. The deep Microsoft Word integration is also valuable for high-volume document drafting.",
      },
      {
        question: "What does Smokeball cost?",
        answer:
          "Smokeball's published starting price is 'from $149/month,' but actual pricing depends on firm size, plan level, and contract term. Request a custom quote directly from Smokeball — pricing is not fully transparent online. Expect total costs to be higher than entry-level pricing from Clio, MyCase, or PracticePanther.",
      },
    ],
  },

  cosmolex: {
    slug: "cosmolex",
    name: "CosmoLex",
    tagline: "The only legal practice management software with built-in accounting",
    logo: "/logos/cosmolex.svg",
    website: "https://www.cosmolex.com",
    affiliateUrl: "https://www.cosmolex.com/free-trial/",
    founded: 2013,
    headquarters: "North Carolina, USA",
    overallRating: 4.3,
    ratings: {
      easeOfUse: 4.1,
      features: 4.6,
      valueForMoney: 4.3,
      customerSupport: 4.4,
      mobileApp: 3.9,
    },
    pricing: [
      {
        name: "Standard",
        price: "$109/user/month",
        billingNote: "Billed annually (monthly billing available at higher rate)",
        features: [
          "Matter management",
          "Time and expense tracking",
          "Billing and invoicing",
          "Built-in legal accounting (no QuickBooks needed)",
          "Trust accounting (IOLTA compliant)",
          "Document management",
          "Client portal",
          "Task management",
          "Legal calendaring",
        ],
      },
      {
        name: "Elite",
        price: "$129/user/month",
        billingNote: "Billed annually (monthly billing available at higher rate)",
        features: [
          "Everything in Standard",
          "Advanced workflows and templates",
          "Document automation",
          "Priority support",
          "Advanced reporting",
          "Custom fields",
        ],
      },
    ],
    freeTrial: "10 days (no credit card required)",
    bestFor: "Law firms that want practice management and accounting in a single platform, eliminating QuickBooks",
    notGreatFor: "Firms happy with their existing accounting setup, teams that want a simple, minimal interface",
    verdict:
      "CosmoLex solves the biggest inefficiency in law firm software: the QuickBooks integration tax. By including a complete double-entry accounting system alongside practice management — trust accounting, operating accounts, P&L, balance sheet — CosmoLex eliminates the need for a separate accounting subscription and the data sync headaches that come with it. At $109/user/month, it's not cheap, but for firms currently paying for both practice management and QuickBooks, CosmoLex often comes out ahead on total cost.",
    pros: [
      "Built-in full accounting — no QuickBooks subscription needed",
      "Complete trust accounting with three-way reconciliation",
      "Single platform for all financial reporting (P&L, balance sheet, etc.)",
      "Eliminates integration friction between billing and accounting",
      "Strong IOLTA and bar compliance tools",
      "Good customer support and onboarding",
    ],
    cons: [
      "Higher starting price than most competitors ($109/user/month)",
      "Interface is more dated-looking than Clio or MyCase",
      "Fewer third-party integrations",
      "Mobile app is less polished than competitors",
      "Less feature depth outside of billing/accounting",
    ],
    keyFeatures: [
      "Built-in legal accounting (double-entry bookkeeping)",
      "Trust accounting (IOLTA compliant, three-way reconciliation)",
      "Matter management",
      "Time tracking and billing",
      "Document management",
      "Client portal",
      "Tax reporting (W-9, 1099 support)",
      "Bank account reconciliation",
      "Financial reporting (P&L, balance sheet, cash flow)",
      "Task management and calendaring",
    ],
    integrations: 20,
    metaTitle: "CosmoLex Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Full CosmoLex review 2026. The only legal PM software with built-in accounting. Pricing from $109/user/month. See if it's worth ditching QuickBooks.",
    intro:
      "CosmoLex was built to solve a problem that every law firm managing their own books understands: the constant friction between practice management software and accounting software. While Clio, MyCase, and PracticePanther all require QuickBooks or Xero integrations for full firm accounting, CosmoLex builds complete double-entry accounting directly into the platform — including trust accounting, operating accounts, P&L statements, and balance sheets.",
    deepDive: `## Who Is CosmoLex For?

CosmoLex is the right choice for:

- **Law firms that want one platform for everything** — management, billing, and accounting
- **Firms frustrated by QuickBooks sync issues** — broken integrations, data discrepancies, redundant data entry
- **Sole practitioners and small firms with hands-on financial management** — where the owner also handles bookkeeping
- **Firms with strict IOLTA compliance needs** — CosmoLex's three-way trust reconciliation is best in class

## CosmoLex's Core Strengths

### Built-In Accounting — The Real Differentiator

CosmoLex is the only major legal practice management platform that includes a complete, double-entry accounting system. This means:

- **No QuickBooks subscription** — saving $35–200/month
- **No sync errors** — time entries flow directly to invoices to accounting without a sync layer
- **Real-time P&L** — see your firm's financial health without waiting for QuickBooks to sync
- **One login** — attorneys and bookkeepers work in the same system

For firms that have experienced the joy of a QuickBooks sync failing three days before month-end reporting, this alone makes CosmoLex worth considering.

### Trust Accounting That Actually Complies

CosmoLex's trust accounting features are among the most comprehensive in the industry. Three-way reconciliation (bank statement, trust ledger, and individual client ledgers) is automated. The platform generates all required trust reports for bar association compliance. For firms that have ever been through a bar audit, the quality of CosmoLex's trust reporting is a significant peace-of-mind factor.

## CosmoLex's Key Weaknesses

### Higher Price Point

At $109/user/month (Standard, annual), CosmoLex is more expensive than MyCase Basic ($39) or PracticePanther Solo ($49). The pitch is that you're eliminating QuickBooks ($35–200/month depending on plan), making CosmoLex cost-neutral for firms currently paying for both. But the upfront per-user cost requires a financial commitment that smaller practices feel acutely.

### Less Polished Interface

CosmoLex's interface, while functional, looks more dated than Clio, MyCase, or PracticePanther. The UI has improved but hasn't matched the modern feel of competitors. This isn't a dealbreaker, but firms prioritizing interface quality notice the difference.

## Total Cost of Ownership vs Competitors

| Scenario | Clio + QuickBooks | MyCase + QuickBooks | CosmoLex |
|----------|------------------|--------------------| ---------|
| 1 attorney | $49 + $35 = $84/mo | $39 + $35 = $74/mo | $109/mo |
| 3 attorneys | $147 + $35 = $182/mo | $117 + $35 = $152/mo | $327/mo |
| 5 attorneys | $245 + $90 = $335/mo | $195 + $90 = $285/mo | $545/mo |

*QuickBooks Online estimates based on Plus plan. Actual costs vary.*

For solo and very small firms, CosmoLex's accounting advantage rarely offsets the higher per-user cost. For firms with 5+ attorneys where accounting complexity is real, the single-platform value proposition improves.

## Bottom Line

CosmoLex is the right choice for law firms that want a single platform for practice management and accounting, and who are willing to pay a modest premium for the elimination of QuickBooks and its associated integration complexity. If you've ever lost hours reconciling billing data between your practice management and accounting systems, CosmoLex is for you.`,
    faqs: [
      {
        question: "Does CosmoLex replace QuickBooks?",
        answer:
          "Yes — CosmoLex includes full double-entry accounting built in, replacing the need for QuickBooks or Xero. You get a complete P&L, balance sheet, bank reconciliation, and accounts payable directly in the platform. This eliminates a typical $35–200/month QuickBooks subscription and the sync errors that come with the integration.",
      },
      {
        question: "How much does CosmoLex cost?",
        answer:
          "CosmoLex Standard costs $109/user/month billed annually. The Elite plan with advanced workflows and document automation costs $129/user/month. Monthly billing is available at a higher rate. A 10-day free trial is available with no credit card required.",
      },
      {
        question: "Is CosmoLex IOLTA compliant?",
        answer:
          "Yes. CosmoLex includes full IOLTA compliance tools including three-way trust reconciliation, per-client trust ledgers, trust account statements, and all required bar association trust reports. The platform is designed to withstand bar audits.",
      },
      {
        question: "Who owns CosmoLex?",
        answer:
          "CosmoLex is owned by ProfitSolv, a legal technology holding company that also owns PracticePanther and Bill4Time. The platforms operate independently but share some backend infrastructure and support resources.",
      },
    ],
  },
};

export function getTool(slug: string): ReviewTool | undefined {
  return tools[slug];
}

export function getAllToolSlugs(): string[] {
  return Object.keys(tools);
}

export function getAllTools(): ReviewTool[] {
  return Object.values(tools);
}
