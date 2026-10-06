---
name: awesome-design-md
description: Brand-inspired DESIGN.md design systems (Stripe, Linear, Apple, Vercel, Notion, Airbnb, Nike, Spotify, Tesla and 65+ more) for generating UI that matches a well-known visual language. Use when the user asks for a page, landing page, dashboard or component "in the style of" / "looks like" a named brand, or wants a ready-made design system (colors, typography, spacing, components) to drop into a project as DESIGN.md.
---

# Awesome DESIGN.md

A collection of 74 DESIGN.md files, each an interpretation of a real brand's
design language: color tokens, typography scale, spacing, radii, shadows,
component styles, layout principles and responsive behavior — in plain
Markdown with YAML front matter that agents can read directly.

Source: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (MIT).

## Workflow

1. **Pick a brand.** Match the user's request to a folder in `design-md/`.
   If no brand is named, suggest 2–3 that fit the product type (see table).
2. **Read the system.** Load `design-md/<brand>/DESIGN.md`. Use its tokens
   verbatim — do not invent colors or font sizes.
3. **Install it in the project (optional).** Copy the file to the project
   root as `DESIGN.md` so later sessions keep the same visual language.
4. **Build.** Map tokens to the target stack (CSS variables, Tailwind theme,
   shadcn theme). Follow the component and layout rules in the file.
5. **Avoid impersonation.** These are *inspired-by* systems. Do not copy
   logos, trademarks or brand names into the user's product.

## Brand picker

| Product type | Good fits |
|---|---|
| Fintech / payments | stripe, revolut, wise, coinbase, kraken, mastercard |
| Developer tools / SaaS | linear.app, vercel, supabase, raycast, warp, sentry, posthog, resend |
| AI products | claude, cohere, mistral.ai, elevenlabs, replicate, runwayml, x.ai |
| Productivity / docs | notion, airtable, miro, figma, framer, webflow, mintlify |
| Consumer / lifestyle | airbnb, spotify, pinterest, nike, starbucks, uber |
| Premium / automotive | apple, tesla, ferrari, lamborghini, bugatti, bmw, bmw-m |
| Editorial / media | theverge, wired |
| Retro / playful | dell-1996, nintendo-2001, playstation |

Full list: `ls design-md/`.

## Notes

- Some folders' `README.md` point to getdesign.md for live previews; the
  `DESIGN.md` file in each folder is the complete, self-contained system.
