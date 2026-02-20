import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const SITE_URL = "https://ksrtransport.co.in";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KSR Transport | Heavy Logistics & ODC Transport | Hyderabad | 30+ Years",
    template: "%s | KSR Transport",
  },
  description: "KSR Transport – Trusted heavy logistics & ODC transport in Hyderabad & India. 40+ owned vehicles, 32–40MT capacity. Steel, ODC, solar panels. IBA certified. Call 93966 24567.",
  keywords: [
    "heavy transport Hyderabad",
    "ODC transport India",
    "steel transport Hyderabad",
    "heavy logistics India",
    "KSR Transport",
    "over dimensional cargo",
    "industrial logistics",
    "flatbed transport",
    "national permit transport",
    "Hayathnagar transport",
    "heavy haulage India",
    "solar panel logistics",
    "metal fabrication transport",
    "IBA certified ",
  ],
  authors: [{ name: "KSR Transport", url: SITE_URL }],
  creator: "KSR Transport",
  publisher: "KSR Transport",
  formatDetection: { email: false, address: false, telephone: false },
  referrer: "origin-when-cross-origin",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "KSR Transport",
    title: "KSR Transport | Heavy Logistics & ODC Transport | Hyderabad",
    description: "Trusted heavy transport in Hyderabad & India. 40+ vehicles, steel, ODC, solar panels. IBA certified. 30+ years.",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 512,
        height: 512,
        alt: "KSR Transport – Heavy Logistics & ODC Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSR Transport | Heavy Logistics & ODC Transport",
    description: "Heavy transport & ODC logistics in Hyderabad. 40+ vehicles, 17+ years. IBA certified.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/icon.jpeg?v=logo", type: "image/jpeg", sizes: "any" }],
    apple: "/icon.jpeg",
  },
  manifest: "/manifest.json",
  category: "transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "KSR Transport",
    image: `${SITE_URL}/assets/logo.jpeg`,
    url: SITE_URL,
    telephone: "+919396624567",
    email: "ksrtransport9@gmail.com",
    description: "Heavy logistics and ODC transport in Hyderabad and across India. Steel, over dimensional cargo, solar panels. IBA certified. 40+ owned vehicles, 45-55MT capacity.",
    slogan: "30 Years of Trusted Heavy Transport Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4-12-15/P 19 EP, Plot No.19, KSR Residency, Road No.1, Arunodaya Nagar",
      addressLocality: "Hayathnagar",
      addressRegion: "Telangana",
      postalCode: "500070",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3311,
      longitude: 78.5906,
    },
    areaServed: [
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "$$",
    sameAs: [],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "KSR Transport",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.jpeg`,
    telephone: "+919396624567",
    email: "ksrtransport9@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hayathnagar",
      addressRegion: "Telangana",
      postalCode: "500070",
      addressCountry: "IN",
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "KSR Transport",
    description: "Heavy logistics and ODC transport – Hyderabad and pan India.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Steel Transport" },
      { "@type": "ListItem", position: 2, name: "ODC Cargo" },
      { "@type": "ListItem", position: 3, name: "Solar Panel Logistics" },
      { "@type": "ListItem", position: 4, name: "Metal Fabrication Logistics" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0B1F3A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans bg-white text-slate-900`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
