"use client";

import React from "react";
import Image from "next/image";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import Head from "next/head";
import { PortfolioDock } from "./components/PortfolioDock";
import { TechStack } from "./components/TechStack";
import { Analytics } from "@vercel/analytics/next"

const PortfolioPage = () => {
  const experiences = [
    {
        logoUrl: "/sjsu_COE.png",
        companyName: "SJSU College of Engineering",
        link: "https://engineering.sjsu.edu/",
        title: "SJSU College of Engineering",
        date: "Aug 2024 - Present",
        position: "Undergraduate Research Assistant",
        responsibilities: [
            "Contributed to open-source offline communication project deployed in Ukraine using Android & K-9 Mail",
            "Improved testing efficiency (-25% cycles) and login success (+40%) with Kotlin-based tools",
            "Built cross-platform apps with Java, Kotlin Multiplatform, Spring Boot, and gRPC"
        ],
    },
    {
        logoUrl: "/scelogo.png",
      companyName: "Software and Computer Engineering Society",
      link: "https://sce.sjsu.edu/",
      title: "Software and Computer Engineering Society",
      date: "Feb 2025 - Present",
      position: "Software Engineering Intern",
      responsibilities: [
        "Developed STM32 firmware for GPIO control and temperature sensing on a six-wing drone",
        "Integrated/tested sensors on STM32 boards for reliable PCB-based system performance"
      ],
    },
    {
      logoUrl: "/sjsulogo2.jpeg",
      companyName: "San Jose State University",
      link: "https://www.sjsu.edu/",
      title: "San Jose State University",
      date: "Jun 2025 - Aug 2025",
      position: "Software Engineering Intern",
      responsibilities: [
        "Built RFID access system for 100+ users with MongoDB, Node.js, and React",
        "Secured card data with bcrypt hashing and real-time monitoring via SSEs",
        "Deployed the website with Docker"
      ],
    },
    {
      logoUrl: "/road2org_logo.jpeg",
      companyName: "Road2 Education Foundation",
      link: "https://road2.org/",
      title: "Road2 Education Foundation",
      date: "Apr 2023 - May 2024",
      position: "Robotics Engineering Intern",
      responsibilities: [
        "Designed robotic mechanisms in KiCad",
        "Supported technical setup for a Google-sponsored robotics tournament with UC Irvine"
      ],
    },
  ];

  const projects = [
    {
      logoUrl: "/A10logo.webp",
      projectName: "GraphGuard",
      title: "GraphGuard",
      date: "2025",
      location: "A10 Agentic AI Hackathon Winner",
      isWinner: true,
      description: [
        "Developed GraphGuard, an AI-powered network security platform that tracks global network traffic and autonomously detects, investigates, and mitigates cyber attacks using multi-agent reasoning",
        "Won the Customer Choice Award 🏆"
      ],
      links: [
        { icon: "fab fa-github", label: "Code", url: "https://github.com/RonCodes88/GraphGuard" },
      ],
    },
    {
      logoUrl: "/sjhacks.png",
      projectName: "QuakeSafe",
      title: "QuakeSafe",
      date: "2025",
      location: "San Jose Hacks Project",
      isWinner: false,
      description: [
        "Built QuakeSafe, an AI-powered mobile app that enhances earthquake safety by using computer vision to detect structural hazards and pinpoint high-risk areas within cities."
      ],
      links: [
        { icon: "fab fa-github", label: "Code", url: "https://github.com/adarshm11/QuakeSafe" },
        { icon: "fas fa-globe", label: "Devpost", url: "https://devpost.com/software/quakesafe" },
      ],
    },
    {
      logoUrl: "/sfhacks.png",
      projectName: "Syll.ai",
      title: "Syll.ai",
      date: "2025",
      location: "San Francisco Hacks Project",
      isWinner: false,
      description: [
        "Created Syll.ai, a web platform designed to scrape academic syllabi and extract key information, streamlining access to essential class details for students."
      ],
      links: [
        { icon: "fab fa-github", label: "Code", url: "https://github.com/DanielYRoh/syllabus-scraper" },
        { icon: "fas fa-globe", label: "Devpost", url: "https://devpost.com/software/syll-ai" },
      ],
    },
    {
      logoUrl: "/realty.png",
      projectName: "Real Estate Website",
      title: "Real Estate Website",
      date: "2025",
      location: "Client Project",
      isWinner: false,
      description: [
        "Built and deployed a custom real estate website for Petty Tai Realty (brokered by Realty One Group West)."
      ],
      links: [
        { icon: "fas fa-globe", label: "Website", url: "https://pettytairealtor.vercel.app/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">
      <Head>
        <title>Darren Shen - Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <PortfolioDock />
      <main className="container mx-auto px-6 py-24 max-w-4xl">

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-light mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">Work Experience</h2>
          <div>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-light mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">Projects</h2>
          <div>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-light mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
              <div className="w-16 h-16 flex-shrink-0">
                <Image 
                  src="https://community.cob.sjsu.edu/wp-content/uploads/2018/09/cropped-SJSU-Spartan-Logo.png" 
                  alt="SJSU Logo" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      San Jose State University
                    </h3>
                    <p className="text-md text-gray-700 dark:text-gray-300 mt-1">Bachelor of Science in Computer Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">GPA: 3.9/4.0</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 mt-1 sm:mt-0 sm:ml-4">Expected Graduation: May 2027</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Relevant Coursework</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">Calculus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">Discrete Math</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">C Programming</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">Data Structures & Algorithms</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 -ml-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Activities</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">The Software and Computer Engineering Society</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">Research Assistant in Distributed Systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2">–</span>
                        <span className="text-gray-600 dark:text-gray-400 font-light flex-1">Taiwanese Student Association</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <TechStack />
        </section>
      </main>
      <Analytics />
    </div>
  );
};

export default PortfolioPage;