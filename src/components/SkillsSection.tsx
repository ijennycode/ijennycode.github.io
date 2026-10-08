import React, { useState } from 'react';
import { SkillCategory, SkillItem } from '../types';
import { 
  Cloud, 
  Code, 
  GitBranch, 
  CheckCircle, 
  Layers, 
  Award, 
  Server,
  Terminal,
  Cpu
} from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  const displayedCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
              <span>SECTION 02</span>
              <span>•</span>
              <span>SKILLS &amp; STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized Technical Stack &amp; Competencies
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Organized directly into Cloud &amp; Infrastructure, Development, and Methodologies—backed by completed IBM &amp; Google Cloud certifications with practical implementation focus.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === c.id
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{c.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                        {category.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{category.summary}</p>
                  </div>
                </div>

                <div className="self-start sm:self-auto text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-mono">
                  {category.skills.length} Competencies
                </div>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-xl p-5 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Title & Level */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold shrink-0 ${
                          skill.level === 'Proficient'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Practical Description */}
                      <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                        {skill.description}
                      </p>
                    </div>

                    {/* Associated Credential & Tool Tags */}
                    <div className="pt-3 border-t border-slate-800/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 font-mono">
                        <Award className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{skill.associatedCert}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
