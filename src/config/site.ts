import type { NavigationLink, SectionProgressItem } from "../types/navigation";

export const SITE_CONFIG = {
  name: "Kikoba",
  legalName: "Kikoba Technologies",
  titleDefault: "Kikoba — Wealth is Collective | Simple Chama & Savings Group Software",
  titleTemplate: "%s | Kikoba",
  tagline: "Wealth is Collective",
  description:
    "The executive digital accounting & management platform for East African chamas, vikoba, and table banking groups. Real-time ledgers, transparent loan tracking, and zero end-of-cycle disputes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kikobake.netlify.app",
  domain: "kikobake.netlify.app",
  supportEmail: "support@kikoba.co.ke",
  locale: "en_KE",
  languages: ["en-KE", "sw-KE"],
  geo: {
    region: "KE",
    placename: "Nairobi",
    position: "-1.286389;36.817223",
    icbm: "-1.286389, 36.817223",
  },
  social: {
    twitterHandle: "@kikobaapp",
    twitterUrl: "https://twitter.com/kikobaapp",
  },
  culturalQuote: {
    swahili: "Umoja ni Nguvu, Utengano ni Udhaifu.",
    english: "Unity is Strength, Division is Weakness.",
  },
  legalLastUpdated: "July 30, 2026",
  copyright: `© ${new Date().getFullYear()} KIKOBA. ALL RIGHTS RESERVED. BUILT FOR COMMUNITY GROUPS ACROSS EAST AFRICA`,
} as const;

export const SECTION_IDS = {
  HERO: "heritage",
  PROBLEM: "the-shift",
  FEATURES: "the-engine",
  HOW_IT_WORKS: "how-it-works",
  PRICING: "pricing",
  FAQ: "faq",
  CTA: "vault",
  MOBILE_APP: "mobile-app",
} as const;

export const MAIN_NAVIGATION_LINKS: NavigationLink[] = [
  { id: SECTION_IDS.HOW_IT_WORKS, title: "How It Works" },
  { id: SECTION_IDS.PRICING, title: "Pricing" },
  { id: SECTION_IDS.FAQ, title: "FAQ" },
];

export const SECTION_PROGRESS_ITEMS: SectionProgressItem[] = [
  { id: SECTION_IDS.HERO, label: "Home", pct: "01%" },
  { id: SECTION_IDS.PROBLEM, label: "Challenge", pct: "14%" },
  { id: SECTION_IDS.FEATURES, label: "Security", pct: "28%" },
  { id: SECTION_IDS.HOW_IT_WORKS, label: "Process", pct: "43%" },
  { id: SECTION_IDS.PRICING, label: "Pricing", pct: "54%" },
  { id: SECTION_IDS.FAQ, label: "FAQ", pct: "67%" },
  { id: SECTION_IDS.CTA, label: "Sign Up", pct: "81%" },
  { id: SECTION_IDS.MOBILE_APP, label: "App", pct: "95%" },
];
