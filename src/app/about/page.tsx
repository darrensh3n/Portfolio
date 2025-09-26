'use client';

import { useState } from 'react';
import FloatingToolbar from '../components/FloatingToolbar';

export default function About() {
  const [activeTab, setActiveTab] = useState('Work Experience');

  const tabs = [
    'Work Experience',
    'Hackathons',
    'Technical Skills',
    'Education',
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Work Experience':
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Undergraduate Research Assistant
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Aug 2024 - Present
              </span>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                SJSU College of Engineering
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Contributed to open-source offline communication project deployed in Ukraine using Android & K-9 Mail</li>
                <li>• Improved testing efficiency (-25% cycles) and login success (+40%) with Kotlin-based tools</li>
                <li>• Built cross-platform apps with Java, Kotlin Multiplatform, Spring Boot, and gRPC</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Engineering Intern
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Feb 2025 - Present
              </span>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                The Software and Computer Engineering Society
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Developed STM32 firmware for GPIO control and temperature sensing on a six-wing drone</li>
                <li>• Integrated/tested sensors on STM32 boards for reliable PCB-based system performance</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Engineering Intern
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Aug 2024 - Present
              </span>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                San Jose State University
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Built RFID access system for 100+ users with MongoDB, Node.js, and React</li>
                <li>• Secured card data with bcrypt hashing and real-time monitoring via SSEs</li>
                <li>• Deployed the website with Docker</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Robotics Engineering Intern
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Apr 2023 - May 2024
              </span>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                Road2 Education Foundation
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Designed robotic mechanisms utilizing KiCad</li>
                <li>• Supported technical setup for a Google-sponsored robotics tournament with UC Irvine</li>
              </ul>
            </div>
          </div>
        );
      case 'Hackathons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                San Jose State University: SJHacks 2025
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                April 2025
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                Built QuakeSafe, An AI-powered mobile app that enhances earthquake safety by using computer vision to detect structural hazards and pinpoint high-risk areas within cities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                San Francisco State University: SFHacks 2025
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                April 2025
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                Developed Syll.ai, A web platform designed to scrape academic syllabi and extract key information, streamlining access to essential class details for students.
              </p>
            </div>
          </div>
        );

      case 'Education':
        return (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Computer Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              San Jose State University
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Expected Graduation: December 2027
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              GPA: 3.9/4.0
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Courses: Calculus, Discrete Math, C Programming, Data Structures and Algorithms
            </p>
          </div>
        );
        case "Technical Skills":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages */}
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Languages
                </h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>MATLAB</li>
                  <li>SQL</li>
                  <li>Kotlin</li>
                </ul>
              </div>
        
              {/* Frameworks */}
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Frameworks
                </h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>FastAPI</li>
                  <li>Spring Boot</li>
                  <li>Tailwind CSS</li>
                  <li>gRPC</li>
                  <li>Android SDK</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
        
              {/* Technologies */}
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies
                </h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                  <li>Supabase (PostgreSQL)</li>
                  <li>Amazon S3</li>
                  <li>Vercel</li>
                  <li>GitHub</li>
                  <li>Docker</li>
                  <li>MongoDB</li>
                  <li>Postman</li>
                </ul>
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            🌊 About Me
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-2xl shadow-lg">
          {renderContent()}
        </div>
      </main>

      <FloatingToolbar />
    </div>
  );
}