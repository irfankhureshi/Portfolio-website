import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Counter from "./Counter";
import Todo from "./Todo";
import ApiFetch from "./ApiFetch";
import SearchFilter from "./SearchFilter";
import FormValidation from "./FormValidation";
import Pagination from "./Pagination";

const ProjectDetail = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = {
    "counter-app": {
      title: "Counter App",
      description: "An interactive counter application with increment, decrement, and reset functionality.",
      longDescription: "This Counter App is a simple yet functional React project that demonstrates state management using React hooks. Users can increment or decrement a counter value with smooth animations and transitions.",
      tech: ["React", "Hooks", "State Management"],
      features: [
        "Increment button to add 1 to counter",
        "Decrement button to subtract 1 from counter",
        "Reset button to set counter back to 0",
        "Smooth animations and transitions",
        "Responsive design for all devices"
      ],
      color: "from-green-400 to-blue-500",
      liveUrl: "#",
      githubUrl: "#",
      image: "🔢"
    },
    "todo-app": {
      title: "Todo App",
      description: "A fully-featured task management application with add, delete, and mark complete functionality.",
      longDescription: "The Todo App is a complete task management system built with React. It uses local storage to persist tasks, allowing users to manage their daily tasks effectively with a clean and intuitive interface.",
      tech: ["React", "Local Storage", "Hooks"],
      features: [
        "Add new tasks easily",
        "Mark tasks as complete",
        "Delete completed or unwanted tasks",
        "Local storage persistence",
        "Filter tasks by status",
        "Beautiful UI with animations"
      ],
      color: "from-purple-400 to-pink-500",
      liveUrl: "#",
      githubUrl: "#",
      image: "✓"
    },
    "api-fetch": {
      title: "API Fetch with Axios",
      description: "A data fetching application that demonstrates REST API integration using Axios.",
      longDescription: "This project showcases real-world API integration using Axios. It fetches data from a public API and displays it in a beautiful format with error handling and loading states.",
      tech: ["React", "Axios", "REST API", "Async/Await"],
      features: [
        "Fetch data from external APIs",
        "Loading state indicators",
        "Error handling and display",
        "Display data in cards/lists",
        "Search and filter functionality",
        "Responsive grid layout"
      ],
      color: "from-orange-400 to-red-500",
      liveUrl: "#",
      githubUrl: "#",
      image: "🌐"
    },
    "search-filter": {
      title: "Search & Filter",
      description: "Advanced search interface with real-time filtering and sorting capabilities.",
      longDescription: "This project demonstrates advanced filtering and search techniques in React. Users can search by name, filter by category, and sort results in real-time with instant visual feedback.",
      tech: ["React", "Filtering", "Search Algorithm"],
      features: [
        "Real-time search functionality",
        "Filter by multiple categories",
        "Sort results (A-Z, Z-A, newest)",
        "Highlight matching results",
        "Responsive design",
        "Smooth transitions and animations"
      ],
      color: "from-indigo-400 to-purple-500",
      liveUrl: "#",
      githubUrl: "#",
      image: "🔍"
    },
    "form-validation": {
      title: "Form Validation",
      description: "Comprehensive form with client-side validation and error handling.",
      longDescription: "A production-ready form validation system built with React. It includes real-time validation feedback, error messages, and multiple input types with proper validation rules.",
      tech: ["React", "Validation", "Form Handling"],
      features: [
        "Real-time field validation",
        "Error message display",
        "Multiple input types support",
        "Password strength indicator",
        "Email and phone validation",
        "Custom validation rules"
      ],
      color: "from-pink-400 to-rose-500",
      liveUrl: "#",
      githubUrl: "#",
      image: "📋"
    },
    "pagination-app": {
      title: "Pagination App",
      description: "Efficient data pagination with search and navigation controls.",
      longDescription: "A pagination system that efficiently handles large datasets. Features include navigating between pages, customizable items per page, and search functionality integrated with pagination.",
      tech: ["React", "Pagination", "Data Management"],
      features: [
        "Navigate between pages",
        "Customize items per page",
        "Quick jump to page",
        "Previous/Next buttons",
        "Search within paginated data",
        "Show total items and pages"
      ],
      color: "from-cyan-400 to-blue-600",
      liveUrl: "#",
      githubUrl: "#",
      image: "📄"
    }
  };

  const project = projects[projectId] || projects["counter-app"];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* ===== Navbar ===== */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-lg z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</Link>
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </nav>

      {/* ===== Project Hero ===== */}
      <section className={`bg-linear-to-r ${project.color} pt-32 pb-16 text-white`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-8xl mb-6">{project.image}</div>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl opacity-90">{project.description}</p>
        </div>
      </section>

      {/* ===== Project Content ===== */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <span className="text-blue-500 font-bold text-lg">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(tech => (
                  <span key={tech} className={`bg-linear-to-r ${project.color} text-white px-4 py-2 rounded-full font-medium`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Project Type</p>
                  <p className="text-gray-800 font-semibold">React Frontend Application</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Complexity Level</p>
                  <p className="text-gray-800 font-semibold">Intermediate</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                    <a
                    href={project.liveUrl}
                    className={`w-full bg-linear-to-r ${project.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Live Demo ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Try It Out</h2>
            <p className="text-lg text-gray-600">Interact with the live application below</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            {projectId === "counter-app" && <Counter />}
            {projectId === "todo-app" && <Todo />}
            {projectId === "api-fetch" && <ApiFetch />}
            {projectId === "search-filter" && <SearchFilter />}
            {projectId === "form-validation" && <FormValidation />}
            {projectId === "pagination-app" && <Pagination />}
          </div>
        </div>
      </section>

      {/* ===== Related Projects ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(projects)
              .filter(([key]) => key !== projectId)
              .slice(0, 3)
              .map(([key, proj]) => (
                <Link
                  key={key}
                  to={`/project/${key}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-24 bg-linear-to-r ${proj.color}`}></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{proj.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2026 Frontend Developer | Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
