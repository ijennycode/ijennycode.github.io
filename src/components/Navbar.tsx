import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ChevronRight, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  onOpenBlueprint?: () => void;
  candidateName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ candidateName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Skills & Stack', href: '#skills' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Certifications & Learning', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-white font-mono tracking-tight"
          id="nav-brand-link"
        >
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400 transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-100 flex items-center gap-1.5">
              <span>{candidateName}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-xs text-sky-400 font-sans font-medium">Junior Cloud & DevOps</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-800/60 p-1 rounded-full border border-slate-700/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-700/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/ijennycode"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 px-3 py-2 rounded-lg transition-all shadow-sm"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jennifer-imoter-8a206041b"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 px-3 py-2 rounded-lg transition-all shadow-sm"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            id="nav-cta-btn"
            className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            <span>Let's Connect</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://github.com/ijennycode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/jennifer-imoter-8a206041b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-sky-400 hover:text-sky-300 hover:bg-slate-800 rounded-lg"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/ijennycode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-mono text-slate-200 bg-slate-800 border border-slate-700 py-2.5 rounded-lg"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jennifer-imoter-8a206041b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-mono text-sky-400 bg-sky-950/40 border border-sky-500/30 py-2.5 rounded-lg"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href="mailto:imoterjennifer@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-mono text-sky-300 bg-slate-800/80 border border-slate-700 py-2.5 rounded-lg"
            >
              <span>imoterjennifer@gmail.com</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold bg-emerald-500 text-slate-950 py-2.5 rounded-lg"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
