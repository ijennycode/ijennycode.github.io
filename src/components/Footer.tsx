import React from 'react';
import { Terminal, Heart, Cloud, ArrowUp, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  candidateName: string;
  onOpenBlueprint?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ candidateName, onOpenBlueprint }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Mission */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-200 text-sm">{candidateName}</div>
              <div className="text-[11px] text-slate-400 font-mono">
                Junior Cloud &amp; DevOps Portfolio • IBM &amp; Google Cloud Certified
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#hero" className="hover:text-white transition-colors">Top</a>
            <span>•</span>
            <a href="#skills" className="hover:text-white transition-colors">Skills &amp; Stack</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
            <span>•</span>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <span>•</span>
            <a
              href="https://github.com/ijennycode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/jennifer-imoter-8a206041b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3 font-mono">
          <div>
            Built with modern React, Tailwind CSS, &amp; specialized Technical Copywriting.
          </div>
          <div>
            Continuously advancing via IBM DevOps &amp; Software Engineering Professional Certificate.
          </div>
        </div>
      </div>
    </footer>
  );
};
