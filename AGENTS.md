<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# User Design & Engineering Preferences

Refer to `.agents/rules/user_design_preferences.md` for complete guidelines. Summary:
- **Standard Conventional Naming**: Use standard names (`HeroSection`, `ProblemSection`, `FeaturesSection`, etc.). No esoteric or literal scene numbering.
- **DRY Architecture**: Centralize logic in hooks (`useAutoCycle`, `useIsMobile`) and tokens (`site.ts`).
- **Glitch-Free Navbar**: Constant compact height, full glassmorphism (`bg-void/80 backdrop-blur-md`), no height-jumping or half-visible gradient masks. Active links only highlight when inside that specific section.
- **Authentic Relatable Imagery**: Authentic community photography over generic corporate stock. High-contrast gradient scrims (`bg-linear-to-b`, `bg-linear-to-r`) to ensure complete text readability.
- **Smart In-View Interactions**: Auto-cycles run only in-view (5s default, 10s on explicit click for an entire loop before returning to 5s).
- **Mobile Performance**: Disable heavy scroll animations and complex SVG mathematics on mobile to guarantee 60fps touch scrolling.
- **Zero Warnings**: Keep the codebase clean with 0 ESLint and Knip warnings.
