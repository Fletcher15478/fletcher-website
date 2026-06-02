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
      "Fletcher Hartsock | Software Engineer Charlotte NC | Systems Integration Engineer",
    template: "%s | Fletcher Hartsock",
  },
  description:
    "Fletcher Hartsock — Computer Science graduate and Full Stack Software Engineer relocating to Charlotte, NC. Systems integration, enterprise software, API integrations, automation, CAN Bus telemetry, and hardware validation.",
  applicationName: "Fletcher Hartsock — Portfolio",
  authors: [{ name: site.name, url: canonicalBase }],
  creator: site.name,
  keywords: [
    "Fletcher Hartsock",
    "Software Engineer Charlotte NC",
    "Systems Integration Engineer Charlotte NC",
    "Engineering Technologist Charlotte NC",
    "Computer Science Graduate Charlotte NC",
    "Full Stack Software Engineer Charlotte",
    "Implementation Engineer Charlotte NC",
    "Solutions Engineer Charlotte NC",
    "Technical Analyst Charlotte NC",
    "Enterprise software engineer",
    "Square API integration",
    "Next.js developer Charlotte",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalBase,
    siteName: site.name,
    title: "Fletcher Hartsock | Software Engineer | Charlotte, NC",
    description:
      "Full Stack Software Engineer & Systems Integration Engineer. Enterprise systems, integrations, automation, and engineering solutions. Relocating to Charlotte, NC.",
  },
  twitter: {
    card: "summary",
    title: "Fletcher Hartsock | Software Engineer | Charlotte, NC",
    description:
      "Computer Science graduate building scalable systems, integrations, and engineering solutions. Open to full-time roles in Charlotte, NC.",
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport = {
  themeColor: "#004785",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: [...site.targetRoles],
  email: site.email,
  telephone: site.phone,
  url: canonicalBase,
  sameAs: [site.linkedin, site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  },
  knowsAbout: [
    "Software Engineering",
    "Systems Integration",
    "Enterprise Software",
    "REST APIs",
    "PostgreSQL",
    "React",
    "Next.js",
    "Python",
    "CAN Bus",
    "Hardware Validation",
    "Technical Documentation",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "West Virginia University",
  },
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
