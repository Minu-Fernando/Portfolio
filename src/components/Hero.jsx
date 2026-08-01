import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Cpu, Sparkles } from 'lucide-react';
import { Github, Linkedin, Instagram, Facebook } from './BrandIcons';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  const roles = [
    "Electronic & Telecommunication Undergrad",
    "Embedded Systems & PCB Specialist",
    "Robotics & Control Developer",
    "Machine Learning Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="pt-24 lg:pt-32 pb-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 clean-card p-8 md:p-12 flex flex-col"
          >
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="pill-tag pill-tag-indigo">
                  <Award className="w-3.5 h-3.5" />
                  GPA: {personalDetails.gpa} (Honours)
                </span>
                <span className="pill-tag">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {personalDetails.location}
                </span>
              </div>

              {/* Title & Name */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
                {personalDetails.name}
              </h1>

              {/* Dynamic Typewriter Line */}
              <div className="h-8 flex items-center mb-6">
                <span className="text-base md:text-lg font-medium text-indigo-300 font-mono">
                  {displayText}
                  <span className="animate-pulse text-indigo-400">|</span>
                </span>
              </div>

              {/* Bio Summary */}
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mb-8">
                Undergraduate engineer at the <strong className="text-white">University of Moratuwa</strong> specializing in hardware-software co-design, high-frequency Altium PCB layouts, 3D mechanical modeling, and autonomous robotics.
              </p>

              {/* Specialized interests */}
              <div className="mb-8">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.16em] mb-3">
                  Specialized Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {personalDetails.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-indigo-500/[0.07] border border-indigo-400/15 text-xs text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
              <Link to="/projects" className="btn-clean-primary">
                <span>Discover Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#contact" className="btn-clean-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Full-bleed portrait panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 hero-portrait-panel"
          >
            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              className="hero-portrait-image"
            />
            <div className="hero-portrait-glow" aria-hidden="true" />
            <div className="hero-portrait-shade" aria-hidden="true" />

            {/* <div className="absolute top-5 right-5 z-10 px-3 py-1.5 rounded-full bg-[#0b1120]/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              UOM ENTC
            </div> */}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
