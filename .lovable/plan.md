# College Fit — Responsive Gym Website

## Goal
Build a dark, premium responsive gym website for the brand "College Fit" with five public pages and a shared layout, then push to GitHub and deploy.

## Pages
Create separate TanStack routes for SEO-friendly pages:
- `/` Home — hero, value proposition, featured classes, CTA
- `/about` — brand story, mission, team/trainers
- `/product` — class/program catalog (the "Product" section)
- `/testimonials` — member success stories
- `/contact` — form + location/contact details

## Design
- Dark & premium mood: near-black surfaces, soft grays, subtle gold accent
- Consistent typography: bold display headings, clean body text
- Responsive mobile-first layout with shared header and footer
- Hero image and trainer/class images generated to match the premium gym aesthetic

## Technical work
- Replace the placeholder `src/routes/index.tsx`
- Add route files for `/about`, `/product`, `/testimonials`, `/contact`
- Update `src/routes/__root.tsx` with shared navigation and footer
- Update `src/styles.css` tokens for the dark premium palette
- Generate hero/trainer images and place them in `src/assets/`
- Add route-specific `head()` metadata for each page
- Ensure mobile navigation (hamburger menu) and responsive grids

## Validation
- Run `bun run build` to confirm no errors
- Verify responsive behavior in preview
- Check all five routes render and navigation works

## Publish
- Connect the project to GitHub via Lovable's GitHub integration
- Publish the site through Lovable's Publish dialog
