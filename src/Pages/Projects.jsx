import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode = false }) => {
  const projects = [
    {
      id: "counter-app",
      title: "Counter App",
      description: "An interactive counter application with increment, decrement, and reset functionality.",
      color: "from-green-400 to-blue-500",
      image: "🔢",
      tech: ["React", "Hooks", "State"]
    },
    {
      id: "todo-app",
      title: "Todo App",
      description: "A fully-featured task management application with add, delete, and mark complete functionality.",
      color: "from-purple-400 to-pink-500",
      image: "✓",
      tech: ["React", "Local Storage", "Hooks"]
    },
    {
      id: "api-fetch",
      title: "API Fetch with Axios",
      description: "A data fetching application that demonstrates REST API integration using Axios.",
      color: "from-orange-400 to-red-500",
      image: "🌐",
      tech: ["React", "Axios", "REST API"]
    },
    {
      id: "search-filter",
      title: "Search & Filter",
      description: "Advanced search interface with real-time filtering and sorting capabilities.",
      color: "from-indigo-400 to-purple-500",
      image: "🔍",
      tech: ["React", "Filtering", "Search"]
    },
    {
      id: "form-validation",
      title: "Form Validation",
      description: "Comprehensive form with client-side validation and error handling.",
      color: "from-pink-400 to-rose-500",
      image: "📋",
      tech: ["React", "Validation", "Forms"]
    },
    {
      id: "pagination-app",
      title: "Pagination App",
      description: "Efficient data pagination with search and navigation controls.",
      color: "from-cyan-400 to-blue-600",
      image: "📄",
      tech: ["React", "Pagination", "Data"]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-linear-to-br from-slate-50 to-blue-50'}`}>
      {/* Projects Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore my collection of web development projects built with modern technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer`}
            >
              {/* Project Header */}
              <div className={`h-32 bg-linear-to-r ${project.color} flex items-center justify-center relative`}>
                <span className="text-6xl">{project.image}</span>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <FaExternalLinkAlt className="text-white text-sm" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`font-bold text-xl mb-3 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-800 group-hover:text-blue-600'} transition-colors duration-300`}>
                  {project.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed text-sm`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium transition-all duration-300 group-hover:translate-x-1 transform flex items-center gap-2`}>
                  View Details <FaExternalLinkAlt className="text-sm" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
