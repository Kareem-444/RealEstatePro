# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js 15.5.3 (Turbopack) app using React 19 and TypeScript. The project was bootstrapped with `create-next-app` and uses Tailwind CSS for styling. The main app code is in the `app/` directory, with static assets in `public/`.

## Architecture & Key Files
- `app/`: Main application code. Entry point is `app/page.tsx`. Global layout is in `app/layout.tsx`.
- `public/`: Static assets (SVGs, images).
- `next.config.ts`: Next.js configuration, including remote image host setup for `next/image`.
- `package.json`: Scripts and dependencies. Uses Turbopack for dev/build.
- `globals.css`: Global styles, includes Tailwind.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (uses Turbopack)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start Production:** `npm run start`
- Hot reload is enabled for all changes in `app/`.

## Image Handling
- Remote images for `next/image` must be whitelisted in `next.config.ts` under `images.remotePatterns`. Example:
  ```ts
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'th.bing.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' }
    ]
  }
  ```
- If you see an error about an unconfigured hostname, add it to `remotePatterns`.

## Conventions & Patterns
- Uses the Next.js App Router (`app/` structure).
- TypeScript is required for all code in `app/`.
- Tailwind CSS utility classes are used for layout and styling.
- Font optimization via `next/font` (see README).
- All pages/components should be placed in `app/`.

## External Dependencies
- React 19, Next.js 15, Tailwind CSS, ESLint, TypeScript.
- No custom server or API routes by default.

## Examples
- To add a new page, create a file in `app/` (e.g., `app/about.tsx`).
- To use a remote image, ensure its hostname is in `next.config.ts`.
- For global styles, edit `app/globals.css`.

## References
- See `README.md` for basic setup and deployment info.
- See `next.config.ts` for custom Next.js configuration.

---

If any conventions or workflows are unclear, ask the user for clarification or examples from their codebase.