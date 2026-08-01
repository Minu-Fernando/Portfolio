import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { academicHistory } from '../data/portfolioData';

export default function AboutAcademic() {
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Standardized Section Header */}
        <SectionHeader
          tag="Education & Excellence"
          title="Academic Background"
          description="Consistent record of academic excellence across university engineering honours and secondary education."
        />

        {/* 100% UNIFIED ACADEMIC CARD TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {academicHistory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="clean-card p-6 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header Period & Location */}
                <div className="flex items-center justify-between gap-2 mb-4 text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-lg font-bold text-white mb-1">{item.institution}</h3>
                <p className="text-xs font-medium text-indigo-300 mb-4">{item.degree}</p>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {item.details}
                </p>
              </div>

              {/* Badge Highlight */}
              <div className="pt-4 border-t border-white/10">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
