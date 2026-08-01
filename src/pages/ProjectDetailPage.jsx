import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Wrench, Shield, CheckCircle2, ArrowRight, Code2, Cpu, UserRound, Lightbulb, Activity } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectIndex = projectsData.findIndex(p => p.id === id);
  const project = projectsData[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <Link to="/projects" className="btn-clean-primary">
          Back to All Projects
        </Link>
      </div>
    );
  }

  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className={`pt-32 pb-24 px-4 mx-auto ${project.flagship ? 'max-w-6xl' : 'max-w-4xl'}`}>
      
      {/* Top Back Nav */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Projects
        </Link>
      </div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={project.flagship ? 'mb-12 md:mb-16' : 'mb-10'}
      >
        {project.eyebrow && (
          <p className="text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.24em] text-indigo-300 mb-5">
            {project.eyebrow}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="pill-tag pill-tag-indigo">{project.category}</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            {project.period}
          </span>
        </div>

        <h1 className={`${project.flagship ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-3xl md:text-5xl'} font-extrabold text-white tracking-tight mb-3 leading-[0.95]`}>
          {project.title}
        </h1>
        <p className={`${project.flagship ? 'text-xl md:text-2xl mt-5' : 'text-lg md:text-xl'} text-cyan-300 font-medium`}>
          {project.subtitle}
        </p>
        {project.intro && (
          <p className={`${project.flagship ? 'text-base md:text-lg max-w-4xl mt-7' : 'text-sm md:text-base max-w-3xl mt-5'} text-slate-300 leading-relaxed`}>
            {project.intro}
          </p>
        )}
        {(project.repository || project.branchUrl) && (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer" className="btn-clean-secondary">
                <Code2 className="w-4 h-4" />
                View GitHub Repository
              </a>
            )}
            {project.branchUrl && (
              <a href={project.branchUrl} target="_blank" rel="noreferrer" className="btn-clean-secondary border-indigo-400/30 text-indigo-200">
                <Code2 className="w-4 h-4" />
                {project.branchLabel || 'View Project Branch'}
              </a>
            )}
          </div>
        )}
      </motion.div>

      {/* Preview Image Banner */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${project.flagship ? 'mb-8 md:mb-12 rounded-[28px] shadow-[0_30px_100px_rgba(15,23,42,0.55)]' : 'mb-10 rounded-2xl'} ${project.heroFit === 'cdpr-crop' ? 'max-w-3xl mx-auto' : ''} overflow-hidden border border-white/10 bg-[#10141e]`}
        >
          {project.heroFit === 'stage' ? (
            <div className="relative h-[520px] md:h-[720px] overflow-hidden bg-[#0b0e14]">
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35"
              />
              <div className="absolute inset-0 bg-slate-950/35" aria-hidden="true" />
              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 w-full h-full object-contain object-center"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className={`w-full ${project.heroFit === 'cdpr-crop' ? 'aspect-[4/5] object-cover object-[50%_57%]' : project.heroFit === 'contain' ? 'h-[520px] md:h-[720px] object-contain bg-[#0b0e14]' : project.flagship ? 'h-[520px] md:h-[720px] object-cover' : 'max-h-[420px] object-cover object-center'}`}
            />
          )}
          {project.imageCaption && (
            <p className="px-4 py-3 text-xs text-slate-400 border-t border-white/10">
              {project.imageCaption}
            </p>
          )}
        </motion.div>
      )}

      {project.scopeStatement && (
        <section className="relative overflow-hidden rounded-[28px] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 via-[#111827] to-cyan-500/10 p-7 md:p-12 mb-6">
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true" />
          <p className="relative text-xs font-mono uppercase tracking-[0.2em] text-indigo-300 mb-5">Project scale</p>
          <p className="relative text-2xl md:text-4xl font-bold text-white leading-tight max-w-5xl">
            {project.scopeStatement}
          </p>
        </section>
      )}

      {project.scaleMetrics && (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
          {project.scaleMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-7">
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">{metric.value}</p>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-slate-400">{metric.label}</p>
            </div>
          ))}
        </section>
      )}

      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="clean-card p-5">
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-[11px] leading-snug text-slate-400 uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tools & Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="clean-card p-6 md:p-8 mb-10"
      >
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Wrench className="w-4 h-4 text-indigo-400" />
          Tools & Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {project.contributions && (
        <section className="clean-card p-6 md:p-10 mb-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <UserRound className="w-5 h-5 text-cyan-400" />
            My Role & Contributions
          </h2>
          <div className="space-y-4">
            {project.contributions.map((item) => (
              <div key={item} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.architecture && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-5">
            <Cpu className="w-5 h-5 text-indigo-400" />
            System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.architecture.map((item, index) => (
              <article key={item.title} className="clean-card p-6">
                <span className="text-xs font-mono text-indigo-300">0{index + 1}</span>
                <h3 className="font-bold text-white mt-3 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.features && (
        <section className="clean-card p-6 md:p-10 mb-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-emerald-400" />
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {project.features.map((feature) => (
              <div key={feature} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.taskPhases && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5">{project.taskSectionTitle || 'Competition Tasks & Autonomy'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.taskPhases.map((task, index) => (
              <article key={task.title} className="clean-card p-6">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-mono text-xs flex items-center justify-center shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{task.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{task.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.gallery && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5">Design & Validation Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <figure key={image.src} className={`clean-card overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}>
                <div className={`bg-white/95 ${index === 0 ? 'h-[360px] md:h-[520px]' : 'h-72'}`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-slate-400 border-t border-white/10">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.outcome && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="clean-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-white mb-3">Prototype Outcome</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.outcome}</p>
          </div>
          <div className="clean-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-amber-300" />
              Next Iteration
            </h2>
            <ul className="space-y-2.5">
              {project.future.map((item) => <li key={item} className="text-xs text-slate-400 leading-relaxed">— {item}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* Detailed Specifications & Writeup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="clean-card p-6 md:p-10 mb-12 space-y-6"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-4 border-b border-white/10">
          <Shield className="w-5 h-5 text-indigo-400" />
          Engineering Overview & Technical Specs
        </h3>

        <div className="space-y-4">
          {project.description.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Next / Previous Project Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
        <Link
          to={`/projects/${prevProject.id}`}
          className="clean-card p-5 text-decoration-none group hover:border-white/20 transition-all flex items-center gap-3"
        >
          <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono block">Previous Project</span>
            <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
              {prevProject.title}
            </span>
          </div>
        </Link>

        <Link
          to={`/projects/${nextProject.id}`}
          className="clean-card p-5 text-decoration-none group hover:border-white/20 transition-all flex items-center justify-between text-right"
        >
          <div>
            <span className="text-[10px] text-slate-400 font-mono block">Next Project</span>
            <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
              {nextProject.title}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
        </Link>
      </div>

    </div>
  );
}
