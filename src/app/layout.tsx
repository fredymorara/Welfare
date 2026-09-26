import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "../config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = SITE_CONFIG.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.titleDefault,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "chama management software",
    "vikoba app kenya",
    "table banking management system",
    "group savings ledger",
    "welfare group tracker",
    "merry-go-round savings",
    "digital chama accounting",
    "chama loan tracking",
    "kikoba",
    "kenya savings groups",
    "east africa chama software",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.titleDefault,
    description:
      "Simple, transparent digital accounting and management for chamas, vikoba, and table banking groups. Automated ledgers, loan tracking, and dispute-free audits.",
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "Simple, transparent digital accounting and management for East African chamas, vikoba, and table banking groups.",
    creator: SITE_CONFIG.social.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: SITE_CONFIG.name,
    statusBarStyle: "black-translucent",
  },
  category: "finance",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/brand/icon-main.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": SITE_CONFIG.geo.region,
    "geo.placename": SITE_CONFIG.geo.placename,
    "geo.position": SITE_CONFIG.geo.position,
    "ICBM": SITE_CONFIG.geo.icbm,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E2118",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/name-main.png`,
      email: SITE_CONFIG.supportEmail,
      description:
        "Digital Accounting & Management Platform for East African Chamas, Vikoba, and Savings Groups.",
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE_CONFIG.supportEmail,
        contactType: "customer service",
        areaServed: ["KE", "TZ", "UG", "RW"],
        availableLanguage: ["English", "Swahili"],
      },
      sameAs: [SITE_CONFIG.social.twitterUrl],
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Country", name: "Uganda" },
        { "@type": "Country", name: "Rwanda" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_CONFIG.name,
      alternateName: [`${SITE_CONFIG.name} Kenya`, `${SITE_CONFIG.name} App`, `${SITE_CONFIG.name} Chama Software`],
      description: "Simple Digital Accounting & Savings Platform for Chamas",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: [...SITE_CONFIG.languages],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Kikoba Group Ledger",
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Accounting & Chama Financial Management",
      operatingSystem: "All (Web, Android, iOS)",
      softwareVersion: "2.0",
      description:
        "Complete financial transparency, automated ledgers, loan management, and zero end-of-cycle disputes for collective savings groups.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "128",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KES",
        description: "Free trial available on selected plans",
      },
      featureList: [
        "Automated Chama Ledgers & Financial Statements",
        "Table Banking Loan Approval & Repayment Tracking",
        "Dispute-Free Audit Logs & Member Contribution History",
        "Multi-Group Management From a Single Account",
        "Event & Welfare Fund Contributions Tracking",
        "Role-based Access Control for Group Leaders",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kikoba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kikoba is a digital platform for managing chamas, welfare groups, and savings associations. It helps your group track contributions, issue and repay loans, manage events and projects, log expenses, and keep every member informed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I register my group on Kikoba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Click Get Started button at the top and follow the registration flow to create your group and your own admin account. Once registered, you can start adding members and configuring your group's contribution categories, loan types, and roles.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Kikoba cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kikoba offers several subscription tiers priced per billing period, with limits on members and features that scale with your group's size. Visit the Pricing section for current package details, or check in-app under Subscription once you're logged in.",
          },
        },
        {
          "@type": "Question",
          name: "Is my group's financial data secure on Kikoba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Each group's data is isolated from every other group on the platform, access is controlled by roles and permissions, and all data is encrypted in transit. Only members you explicitly add to your group can see its records.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selected subscription packages include a free trial period so you can explore Kikoba's features before committing to a paid plan. Trial availability and duration are shown on the package details when you sign up.",
          },
        },
        {
          "@type": "Question",
          name: "Who approves loan requests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An admin or appointed official reviews and approves loan requests directly in the platform. Once approved, automated reminders and repayment tracking keep everything on schedule.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage more than one group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you belong to multiple groups, you can switch between them from a single account without logging in and out. Each group's records and permissions remain completely isolated.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-void text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
