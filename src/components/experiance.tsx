import React from "react";
import {  FiCode, FiUsers, FiTrendingUp } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  icon: React.ReactNode;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experienceList: ExperienceItem[] = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 – Present",
      icon: <FiCode className="text-xl text-emerald-400" />,
      responsibilities: [
        "Developed scalable web apps using Angular, React, and ASP.NET Core.",
        "Designed RESTful APIs with Entity Framework and SQL Server.",
        "Integrated CI/CD pipelines with Azure DevOps and Docker.",
        "Led frontend architecture for component-driven development.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Innovatech Systems",
      duration: "Aug 2020 – Dec 2022",
      icon: <FiTrendingUp className="text-xl text-emerald-400" />,
      responsibilities: [
        "Built internal tools using .NET and React.js.",
        "Optimized database performance and API response time by 35%.",
        "Collaborated with product and QA teams in agile sprints.",
        "Maintained Git workflows and code reviews for better dev practices.",
      ],
    },
    {
      role: "Intern - Web Development",
      company: "NextGen Labs",
      duration: "Jan 2020 – Jul 2020",
      icon: <FiUsers className="text-xl text-emerald-400" />,
      responsibilities: [
        "Assisted in building responsive UIs with HTML, CSS, and JavaScript.",
        "Learned backend basics using C# and Web APIs.",
        "Contributed to internal project documentation and QA testing.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20"
      data-name="experience"
      data-file="components/Experience.tsx"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            A journey through my professional roles as a Full Stack Developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="card-dark group h-full flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-xs">{exp.duration}</p>
                  </div>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
