import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  Terminal, 
  Sparkles, 
  CheckCircle2,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { PortfolioData } from '../types';
import { markdownPortfolioBlueprint } from '../data/portfolioData';

interface CopyBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  candidateName: string;
}

export const CopyBlueprintModal: React.FC<CopyBlueprintModalProps> = ({
  isOpen,
  onClose,
  data,
  candidateName,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'markdown' | 'tips'>('preview');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleCopySection = (sectionName: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(markdownPortfolioBlueprint);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdownPortfolioBlueprint], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${candidateName.toLowerCase().replace(/\s+/g, '-')}-portfolio-copy-blueprint.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Section-specific copies
  const heroCopyText = `### HERO SECTION
**Catchy Tagline:**
"${data.hero.tagline}"

**Alternative Catchy Taglines:**
${data.hero.alternativeTaglines.map(t => `- "${t}"`).join('\n')}

**2-Sentence Bio:**
"${data.hero.bio}"`;

  const skillsCopyText = `### SKILLS & STACK
${data.skillCategories.map(cat => `#### ${cat.title} (${cat.badge})
${cat.summary}
${cat.skills.map(s => `- **${s.name}** [${s.level}]: ${s.description} (Credential: ${s.associatedCert}) Tools: ${s.tools.join(', ')}`).join('\n')}
`).join('\n')}`;

  const projectsCopyText = `### FEATURED SHOWCASE PROJECTS
${data.projects.map(p => `#### Project: ${p.title}
- **Category:** ${p.category}
- **Tagline:** ${p.tagline}
- **The Challenge:** ${p.challenge}
- **The Solution:** ${p.solution}
- **Workflow / Architecture Steps:**
${p.architectureSteps.map((step, idx) => `  ${idx + 1}. ${step}`).join('\n')}
- **Tech Stack:** ${p.stack.join(', ')}
- **Key Outcomes:**
${p.metrics.map(m => `  * ${m}`).join('\n')}
`).join('\n')}`;

  const educationCopyText = `### EDUCATION & CERTIFICATIONS
#### Completed Courses & Credentials:
${data.completedCertifications.map(c => `- **${c.title}** (${c.issuer}) - ${c.summary}
  Core Competencies: ${c.skillsCovered.join(', ')}`).join('\n')}

#### Active Learning Path:
- **Program:** ${data.activeLearning.programTitle} (${data.activeLearning.issuer})
- **Status:** In Progress (~${data.activeLearning.progressPercent}%)
- **Current Focus:** ${data.activeLearning.currentFocus}
- **Modules Covered:**
${data.activeLearning.modules.map(m => `  * [${m.status === 'Completed' ? 'x' : ' '}] ${m.title} (${m.status})`).join('\n')}`;

  const contactCopyText = `### CONTACT / CALL TO ACTION
- **Heading:** "${data.contactCTA.heading}"
- **Subheading:** "${data.contactCTA.subheading}"
- **Value Proposition:** "${data.contactCTA.valueProposition}"
- **Email:** ${data.contactCTA.email}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Portfolio Copy &amp; Section Layout Blueprint
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Export
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Technical Copywriter &amp; Web Developer Blueprint for {candidateName} (Junior Cloud / DevOps Engineer)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-slate-800 bg-slate-900/90 text-xs">
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 font-mono">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Structured Sections
            </button>
            <button
              onClick={() => setActiveTab('markdown')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'markdown'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Raw Markdown
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'tips'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Recruiter &amp; Interview Tips
            </button>
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors font-mono"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">All Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full Document</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 font-sans text-sm">
          
          {activeTab === 'preview' && (
            <div className="space-y-8">
              
              {/* Section 1: Hero */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      SECTION 01
                    </span>
                    <h4 className="font-bold text-white text-base">Hero Section</h4>
                  </div>
                  <button
                    onClick={() => handleCopySection('hero', heroCopyText)}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {copiedSection === 'hero' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Hero</span>
                  </button>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block font-sans text-[11px]">Primary Catchy Tagline:</span>
                    <p className="text-emerald-300 text-sm font-semibold mt-0.5">&ldquo;{data.hero.tagline}&rdquo;</p>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block font-sans text-[11px]">Alternative Tagline Options:</span>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 mt-0.5">
                      {data.hero.alternativeTaglines.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block font-sans text-[11px]">2-Sentence Bio:</span>
                    <p className="text-slate-200 text-xs font-sans leading-relaxed mt-0.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      {data.hero.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Skills & Stack */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      SECTION 02
                    </span>
                    <h4 className="font-bold text-white text-base">Skills &amp; Stack (Grouped)</h4>
                  </div>
                  <button
                    onClick={() => handleCopySection('skills', skillsCopyText)}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {copiedSection === 'skills' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Skills</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                  {data.skillCategories.map(cat => (
                    <div key={cat.id} className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                      <div className="font-bold text-sky-300 mb-1">{cat.title}</div>
                      <p className="text-[11px] text-slate-400 mb-2">{cat.summary}</p>
                      <ul className="space-y-1.5 font-mono text-[11px] text-slate-300">
                        {cat.skills.map(s => (
                          <li key={s.name} className="flex items-start gap-1">
                            <span className="text-sky-400">•</span>
                            <span><strong>{s.name}</strong> ({s.level})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Featured Projects */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      SECTION 03
                    </span>
                    <h4 className="font-bold text-white text-base">Featured Projects (Suggested Structure)</h4>
                  </div>
                  <button
                    onClick={() => handleCopySection('projects', projectsCopyText)}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {copiedSection === 'projects' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Projects</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {data.projects.map((p, pIdx) => (
                    <div key={p.id} className="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">{pIdx + 1}. {p.title}</span>
                        <span className="font-mono text-[11px] text-sky-400">{p.category}</span>
                      </div>
                      <p className="text-slate-300 italic mb-2 text-xs font-sans">&ldquo;{p.tagline}&rdquo;</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                        <div>
                          <strong className="text-slate-300">Challenge:</strong> {p.challenge}
                        </div>
                        <div>
                          <strong className="text-slate-300">Solution:</strong> {p.solution}
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] font-mono text-sky-300">
                        <strong>Stack:</strong> {p.stack.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Education & Certifications */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      SECTION 04
                    </span>
                    <h4 className="font-bold text-white text-base">Education &amp; Certifications</h4>
                  </div>
                  <button
                    onClick={() => handleCopySection('education', educationCopyText)}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {copiedSection === 'education' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Education</span>
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-sky-950/30 p-3 rounded-lg border border-sky-800/40">
                    <span className="font-mono text-[11px] uppercase text-amber-400 font-bold block mb-1">
                      Currently Learning:
                    </span>
                    <div className="font-bold text-white">{data.activeLearning.programTitle}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Focus: {data.activeLearning.currentFocus}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {data.completedCertifications.map(c => (
                      <div key={c.id} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                        <div className="font-semibold text-slate-200">{c.title}</div>
                        <div className="text-slate-400 text-[11px]">{c.issuer} • Verified</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5: Contact */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      SECTION 05
                    </span>
                    <h4 className="font-bold text-white text-base">Contact / Call to Action</h4>
                  </div>
                  <button
                    onClick={() => handleCopySection('contact', contactCopyText)}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {copiedSection === 'contact' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Contact</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  <div>
                    <strong className="text-slate-300">Heading:</strong> {data.contactCTA.heading}
                  </div>
                  <div>
                    <strong className="text-slate-300">Subheading:</strong> {data.contactCTA.subheading}
                  </div>
                  <div>
                    <strong className="text-slate-300">Value Proposition:</strong> {data.contactCTA.valueProposition}
                  </div>
                  <div>
                    <strong className="text-slate-300">Email:</strong> {data.contactCTA.email}
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'markdown' && (
            <div className="relative">
              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                {markdownPortfolioBlueprint}
              </pre>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-5 text-xs sm:text-sm font-sans">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Technical Copywriter &amp; Interview Positioning Strategy</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  As a Junior Cloud / DevOps candidate with your background, your primary competitive advantages are:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-slate-300">
                  <li>
                    <strong>Continuous Learning Proof:</strong> Highlighting that you have completed 5 core foundation courses and are actively working through the comprehensive IBM DevOps and Software Engineering Professional Certificate proves self-discipline and growth mindset.
                  </li>
                  <li>
                    <strong>Methodology Grounding:</strong> Most junior candidates only know code syntax. By prominently showcasing your <em>IBM Introduction to Agile &amp; Scrum</em> and <em>IBM Introduction to DevOps</em> certifications, you demonstrate that you understand how engineering teams actually operate and ship.
                  </li>
                  <li>
                    <strong>Practical Cloud Realism:</strong> Your <em>Google Cloud Computing Foundations</em> credential gives you verified vocabulary in IAM, VPCs, Cloud Storage, and Compute Engine—crucial for discussing cloud infrastructure trade-offs.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>Suggested Next Steps to Populate Real GitHub Repos</span>
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-300">
                  <li>Create a GitHub repository for each of the 4 suggested project structures.</li>
                  <li>Copy the provided architecture steps and metrics directly into your repository <code>README.md</code>.</li>
                  <li>Add a link back to your portfolio in your GitHub profile README and LinkedIn headline.</li>
                </ol>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Target Role: Junior Cloud / DevOps Engineer</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-sans"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
