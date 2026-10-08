import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, MessageSquare, Sparkles, Terminal, Github, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  contactCTA: {
    heading: string;
    subheading: string;
    valueProposition: string;
    email: string;
    github: string;
    linkedin: string;
  };
  candidateName: string;
  onOpenBlueprint: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactCTA,
  candidateName,
  onOpenBlueprint
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('recruiter');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const emailTemplates = {
    recruiter: {
      label: 'Recruiter / Hiring Lead',
      subject: `Opportunity: Junior Cloud / DevOps Engineer - ${candidateName}`,
      body: `Hi ${candidateName},\n\nI reviewed your portfolio, certifications in Google Cloud and IBM DevOps, and your practical project work. We'd love to discuss an open Junior Cloud / DevOps role on our engineering team.\n\nBest regards,\n[Your Name]\n[Company]`
    },
    interview: {
      label: 'Technical Interview',
      subject: `Interview Invitation - Junior Cloud / DevOps Engineer`,
      body: `Hi ${candidateName},\n\nWe would like to invite you for a technical discussion regarding our cloud deployment pipelines and your hands-on experience.\n\nBest,\n[Hiring Team]`
    },
    collaboration: {
      label: 'Project Collaboration',
      subject: `Cloud & DevOps Project Collaboration`,
      body: `Hi ${candidateName},\n\nI came across your CI/CD and GCP project architectures and would like to connect about a potential open-source or team project.\n\nCheers,\n[Your Name]`
    }
  };

  const currentTemplate = emailTemplates[selectedTemplate as keyof typeof emailTemplates];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactCTA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactCTA.email}?subject=${encodeURIComponent(currentTemplate.subject)}&body=${encodeURIComponent(customMessage || currentTemplate.body)}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Call to Action Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span>SECTION 05</span>
              <span>•</span>
              <span>CONTACT / CALL TO ACTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {contactCTA.heading}
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed font-sans">
              {contactCTA.subheading}
            </p>

            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-300 leading-relaxed font-sans relative">
              <span className="text-[11px] font-mono uppercase text-sky-400 font-semibold block mb-1">
                Value Proposition
              </span>
              {contactCTA.valueProposition}
            </div>

            {/* Direct Email Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct Inquiries</div>
                  <div className="text-sm font-semibold text-white font-mono">{contactCTA.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 font-mono"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${contactCTA.email}`}
                  className="text-xs px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all flex items-center gap-1"
                >
                  <span>Email Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Professional Profiles: GitHub & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={contactCTA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Code &amp; Repositories</div>
                    <div className="text-sm font-semibold text-white font-mono">github.com/ijennycode</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={contactCTA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 border border-slate-800 hover:border-sky-500/40 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Professional Network</div>
                    <div className="text-sm font-semibold text-sky-400 font-mono">LinkedIn Profile</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Note for Hiring Managers */}
            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400 font-semibold">&gt; availability_status:</span> Active candidate ready for Junior Cloud / DevOps Engineer roles, engineering internships, and infrastructure pipelines.
            </div>
          </div>

          {/* Right: Interactive Message Dispatcher & Subject Presets */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Direct Message / Inquiry</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to Dispatch
                </span>
              </div>

              {/* Template Selectors */}
              <div className="mb-4">
                <span className="text-xs font-mono text-slate-400 block mb-2">Select Purpose Preset:</span>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(emailTemplates).map(([key, t]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setSelectedTemplate(key);
                        setCustomMessage('');
                      }}
                      className={`text-xs py-2 px-2.5 rounded-lg border text-center transition-all ${
                        selectedTemplate === key
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 font-medium'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Form */}
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={currentTemplate.subject}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-300 font-mono focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Message Body (Editable)
                  </label>
                  <textarea
                    rows={6}
                    value={customMessage || currentTemplate.body}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-200 font-sans leading-relaxed focus:outline-none focus:border-sky-500"
                    placeholder="Enter your message..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono text-slate-500">
                    Sends to: {contactCTA.email}
                  </span>

                  <button
                    type="submit"
                    className="flex items-center gap-2 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-emerald-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch in Mail Client</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                    Mail client triggered! Looking forward to connecting.
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
