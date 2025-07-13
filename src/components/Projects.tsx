import React from 'react';
import {
  FiUsers,
  FiBarChart2,
  FiTruck,
  FiBriefcase,
  FiShield,
  FiGitBranch,
  FiUser,
} from "react-icons/fi";

import ProjectCard from '../components/projectc-card';
import type { IconType } from 'react-icons';

interface Project {
  title: string;
  company: string;
  description: string;
  role: string;
  techStack: string[];
  challenges: string;
  tags: string[];
  icon: IconType;
  gradient: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Laboratory Incident Report",
      company: "Audree Infotech",
      description:
        "Led frontend efforts for a CRM system with 10,000+ users. Modular Angular components and seamless .NET Core API integration.",
      role: "Senior Frontend Developer",
      techStack: ["Angular", ".NET Core", "SQL Server", "Azure DevOps"],
      challenges: "Optimized large data rendering and implemented real-time alerts.",
      tags: ["#Angular", "#.NET", "#Enterprise", "#Performance"],
      icon: FiUsers,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Warehouse Management System",
      company: "Audree Infotech",
      description:
        "Designed backend infrastructure for tracking inventory, orders, and vendor coordination.",
      role: "Backend Developer",
      techStack: [".NET Core", "Web API", "SQL Server", "Azure"],
      challenges: "Handled microservices, database tuning, and third-party APIs.",
      tags: ["#.NET", "#Microservices", "#API", "#Azure"],
      icon: FiTruck,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Cost Of Capital",
      company: "Kroll",
      description:
        "Built financial dashboard for processing millions of transactions with interactive charts and insights.",
      role: "Full-Stack Developer",
      techStack: ["React.js", "C#", "Entity Framework", "SQL Server"],
      challenges: "Optimized APIs and real-time charting for dynamic financial data.",
      tags: ["#React", "#Analytics", "#RealTime", "#FinTech"],
      icon: FiBarChart2,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "HR Management Portal",
      company: "PeopleFirst Corp",
      description:
        "Developed internal portal for employee data, payroll, and appraisals with strong access control.",
      role: "Full-Stack Developer",
      techStack: ["Angular", ".NET Core", "Entity Framework", "Git"],
      challenges: "Implemented secure roles, data flows, and compliance logic.",
      tags: ["#Angular", "#Security", "#Workflow", "#Compliance"],
      icon: FiBriefcase,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
      data-name="projects"
      data-file="components/Projects.tsx"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-gray-900/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Professional Work Highlights
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Selected enterprise projects reflecting real-world experience in building scalable digital systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
       {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Enterprise Development Standards</h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            All projects followed team-based agile development, code reviews, and enterprise best practices.
          </p>
          <div className="flex justify-center space-x-12 text-gray-500">
            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FFC3] to-[#00A6FB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {FiUser({ className: "text-3xl text-white" })}
              </div>
              <span className="font-semibold group-hover:text-gray-300 transition-colors">
                Team Collaboration
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FFC3] to-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {FiGitBranch({ className: "text-3xl text-white" })}
              </div>
              <span className="font-semibold group-hover:text-gray-300 transition-colors">
                Version Control
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00A6FB] to-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {FiShield({ className: "text-3xl text-white" })}
              </div>
              <span className="font-semibold group-hover:text-gray-300 transition-colors">
                Code Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
