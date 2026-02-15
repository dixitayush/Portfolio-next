# 🚀 Ayush Dixit | Senior Java Full Stack Developer — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)

🌐 **Live**: [ayushdixit.work](https://ayushdixit.work)

A modern, high-performance portfolio website built with **Next.js 16**, featuring dark/light theming, live GitHub integration, and comprehensive SEO optimization. Showcasing my professional journey as a Senior Software Engineer specializing in Java, Spring Boot, Microservices, and modern full-stack web technologies.

---

## ✨ Features

- **🎨 Modern UI/UX** — Glassmorphism, gradient meshes, and premium typography with Tailwind CSS v4
- **🌓 Dark / Light Mode** — Fully themed with `next-themes`, emerald/teal accents (light) and emerald/cyan/blue palette (dark)
- **⚡ High Performance** — Next.js App Router with server-side rendering and ISR (Incremental Static Regeneration)
- **🎬 Smooth Animations** — Interactive hover effects and page transitions via Framer Motion
- **📱 Fully Responsive** — Mobile, tablet, and desktop optimized
- **🐙 Live GitHub Repos** — Server component fetches all public repos from the GitHub API at build time (1-hour ISR revalidation)
- **🔍 SEO Optimized** — JSON-LD structured data, 40+ keywords, robots.txt, sitemap.xml, Open Graph & Twitter Cards
- **🧩 Modular Architecture** — Component-based design with reusable, maintainable code

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) + [Devicon CDN](https://devicon.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Deployment** | [Netlify](https://www.netlify.com/) |

## 📂 Project Structure

```
src/app/
├── components/
│   ├── Header.tsx        # Navigation bar with theme toggle
│   ├── Hero.tsx          # Landing section with profile & CTA
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Featured project showcase cards
│   ├── GitHubRepos.tsx   # Live GitHub repos grid (server component)
│   ├── Skills.tsx        # Technical skills with devicon badges
│   ├── Education.tsx     # Education & certifications
│   ├── Footer.tsx        # Contact info & social links
│   ├── JsonLd.tsx        # Structured data for SEO
│   └── ThemeProvider.tsx # Dark/light theme wrapper
├── data/
│   └── portfolio.ts      # Centralized portfolio data
├── robots.ts             # Generates /robots.txt
├── sitemap.ts            # Generates /sitemap.xml
├── globals.css           # Design system & animations
├── layout.tsx            # Root layout with SEO metadata
└── page.tsx              # Main page composition
public/
├── favicon.ico           # "A" branded favicon
├── icon.png              # 512px app icon
├── apple-icon.png        # 180px Apple touch icon
└── profile.png           # Profile photo
```

## 🔍 SEO

The site is optimized for Google Search with:

- **40+ targeted keywords** — "Ayush Dixit", "Java Full Stack Developer", "Senior Software Engineer", "Spring Boot Developer", etc.
- **JSON-LD structured data** — Person, WebSite, and ProfilePage schemas for rich Google results
- **robots.txt** — Auto-generated, allows all crawlers
- **sitemap.xml** — Auto-generated with primary URL
- **Canonical URL** — `https://ayushdixit.work`
- **Open Graph & Twitter Cards** — Rich previews when shared on social media
- **Semantic HTML** — Proper heading hierarchy, `lang` attribute, accessible markup

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/dixitayush/Portfolio-next.git
cd Portfolio-next

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 👨‍💻 About Me

**Ayush Dixit** — *Senior Software Engineer based in Noida, India*

4.5+ years of experience building scalable enterprise applications with Java, Spring Boot, and Microservices. Passionate about clean code, system optimization, and DevOps culture.

| | |
|---|---|
| **Experience** | HCL Software · Accenture · Amdocs |
| **Core Skills** | Java, Spring Boot, Microservices, React, Next.js, Docker, Kubernetes, AWS |
| **Email** | [dixitayush284@gmail.com](mailto:dixitayush284@gmail.com) |
| **LinkedIn** | [ayush-dixit-2316b4153](https://linkedin.com/in/ayush-dixit-2316b4153) |
| **GitHub** | [dixitayush](https://github.com/dixitayush) |
| **Portfolio** | [ayushdixit.work](https://ayushdixit.work) |

---

Made with ❤️ by Ayush Dixit
