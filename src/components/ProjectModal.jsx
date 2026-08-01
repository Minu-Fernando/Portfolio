import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Cpu, Layers, CheckCircle, Calendar, Wrench, Shield, Filter } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectModal({ selectedProject, isCatalogOpen, onClose }) {
  const [catalogFilter, setCatalogFilter] = useState('All');

  const categories = ['All', 'Embedded & PCB', 'Robotics & Hardware', 'ML & Simulation', 'Signal Processing'];

  const filteredCatalog = catalogFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === catalogFilter);

  if (!selectedProject && !isCatalogOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto framer-card p-6 md:p-10 bg-slate-950/95 border-violet-500/30 shadow-2xl rounded-3xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* SINGLE PROJECT DETAIL VIEW */}
          {selectedProject && !isCatalogOpen && (
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="pill-badge pill-badge-violet">{selectedProject.category}</span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedProject.period}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{selectedProject.title}</h2>
              <p className="text-cyan-300 font-medium text-base mb-6">{selectedProject.subtitle}</p>

              {/* Tools Tags */}
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-violet-400" />
                  Tools & Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs text-violet-300 font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Key Achievements & Design Specifications
                </h4>
                <ul className="space-y-3">
                  {selectedProject.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button onClick={onClose} className="btn-secondary">
                  Close Project Details
                </button>
              </div>
            </div>
          )}

          {/* FULL CATALOG DRAWER VIEW */}
          {isCatalogOpen && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-violet-400" />
                <h2 className="text-3xl font-extrabold text-white">Full Engineering Archive</h2>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                All 8 projects engineered across Altium PCB design, SolidWorks CAD, embedded microcontrollers, and signal processing.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatalogFilter(cat)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      catalogFilter === cat
                        ? 'bg-violet-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Grid in Drawer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {filteredCatalog.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(proj);
                    }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-mono">
                          {proj.category}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">{proj.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1 flex items-center justify-between">
                        <span>{proj.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </h4>
                      <p className="text-cyan-300 text-xs mb-2">{proj.subtitle}</p>
                      <p className="text-slate-300 text-xs line-clamp-2 mb-3">{proj.summary}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {proj.tools.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button onClick={onClose} className="btn-secondary">
                  Done Browsing
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
