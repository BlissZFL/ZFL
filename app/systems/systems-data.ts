export interface MetricItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ComparisonItem {
  before: string;
  after: string;
}

export interface SystemData {
  slug: string;
  number: string;
  category: string;
  name: string;
  hero: string;
  metrics: MetricItem[];
  problem: string;
  features: FeatureItem[];
  summaryCallout: string;
  comparisons: ComparisonItem[];
  audience: string[];
  finalCta: {
    headline: string;
    sub: string;
    buttonText: string;
  };
  visualType: "pulse" | "orbit" | "radar" | "flash" | "lens";
}

export const systemsData: Record<string, SystemData> = {
  "campaign-lens": {
    slug: "campaign-lens",
    number: "01",
    category: "Revenue intelligence",
    name: "Campaign Lens",
    hero: "Every ad platform. Every channel. One live dashboard. No more Monday morning spreadsheet hell.",
    metrics: [
      { value: "450 hrs", label: "saved per year per brand" },
      { value: "5+", label: "platforms in one view" },
      { value: "10–20%", label: "ad spend optimisation" },
      { value: "Live", label: "data, always updated" },
    ],
    problem:
      "Meta says one thing. Google says another. You're spending Monday pulling data instead of acting on it.",
    features: [
      {
        title: "All platforms in one view",
        description: "Shopify, Meta, Google, Klaviyo, Impact. All live.",
      },
      {
        title: "Metrics that matter",
        description: "CAC, ROAS, MER, AOV. Auto-calculated.",
      },
      {
        title: "Shows what's working",
        description:
          "Channels, products, campaigns that deserve more budget.",
      },
      {
        title: "Scales with your stack",
        description: "TikTok, Pinterest, Snapchat, LinkedIn. Add what you need.",
      },
    ],
    summaryCallout:
      "Stop guessing where your revenue comes from. Campaign Lens shows you exactly where to look.",
    comparisons: [
      {
        before: "Hours pulling platform data",
        after: "One live dashboard",
      },
      {
        before: "Conflicting CAC & ROAS",
        after: "Unified metrics, one view",
      },
      {
        before: "No clear revenue picture",
        after: "Channel performance visible",
      },
      {
        before: "Budget decisions on gut",
        after: "Data-backed decisions",
      },
      {
        before: "Reporting takes days",
        after: "Reports in minutes",
      },
    ],
    audience: [
      "DTC founders",
      "Shopify brands",
      "$500K–$5M+",
      "Performance marketing teams",
      "E-commerce agencies",
    ],
    finalCta: {
      headline:
        "Your marketing data is already telling a story. Let's make it readable.",
      sub: "Book a free 30 minute system audit. We will show you exactly where to start.",
      buttonText: "Get in touch",
    },
    visualType: "pulse",
  },
  "lead-intelligence": {
    slug: "lead-intelligence",
    number: "02",
    category: "Outbound pipeline engine",
    name: "Lead Intelligence",
    hero: "1,000 targeted prospects. Researched, contacted, qualified, and booked. Without you doing any of it.",
    metrics: [
      { value: "27 hrs", label: "reclaimed per week" },
      { value: "1,000", label: "prospects per run" },
      { value: "3–5x", label: "more clients, no headcount" },
      { value: "90%", label: "fully automated" },
    ],
    problem:
      "Prospecting, researching, writing, following up. It's a full-time job eating your best hours every week.",
    features: [
      {
        title: "ICP Research at Scale",
        description:
          "AI screens 1,000 prospects against your exact customer profile.",
      },
      {
        title: "Multi-Channel Outreach",
        description:
          "LinkedIn + email. Unreachable? AI voice agent handles cold outreach.",
      },
      {
        title: "AI Qualification",
        description: "Replies handled automatically. Warm prospects booked.",
      },
      {
        title: "The Handoff",
        description:
          "You step in to close. Pre-qualified prospect already on your calendar.",
      },
    ],
    summaryCallout:
      "Your time shifts from prospecting to closing. Lead Intelligence handles everything in between.",
    comparisons: [
      {
        before: "12+ hrs/week prospecting",
        after: "Under 1 hr/week",
      },
      {
        before: "Generic, ignored messages",
        after: "Personalised at scale",
      },
      {
        before: "No pipeline, no system",
        after: "1,000 msgs = 6 meetings",
      },
      {
        before: "£2,500/month SDR hire",
        after: "Fraction of the cost",
      },
      {
        before: "Unqualified calls waste time",
        after: "Pre-qualified, ready to buy",
      },
    ],
    audience: [
      "Agency founders",
      "B2B service businesses",
      "Consultants & coaches",
      "Marketing agencies",
    ],
    finalCta: {
      headline: "Build a pipeline that runs without you.",
      sub: "Book a free 30 minute system audit. We will show you exactly where to start.",
      buttonText: "Get in touch",
    },
    visualType: "orbit",
  },
  "marketplace-radar": {
    slug: "marketplace-radar",
    number: "03",
    category: "Competitive intelligence",
    name: "Marketplace Radar",
    hero: "One message. Full Amazon competitor report. Pricing gaps. Keyword wins. Review patterns. Done in minutes.",
    metrics: [
      { value: "5 min", label: "per full competitor report" },
      { value: "0", label: "spreadsheets needed" },
      { value: "1", label: "Telegram message to start" },
      { value: "100%", label: "actionable output" },
    ],
    problem:
      "Your team builds competitor pictures in spreadsheets. By the time it's done, the opportunity has moved.",
    features: [
      {
        title: "Pricing Analysis",
        description:
          "Flags gaps between your client and the market. Clear opportunities.",
      },
      {
        title: "Keyword Intelligence",
        description:
          "Shows competitor rankings. Spots where you're underinvesting.",
      },
      {
        title: "Review Pattern Analysis",
        description: "Turns competitor complaints into your pitch.",
      },
      {
        title: "Strategic Actions",
        description: "Not just data. What to do with it. Ready in minutes.",
      },
    ],
    summaryCallout:
      "No more gut feelings. No more spreadsheets. Just a clear picture of where your client wins.",
    comparisons: [
      {
        before: "Hours per competitor",
        after: "Full report in 5 min",
      },
      {
        before: "Raw data, zero action",
        after: "Pricing gaps flagged",
      },
      {
        before: "Missed pricing windows",
        after: "BSR + sales estimates",
      },
      {
        before: "Reviews read manually",
        after: "Patterns + next steps",
      },
      {
        before: "Analyst doing grunt work",
        after: "Manager doing strategy",
      },
    ],
    audience: [
      "Amazon agency founders",
      "Account managers",
      "E-commerce strategists",
      "DTC brand advisors",
    ],
    finalCta: {
      headline:
        "Know your competitor's Amazon position before your next client call.",
      sub: "Book a free 30 minute system audit. We will show you exactly where to start.",
      buttonText: "Get in touch",
    },
    visualType: "radar",
  },
  "speed-to-lead": {
    slug: "speed-to-lead",
    number: "04",
    category: "Speed to lead",
    name: "Speed to Lead",
    hero: "A lead comes in. Qualified, followed up, and routed in 3 minutes. Not 2 hours.",
    metrics: [
      { value: "4.2x", label: "more clients, same leads" },
      { value: "15 hrs", label: "reclaimed per week" },
      { value: "21%", label: "conversion at 3-min response" },
      { value: "88%", label: "fewer qualification errors" },
    ],
    problem:
      "Leads sit while your competitors answer them. By the time you respond, they've already booked elsewhere.",
    features: [
      {
        title: "Instant Response",
        description:
          "Every lead contacted in under 3 minutes. Even at 2am.",
      },
      {
        title: "AI Qualification",
        description:
          "Right questions, scored leads. You only talk to the ones that pass.",
      },
      {
        title: "Automated Follow-Up",
        description:
          "Multi-step sequences run automatically. No lead goes cold.",
      },
      {
        title: "Smart Routing",
        description:
          "Qualified leads go to your calendar. Unqualified leads handled without you.",
      },
    ],
    summaryCallout:
      "MIT studied 2M leads. 5-min vs 30-min response: 100x higher contact rate. Speed to Lead responds in 3.",
    comparisons: [
      {
        before: "Hours to first response",
        after: "Response in 3 min",
      },
      {
        before: "30 min manual qualifying",
        after: "AI qualifies for you",
      },
      {
        before: "Follow-ups get forgotten",
        after: "Automated sequences run",
      },
      {
        before: "5% conversion, leads go cold",
        after: "21% from same leads",
      },
      {
        before: "15 hrs/week on admin",
        after: "Under 1 hr/week",
      },
    ],
    audience: [
      "Agency founders",
      "Service businesses",
      "Sales-led teams",
      "Anyone running inbound lead gen",
    ],
    finalCta: {
      headline:
        "Your next client is filling in a form right now. How fast will you respond?",
      sub: "Book a free 30 minute system audit. We will show you exactly where to start.",
      buttonText: "Get in touch",
    },
    visualType: "flash",
  },
  "social-rival": {
    slug: "social-rival",
    number: "05",
    category: "Social intelligence",
    name: "Social Rival",
    hero: "Your competitor's last 30 posts. Scored. Ranked. On your phone. In under 2 minutes.",
    metrics: [
      { value: "5 hrs", label: "saved per account/week" },
      { value: "2 min", label: "to get a full 30-post report" },
      { value: "30", label: "posts scored per run" },
      { value: "£0", label: "extra tools or logins" },
    ],
    problem:
      "You're paying someone to manually scroll competitor feeds with nothing actionable to show for it.",
    features: [
      {
        title: "Pulls the last 30 posts",
        description:
          "Any public Instagram. No login. Just send the handle.",
      },
      {
        title: "Scores every post 0–100",
        description: "High, Medium, or Low tier included.",
      },
      {
        title: "Straight to your Telegram",
        description: "Date, likes, comments, score, hashtags. Done.",
      },
      {
        title: "Runs for any account",
        description: "Ten accounts. Same two minutes. No extra cost.",
      },
    ],
    summaryCallout:
      "The patterns are already in your competitor's feed. Social Rival finds them in 2 minutes.",
    comparisons: [
      {
        before: "5 hrs of scrolling",
        after: "2-min full report",
      },
      {
        before: "No scores. All guesswork",
        after: "Every post scored 0–100",
      },
      {
        before: "Insights buried in notes",
        after: "Act-ready structured data",
      },
      {
        before: "Doesn't scale past 5",
        after: "Runs across all clients",
      },
      {
        before: "No patterns found",
        after: "Strategy becomes obvious",
      },
    ],
    audience: [
      "Social media agencies",
      "Content strategists",
      "Marketing founders",
      "Brand managers",
    ],
    finalCta: {
      headline: "Ready to stop guessing what works?",
      sub: "Book a free 30 minute system audit. We will show you exactly where to start.",
      buttonText: "Get in touch",
    },
    visualType: "lens",
  },
};

// Also support legacy slugs so both routes work seamlessly
systemsData["pulse"] = systemsData["campaign-lens"];
systemsData["orbit"] = systemsData["lead-intelligence"];
systemsData["radar"] = systemsData["marketplace-radar"];
systemsData["flash"] = systemsData["speed-to-lead"];
systemsData["lens"] = systemsData["social-rival"];

export const allSystemsList = [
  { slug: "campaign-lens", name: "Campaign Lens", category: "Revenue intelligence" },
  { slug: "lead-intelligence", name: "Lead Intelligence", category: "Outbound pipeline engine" },
  { slug: "marketplace-radar", name: "Marketplace Radar", category: "Competitive intelligence" },
  { slug: "speed-to-lead", name: "Speed to Lead", category: "Speed to lead" },
  { slug: "social-rival", name: "Social Rival", category: "Social intelligence" },
];
