# User Design Philosophy & Project Engineering Standards

This document establishes the user's permanent design taste, UI/UX philosophy, and code standards for this and all future web projects.

---

## 1. Architecture & Maintenance (DRY Principle)
- **Standard Conventional Naming**: Use industry-standard, predictable component and section names (`HeroSection`, `ProblemSection`, `FeaturesSection`, `HowItWorksSection`, `PricingSection`, `FAQSection`, `Footer`, `Header`). Avoid abstract or overly literal names (e.g. avoid `Scene01`, `TheFracture`).
- **DRY & Modular Codebase**:
  - Never duplicate timers, intersection observers, or state logic across sections. Centralize reusable behavior in custom hooks (e.g., `useAutoCycle`, `useIsMobile`).
  - Centralize brand colors, typography tokens, URLs, and section IDs in `src/config/site.ts` and `src/config/api.ts`.
- **Zero-Tolerance for Dead Code**: All codebases must pass Knip and ESLint with **0 errors and 0 warnings**. No unused variables, dead files, or deprecated syntax.

---

## 2. Navigation & Header Design
- **Consistent, Glitch-Free Dimensions**: Keep the navbar at a constant, compact height across all scroll positions. Never jump or toggle padding (e.g., avoid jumping between `py-5` and `py-3`) which causes layout shifts.
- **Full Glassmorphism**: Style the navbar with a complete, edge-to-edge glassmorphic dark backdrop blur (`bg-void/80 backdrop-blur-md border-b border-umber/40`). Avoid half-visible gradient masks or fades that cut off abruptly.
- **Accurate Navigation Spy**: Links in the header navigation must only highlight/underline when the user is actively inside that specific section. In the hero section, navigation links must remain unselected.

---

## 3. Visual Aesthetics & Imagery
- **Authentic, Culturally Relatable Imagery**: Always prioritize genuine, high-quality photos reflecting the authentic user community (e.g. local members gathered together using their phones) over generic western corporate stock images.
- **Contrast & Text Legibility**: Never sacrifice legibility for imagery. When using a background photo, apply a multi-stop dark scrim and directional gradient (`bg-linear-to-b`, `bg-linear-to-r`) to ensure white, ochre, and platinum typography is crisp and readable.
- **Curated High-End Palette**:
  - Deep rich void darks (`#0E0906`, `#110C08`)
  - Warm Umber (`#6F4E37`)
  - Antique Ochre / Kikoba Gold (`#C8A27A`)
  - Sage Green for success/verification (`#8FAE96`)
  - Ivory / Platinum for typography (`#FFFDF8`, `#E6E1DC`)

---

## 4. Interaction & Motion Rules
- **In-View Auto-Cycling Only**: Interactive carousels, step switchers, and feature showcases must only auto-advance when the user is actively viewing the section (`IntersectionObserver`). When scrolled away or the browser tab is hidden, all timers must pause immediately.
- **5s Default / 10s Extended Reading Dwell**:
  - Default auto-advance interval: 5 seconds.
  - When the user explicitly clicks a step, feature tab, or interacts with a live demo, immediately switch the dwell time to 10 seconds for that item and all subsequent items for a full loop before smoothly returning to 5 seconds.
- **Mobile Performance First**:
  - Always guard heavy animations with `isMobile || shouldReduceMotion`.
  - Disable heavy scroll-linked parallax, rotating SVG mathematics, and canvas shadow blurs on mobile devices to preserve 60fps native touch scrolling.

---

## 5. Copywriting & Tone
- **Authentic, Direct, Empathetic Voice**: Speak directly to real people and grassroots groups. Use clear, trustworthy terms (M-Pesa, chamas, table banking, two-official approval, transparent records) rather than disconnected tech jargon.
- **Punchy Narrative Structure**: Short, memorable punchlines paired with clear explanatory subtitles.
