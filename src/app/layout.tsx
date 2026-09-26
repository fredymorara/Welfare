import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kikoba — Wealth is Collective",
  description:
    "An executive digital ecosystem for East African savings groups, chamas, and vikoba. Complete financial transparency, automated ledgers, and zero end-of-cycle friction.",
  keywords: [
    "chama",
    "vikoba",
    "kikoba",
    "savings group",
    "table banking",
    "collective savings",
    "Kenya finance",
  ],
  authors: [{ name: "Kikoba Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E2118",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-void text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
