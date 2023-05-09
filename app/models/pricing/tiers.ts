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
    priceMonthly: "$75",
    description: "The basics to get your business meow-ing.",
    features: [
      "WordPress site with custom domain, SSL, and CDN",
      "Jetpack security and performance",
      "Custom plugins and themes supported",
      "Optional free audience and content consultation",
    ],
    recommendedOption: false,
  },
  {
    name: "Economy Plus",
    id: "plus",
    href: "/contact",
    priceMonthly: "$150",
    description: "High-touch services for a zoomies presence.",
    features: [
      "Jetpack premium features",
      "Photo sourcing and image optimization",
      "Photography services, including on-site",
      "Content copywriting for static pages",
      "E-commerce and online store setup and support",
    ],
    recommendedOption: true,
  },
  {
    name: "Business Pro",
    id: "pro",
    href: "/contact",
    description: "Incredible services for the most demanding wet noses.",
    features: [
      "SLA uptime guarantee",
      "Custom development",
      "Unlimited photo and content services",
    ],
    recommendedOption: false,
  },
];
