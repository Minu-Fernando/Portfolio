# Portfolio Website

A modern React + Vite portfolio site built to showcase academic background, technical skills, project work, experience, certifications, and contact information.

## What this project includes

- A polished landing experience with a hero section, about/academic overview, and animated UI
- A projects showcase with dedicated project pages and detail views
- A skills section, experience timeline, and certifications/contact section
- Client-side routing for the home page, projects listing, and individual project pages

## Tech stack

- React 19
- Vite 8
- React Router DOM
- Framer Motion
- Lucide React
- Canvas Confetti
- Tailwind CSS
- Oxlint for linting

## Project structure

- src/App.jsx: app router and page layout
- src/components/: reusable UI sections such as Navbar, Hero, ProjectBento, SkillsBento, ExperienceTimeline, and Footer
- src/pages/: ProjectsPage and ProjectDetailPage
- src/data/portfolioData.js: project and portfolio content

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available scripts

- npm run dev: starts the Vite development server
- npm run build: builds the app for production
- npm run preview: previews the production build
- npm run lint: runs Oxlint
