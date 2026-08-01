import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{personalDetails.name}</h3>
          <p className="text-xs text-slate-400">
            Electronic & Telecommunication Engineering • University of Moratuwa
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-500 flex items-center gap-1">
          © {new Date().getFullYear()} Minaya Fernando. Designed with Framer Polo aesthetic.
        </p>

      </div>
    </footer>
  );
}
