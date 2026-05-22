# Technical Design Documentation: EMEA Global Services Website

**Project Name:** EMEA Global Services (EMEA GS) Web Transformation  
**Version:** 1.0  
**Status:** Production Ready  
**Date:** May 9, 2026

---

## 1. Executive Summary
This document outlines the technical architecture, design system, and implementation strategy for the EMEA Global Services website. The platform is designed as a premium, high-performance industrial engineering portal, leveraging modern web technologies to provide a fluid, "Orbai-style" user experience.

The primary objective is to showcase EMEA GS's expertise in mechanical engineering, manufacturing automation, and industrial digital transformation across global markets (India, USA, Europe, Middle East, and Australia).

---

## 2. Technical Stack
The application is built on a modern, scalable stack optimized for performance, SEO, and static deployment.

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 15+ (App Router) | High performance, excellent SEO support, and robust static export capabilities. |
| **Language** | JavaScript (ES6+) | Industry standard for dynamic web applications. |
| **Styling** | Vanilla CSS Modules | Zero-runtime CSS overhead with local scoping to prevent naming collisions. |
| **Animations** | CSS Keyframes & Web APIs | High-performance hardware-accelerated animations (ripple waves, marquees). |
| **Icons** | Lucide React | Modern, consistent, and lightweight vector icons. |
| **Deployment** | GitHub Pages | Cost-effective, secure, and integrated with GitHub Actions CI/CD. |

---

## 3. Architecture & Infrastructure

### 3.1 Directory Structure
The project follows the standard Next.js App Router structure, promoting a modular and maintainable codebase.

```
/emea
├── /public              # Static assets (logos, images, favicon)
├── /src
│   ├── /app            # Page routes and global configurations
│   │   ├── layout.js   # Root layout (Metadata, Viewport, Providers)
│   │   ├── page.js     # Homepage implementation
│   │   ├── globals.css # Global design tokens and base styles
│   │   └── page.module.css # Component-specific styles
│   ├── /components     # Reusable UI components
│   │   ├── Navbar.js   # Global navigation with mobile support
│   │   ├── Footer.js   # Detailed footer with site map
│   │   └── ConsentPopup.js # Regulatory compliance module
│   └── /data           # Centralized data store (Services, Projects)
└── next.config.mjs     # Deployment and framework configuration
```

### 3.2 Component Strategy
The application utilizes a **Component-Based Architecture**:
- **Dumb Components**: Focused strictly on UI rendering (e.g., specific icons, badges).
- **Smart Components**: Handle logic, state, and interaction (e.g., `ScrollReveal`, `Navbar`).
- **Data-Driven Rendering**: The services and projects are mapped from a central `src/data/services.js` file, allowing for instantaneous site-wide updates without touching HTML structures.

---

## 4. Design System (Industrial Modernism)

### 4.1 Color Palette
The design system is built on a dark, premium aesthetic with vibrant industrial accents.

- **Background (Body)**: `#000000` (Deep Black)
- **Background (Card)**: `rgba(255, 255, 255, 0.03)` (Semi-transparent white)
- **Primary Text**: `#FFFFFF` (Pure White)
- **Secondary Text**: `#A1A1AA` (Soft Gray)
- **Brand Accents**: 
  - Engineering: `#2E6FBF` (Industrial Blue)
  - Manufacturing: `#0D9488` (Teal)
  - Digital/AI: `#7C3AED` (Purple)

### 4.2 UI Design Patterns
- **Glassmorphism**: Cards utilize subtle backdrop blurs and thin translucent borders (`1px solid rgba(255,255,255,0.08)`) to create a layered, "glass" effect.
- **3D Badges**: All section icons are housed in dark, rounded squares with subtle inner shadows to give them a physical, tactile feel.
- **Micro-interactions**: Ripple wave animations in the hero section and smooth "reveal-on-scroll" transitions for all content sections.

---

## 5. Key Technical Features

### 5.1 Responsive Layout Hardening
The site implements a **Strict Grid System** with defensive CSS:
- **Grid Blowout Prevention**: All grid items use `min-width: 0` to prevent horizontal overflow from dynamic content.
- **Viewport Locking**: Explicit viewport meta-tags enforce a 1:1 scale on mobile devices, preventing desktop zoom-out fallbacks.

### 5.2 Infinite Marquee Systems
Utilizes high-performance CSS transforms (`translateX`) to create seamless, infinite scrolls for client logos and "Why Choose Us" badges.
- **GPU Acceleration**: Uses `will-change: transform` to ensure 60FPS animations on mobile hardware.
- **Auto-reversing Tracks**: Configured for continuous loop without visual jumps.

### 5.3 Deployment Strategy (Static Export)
The site is configured for `output: export`, allowing it to run as a set of static HTML/CSS/JS files.
- **Base Path Integration**: All asset paths are prefixed with `/emeags/` to support subfolder hosting on GitHub Pages.
- **Image Optimization**: Custom configuration in `next.config.mjs` allows for the use of Next.js Image components while maintaining static portability.

---

## 6. SEO & Performance

### 6.1 Metadata Strategy
- **Semantic HTML**: Proper use of `<section>`, `<article>`, and `<h1>-<h6>` hierarchies.
- **Dynamic Meta Tags**: Automated generation of OpenGraph and Twitter cards for social sharing.
- **Structured Data (JSON-LD)**: Organization and Service schemas embedded for enhanced Google Search indexing.

### 6.2 Performance Optimization
- **Zero-Layout Shift**: All images use specific aspect ratios or pre-allocated containers.
- **Font Optimization**: Uses `next/font` for self-hosted, zero-layout-shift typography (Inter).
- **Static Page Generation**: Pages are pre-rendered at build time, resulting in near-instant load times for end users.

---

## 8. Engineering Best Practices

### 8.1 Mobile-First Responsiveness
CSS media queries follow a mobile-first philosophy, ensuring layouts remain stable on small viewports (390px+) before expanding for tablet and desktop. This prevents common "squishing" issues and ensures touch-targets remain accessible.

### 8.2 Accessibility (a11y)
The platform adheres to key WCAG guidelines:
- **Semantic landmarks**: Proper use of `<header>`, `<main>`, `<nav>`, and `<footer>`.
- **Contrast Ratios**: All text elements maintain high contrast against the dark background.
- **Descriptive Alt-Text**: Industrial imagery includes descriptive alt tags for screen readers.

### 8.3 Maintainability (DRY Principles)
Content is decoupled from the UI. Centralized data management in `src/data/services.js` ensures that updating a service description or project metric only happens in one place, reflecting across the entire site automatically.

### 8.4 Zero-Runtime CSS
By utilizing native CSS Modules instead of utility-heavy frameworks, the site achieves the smallest possible CSS payload, resulting in faster Time-to-Interactive (TTI) and zero runtime overhead for style calculations.

---

## 9. Technical Debt & Roadmap

### 9.1 Static Asset Pathing (Hardcoded BasePath)
Currently, the `/emeags/` base path is hardcoded for GitHub Pages subfolder hosting. 
- **Impact**: Moving to a custom root domain (e.g., `emeaglobalsolutions.com`) will require a global update to root-relative paths.
- **Recommendation**: Implement an environment variable-based pathing strategy in Phase 2.

### 9.2 Image Optimization (Local vs. CDN)
Due to GitHub Pages static export limitations, the Next.js `unoptimized: true` flag is active.
- **Impact**: Image file sizes are slightly larger than optimized WebP counterparts.
- **Recommendation**: Transition to a dedicated Image CDN (Cloudinary/Vercel) during the secure portal migration.

### 9.3 Form Backend Integration
The contact form currently lacks a production-ready server-side handler.
- **Status**: Ready for front-end validation; requires a serverless function (Vercel) or third-party SMTP service (Formspree/EmailJS) for live mail delivery.

### 9.4 Automated Testing
The project currently relies on manual verification and browser-subagent testing.
- **Gap**: Lack of Jest unit tests and Playwright/Cypress end-to-end (E2E) test suites.
- **Roadmap**: Integrate automated visual regression testing in Phase 2.

---
**Approved By:**  
Technical Lead, Antigravity AI  
*Date: May 9, 2026*
