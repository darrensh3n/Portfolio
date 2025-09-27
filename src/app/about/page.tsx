'use client';

import FloatingToolbar from '../components/FloatingToolbar';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'hackathons', label: 'Hackathons', icon: '🏆' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Technical Skills', icon: '💻' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'work':
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Undergraduate Research Assistant
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  Aug 2024 - Present
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                SJSU College of Engineering
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Contributed to open-source offline communication project deployed in Ukraine using Android & K-9 Mail</li>
                <li>• Improved testing efficiency (-25% cycles) and login success (+40%) with Kotlin-based tools</li>
                <li>• Built cross-platform apps with Java, Kotlin Multiplatform, Spring Boot, and gRPC</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Software Engineering Intern
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  Feb 2025 - Present
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                The Software and Computer Engineering Society
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Developed STM32 firmware for GPIO control and temperature sensing on a six-wing drone</li>
                <li>• Integrated/tested sensors on STM32 boards for reliable PCB-based system performance</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Software Engineering Intern
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  Jun 2025 - Aug 2025
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                San Jose State University
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Built RFID access system for 100+ users with MongoDB, Node.js, and React</li>
                <li>• Secured card data with bcrypt hashing and real-time monitoring via SSEs</li>
                <li>• Deployed the website with Docker</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Robotics Engineering Intern
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  Apr 2023 - May 2024
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                Road2 Education Foundation
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Designed robotic mechanisms in KiCad</li>
                <li>• Supported technical setup for a Google-sponsored robotics tournament with UC Irvine</li>
              </ul>
            </div>
          </div>
        );

      case 'hackathons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-cyan-200 dark:border-slate-600">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  San Jose State University: SJHacks 2025
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                April 2025
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                Built QuakeSafe, an AI-powered mobile app that enhances earthquake safety by using computer vision to detect structural hazards and pinpoint high-risk areas within cities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-teal-200 dark:border-slate-600">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  San Francisco State University: SFHacks 2025
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                April 2025
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                Developed Syll.ai, a web platform designed to scrape academic syllabi and extract key information, streamlining access to essential class details for students.
              </p>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-cyan-200 dark:border-slate-600">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  San Jose State University
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  GPA: 3.9/4.0
                </p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  Expected Graduation: December 2027
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-cyan-50 dark:bg-slate-700 rounded-lg border border-cyan-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Relevant Coursework
                </h4>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                  <li>• Calculus</li>
                  <li>• Discrete Math</li>
                  <li>• C Programming</li>
                  <li>• Data Structures & Algorithms</li>
                </ul>
              </div>

              <div className="p-4 bg-teal-50 dark:bg-slate-700 rounded-lg border border-teal-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Activities & Achievements
                </h4>
                <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                  <li>• Dean's Scholar (2 semesters)</li>
                  <li>• The Software and Computer Engineering Society</li>
                  <li>• Research Assistant in Distributed Systems</li>
                  <li>• Taiwanese Student Association</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Programming Languages */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">☕</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Java</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">JavaScript</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">TypeScript</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐍</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Python</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">C</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">MATLAB</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SQL</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">SQL</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Kotlin</span>
            </div>

            {/* Frontend Frameworks */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚛️</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">React.js</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Next.js</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Tailwind CSS</span>
            </div>

            {/* Backend Frameworks */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">FastAPI</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Spring Boot</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-400 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Node.js</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Express.js</span>
            </div>

            {/* Communication & APIs */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">g</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">gRPC</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Postman</span>
            </div>

            {/* Mobile Development */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Android SDK</span>
            </div>

            {/* Databases */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Supabase</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">MongoDB</span>
            </div>

            {/* Cloud & Storage */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S3</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Amazon S3</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Vercel</span>
            </div>

            {/* Development Tools */}
            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐙</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">GitHub</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-slate-700 rounded-lg hover:bg-cyan-100 dark:hover:bg-slate-600 transition-colors border border-cyan-200 dark:border-slate-600">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐳</span>
              </div>
              <span className="text-slate-800 dark:text-slate-100 font-medium">Docker</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-teal-100 dark:from-slate-800 dark:via-blue-900 dark:to-teal-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            🌊 About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Dive into my journey, experiences, and skills. 🏄‍♂️
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 dark:border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-cyan-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50">
          {renderContent()}
        </div>
      </main>

      <FloatingToolbar />
    </div>
  );
}
