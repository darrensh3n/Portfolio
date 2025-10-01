'use client';

import { useState } from 'react';

export default function TopNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-12 left-6 z-50">
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl px-4 py-4 shadow-xl border border-white/30 dark:border-slate-600/50">
        <div className="flex flex-col space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700 hover:shadow-md'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
