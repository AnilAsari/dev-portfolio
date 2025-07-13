import { FiBriefcase } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900/30"
      data-name="about"
      data-file="components/About.tsx"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Updated Text Section --- */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5+ years of hands-on experience in corporate environments, I specialize in building enterprise-scale web applications that serve thousands of users. My expertise spans the entire development lifecycle, from database design to user interface implementation.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I thrive in collaborative team settings, working closely with product managers, designers, and QA engineers. My work includes contributing to large-scale .NET APIs, designing responsive frontends using Angular and React, and implementing efficient database solutions with SQL Server.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I'm passionate about clean code, scalable architecture, and creating solutions that blend performance with great user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-green-400">
                <div className="icon-check-circle text-lg"></div>
                <span>Enterprise Applications</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="icon-check-circle text-lg"></div>
                <span>Full SDLC Experience</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="icon-check-circle text-lg"></div>
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="icon-check-circle text-lg"></div>
                <span>Scalable Architecture</span>
              </div>
            </div>
          </div>

          {/* --- Centered Profile Section --- */}
          <div className="flex justify-center items-center h-full">
            <div className="relative group w-80 h-80 mt-0">
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs text-gray-300 font-medium tracking-wider">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=280&fit=crop&crop=face&auto=format"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-xl group-hover:border-emerald-500/30 transition-all duration-500 group-hover:shadow-emerald-500/20"
              />

              {/* Briefcase Icon */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-4 border-2 border-gray-700 group-hover:border-emerald-500/50 transition-all duration-300">
                {FiBriefcase({
                  className:
                    "text-2xl text-emerald-400/80 group-hover:text-emerald-400 transition-colors duration-300",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
