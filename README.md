# My Portfolio — Full Modern Stack

React + Vite + Tailwind + Framer Motion + React Router + React Hook Form + Axios + Lucide

---

## Setup — 3 Commands

```bash
npm install     # sab libraries install hongi
npm run dev     # localhost:5173 pe chale ga
npm run build   # deploy ke liye dist/ folder
```

---

## Libraries aur Unka Kaam

| Library | Kaam | File Mein |
|---------|------|-----------|
| **React** | UI banane ke liye | sab files |
| **Vite** | Fast dev server | vite.config.js |
| **Tailwind CSS** | Styling | sab files |
| **React Router DOM** | Pages routing (/, /projects, /contact) | App.jsx, Navbar |
| **Framer Motion** | Animations — fade, slide, hover | Hero, Skills, About, Projects, Contact |
| **Lucide React** | Beautiful icons | Navbar, Hero, Skills, Contact |
| **React Hook Form** | Contact form + validation | ContactPage.jsx |
| **Axios** | API calls (form submit) | ContactPage.jsx |
| **React Hot Toast** | Notifications (success/error popups) | App.jsx, ContactPage.jsx |

---

## Pages Structure

```
/           → Home (Hero + Skills + About)
/projects   → All Projects
/contact    → Contact Form + Links
```

---

## Apni Info Kahan Update Karni Hai

### Naam:
`src/components/Navbar.jsx` → line 12: `YourName.dev`

### Hero:
`src/components/Hero.jsx` → heading, tagline

### Skills level:
`src/components/Skills.jsx` → `level: 90` wali values change karo

### Projects:
`src/pages/ProjectsPage.jsx` → `projects` array mein apne real projects daalo

### Contact:
`src/pages/ContactPage.jsx` →
- `your@email.com` → apni email
- LinkedIn link update karo
- GitHub link update karo

### Contact Form (Real Email Bhejne Ke Liye):
1. https://formspree.io pe free account banao
2. Form banao → endpoint milega: `https://formspree.io/f/XXXX`
3. `ContactPage.jsx` mein ye line uncomment karo:
   ```js
   await axios.post("https://formspree.io/f/YOUR_ID", data)
   ```

---

## Deploy — Netlify (Free)

```bash
npm run build
```
Phir `dist/` folder Netlify pe drag karo → https://netlify.com

---

## File Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          ← BrowserRouter yahan hai
    ├── App.jsx           ← Routes + Toaster
    ├── index.css         ← Tailwind + global styles
    ├── components/
    │   ├── Navbar.jsx    ← React Router Link, Lucide icons
    │   ├── Hero.jsx      ← Framer Motion animations
    │   ├── Skills.jsx    ← Animated skill bars (Framer)
    │   └── About.jsx     ← Slide-in animation
    └── pages/
        ├── Home.jsx         ← Hero + Skills + About
        ├── ProjectsPage.jsx ← All projects grid
        └── ContactPage.jsx  ← Form + links
```
