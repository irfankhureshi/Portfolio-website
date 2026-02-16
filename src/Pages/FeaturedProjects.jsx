import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaProjectDiagram } from "react-icons/fa";

const FeaturedProjects = ({ darkMode = false }) => {
  const projects = [
    {
      title: "Counter App",
      desc: "A simple yet elegant counter application built with React, featuring increment, decrement, and reset functionality with smooth animations.",
      tech: ["React", "JavaScript", "CSS"],
      color: "from-green-400 to-blue-500",
      link: "#",
      id: "counter-app"
    },
    {
      title: "Todo App",
      desc: "A comprehensive task management application with add, edit, delete, and mark as complete features. Includes local storage for data persistence.",
      tech: ["React", "Local Storage", "Tailwind"],
      color: "from-blue-400 to-cyan-500",
      link: "#",
      id: "todo-app"
    },
    {
      title: "API Fetch with Axios",
      desc: "Demonstrates API integration using Axios for fetching data from REST APIs. Includes error handling, loading states, and data display.",
      tech: ["React", "Axios", "API"],
      color: "from-purple-400 to-pink-500",
      link: "#",
      id: "api-fetch"
    },
    {
      title: "Search & Filter App",
      desc: "Advanced search and filtering functionality for large datasets. Features real-time search, multiple filter options, and sorting capabilities.",
      tech: ["React", "JavaScript", "CSS"],
      color: "from-indigo-400 to-purple-500",
      link: "#",
      id: "search-filter"
    },
    {
      title: "Form Validation",
      desc: "Robust form validation system with real-time feedback, custom validation rules, and user-friendly error messages for better UX.",
      tech: ["React", "JavaScript", "HTML"],
      color: "from-orange-400 to-red-500",
      link: "#",
      id: "form-validation"
    },
    {
      title: "Pagination App",
      desc: "Efficient pagination component for handling large lists of data. Includes page navigation, items per page selection, and smooth transitions.",
      tech: ["React", "JavaScript", "CSS"],
      color: "from-teal-400 to-green-500",
      link: "#",
      id: "pagination-app"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-linear-to-br from-slate-50 to-blue-50'}`}>
      {/* Featured Projects Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4">
            <FaProjectDiagram className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore my best and most impactful web development projects
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
                <FaProjectDiagram className="text-4xl text-white" />
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
                  {project.desc}
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

export default FeaturedProjects;
