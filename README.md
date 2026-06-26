# Xebia Learning Platform - Developer & Customization Guide

This project is a modern, production-ready frontend for the Xebia Learning Platform built with **React 19 + Vite 8 + Tailwind CSS v4**.

---

## 📂 Project Directory Structure

The project follows a component-driven architecture:

```
src/
├── assets/             # Asset files (SVG icons, static images)
│   ├── hero.png        # The primary hero/login background image (Ganesha Neon)
│   ├── react.svg
│   └── vite.svg
├── components/         # Modular react components
│   ├── common/         # Reusable global layout & form controls
│   │   ├── Button.jsx       # Custom buttons (primary, outline, accents, loaders)
│   │   ├── Card.jsx         # Card container with Framer Motion hover animations
│   │   ├── Container.jsx    # Centered maximum-width wrapper
│   │   ├── Input.jsx        # Dual-style inputs ("nested" for Login, "outline" for Forms)
│   │   ├── Loader.jsx       # Brand themed loading spinner
│   │   ├── SearchBar.jsx    # Mockup 2 search block with attached purple button
│   │   └── SectionTitle.jsx # Reusable headers
│   ├── navbar/         # Header navigation bar components
│   │   ├── Logo.jsx         # Solid purple brand typography logo
│   │   ├── NavItem.jsx      # Clean text navigation links with active underline
│   │   ├── NavLinks.jsx     # Mapper for navigation arrays
│   │   ├── SearchInput.jsx  # Centered rectangular search input in navigation
│   │   └── Navbar.jsx       # Header container & mobile slide-out drawer
│   ├── hero/           # Landing page landing layouts
│   ├── auth/           # Login form, login card layout, Google OAuth mock button
│   ├── faq/            # FAQ accordion container, items, support sidebar cards
│   ├── contact/        # Contact form layout
│   └── footer/         # Footer with quick links and copyright details
├── layouts/            # Layout wrappers
│   └── MainLayout.jsx  # Persistent header, main container, footer wrapper
├── pages/              # High level routed page views
│   ├── Landing.jsx     # Home Route (/)
│   ├── Login.jsx       # Authentication Route (/login)
│   ├── FAQ.jsx         # FAQ search & list Route (/faq)
│   └── Contact.jsx     # Contact Form Route (/contact)
├── routes/             # App routing rules
│   └── AppRoutes.jsx   # React Router DOM mapping
├── services/           # Service mock API layer
│   └── api.js          # Unified accessor for local JSON configs
├── data/               # Configuration JSON files (Strictly NO hardcoded text in UI)
│   ├── navbar.json     # Logo text, Search Placeholders, Links, login buttons
│   ├── landing.json    # Hero descriptions, Features items, CTA buttons
│   ├── login.json      # Login cards, placeholders, bullet benefits
│   ├── faq.json        # FAQ accordion items (Q&A lists), support details
│   └── contact.json    # Forms descriptors, HQ locations
├── App.jsx             # React router context mount
├── main.jsx            # Application root entry point
└── index.css           # Tailwind v4 import & custom Color Palette config
```

---

## 🎨 How to Change the Color Palette

Tailwind CSS v4 handles configuration directly inside [src/index.css](file:///c:/Users/HP/Desktop/lms/src/index.css) using the `@theme` directive (no `tailwind.config.js` is needed).

To change any colors, open [index.css](file:///c:/Users/HP/Desktop/lms/src/index.css) and edit the hex codes under `@theme`:

```css
@theme {
  /* Brand color definitions (hex codes from your palette image) */
  --color-primary-600: #6C1D5F; /* Tranquil Velvet (Logo, Active Links, Main CTAs) */
  --color-primary-700: #4A1E47; /* Tranquil Velvet Dark (Button hover gradients) */
  --color-primary-400: #84117C; /* Bright Tr. Velvet (Secondary gradient borders) */
  
  --color-accent-500: #01AC9F;  /* Emerald (Teal links, Support cards, Send Message) */
  --color-accent-600: #FF6200;  /* CTA Orange (Secondary orange accent) */
  
  --color-bg-base: #F7F8FC;     /* Blueish Grey (Global app background) */
}
```

These mapped CSS variables compile automatically to standard classes (e.g. `bg-primary-600`, `text-accent-500`, `border-primary-200`, `bg-bg-base`).

---

## ✍️ How to Change Text Content (Zero Hardcoded Text)

No user-facing text is written directly in the React codebase. To update text, placeholders, labels, or paths, edit the respective file in the `src/data/` directory:

1. **Header menus**: Edit [navbar.json](file:///c:/Users/HP/Desktop/lms/src/data/navbar.json).
2. **Hero title & cards on Landing**: Edit [landing.json](file:///c:/Users/HP/Desktop/lms/src/data/landing.json).
3. **Login Card labels & benefit bullets**: Edit [login.json](file:///c:/Users/HP/Desktop/lms/src/data/login.json).
4. **FAQ list items**: Edit [faq.json](file:///c:/Users/HP/Desktop/lms/src/data/faq.json) (simply add objects to the `"items"` array to add new accordions).
5. **Contact office details & field names**: Edit [contact.json](file:///c:/Users/HP/Desktop/lms/src/data/contact.json).

---

## 🖼️ How to Change Images

The hero graphic is mounted dynamically via [HeroImage.jsx](file:///c:/Users/HP/Desktop/lms/src/components/hero/HeroImage.jsx) and used in both the Home page and the Login split-screen.

To replace the image:
1. Name your new image file `hero.png`.
2. Paste it into the `src/assets/` directory (overwriting the existing `src/assets/hero.png`).
3. The Vite compiler will automatically hot-reload and show the new image on both pages.

---

## ⚙️ How to Change Code

1. **Forms**: Inputs on the Login page use the `variant="nested"` styling in [LoginForm.jsx](file:///c:/Users/HP/Desktop/lms/src/components/auth/LoginForm.jsx), whereas standard form inputs (like in Contact Us) use the `variant="outline"` styling. You can configure this prop in [Input.jsx](file:///c:/Users/HP/Desktop/lms/src/components/common/Input.jsx).
2. **Page Transitions**: Built using Framer Motion. You can tweak slide-up or opacity coefficients directly on `<motion.div>` tags inside the pages located at `src/pages/`.
3. **Routing**: If you need to add a page (e.g., `/courses`), define it in `src/pages/`, import it, and register the path inside [AppRoutes.jsx](file:///c:/Users/HP/Desktop/lms/src/routes/AppRoutes.jsx).

---

## 🚀 Execution & Deployment Commands

### Running Locally
To start the hot-reloading development server:
```bash
npm run dev
```

### Production Build
To test the production build locally:
```bash
npm run build
```

### Vercel Deployment
To redeploy the production build to your live Vercel environment:
```bash
npx vercel --prod --yes
```

### Git / GitHub Push
To push local changes to GitHub:
```bash
git add .
git commit -m "commit message details"
git push origin main
```
