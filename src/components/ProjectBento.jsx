import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projectsData } from '../data/portfolioData';

export default function ProjectBento() {
  const featured = projectsData.filter(p => p.featured);
  const remainingCount = projectsData.length - featured.length;

  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Standardized Section Header */}
        <SectionHeader
          tag="Projects & Engineering Archive"
          title="Discover Projects"
          description="Explore custom Altium PCB layouts, 3D SolidWorks CAD modeling, embedded microcontrollers, and autonomous robotics."
          action={
            <Link to="/projects" className="btn-clean-secondary text-xs">
              <span>View All {projectsData.length} Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Hero Card: Smart-Sense Iron */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8"
          >
            <Link
              to={`/projects/${projectsData[0].id}`}
              className="clean-card group p-8 flex flex-col justify-between h-full text-decoration-none block min-h-[320px]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="pill-tag pill-tag-indigo">{projectsData[0].category}</span>
                  <span className="text-xs text-slate-400 font-mono">{projectsData[0].period}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{projectsData[0].title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-all" />
                </h3>
                <p className="text-cyan-300 font-medium text-xs mb-3">{projectsData[0].subtitle}</p>
                <p className="text-slate-300 text-xs leading-relaxed max-w-xl mb-6">
                  {projectsData[0].summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {projectsData[0].tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white group-hover:underline">
                  Read Full Specs &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Micromouse N1K0 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-4"
          >
            <Link
              to={`/projects/${projectsData[1].id}`}
              className="clean-card group p-8 flex flex-col justify-between h-full text-decoration-none block"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="pill-tag pill-tag-cyan">{projectsData[1].category}</span>
                  <span className="text-[11px] text-slate-400 font-mono">{projectsData[1].period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{projectsData[1].title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-all" />
                </h3>
                <p className="text-indigo-300 text-xs font-medium mb-3">{projectsData[1].subtitle}</p>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {projectsData[1].summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs text-slate-300 font-medium">Altium PCB Specs</span>
                <span className="text-xs font-semibold text-white">&rarr;</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Cable Driven Parallel Robot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-7"
          >
            <Link
              to={`/projects/${projectsData[2].id}`}
              className="clean-card group p-8 flex flex-col justify-between h-full text-decoration-none block"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="pill-tag pill-tag-indigo">{projectsData[2].category}</span>
                  <span className="text-xs text-slate-400 font-mono">{projectsData[2].period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{projectsData[2].title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-all" />
                </h3>
                <p className="text-cyan-300 font-medium text-xs mb-3">{projectsData[2].subtitle}</p>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {projectsData[2].summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {projectsData[2].tools.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white">Read Specs</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 4: All Projects Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-5"
          >
            <Link
              to="/projects"
              className="clean-card group p-8 flex flex-col justify-between h-full text-decoration-none block bg-[#101420]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="pill-tag">Archive</span>
                  <span className="text-xs text-slate-400 font-mono">+ {remainingCount} More Projects</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  <span>View All Projects</span>
                  <Plus className="w-4 h-4 text-indigo-400 group-hover:rotate-90 transition-transform duration-300" />
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Explore projects including the <em>Analog Function Generator</em>, <em>Class D Amplifier</em>, <em>Dengue Detection System</em>, and competitive robotics.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-semibold text-white group-hover:underline">
                  Open Catalog Page &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
