import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, Sparkles, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsBento() {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="pill-badge pill-badge-cyan mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Technical Stack & Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineering <span className="gradient-text">Toolkit</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg">
              Specialized expertise in hardware schematics, CAD modeling, embedded programming, and ML algorithms.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center" aria-hidden="true">
              <Search className="block w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search skills (e.g. Altium, Python, ESP32)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 rounded-full bg-slate-900/80 border border-white/10 text-white text-xs leading-none placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
            />
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="bento-container">
          {skillCategories.map((category, index) => {
            const filteredSkills = category.skills.filter(s =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="col-6 framer-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getIcon(category.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {filteredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
