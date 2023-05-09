export type Tiers = "basic" | "plus" | "pro";

export interface TierType {
  name: string;
  id: Tiers;
  href: string;
  priceMonthly?: string;
  description: string;
  features: string[];
  recommendedOption?: boolean;
}

export const tiers: TierType[] = [
  {
    name: "Economy Basic",
    id: "basic",
    href: "/contact",
    priceMonthly: "$89",
    description: "The basics to get your business up and running on the web.",
    features: [
      "WordPress site with custom domain, SSL, and CDN",
      "Custom plugins and themes supported",
      "Target audience and content consultation",
    ],
    recommendedOption: false,
  },
  {
    name: "Economy Plus",
    id: "plus",
    href: "/contact",
    priceMonthly: "$149",
    description:
      "High-touch services for a professional web presence, designed to ensure your business looks great.",
    features: [
      "Everything in Economy Basic",
      "Photo services (1 session)",
      "Content copywriting for static pages",
    ],
    recommendedOption: true,
  },
  {
    name: "Business Pro",
    id: "pro",
    href: "/contact",
    description: "Dedicated support for the most demanding use cases.",
    features: [
      "SLA uptime guarantee",
      "Custom development",
      "Unlimited photo and content services",
    ],
    recommendedOption: false,
  },
];
