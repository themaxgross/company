import type { Tiers } from "./tiers";

interface PricingTableSection {
  name: string;
  features: PricingTableFeature[];
}

interface PricingTableFeature {
  name: string;
  tiers: Record<Tiers, boolean | string>;
}

const WebsiteSection: PricingTableSection = {
  name: "Web services",
  features: [
    {
      name: "WordPress-powered website",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Custom domain",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "HTTPS",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Content Delivery Network (CDN)",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Search Engine Optimization (SEO)",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Custom plugins and themes",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "State-of-the-art web and network security",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "No-worry limits on storage",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "No-worry limits on traffic",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Uptime guarantee",
      tiers: {
        basic: false,
        plus: false,
        pro: true,
      },
    },
  ],
};

const BusinessServicesSection: PricingTableSection = {
  name: "Business services",
  features: [
    {
      name: "Target audience consultation",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Consultation on content strategy",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Copy editing for standard web pages",
      tiers: {
        basic: false,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Content copywriting for standard web pages",
      tiers: {
        basic: false,
        plus: false,
        pro: true,
      },
    },
    {
      name: "Content copywriting for blog posts",
      tiers: {
        basic: false,
        plus: false,
        pro: "Custom quote",
      },
    },
  ],
};

const PhotoSection: PricingTableSection = {
  name: "Photography services",
  features: [
    {
      name: "On-site photo session",
      tiers: {
        basic: "Add $99 per session",
        plus: "1 session included",
        pro: "Unlimited sessions included",
      },
    },
    {
      name: "Portrait photography, including headshots",
      tiers: {
        basic: false,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Product photography",
      tiers: {
        basic: false,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Access to stock photography",
      tiers: {
        basic: false,
        plus: false,
        pro: true,
      },
    },
  ],
};

export const sections: PricingTableSection[] = [
  WebsiteSection,
  BusinessServicesSection,
  PhotoSection,
];
