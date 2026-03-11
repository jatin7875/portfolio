# 🚀 Portfolio — React + Vite

A production-ready personal portfolio with dark/light mode, PWA support, EmailJS contact form, Framer Motion animations, and mobile swipe gestures.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── icon-192.png        # PWA icon (add your own)
│   └── icon-512.png        # PWA icon (add your own)
├── src/
│   ├── components/
│   │   ├── Loader.jsx          # Splash screen
│   │   ├── Navbar.jsx          # Nav + hamburger + theme toggle
│   │   ├── Hero.jsx            # Hero with typewriter
│   │   ├── About.jsx           # Bio + animated counters
│   │   ├── Skills.jsx          # Skill cards + tech logo grid
│   │   ├── Projects.jsx        # Grid (desktop) + carousel (mobile)
│   │   ├── Experience.jsx      # Timeline
│   │   ├── Certificates.jsx    # Badge-style cert cards
│   │   ├── Contact.jsx         # EmailJS form + copy email
│   │   ├── Footer.jsx
│   │   ├── Toast.jsx           # Toast notifications
│   │   └── TechLogoSVGs.jsx    # Brand SVG logos
│   ├── data/
│   │   └── index.js            # ← ALL YOUR CONTENT HERE
│   ├── hooks/
│   │   ├── useTheme.js         # Dark/light mode
│   │   ├── useTypewriter.js    # Typewriter effect
│   │   └── useToast.js         # Toast notifications
│   ├── styles/
│   │   └── globals.css         # CSS variables + global styles
│   ├── App.jsx                 # Main app
│   └── main.jsx                # Entry point
├── index.html                  # SEO meta tags + OG tags
└── vite.config.js              # Vite + PWA config
```

---

## ✏️ Customization

### 1. Update your content
Edit **`src/data/index.js`** — all your personal info, projects, skills, experience, and certificates are in one file.

### 2. Update SEO meta tags
Edit **`index.html`** — replace:
- `Your Name` with your real name
- `yourportfolio.com` with your actual domain
- `@yourhandle` with your Twitter/X handle
- Upload a real `og-image.png` (1200×630px) to `/public/`

### 3. Connect EmailJS (free)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Edit **`src/components/Contact.jsx`**:
```js
const EMAILJS_SERVICE  = 'service_xxxxxxx'   // from EmailJS dashboard
const EMAILJS_TEMPLATE = 'template_xxxxxxx'  // your template ID
const EMAILJS_KEY      = 'your_public_key'   // Account > API Keys
```

### 4. Add PWA icons
Add your own icons to `/public/`:
- `icon-192.png` (192×192px)
- `icon-512.png` (512×512px)

### 5. Add resume
Place your resume PDF at `/public/resume.pdf`

---

## 🎨 Features

| Feature | Details |
|---------|---------|
| 🌙 Dark/Light Mode | Persisted in localStorage, respects system preference |
| ✍️ Typewriter | Cycles through roles with realistic typing speed |
| 📧 EmailJS | Real email delivery with fallback to mailto: |
| 📋 Copy Email | One-click clipboard copy with toast confirmation |
| 🍞 Toast Notifications | Success/error/info toasts for form + interactions |
| 📱 PWA | Installable on mobile, works offline |
| 🔍 SEO | Open Graph, Twitter Card, JSON-LD structured data |
| 👆 Swipe Navigation | Touch swipe between sections on mobile |
| 🎠 Mobile Carousel | Projects scroll horizontally on mobile |
| 🏆 Certificates | Badge-style cards with platform colors |
| 🖼️ Tech Logos | Real SVG brand logos (React, Node, Python...) |
| ⬆️ Back to Top | Animated button appears after scroll |
| 📊 Scroll Progress | Orange progress bar at top of page |
| ✨ Scroll Reveal | Sections animate in as you scroll |

---

## 🚀 Deploy

**Vercel (recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```

**GitHub Pages:**
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```
