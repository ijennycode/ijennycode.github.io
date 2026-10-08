import React, { useState } from 'react';
import { HeroData } from '../types';
import { 
  Cloud, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  Award, 
  GitBranch, 
  BookOpen,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';

interface HeroProps {
  hero: HeroData;
  candidateName: string;
  onOpenBlueprint?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ hero, candidateName }) => {
  const [activeTaglineIndex, setActiveTaglineIndex] = useState(0);

  const allTaglines = [hero.tagline, ...hero.alternativeTaglines];
  const currentTagline = allTaglines[activeTaglineIndex];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Copy & Positioning */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="font-medium text-slate-200">{hero.availability}</span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-400 font-mono text-[11px]">IBM &amp; Google Cloud Certified</span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-sky-400 font-mono mb-2 flex items-center gap-2">
                <span>&gt; whoami</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400 font-sans normal-case tracking-normal">{hero.targetRole}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {candidateName}
              </h1>
            </div>

            {/* Catchy Tagline */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-md relative">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-1.5 mb-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Mission &amp; Focus</span>
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug tracking-tight">
                &ldquo;{currentTagline}&rdquo;
              </h2>

              {/* Tagline Option Pills */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400">Perspective:</span>
                {allTaglines.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTaglineIndex(idx)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
                      activeTaglineIndex === idx
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/50'
                    }`}
                  >
                    {idx === 0 ? 'DevOps & Reliability' : idx === 1 ? 'Automation & Delivery' : idx === 2 ? 'Agile & CI/CD' : 'Scalable Infra'}
                  </button>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 relative">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2 font-semibold">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Professional Summary</span>
              </span>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                {hero.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm px-5 py-3 rounded-lg shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all"
              >
                <span>Explore Showcase Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#certifications"
                id="hero-view-certs-btn"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm px-5 py-3 rounded-lg transition-all"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>View Certifications &amp; Learning</span>
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold text-sm px-4 py-3 rounded-lg transition-all"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/ijennycode"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-mono text-xs px-3.5 py-3 rounded-lg transition-all"
                title="View GitHub Repositories"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jennifer-imoter-8a206041b"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="flex items-center gap-2 bg-sky-950/40 hover:bg-sky-900/40 text-sky-400 hover:text-sky-300 border border-sky-500/30 font-mono text-xs px-3.5 py-3 rounded-lg transition-all"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Terminal Profile Card & Real Credentials */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">devops-profile.sh</span>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  READY
                </div>
              </div>

              {/* Terminal Details */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-slate-500"># Current Professional Specialization</span>
                  <div className="text-slate-300 mt-1 flex items-start gap-2">
                    <span className="text-sky-400 font-bold">$</span>
                    <div>
                      <span className="text-amber-300 font-semibold">Active Program:</span>
                      <p className="text-slate-200 mt-0.5 font-sans text-xs">
                        IBM DevOps and Software Engineering Professional Certificate
                      </p>
                      <span className="text-[11px] text-sky-400 font-mono mt-0.5 inline-block">
                        Active Focus: Hands-on Introduction to Linux Commands &amp; Shell Scripting
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500"># Verified Foundations (5 Completed)</span>
                  <ul className="mt-2 space-y-1.5 text-[11px] font-sans">
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Google Cloud Computing Foundations</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>IBM Introduction to DevOps</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>IBM Introduction to Cloud Computing</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>IBM Introduction to Agile Development &amp; Scrum</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>IBM Introduction to Software Engineering</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>IBM Getting started with Git &amp; Github</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500"># Architecture &amp; Methodology Toolchain</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Google Cloud (GCP)', 'Compute Engine', 'Cloud Run', 'VPC & IAM', 'Docker', 'CI/CD Pipelines', 'Agile / Scrum', 'Git & GitHub', 'Bash & Python'].map((t) => (
                      <span key={t} className="bg-slate-800 text-sky-300 border border-slate-700/60 px-2 py-0.5 rounded text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Card Callout */}
              <div className="mt-5 p-3 rounded-lg bg-sky-950/40 border border-sky-800/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Target Role</div>
                    <div className="text-[11px] text-sky-400 font-medium">Junior Cloud / DevOps Engineer</div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="text-xs text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1"
                >
                  <span>Hire</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
