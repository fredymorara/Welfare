import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://kikoba.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kikoba — Wealth is Collective | Simple Chama & Savings Group Software",
    template: "%s | Kikoba",
  },
  description:
    "The executive digital accounting & management platform for East African chamas, vikoba, and table banking groups. Real-time ledgers, transparent loan tracking, and zero end-of-cycle disputes.",
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
  authors: [{ name: "Kikoba", url: SITE_URL }],
  creator: "Kikoba",
  publisher: "Kikoba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kikoba — Wealth is Collective | Simple Chama & Savings Group Software",
    description:
      "Simple, transparent digital accounting and management for chamas, vikoba, and table banking groups. Automated ledgers, loan tracking, and dispute-free audits.",
    url: SITE_URL,
    siteName: "Kikoba",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kikoba — Wealth is Collective",
    description:
      "Simple, transparent digital accounting and management for East African chamas, vikoba, and table banking groups.",
    creator: "@kikobaapp",
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
    "geo.region": "KE",
    "geo.placename": "Nairobi",
    "geo.position": "-1.286389;36.817223",
    "ICBM": "-1.286389, 36.817223",
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
      name: "Kikoba",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/name-main.png`,
      email: "support@kikoba.co.ke",
      description:
        "Digital Accounting & Management Platform for East African Chamas, Vikoba, and Savings Groups.",
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
      name: "Kikoba",
      description: "Simple Digital Accounting & Savings Platform for Chamas",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-KE",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Kikoba Group Ledger",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, Android, iOS",
      description:
        "Complete financial transparency, automated ledgers, loan management, and zero end-of-cycle disputes for collective savings groups.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KES",
      },
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
