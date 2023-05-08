import type { Tiers } from "./tiers";
import type { ReactElement, ReactNode } from "react";

interface PricingTableSection {
  name: string;
  features: PricingTableFeature[];
}

export type PricingTableFeature = {
  name: string;
  tiers: Record<Tiers, boolean | string>;
  description?: ReactElement;
};

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
      description: (
        <>
          <p className="mb-4">
            As part of the package, you’ll get an instance of the WordPress
            software (see wordpress.org) installed and set up for you. We’ll
            agree on a site name before set up, and this site name can be
            changed at any time.
          </p>
          <p>
            You’ll get an administrator account to your instance. You can create
            an unlimited number of accounts, as long as they're active accounts.
            (An active account is one with author privileges; the idea is that
            you can't create a social network with this service.)
          </p>
        </>
      ),
    },
    {
      name: "Custom domain name registration",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
      description: (
        <>
          <p className="mb-4">
            If you don’t already have a web domain, we’ll discuss available
            options and register one for you. If you have an existing domain,
            we’ll work with you to transfer the domain to our web registrar and
            we’ll administer the domain name and keep it running for you.
          </p>
          <p className="mb-4">
            Some domain names and domain endings are premium or have special
            technical limitations; if this applies, we’ll let you know and
            discuss options.
          </p>
        </>
      ),
    },
    {
      name: "HTTPS",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
      description: (
        <p>
          We’ll set up an SSL/TLS certificate for you to ensure that your
          website operates on HTTPS and can be served to visitors securely.
          We’ll automatically renew the certificate and issue new ones for you
          if needed.
        </p>
      ),
    },
    {
      name: "Content Delivery Network (CDN)",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
      description: (
        <>
          <p className="mb-4">
            Your site will be set up with the CloudFlare global content delivery
            network.
          </p>
          <p>
            A CDN is a global network of caching servers that keep copies of
            site content in locations physically close to your visitor’s device;
            this reduces the time it takes to serve assets, like images and
            script files, to the browser.
          </p>
        </>
      ),
    },
    {
      name: "Jetpack for WordPress",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
      description: (
        <>
          <p className="mb-4">
            Jetpack is a suite of tools for WordPress that provides a range of
            features, including site statistics, social media integration, and
            security tools.
          </p>
          <p>
            It's included as part of your site, and we'll set it up for you. The
            exact plan will depend on your needs; we'll discuss this with you
            and you can request to change the plan at any time.
          </p>
        </>
      ),
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
      description: (
        <p>
          We don’t impose any hard limits on storage and traffic levels, so you
          don’t need to worry about keeping file sizes low or have to pay loads
          if your site suddenly goes viral. As long as you’re using your site as
          discussed and agreed, your usage is unlimited.
        </p>
      ),
    },
    {
      name: "No-worry limits on traffic",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
      description: (
        <p>
          We don’t impose any hard limits on storage and traffic levels, so you
          don’t need to worry about keeping file sizes low or have to pay loads
          if your site suddenly goes viral. As long as you’re using your site as
          discussed and agreed, your usage is unlimited.
        </p>
      ),
    },
  ],
};

const NetworkSection: PricingTableSection = {
  name: "Network services",
  features: [
    {
      name: "Standard domain name system (DNS) services",
      tiers: {
        basic: true,
        plus: true,
        pro: true,
      },
    },
    {
      name: "Advanced DNS services",
      tiers: {
        basic: false,
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
  NetworkSection,
  BusinessServicesSection,
  PhotoSection,
];
