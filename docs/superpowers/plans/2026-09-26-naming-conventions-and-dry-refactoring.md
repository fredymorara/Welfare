# Naming Conventions, Modular Directory Structure & DRY Refactoring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the codebase from literal "cinema/scenes/anime" naming to industry-standard modular components (`layout`, `sections`, `transitions`), centralize repeated hardcoded values into a unified configuration module enforcing DRY, and preserve 100% of current functionality and aesthetic.

**Architecture:** Split UI components into standard functional directories (`src/components/layout/`, `src/components/sections/`, `src/components/transitions/`). Extract all repeated strings (URLs, support email, navigation items, section identifiers, heritage slogans, metadata) into a centralized `src/config/site.ts`. Update consumers (`page.tsx`, `layout.tsx`, `privacy/page.tsx`, `terms/page.tsx`) to reference the new structure and shared constants.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Motion/React 13, Turbopack.

## Global Constraints
- Preserve exact visual presentation, styling tokens, animations, and micro-interactions.
- Strict DRY enforcement: no hardcoded duplicate URLs, navigation links, or contact emails across components.
- Zero lint warnings (`pnpm run lint`) and zero dead code (`pnpm dlx knip`).
- Full static prerendering (`pnpm run build`) with zero TypeScript errors.

---

### Task 1: Create Centralized Site Configuration & Navigation Constants (`src/config/site.ts` & `src/types/navigation.ts`)
Extract all repeated hardcoded values: support email (`support@kikoba.co.ke`), site URLs, navigation links with their section IDs and labels, cultural heritage slogans, and social handles into single sources of truth.

**Files:**
- Create: `src/types/navigation.ts`
- Create: `src/config/site.ts`
- Modify: `src/config/api.ts`

- [ ] **Step 1: Create navigation types in `src/types/navigation.ts`**
- [ ] **Step 2: Create comprehensive constants module in `src/config/site.ts`**
- [ ] **Step 3: Update `src/config/api.ts` to consume site URL defaults from `site.ts`**
- [ ] **Step 4: Verify typecheck passes with `pnpm run lint`**
- [ ] **Step 5: Commit changes**

---

### Task 2: Refactor Layout Components (`src/components/layout/`)
Move and rename `AnimeHeader.tsx`, `AnimeFooter.tsx`, `LegalPageLayout.tsx`, and `SceneProgressHUD.tsx` to `src/components/layout/`:
- `Header.tsx` (was `AnimeHeader.tsx`)
- `Footer.tsx` (was `AnimeFooter.tsx`)
- `LegalLayout.tsx` (was `LegalPageLayout.tsx`)
- `ScrollProgressRail.tsx` (was `SceneProgressHUD.tsx`)
Update them to consume shared constants from `src/config/site.ts`.

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/LegalLayout.tsx`
- Create: `src/components/layout/ScrollProgressRail.tsx`
- Create: `src/components/layout/index.ts`

- [ ] **Step 1: Create `src/components/layout/Header.tsx`**
- [ ] **Step 2: Create `src/components/layout/Footer.tsx`**
- [ ] **Step 3: Create `src/components/layout/LegalLayout.tsx`**
- [ ] **Step 4: Create `src/components/layout/ScrollProgressRail.tsx`**
- [ ] **Step 5: Create barrel export `src/components/layout/index.ts`**
- [ ] **Step 6: Update legal subpages (`privacy/page.tsx` and `terms/page.tsx`) to consume `LegalLayout` and shared constants**
- [ ] **Step 7: Verify lint and build pass**
- [ ] **Step 8: Commit changes**

---

### Task 3: Refactor Section Components (`src/components/sections/`)
Refactor the 8 content sections from "SceneXX" naming to professional descriptive section names:
- `HeroSection.tsx` (was `Scene01TheCircle.tsx`, id: `hero` or alias `heritage`)
- `ProblemSection.tsx` (was `Scene02TheFracture.tsx`, id: `shift`)
- `FeaturesSection.tsx` (was `Scene03TheBlueprint.tsx`, id: `features` or alias `the-blueprint`)
- `HowItWorksSection.tsx` (was `Scene06HowItWorks.tsx`, id: `how-it-works`)
- `PricingSection.tsx` (was `Scene07Pricing.tsx`, id: `pricing`)
- `FaqSection.tsx` (was `Scene08FAQ.tsx`, id: `faq`)
- `CtaSection.tsx` (was `Scene05TheHorizon.tsx`, id: `cta` or alias `the-vault`)
- `MobileAppSection.tsx` (was `Scene09MobileApp.tsx`, id: `mobile-app`)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/ProblemSection.tsx`
- Create: `src/components/sections/FeaturesSection.tsx`
- Create: `src/components/sections/HowItWorksSection.tsx`
- Create: `src/components/sections/PricingSection.tsx`
- Create: `src/components/sections/FaqSection.tsx`
- Create: `src/components/sections/CtaSection.tsx`
- Create: `src/components/sections/MobileAppSection.tsx`
- Create: `src/components/sections/index.ts`

- [ ] **Step 1: Create `HeroSection.tsx` and `ProblemSection.tsx`**
- [ ] **Step 2: Create `FeaturesSection.tsx` and `HowItWorksSection.tsx`**
- [ ] **Step 3: Create `PricingSection.tsx` and `FaqSection.tsx`**
- [ ] **Step 4: Create `CtaSection.tsx` and `MobileAppSection.tsx`**
- [ ] **Step 5: Create barrel export `src/components/sections/index.ts`**
- [ ] **Step 6: Verify lint passes**
- [ ] **Step 7: Commit changes**

---

### Task 4: Refactor Transition Dividers (`src/components/transitions/`)
Standardize the morph dividers into `src/components/transitions/`:
- `HeroToProblemDivider.tsx` (was `CircleToFractureMorph.tsx`)
- `ProblemToFeaturesDivider.tsx` (was `FractureToCircuitMorph.tsx`)
- `FeaturesToHowItWorksDivider.tsx` (was `CircuitToHowItWorksMorph.tsx`)
- `HowItWorksToPricingDivider.tsx` (was `HowItWorksToPricingMorph.tsx`)
- `PricingToFaqDivider.tsx` (was `PricingToFaqMorph.tsx`)
- `FaqToCtaDivider.tsx` (was `FaqToVaultMorph.tsx`)
- `CtaToMobileDivider.tsx` (was `VaultToMobileMorph.tsx`)

**Files:**
- Create: `src/components/transitions/*.tsx`
- Create: `src/components/transitions/index.ts`

- [ ] **Step 1: Create all 7 transition dividers in `src/components/transitions/`**
- [ ] **Step 2: Create barrel export `src/components/transitions/index.ts`**
- [ ] **Step 3: Verify lint passes**
- [ ] **Step 4: Commit changes**

---

### Task 5: Update Main Page, Root Layout & Remove Legacy `cinema/` Directory
Assemble the refactored layout, sections, and transition dividers into `src/app/page.tsx` and `src/app/layout.tsx`. Remove the obsolete `src/components/cinema/` folder.

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Delete: `src/components/cinema/`

- [ ] **Step 1: Update `src/app/page.tsx` with new clean component imports**
- [ ] **Step 2: Update `src/app/layout.tsx` to consume shared site constants from `src/config/site.ts`**
- [ ] **Step 3: Delete `src/components/cinema/` directory**
- [ ] **Step 4: Run `pnpm dlx knip` to verify 0 dead code files or unused exports**
- [ ] **Step 5: Run `pnpm run lint` and `pnpm run build`**
- [ ] **Step 6: Commit changes**

---

### Task 6: End-to-End Verification & Quality Audit
Validate that all interactions, smooth scrolling, and responsive layouts function identically to before.

- [ ] **Step 1: Run browser subagent inspection at desktop and mobile viewports**
- [ ] **Step 2: Verify smooth scrolling to `#how-it-works`, `#pricing`, `#faq` from Header and Footer**
- [ ] **Step 3: Verify FAQ accordion toggling**
- [ ] **Step 4: Verify legal subpage navigation and breadcrumb links**
- [ ] **Step 5: Final git status check and delivery summary**
