import React from 'react';
import {
  FiBarChart2,
  FiBriefcase,
  FiShield,
  FiGitBranch,
  FiUsers,
  FiFileText,
  FiBox,
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
      title: "Cost Of Capital",
      company: "Kroll",
      description:
        `Implemented industry benchmarking for WACC, Cost of Equity, and capital estimates.
Built real-time views for US and international financial metrics.`,
      role: "Full-Stack Developer",
      techStack: ["Angular", "C#", "Entity Framework", "SQL Server","kendo charts","kendo excel","Azure signalr"],
      challenges: "Enhanced API efficiency and redesigned UI for fast, interactive financial charting.",
      tags: ["#Angular", "#Analytics", "#RealTime", "#FinTech"],
      icon: FiBarChart2,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "PCM (Market Approach)",
      company: "Kroll",
      description:
        "Developed internal portal for employee data, payroll, and appraisals with strong access control.",
      role: "Full-Stack Developer",
      techStack: ["React js", "C#","Web API","SQL Server",".NET Core", "Entity Framework", "Git"],
      challenges: "Implemented secure roles, data flows, and compliance logic.",
      tags: ["#React", "#Analytics", "#RealTime", "##FinTech",],
      icon: FiBriefcase,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Laboratory Incident Report",
      company: "Audree Infotech",
      description:
        "Digitized the complete Laboratory Incident Report workflow from initiation to approval, including PDF export for audits.",
      role: "Full-Stack Developer",
      techStack: ["Angular", ".NET Core","Entity Framework", "SQL Server", "Git","HTML-PDF"],
      challenges: "Tackled challenges like manual tracking, approval delays, and audit readiness.",
      tags: ["#Angular", "#.NET", "#Enterprise", "#Performance"],
      icon: FiFileText ,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: " Warehouse Management Portal System",
      company: "Audree Infotech",
      description:"Developed a Warehouse Management System to track inventory from entry to dispatch with batch creation, real-time visibility, and audit compliance.",
      role: "Full-Stack Developer",
      techStack: [".NET Core", "Web API","Entity Framework", "SQL Server", "Azure"],
      challenges: "Handled dynamic approval workflows, full-cycle product traceability, and data consistency across modules.",
      tags: ["#.NET", "#Angular", "#API", "#Azure"],
      icon: FiBox,
      gradient: "from-orange-500 to-red-600",
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
                {FiUsers ({ className: "text-3xl text-white" })}
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
