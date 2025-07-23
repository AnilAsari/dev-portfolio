import React from "react";
import type { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  role: string;
  techStack: string[];
  challenges: string;
  tags: string[];
  icon: IconType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  company,
  description,
  role,
  techStack,
  challenges,
  tags,
  icon,
}) => {
  return (
    <div className="group relative card-dark rounded-xl shadow-md p-6 transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-blue-500/20 group-hover:glow-effect transition-all duration-300">
          {icon({className:"text-xl text-white"})}
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-blue-400 font-medium ">{company}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>

      <div className="mb-4">
        <h4 className="text-green-400 font-semibold text-sm mb-1">My Role</h4>
        <p className="text-sm text-gray-200 font-medium">{role}</p>
      </div>

      

      <div className="mb-4">
        <h4 className="text-green-400 font-semibold text-sm mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-700 text-gray-100 px-3 py-1 rounded-lg text-xs border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-green-400 font-semibold text-sm mb-1">Key Challenges</h4>
        <p className="text-sm text-gray-300">{challenges}</p>
      </div>

      <div className="pt-4 border-t border-gray-700 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-blue-400 font-semibold text-xs hover:underline cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
