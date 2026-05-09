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
      "Fletcher Hartsock · Solutions & Integration Engineer · Charlotte, NC · Operations Platforms",
    template: "%s · Fletcher Hartsock",
  },
  description:
    "Charlotte, NC solutions and integration engineer shipping production operational systems—Next.js and TypeScript frontends, Square and WordPress API orchestration, Supabase-backed data planes, franchise tooling, RBAC with audit trails, Render deployments, and cross-platform synchronization for multi-location brands.",
  applicationName: "Fletcher Hartsock — Portfolio",
  authors: [{ name: site.name, url: canonicalBase }],
  creator: site.name,
  keywords: [
    "Charlotte solutions engineer",
    "Charlotte integration engineer",
    "Charlotte NC technical consultant",
    "platform operations engineer Charlotte",
    "internal tools engineer Charlotte",
    "Next.js consultant",
    "TypeScript integration engineer",
    "Square API integration",
    "Supabase engineer",
    "WordPress REST API integration",
    "operational automation",
    "franchise operations software",
    "Render deployment engineer",
    "multi-location operations platform",
    "API orchestration",
    "RBAC audit logging",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalBase,
    siteName: site.name,
    title: `${site.name} · Solutions & Integration Engineer · Charlotte, NC`,
    description:
      "Production integrations, franchise operations platforms, and internal tools—typed React/Next.js surfaces, Square and Supabase backends, disciplined deployment on Render.",
  },
  twitter: {
    card: "summary",
    title: `${site.name} · Solutions & Integration Engineer`,
    description:
      "Operator-grade software for franchises and growth brands. API orchestration, platform reliability, and internal tooling from Charlotte, NC.",
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
    "Solutions Engineer",
    "Integration Engineer",
    "Technical Consultant",
    "Platform Operations Engineer",
    "Internal Tools Engineer",
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
    "Systems architecture",
    "API integration",
    "Operational automation",
    "Square APIs",
    "Supabase",
    "WordPress REST API",
    "Next.js",
    "TypeScript",
    "Render",
    "Platform reliability",
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
