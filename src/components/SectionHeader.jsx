import React from 'react';

export default function SectionHeader({ tag, title, description, action }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        {tag && (
          <span className="pill-tag pill-tag-indigo mb-3 font-mono text-[11px] uppercase tracking-wider">
            {tag}
          </span>
        )}
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-xl">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
