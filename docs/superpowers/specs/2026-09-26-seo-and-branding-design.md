# Design Specification: Kikoba SEO & Branding Architecture

- **Date**: 2026-09-26
- **Status**: Approved
- **Target Platform**: Next.js 16 (App Router), Turbopack, React 19, TypeScript
- **Canonical Domain**: `https://kikoba.co.ke`

---

## 1. Problem Statement & Objectives
- **Branding**: The application currently inherits Next.js default favicon assets (`src/app/favicon.ico`), displaying the Vercel triangle in browser tabs. This must be replaced with Kikoba's official emblem across all platforms (desktop tabs, mobile shortcuts, Apple touch icons).
- **Search Engine Visibility (SEO)**: Kikoba requires search engine discoverability across East Africa. This requires high-intent keyword architecture, canonical URLs, search engine crawlability (`sitemap.xml`, `robots.txt`), OpenGraph and Twitter card previews for social sharing (WhatsApp, X, LinkedIn, Telegram), and Schema.org JSON-LD structured data for Google rich snippets (including rich FAQ accordions).

---

## 2. Branding & Favicon System Architecture

### 2.1 Asset Mapping
Source asset: `public/brand/icon-main.png` (51 KB high-res transparent emblem).
- **`src/app/favicon.ico`**: Multi-resolution icon for standard desktop browsers.
- **`src/app/icon.png`**: Standard 32x32 / 192x192 PNG web app icon.
- **`src/app/apple-icon.png`**: 180x180 Apple touch icon for iOS Safari and home screen bookmarks.
- **`src/app/manifest.ts`**: Next.js App Router Web App Manifest defining:
  - `name`: "Kikoba — Wealth is Collective"
  - `short_name`: "Kikoba"
  - `description`: "Digital Accounting & Management Platform for East African Chamas & Savings Groups"
  - `start_url`: "/"
  - `display`: "standalone"
  - `background_color`: "#2E2118"
  - `theme_color`: "#2E2118"
- Cleanup: Remove unused boilerplate SVGs (`vercel.svg`, `next.svg`, `file.svg`, `globe.svg`, `window.svg`).

---

## 3. Metadata & OpenGraph System Architecture

### 3.1 Global Root Metadata (`src/app/layout.tsx`)
- **`metadataBase`**: `new URL("https://kikoba.co.ke")`
- **Title Configuration**:
  - `default`: "Kikoba — Wealth is Collective | Simple Chama & Savings Group Software"
  - `template`: "%s | Kikoba"
- **Meta Description**:
  - "The executive digital accounting & management platform for East African chamas, vikoba, and table banking groups. Real-time ledgers, transparent loan tracking, and zero end-of-cycle disputes."
- **Regional Keywords**:
  - `chama management software`, `vikoba app kenya`, `table banking management system`, `group savings ledger`, `welfare group tracker`, `merry-go-round savings`, `digital chama accounting`, `chama loan tracking`, `kikoba`.
- **Alternates**: `canonical: "/"`
- **Geographic Directives**:
  - `geo.region`: "KE"
  - `geo.placename`: "Nairobi"
  - `geo.position`: "-1.286389;36.817223"
  - `ICBM`: "-1.286389, 36.817223"

### 3.2 Dynamic OpenGraph Social Card (`src/app/opengraph-image.tsx`)
- Generated dynamically via Next.js `ImageResponse` (`next/og`) at 1200x630 resolution.
- Styled in Kikoba brand identity:
  - Deep `#2E2118` void background with radial `#6F4E37` umber glow.
  - Kikoba official wordmark.
  - Editorial headline: *"Wealth is Collective"*.
  - Subhead: *"Simple Digital Accounting for Chamas, Vikoba & Table Banking Groups"*.
  - Feature pills: *Automated Ledgers · Transparent Loans · Dispute-Free Audits*.
- Next.js automatically emits corresponding `<meta property="og:image">` and `<meta name="twitter:image">`.

---

## 4. Crawlability & Indexing Infrastructure

### 4.1 Native Dynamic Sitemap (`src/app/sitemap.ts`)
Generates `/sitemap.xml` with typed `MetadataRoute.Sitemap`:
- `/`: Priority `1.0`, Change Frequency: `weekly`
- `/privacy`: Priority `0.7`, Change Frequency: `monthly`
- `/terms`: Priority `0.7`, Change Frequency: `monthly`

### 4.2 Native Robots Directives (`src/app/robots.ts`)
Generates `/robots.txt` with typed `MetadataRoute.Robots`:
- `User-agent`: `*`
- `Allow`: `/`
- `Sitemap`: `https://kikoba.co.ke/sitemap.xml`

---

## 5. Schema.org JSON-LD Structured Data

Embedded in root `layout.tsx` via `<script type="application/ld+json">`:

### 5.1 `Organization`
- Name: Kikoba
- Legal Name: Kikoba Financial Technologies
- URL: `https://kikoba.co.ke`
- Logo: `https://kikoba.co.ke/brand/name-main.png`
- Contact Point: `support@kikoba.co.ke`
- Area Served: `KE, TZ, UG, RW`

### 5.2 `SoftwareApplication` / `FinancialService`
- Name: Kikoba Group Accounting System
- Operating System: `Web, Android, iOS`
- Application Category: `FinanceApplication`
- Offers: Standard and custom subscription tiers

### 5.3 `FAQPage`
Embeds all 8 authentic Kikoba FAQs:
1. What is Kikoba?
2. How do I register my group on Kikoba?
3. How much does Kikoba cost?
4. Is our group's financial data safe?
5. Can Kikoba handle multi-currency or international groups?
6. Does Kikoba integrate with M-Pesa or bank accounts?
7. What roles and permissions can group leaders assign?
8. Can members access Kikoba without internet?

Enables Google search results to render rich expandable Q&A accordions directly in the SERP.

---

## 6. Verification & Quality Gate
1. `pnpm run lint`: Zero ESLint warnings or errors.
2. `pnpm run build`: All static and dynamic metadata routes (`/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`) compile cleanly with Turbopack.
3. Browser verification: Tab title displays Kikoba logo icon instead of Vercel icon.
4. Schema validation: Verify JSON-LD structure using standard schema validator formats.
