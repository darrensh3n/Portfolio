'use client';

import Image from 'next/image';
import TopNavigation from './components/TopNavigation';

export default function Home() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-800 dark:from-slate-900 dark:via-purple-900 dark:to-blue-900">
      <TopNavigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-46 pb-12">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-32">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6">
              Darren Shen
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 mb-8">
              Computer Engineering @ San Jose State University
            </p>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Hi! I'm Darren Shen, an aspiring Software Engineer passionate about building scalable applications, embedded systems, and AI.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📄 View Resume
            </a>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-8">
              <a
                href="https://github.com/darrensh3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:to-blue-600 transition-all duration-200 transform hover:scale-110"
                title="GitHub"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/darren-shen-1a5170311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:to-blue-600 transition-all duration-200 transform hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="mailto:dshen889@gmail.com"
                className="flex items-center justify-center w-14 h-14 rounded-full text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:to-blue-600 transition-all duration-200 transform hover:scale-110"
                title="Email"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="mb-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="mr-3">💼</span>
              Work Experience
            </h2>
            
            <div className="space-y-6 ml-4">
              <a 
                href="https://engineering.sjsu.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border-l-4 border-blue-400 pl-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div className="flex items-center space-x-3">
                    <Image src="/sjsu_COE.png" alt="SJSU COE" width={32} height={32} className="rounded" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                      Undergraduate Research Assistant
                    </h3>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Aug 2024 - Present
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                  SJSU College of Engineering
                </p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Contributed to open-source offline communication project deployed in Ukraine using Android & K-9 Mail</li>
                  <li>• Improved testing efficiency (-25% cycles) and login success (+40%) with Kotlin-based tools</li>
                  <li>• Built cross-platform apps with Java, Kotlin Multiplatform, Spring Boot, and gRPC</li>
                </ul>
              </a>

              <a 
                href="https://sce.sjsu.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border-l-4 border-cyan-500 pl-4 p-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div className="flex items-center space-x-3">
                    <Image src="/scelogo.png" alt="SCE Society" width={32} height={32} className="rounded" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                      Software Engineering Intern
                    </h3>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Feb 2025 - Present
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                  The Software and Computer Engineering Society
                </p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Developed STM32 firmware for GPIO control and temperature sensing on a six-wing drone</li>
                  <li>• Integrated/tested sensors on STM32 boards for reliable PCB-based system performance</li>
                </ul>
              </a>

              <a 
                href="https://www.sjsu.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border-l-4 border-teal-500 pl-4 p-3 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div className="flex items-center space-x-3">
                    <Image src="/sjsulogo2.jpeg" alt="SJSU" width={32} height={32} className="rounded" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                      Software Engineering Intern
                    </h3>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Jun 2025 - Aug 2025
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                  San Jose State University
                </p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Built RFID access system for 100+ users with MongoDB, Node.js, and React</li>
                  <li>• Secured card data with bcrypt hashing and real-time monitoring via SSEs</li>
                  <li>• Deployed the website with Docker</li>
                </ul>
              </a>

              <a 
                href="https://road2.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border-l-4 border-indigo-500 pl-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div className="flex items-center space-x-3">
                    <Image src="/road2org_logo.jpeg" alt="Road2 Education" width={32} height={32} className="rounded" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                      Robotics Engineering Intern
                    </h3>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Apr 2023 - May 2024
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                  Road2 Education Foundation
                </p>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Designed robotic mechanisms in KiCad</li>
                  <li>• Supported technical setup for a Google-sponsored robotics tournament with UC Irvine</li>
                </ul>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="mr-3">💻</span>
              Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-purple-200 dark:border-slate-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      QuakeSafe
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 mb-4">
                      Built QuakeSafe, an AI-powered mobile app that enhances earthquake safety by using computer vision to detect structural hazards and pinpoint high-risk areas within cities.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/adarshm11/QuakeSafe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-200"
                      >
                        Code
                      </a>
                      <a 
                        href="https://devpost.com/software/quakesafe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-200"
                      >
                        Devpost
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image 
                      src="/QS1.png" 
                      alt="QuakeSafe" 
                      width={100} 
                      height={100} 
                      className="rounded-lg" 
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-indigo-200 dark:border-slate-600">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Syll.ai
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 mb-4">
                      Developed Syll.ai, a web platform designed to scrape academic syllabi and extract key information, streamlining access to essential class details for students.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/DanielYRoh/syllabus-scraper" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors duration-200"
                      >
                        Code
                      </a>
                      <a 
                        href="https://devpost.com/software/syll-ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors duration-200"
                      >
                        Devpost
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image src="/syllai.png" alt="Syll.ai" width={120} height={120} className="rounded-lg object-cover" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-indigo-200 dark:border-slate-600">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      🏠 Real Estate Website 
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 mb-4">
                      Built and deployed a custom real estate website for Petty Tai Realty (brokered by Realty One Group West).
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://pettytairealtor.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors duration-200"
                      >
                        Website
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image src="/PTwebsite.png" alt="Real Estate Website" width={120} height={120} className="rounded-lg object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="mr-3">🎓</span>
              Education
            </h2>
            
            <div className="space-y-6">
              <a 
                href="https://www.sjsu.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-cyan-200 dark:border-slate-600 hover:shadow-lg transition-all duration-200 transform hover:scale-99"
              >
                <div className="flex items-center space-x-4">
                  <Image src="/sjsulogo.png" alt="SJSU" width={48} height={48} className="rounded" />
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
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Expected Graduation: December 2027
                  </p>
                </div>
              </a>

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
                    <li>• Dean&apos;s Scholar (2 semesters)</li>
                    <li>• The Software and Computer Engineering Society</li>
                    <li>• Research Assistant in Distributed Systems</li>
                    <li>• Taiwanese Student Association</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="mb-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="mr-3">🛠️</span>
              Technical Skills
            </h2>
            
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

              <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-slate-700 rounded-lg hover:bg-yellow-100 dark:hover:bg-slate-600 transition-colors border border-yellow-200 dark:border-slate-600">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">STM</span>
                </div>
                <span className="text-slate-800 dark:text-slate-100 font-medium">STM32</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
              <span className="mr-3">📧</span>
              Contact Info
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://github.com/darrensh3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-purple-200 dark:border-slate-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">GitHub</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    darrensh3n
                  </p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/darren-shen-1a5170311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-indigo-200 dark:border-slate-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">LinkedIn</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    darren-shen-1a5170311
                  </p>
                </div>
              </a>

              <a 
                href="mailto:dshen889@gmail.com" 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-100 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-blue-200 dark:border-slate-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    dshen889@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}