import React from 'react';
import { CertificationItem, ActiveLearningItem } from '../types';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  BookOpen,
  Layers,
  ChevronRight
} from 'lucide-react';

interface EducationSectionProps {
  completedCertifications: CertificationItem[];
  activeLearning: ActiveLearningItem;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  completedCertifications,
  activeLearning,
}) => {

  return (
    <section id="certifications" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
              <span>SECTION 04</span>
              <span>•</span>
              <span>EDUCATION &amp; CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Credentials &amp; Continuous Learning
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Solid theoretical and practical foundations across Google Cloud and IBM DevOps, paired with active ongoing progression in the IBM DevOps and Software Engineering Specialization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>5 Verified Completed • 1 Active Specialization Track</span>
            </span>
          </div>
        </div>

        {/* Active Learning Path Spotlight Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-sky-500/30 rounded-2xl p-6 sm:p-8 mb-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono font-semibold">
                <Clock className="w-3.5 h-3.5 animate-pulse text-sky-400" />
                <span>CURRENTLY LEARNING • ACTIVE SPECIALIZATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeLearning.programTitle}
              </h3>
              <p className="text-xs sm:text-sm text-sky-300/80 font-mono">
                Issued by {activeLearning.issuer} • Target Outcome: {activeLearning.targetRole}
              </p>
            </div>

            <div className="self-start text-xs text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1.5 rounded-lg font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>In Active Progress</span>
            </div>
          </div>

          {/* Progress & Current Focus */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Curriculum Progress</span>
                <span className="text-sky-400 font-bold">{activeLearning.progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${activeLearning.progressPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {activeLearning.completedModulesCount} of {activeLearning.totalModulesCount} core modules completed
              </div>
            </div>

            <div className="md:col-span-8 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider font-semibold block mb-1">
                Active Focus Area
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {activeLearning.currentFocus}
              </p>
            </div>
          </div>

          {/* Detailed Module Checklist */}
          <div className="pt-4 border-t border-slate-800/60">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
              Specialization Modules Roadmap:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {activeLearning.modules.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 ${
                    m.status === 'Completed'
                      ? 'bg-slate-900/90 border-emerald-500/20 text-slate-300'
                      : m.status === 'In Progress'
                      ? 'bg-sky-950/40 border-sky-500/40 text-sky-200'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {m.status === 'Completed' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : m.status === 'In Progress' ? (
                      <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 animate-spin" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-slate-600 shrink-0" />
                    )}
                    <span className="truncate">{m.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 px-1.5 py-0.5 rounded ${
                    m.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : m.status === 'In Progress'
                      ? 'bg-sky-500/20 text-sky-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Completed Certifications Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Completed Professional Courses &amp; Certifications</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Verified Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCertifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Top Issuer Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${
                      cert.issuer === 'Google Cloud'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                    }`}>
                      {cert.issuer}
                    </span>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-0.5 rounded border border-emerald-500/30 transition-colors"
                        title="View verified credential"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified Badge</span>
                        <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-2">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center justify-between gap-1.5"
                      >
                        <span>{cert.title}</span>
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                    {cert.summary}
                  </p>
                </div>

                {/* Skills Covered */}
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
