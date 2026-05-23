import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const canonicalBase = site.url;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: {
    default:
      "Fletcher Hartsock · Field & Implementation Engineer · Charlotte, NC · Technical Operations",
    template: "%s · Fletcher Hartsock",
  },
  description:
    "Charlotte, NC field and implementation engineer—on-site technical support, multi-location rollout leadership, hardware diagnostics, operator training, and production integration systems. Travel-ready; open to field engineering and implementation roles.",
  applicationName: "Fletcher Hartsock — Portfolio",
  authors: [{ name: site.name, url: canonicalBase }],
  creator: site.name,
  keywords: [
    "Charlotte field engineer",
    "Charlotte implementation engineer",
    "Charlotte NC technical operations",
    "hardware troubleshooting engineer",
    "field service engineer Charlotte",
    "integration engineer Charlotte",
    "on-site technical support",
    "multi-location rollout engineer",
    "EcoCAR hardware engineering",
    "sensor systems diagnostics",
    "Next.js implementation engineer",
    "production systems troubleshooting",
    "travel-ready field engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalBase,
    siteName: site.name,
    title: `${site.name} · Field & Implementation Engineer · Charlotte, NC`,
    description:
      "On-site technical support, installation leadership, hardware diagnostics, operator training, and production integrations—travel-ready for field and implementation roles.",
  },
  twitter: {
    card: "summary",
    title: `${site.name} · Field & Implementation Engineer`,
    description:
      "Field-ready technical operator for customer deployments and production systems. Field engineering, implementation, and integration from Charlotte, NC.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#06080d",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: [
    "Field Engineer",
    "Implementation Engineer",
    "Integration Engineer",
    "Technical Operations Engineer",
    "Platform Engineer",
  ],
  email: site.email,
  url: canonicalBase,
  sameAs: [site.linkedin, site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  },
  knowsAbout: [
    "On-site technical support",
    "Installation project leadership",
    "Hardware diagnostics",
    "Operator training",
    "Technical documentation",
    "API integration",
    "Multi-location rollouts",
    "Production troubleshooting",
    "Next.js",
    "TypeScript",
    "Sensor systems",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <meta name="geo.region" content={`US-${site.location.region}`} />
        <meta name="geo.placename" content={`${site.location.city}, ${site.location.region}`} />
        <meta name="ICBM" content="35.2271,-80.8431" />
      </head>
      <body>{children}</body>
    </html>
  );
}
