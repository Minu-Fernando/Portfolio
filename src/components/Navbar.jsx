import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;

    const sectionIds = ['home', 'about', 'skills', 'contact'];
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.34;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const current = sections.reduce((active, section) => (
        section.offsetTop <= marker ? section : active
      ), sections[0]);

      if (current) setActiveSection(current.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Academic', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    // { name: 'Leadership', href: '/#leadership' },
    // { name: 'Internship', href: '/#internship' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between p-2.5 px-6 rounded-full bg-[#0e121b]/90 backdrop-blur-xl border border-white/10 shadow-xl">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-white font-bold text-xs tracking-wider group-hover:border-indigo-400 transition-colors">
              MF
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm tracking-tight group-hover:text-indigo-300 transition-colors">
                {personalDetails.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:block">Electronic & Telecom • UOM</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.startsWith('/#') ? link.href.slice(2) : null;
              const isActive = link.href === '/'
                ? location.pathname === '/' && activeSection === 'home'
                : sectionId
                  ? location.pathname === '/' && activeSection === sectionId
                  : location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13px] font-medium transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-5 rounded-2xl bg-[#0e121b]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="text-slate-200 text-sm font-medium py-2 border-b border-white/5 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
