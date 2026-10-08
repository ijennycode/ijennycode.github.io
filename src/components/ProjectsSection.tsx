import React, { useState } from 'react';
import { ProjectShowcase } from '../types';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Sparkles,
  GitCommit,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  Github
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectShowcase[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(projects[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/70 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span>SECTION 03</span>
              <span>•</span>
              <span>FEATURED SHOWCASE PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Cloud &amp; DevOps Engineering Projects
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Showcase projects demonstrating real-world translation of IBM &amp; Google Cloud certifications into resilient cloud infrastructure, CI/CD automation, containerization, and Agile delivery.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs text-slate-300 font-mono">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Structured engineering case studies with architecture workflows and metrics</span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg relative group"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-sky-400 border border-slate-700">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-400/90 font-medium mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Challenge & Solution Cards */}
                  <div className="space-y-3 mb-5 text-xs sm:text-sm">
                    <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <span className="text-[11px] font-mono uppercase font-bold text-rose-400 tracking-wider block mb-1">
                        The Challenge
                      </span>
                      <p className="text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <span className="text-[11px] font-mono uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                        The Architectural Solution
                      </span>
                      <p className="text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Step-by-Step Architecture Flow */}
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 mb-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-mono uppercase font-semibold text-sky-400 flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-sky-400" />
                        <span>Architecture &amp; Workflow Execution</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{project.architectureSteps.length} Stages</span>
                    </div>
                    <ol className="space-y-1.5 font-sans text-xs text-slate-300">
                      {project.architectureSteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="font-mono text-sky-400 font-bold shrink-0 text-[11px] w-4">{sIdx + 1}.</span>
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Metrics & Impact */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-2">
                      Key Outcomes &amp; Metrics
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.metrics.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills & Links */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-slate-800/90 text-slate-300 px-2.5 py-0.5 rounded border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Production-Ready Spec</span>
                      </span>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded border border-slate-700 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-3 h-3" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
                        </a>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Case Study {idx + 1} of {projects.length}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
