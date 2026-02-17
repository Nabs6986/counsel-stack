export interface Comparison {
  slug: string;
  tool1: string;
  tool2: string;
  tool1Name: string;
  tool2Name: string;
  tool1Price: string;
  tool2Price: string;
  tool1Founded: number;
  tool2Founded: number;
  tool1Users: string;
  tool2Users: string;
  verdict: string;
  summaryWinner: string;
  summaryReason: string;
  features: {
    name: string;
    tool1: boolean | string;
    tool2: boolean | string;
    winner: "tool1" | "tool2" | "tie";
  }[];
  choiceCriteria: {
    chooseT1: string[];
    chooseT2: string[];
  };
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
}

export const comparisons: Record<string, Comparison> = {
  "clio-vs-mycase": {
    slug: "clio-vs-mycase",
    tool1: "clio",
    tool2: "mycase",
    tool1Name: "Clio",
    tool2Name: "MyCase",
    tool1Price: "$49–$149/user/month",
    tool2Price: "$39–$109/user/month",
    tool1Founded: 2008,
    tool2Founded: 2010,
    tool1Users: "150,000+",
    tool2Users: "65,000+",
    verdict:
      "Clio wins on breadth of features and integrations; MyCase wins on value and simplicity. For most small and solo firms, MyCase is the smarter financial decision. For growing firms that need a deep integration ecosystem and don't mind the price premium, Clio is the better long-term platform.",
    summaryWinner: "Depends on firm size",
    summaryReason:
      "MyCase for firms under 10 attorneys prioritizing value. Clio for firms needing 250+ integrations and advanced automation.",
    features: [
      {
        name: "Starting Price (annual)",
        tool1: "$49/user/mo",
        tool2: "$39/user/mo",
        winner: "tool2",
      },
      {
        name: "Free Trial",
        tool1: "7 days",
        tool2: "10 days",
        winner: "tool2",
      },
      {
        name: "Third-Party Integrations",
        tool1: "250+",
        tool2: "~50",
        winner: "tool1",
      },
      {
        name: "Built-in AI Features",
        tool1: "Limited",
        tool2: "Yes (8am IQ)",
        winner: "tool2",
      },
      {
        name: "Mobile App Quality",
        tool1: true,
        tool2: true,
        winner: "tie",
      },
      {
        name: "Client Portal",
        tool1: true,
        tool2: true,
        winner: "tie",
      },
      {
        name: "Trust Accounting",
        tool1: true,
        tool2: true,
        winner: "tie",
      },
      {
        name: "Built-in eSignature",
        tool1: "Add-on",
        tool2: "Pro plan+",
        winner: "tool2",
      },
      {
        name: "Two-Way Texting",
        tool1: "Add-on",
        tool2: "Pro plan+",
        winner: "tool2",
      },
      {
        name: "Document Automation",
        tool1: "Advanced plan+",
        tool2: "Advanced plan+",
        winner: "tie",
      },
      {
        name: "Legal CRM / Intake",
        tool1: "Clio Grow (Expand plan)",
        tool2: "Pro plan+",
        winner: "tool2",
      },
      {
        name: "Open API",
        tool1: "Yes",
        tool2: "Advanced plan only",
        winner: "tool1",
      },
      {
        name: "Ease of Use",
        tool1: "4.5/5",
        tool2: "4.8/5",
        winner: "tool2",
      },
      {
        name: "Customer Support Rating",
        tool1: "4.8/5",
        tool2: "4.5/5",
        winner: "tool1",
      },
    ],
    choiceCriteria: {
      chooseT1: [
        "You need 250+ integrations with third-party tools",
        "Your firm is 20+ attorneys and growing",
        "You need advanced custom reporting",
        "You want the largest legal tech community and ecosystem",
        "You need complex workflow automation",
      ],
      chooseT2: [
        "You want the most affordable entry-level pricing ($39/user/mo)",
        "You prioritize ease of use and the shortest learning curve",
        "You want built-in AI features without paying Clio's premium",
        "Your firm is 1–15 attorneys focused on simplicity",
        "You want a longer free trial (10 days vs 7)",
      ],
    },
    faqs: [
      {
        question: "Is Clio or MyCase better for a solo attorney?",
        answer:
          "For solo attorneys, MyCase is typically the better choice. The Basic plan at $39/user/month includes everything a solo needs — case management, time tracking, billing, client portal, and unlimited storage. Clio's EasyStart at $49/user/month is more expensive and has a steeper learning curve. The exception is if you need specific integrations that only Clio supports.",
      },
      {
        question: "Which is easier to use, Clio or MyCase?",
        answer:
          "MyCase is consistently rated easier to use than Clio across G2, Capterra, and user surveys. MyCase scores 4.8/5 on ease of use vs Clio's 4.5/5. MyCase's interface is more intuitive for non-technical users, with a shorter ramp-up period. Clio's interface is more complex, reflecting its broader feature set.",
      },
      {
        question: "Can I switch from Clio to MyCase?",
        answer:
          "Yes. MyCase offers data migration support to import matters, contacts, documents, and billing history from Clio. Export your data from Clio in CSV format, then work with MyCase's support team on import. Most migrations complete within 1–2 weeks. Note: active billing history and time entries may require manual verification.",
      },
      {
        question: "Does MyCase have as many integrations as Clio?",
        answer:
          "No — Clio offers 250+ integrations versus MyCase's approximately 50. Both integrate with QuickBooks, Google, Outlook, and Dropbox, which covers most firms' needs. If you rely on specialized tools (specific document management systems, niche legal databases, or industry-specific software), Clio's larger integration library is an advantage.",
      },
    ],
    metaTitle: "Clio vs MyCase 2026: Side-by-Side Comparison | CounselStack",
    metaDescription:
      "Clio vs MyCase: detailed comparison of pricing, features, ease of use, and integrations. Which legal practice management software is right for your firm?",
    intro:
      "Clio and MyCase are the two most commonly compared legal practice management platforms — and for good reason. Both are cloud-based, well-reviewed, and trusted by tens of thousands of law firms. But they serve different priorities: Clio prioritizes breadth and integrations, while MyCase prioritizes simplicity and value. This comparison breaks down every meaningful difference so you can make the right call for your practice.",
  },

  "clio-vs-practicepanther": {
    slug: "clio-vs-practicepanther",
    tool1: "clio",
    tool2: "practicepanther",
    tool1Name: "Clio",
    tool2Name: "PracticePanther",
    tool1Price: "$49–$149/user/month",
    tool2Price: "$49–$89/user/month",
    tool1Founded: 2008,
    tool2Founded: 2012,
    tool1Users: "150,000+",
    tool2Users: "40,000+",
    verdict:
      "Clio wins on integrations, ecosystem, and long-term scalability. PracticePanther wins on self-contained features (native eSignature, built-in texting) at comparable mid-tier pricing. For firms that want a self-sufficient platform without third-party tools, PracticePanther is compelling. For firms building a sophisticated legal tech stack, Clio is the better hub.",
    summaryWinner: "Clio for scale; PracticePanther for self-sufficiency",
    summaryReason:
      "PracticePanther includes native eSignature and texting that Clio requires extra paid tools for, at similar mid-tier pricing.",
    features: [
      {
        name: "Starting Price (annual)",
        tool1: "$49/user/mo",
        tool2: "$49/user/mo",
        winner: "tie",
      },
      {
        name: "Third-Party Integrations",
        tool1: "250+",
        tool2: "~40",
        winner: "tool1",
      },
      {
        name: "Native eSignature",
        tool1: "Add-on required",
        tool2: "Business plan+",
        winner: "tool2",
      },
      {
        name: "Native Two-Way Texting",
        tool1: "Add-on required",
        tool2: "Business plan+",
        winner: "tool2",
      },
      {
        name: "LEDES Billing",
        tool1: false,
        tool2: "Business plan+",
        winner: "tool2",
      },
      {
        name: "Document Automation",
        tool1: "Advanced plan+",
        tool2: "Solo plan+",
        winner: "tool2",
      },
      {
        name: "Legal CRM / Intake",
        tool1: "Clio Grow (paid add-on)",
        tool2: "Business plan+",
        winner: "tool2",
      },
      {
        name: "Free Data Migration",
        tool1: "Available",
        tool2: "Business plan (free)",
        winner: "tie",
      },
      {
        name: "Ease of Use",
        tool1: "4.5/5",
        tool2: "4.6/5",
        winner: "tool2",
      },
      {
        name: "Community & Ecosystem",
        tool1: "Largest in legal",
        tool2: "Smaller",
        winner: "tool1",
      },
      {
        name: "API Access",
        tool1: "Full API",
        tool2: "Business plan+",
        winner: "tool1",
      },
      {
        name: "Mobile App",
        tool1: "4.6/5",
        tool2: "4.3/5",
        winner: "tool1",
      },
    ],
    choiceCriteria: {
      chooseT1: [
        "You need 250+ integrations with third-party tools",
        "You're building a complex multi-tool legal tech stack",
        "You want the largest user community and ecosystem",
        "You need enterprise-level API and custom development",
        "Your firm has 20+ attorneys and needs to scale",
      ],
      chooseT2: [
        "You want native eSignature without a DocuSign subscription",
        "You want native two-way texting built in",
        "You do insurance defense or corporate work requiring LEDES billing",
        "You want document templates on the entry-level plan",
        "You want free data migration included at a standard tier",
      ],
    },
    faqs: [
      {
        question: "Is PracticePanther cheaper than Clio?",
        answer:
          "At the entry level, they're equivalent ($49/user/month annual). At mid-tier, PracticePanther Business ($89/user/month) includes native eSignature and texting that would cost extra with Clio. However, once you need Clio Grow (CRM) or advanced integrations, Clio's total cost can exceed PracticePanther's.",
      },
      {
        question: "Does PracticePanther have more features than Clio?",
        answer:
          "PracticePanther includes some features natively (eSignature, texting, LEDES billing) that require add-ons or higher tiers with Clio. Clio, however, has significantly more third-party integrations (250+ vs 40) and a more mature enterprise feature set. It depends on which features matter most to your practice.",
      },
      {
        question: "Which is better for insurance defense attorneys?",
        answer:
          "PracticePanther is the better choice for insurance defense attorneys, primarily because it includes LEDES billing and UTBMS coding on the Business plan. These are essential for submitting invoices to insurance carriers' billing systems. Clio does not natively support LEDES billing.",
      },
    ],
    metaTitle: "Clio vs PracticePanther 2026: Full Comparison | CounselStack",
    metaDescription:
      "Clio vs PracticePanther: compare pricing, features, eSignature, integrations, and more. Which is better for your law firm in 2026?",
    intro:
      "Clio and PracticePanther start at the same price ($49/user/month), target similar audiences (small to mid-size law firms), and cover similar core functionality. But they diverge meaningfully in how they package features. PracticePanther bundles eSignature and texting natively; Clio bundles integrations and ecosystem breadth. Which tradeoff is right for your firm depends on how you work.",
  },

  "mycase-vs-practicepanther": {
    slug: "mycase-vs-practicepanther",
    tool1: "mycase",
    tool2: "practicepanther",
    tool1Name: "MyCase",
    tool2Name: "PracticePanther",
    tool1Price: "$39–$109/user/month",
    tool2Price: "$49–$89/user/month",
    tool1Founded: 2010,
    tool2Founded: 2012,
    tool1Users: "65,000+",
    tool2Users: "40,000+",
    verdict:
      "MyCase wins on price and ease of use. PracticePanther wins on workflow automation, LEDES billing, and self-contained features at mid-tier. For solo attorneys and very small firms on a budget, MyCase is the clear choice. For firms doing insurance defense or needing more native automation, PracticePanther earns its slightly higher price.",
    summaryWinner: "MyCase for most small firms",
    summaryReason:
      "MyCase offers a better entry price ($39 vs $49), longer trial, and cleaner interface. PracticePanther is better for firms needing LEDES billing.",
    features: [
      {
        name: "Starting Price (annual)",
        tool1: "$39/user/mo",
        tool2: "$49/user/mo",
        winner: "tool1",
      },
      {
        name: "Free Trial Length",
        tool1: "10 days",
        tool2: "7 days",
        winner: "tool1",
      },
      {
        name: "Ease of Use",
        tool1: "4.8/5",
        tool2: "4.6/5",
        winner: "tool1",
      },
      {
        name: "Built-in Legal AI",
        tool1: "Pro plan+ (8am IQ)",
        tool2: false,
        winner: "tool1",
      },
      {
        name: "Document Templates",
        tool1: "Pro plan+",
        tool2: "Solo plan+",
        winner: "tool2",
      },
      {
        name: "LEDES Billing",
        tool1: false,
        tool2: "Business plan+",
        winner: "tool2",
      },
      {
        name: "Native eSignature",
        tool1: "Pro plan+",
        tool2: "Business plan+",
        winner: "tool1",
      },
      {
        name: "Two-Way Texting",
        tool1: "Pro plan+",
        tool2: "Business plan+",
        winner: "tie",
      },
      {
        name: "Client Portal",
        tool1: true,
        tool2: true,
        winner: "tie",
      },
      {
        name: "Trust Accounting",
        tool1: true,
        tool2: true,
        winner: "tie",
      },
      {
        name: "Workflow Automation",
        tool1: "Limited",
        tool2: "All plans",
        winner: "tool2",
      },
      {
        name: "Unlimited Storage",
        tool1: "All plans",
        tool2: false,
        winner: "tool1",
      },
    ],
    choiceCriteria: {
      chooseT1: [
        "You want the lowest starting price ($39/user/month)",
        "You're a solo or very small firm on a tight budget",
        "You want the cleanest, easiest interface to learn",
        "You want built-in AI writing features",
        "You want unlimited document storage on all plans",
      ],
      chooseT2: [
        "You do insurance defense and need LEDES/UTBMS billing",
        "You want task and event workflow automation on all plans",
        "You want document templates available at entry level",
        "Your firm does complex billing arrangements",
      ],
    },
    faqs: [
      {
        question: "Should I choose MyCase or PracticePanther for my small law firm?",
        answer:
          "For most small law firms (1–10 attorneys), MyCase is the better starting point: it's $10/user/month cheaper, has a cleaner interface, and includes AI features. Upgrade to PracticePanther if you specifically need LEDES billing for insurance defense work, or want workflow automation on your entry-level plan.",
      },
      {
        question: "Which has better customer support, MyCase or PracticePanther?",
        answer:
          "Both platforms receive similar support ratings (4.5/5 on Capterra for MyCase, 4.6/5 for PracticePanther). PracticePanther's Business plan includes VIP 24/7 support with a dedicated account manager. MyCase provides standard phone, chat, and email support on all plans.",
      },
      {
        question: "Can I switch from MyCase to PracticePanther (or vice versa)?",
        answer:
          "Yes. PracticePanther's Business plan includes free data migration from other platforms including MyCase. MyCase also provides migration support. Expect a 1–2 week process to migrate matters, contacts, documents, and billing history. Both platforms support CSV data export.",
      },
    ],
    metaTitle: "MyCase vs PracticePanther 2026: Which Is Better? | CounselStack",
    metaDescription:
      "MyCase vs PracticePanther: compare pricing (starting at $39 vs $49), features, workflow automation, and ease of use for law firms.",
    intro:
      "MyCase and PracticePanther occupy similar market positions — both target solo practitioners and small law firms, both are well-regarded for ease of use, and both include the core features most practices need. The differences are subtle but meaningful: MyCase wins on price and interface simplicity; PracticePanther wins on workflow depth and LEDES billing for specific practice types.",
  },
};

export function getComparison(slug: string): Comparison | undefined {
  return comparisons[slug];
}

export function getAllComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

export function getAllComparisons(): Comparison[] {
  return Object.values(comparisons);
}
