import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAcademic from './components/AboutAcademic';
import ProjectBento from './components/ProjectBento';
import SkillsBento from './components/SkillsBento';
import ExperienceTimeline from './components/ExperienceTimeline';
import CertificationsContact from './components/CertificationsContact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <AboutAcademic />
      <ProjectBento />
      <SkillsBento />
      <ExperienceTimeline />
      <CertificationsContact />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b0e14] text-slate-100 selection:bg-indigo-500 selection:text-white relative">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
