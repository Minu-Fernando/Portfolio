import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Embedded & PCB', 'Robotics & Hardware', 'ML & Simulation', 'Signal Processing'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
      
      {/* Top Header */}
      <div className="mb-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Engineering Projects
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg">
            Hardware schematics, Altium PCB layouts, SolidWorks CAD modeling, embedded microcontrollers, and signal processing projects.
          </p>
        </div>

      </div>

      {/* Project category filter */}
      <div className="mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full items-center gap-1.5 rounded-2xl border border-white/10 bg-[#10141e]/80 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                activeCategory === cat
                  ? 'border-cyan-400/25 bg-gradient-to-r from-indigo-500/20 to-cyan-500/15 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_18px_rgba(34,211,238,0.06)]'
                  : 'border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-slate-100'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]'
                  : 'bg-slate-600 group-hover:bg-slate-400'
              }`} />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Link
              to={`/projects/${project.id}`}
              className="clean-card group p-6 flex flex-col justify-between h-full text-decoration-none block"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="pill-tag pill-tag-indigo">{project.category}</span>
                  <span className="text-xs text-slate-400 font-mono">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-cyan-300 text-xs font-medium mb-3">{project.subtitle}</p>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white group-hover:underline">
                  View Full Specs &rarr;
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
