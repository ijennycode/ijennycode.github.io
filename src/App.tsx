import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [data] = useState(initialPortfolioData);
  const candidateName = 'Jennifer Imoter';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-200">
      {/* Main Navbar */}
      <Navbar
        candidateName={candidateName}
        onOpenBlueprint={() => {}}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          hero={data.hero}
          candidateName={candidateName}
        />

        {/* Skills & Stack Section */}
        <SkillsSection categories={data.skillCategories} />

        {/* Featured Projects Section */}
        <ProjectsSection projects={data.projects} />

        {/* Education & Certifications Section (4 Completed + Active Learning Path) */}
        <EducationSection
          completedCertifications={data.completedCertifications}
          activeLearning={data.activeLearning}
        />

        {/* Contact / Call to Action Section */}
        <ContactSection
          contactCTA={data.contactCTA}
          candidateName={candidateName}
          onOpenBlueprint={() => {}}
        />
      </main>

      {/* Footer */}
      <Footer
        candidateName={candidateName}
        onOpenBlueprint={() => {}}
      />
    </div>
  );
}
