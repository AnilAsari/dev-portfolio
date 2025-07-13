import React from "react";
import type { IconType } from "react-icons";
import { FiMonitor, FiDatabase, FiServer, FiSettings,FiLayers,FiGrid,FiRepeat,FiEye,FiCheckSquare, FiZap    } from "react-icons/fi";

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

interface ApproachCategory {
  title: string;
  icon: IconType;
  description: string;
}

const Skills: React.FC = () => {
  try {
    const skillCategories: SkillCategory[] = [
      {
        title: "Frontend",
        icon: FiMonitor,
        skills: [
          "Angular",
          "React.js",
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        title: "Backend",
        icon: FiServer,
        skills: [
          "C#",
          ".NET",
          "Web API",
          "Entity Framework",
          "ASP.NET Core",
          "REST APIs",
        ],
      },
      {
        title: "Database",
        icon: FiDatabase,
        skills: [
          "SQL Server",
          "Entity Framework",
          "T-SQL",
          "Database Design",
          "Performance Optimization",
        ],
      },
      {
        title: "DevOps & Tools",
        icon: FiSettings,
        skills: [
          "Git",
          "Azure DevOps",
          "Postman",
          "Visual Studio",
          "VS Code",
          "Docker",
          "CI/CD",
        ],
      },
    ];

      const approaches:ApproachCategory[] = [
      {
        icon: FiLayers,
        title: "Modular Architecture",
        description: "Building scalable systems with clean separation of concerns"
      },
      {
        icon: FiGrid ,
        title: "Component-Driven Design", 
        description: "Reusable components for maintainable user interfaces"
      },
      {
        icon: FiZap,
        title: "API-First Development",
        description: "Designing robust APIs before frontend implementation"
      },
      {
        icon: FiRepeat,
        title: "Agile Methodology",
        description: "Iterative development with continuous collaboration"
      },
      {
        icon: FiEye,
        title: "Code Reviews",
        description: "Ensuring code quality through peer review process"
      },
      {
        icon: FiCheckSquare,
        title: "Unit Testing",
        description: "Comprehensive testing for reliable software delivery"
      }
    ];

    return (
      <section
        id="skills"
        className="py-20"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 text-lg">
              Technologies I work with to build amazing applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title + index} className="card-dark group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:glow-effect transition-all duration-300">
                    {category.icon({ className: "text-2xl text-emerald-400" })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill + skillIndex}
                      className="skill-badge text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-12">
                Development Approaches
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {approaches.map((approach, index) => (
    <div
      key={index}
      className="card-dark group h-full flex flex-col justify-between p-6"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:glow-effect transition-all duration-300">
            {approach.icon({ className: "text-xl text-emerald-400" })}
          </div>
          <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-colors duration-300">
            {approach.title}
          </h4>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {approach.description}
        </p>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Skills component error:", error);
    return null;
  }
};

export default Skills;
