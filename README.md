# GCABPTHS 2026 — Conference Website

**Global Conference on Advances in Biotechnology, Pharmacology, and Translational Health Sciences**

> A production-ready Vite + React + Tailwind CSS single-page application.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
gcabpths2026/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Icon.jsx          # All inline SVG icons
        ├── SectionHeader.jsx # Reusable section title component
        ├── Card.jsx          # Reusable card component
        ├── Navbar.jsx        # Sticky responsive navbar w/ active state
        ├── Hero.jsx          # Landing hero section
        ├── About.jsx         # SIARE intro + Conference + Objectives
        ├── Tracks.jsx        # 6 conference tracks grid
        ├── Submission.jsx    # Guidelines + Process + Publication
        ├── Registration.jsx  # Pricing tiers + benefits
        ├── Dates.jsx         # Timeline of important dates
        ├── Committee.jsx     # Patron, Chair, Organizing & Technical
        ├── Contact.jsx       # Contact info + form w/ validation
        ├── Footer.jsx        # 4-column professional footer
        └── BackToTop.jsx     # Floating back-to-top button
```

---

## ✨ Features

- **Sticky Navbar** — scrolled shadow, active section highlighting via IntersectionObserver, smooth scroll
- **Mobile Hamburger** — animated open/close, auto-closes on resize to desktop
- **Hero** — gradient background, scroll-to-section CTAs, stats bar, scroll hint
- **6 Research Tracks** — color-coded cards with topic chips
- **Submission Section** — manuscript requirements, formatting grid, 6-step process timeline, plagiarism policy
- **Registration** — 4-tier pricing cards (Featured Academic tier), perks list, benefits grid
- **Important Dates** — alternating desktop timeline, mobile-friendly card list
- **Committee** — patron/chair cards with auto-initials, organizing + technical committee grids
- **Contact** — validated form with success state, social links, info cards
- **Footer** — 4-column layout with newsletter input, social links, legal links
- **Back to Top** — floating button appears after 400px scroll

---

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| Vite | ^5.4 |
| React | ^18.3 |
| Tailwind CSS | ^3.4 |
| PostCSS | ^8.4 |
| Autoprefixer | ^10.4 |

No external component libraries or icon packages required — all icons are inline SVG.

---

## 📝 Customization

### Change conference details
Edit the relevant component files in `src/components/`:
- Dates → `Dates.jsx`
- Registration fees → `Registration.jsx`
- Committee members → `Committee.jsx`
- Contact info → `Contact.jsx` and `Footer.jsx`

### Change color scheme
The primary color is `#2563eb` (blue-600) and accent is `#4f46e5` (indigo-600).
Search and replace these values across components, or add CSS variables to `src/index.css`.

---

*Part of the SIARE Global Conference Series*
