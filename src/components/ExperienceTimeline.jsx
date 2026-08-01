import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Trophy, CheckCircle2 } from 'lucide-react';
import { leadershipExperiences } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="pill-badge pill-badge-violet mb-3">
            <Trophy className="w-3.5 h-3.5 text-violet-400" />
            Leadership & Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Leadership & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg">
            Proven executive leadership in AIESEC in University of Moratuwa alongside industrial internship experience.
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="bento-container">
          
          {/* Main Top Leadership Award Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-12 framer-card p-8 md:p-10 bg-gradient-to-r from-violet-950/50 via-slate-900/90 to-slate-900/90 border-violet-500/30"
          >
            <div className="mb-7 pb-7 border-b border-white/10">
              <div className="mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold font-mono mb-2">
                  🏆 National Award Winner
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  {leadershipExperiences[0].role}
                </h3>
                <p className="text-cyan-300 font-semibold text-sm">{leadershipExperiences[0].organization} · {leadershipExperiences[0].period}</p>
              </div>
              <span className="inline-block px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold">
                {leadershipExperiences[0].badge}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {leadershipExperiences[0].description.map((desc, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 text-slate-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Leadership & Internship Cards */}
          {leadershipExperiences.slice(1).map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="col-4 framer-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[11px] font-mono">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="text-[10px] text-cyan-400 font-mono">{exp.location}</span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-1">{exp.role}</h4>
                <p className="text-violet-300 text-xs font-semibold mb-3">{exp.organization}</p>

                <div className="space-y-2 mb-4">
                  {exp.description.map((point, pIdx) => (
                    <p key={pIdx} className="text-slate-300 text-xs leading-relaxed">
                      • {point}
                    </p>
                  ))}
                </div>
              </div>

              {exp.highlight && (
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-cyan-300">
                    💡 {exp.highlight}
                  </span>
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
