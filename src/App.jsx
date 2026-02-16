// import React, { useState, useEffect } from "react";
// import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaBriefcase, FaGraduationCap, FaStar, FaQuoteLeft, FaBlog, FaChartLine, FaAward, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
// import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
// import { Link, Route,  } from "react-router-dom";
// import { MdWork, MdSchool } from "react-icons/md";
// import { BsArrowUpCircle } from "react-icons/bs";
// import Pagination from "./Pages/Pagination";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`font-sans text-gray-800 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-linear-to-br from-slate-50 to-blue-50'} min-h-screen transition-colors duration-300 `}>

//       {/* ===== Navbar ===== */}
//       <nav className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md shadow-lg z-50 border-b ${darkMode ? 'border-gray-700' : 'border-white/20'} transition-colors duration-300`}>
//         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</h1>
//           <div className="flex items-center space-x-8">
//             <div className="space-x-8 hidden md:flex">
//               <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>About</a>
//               <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Experience</a>
//               <a href="#skills" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Skills</a>
//               <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Projects</a>
//               <a href="#testimonials" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Testimonials</a>
//               <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Contact</a>
//             </div>
//             <button
//               onClick={toggleDarkMode}
//               className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} transition-colors duration-300`}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ===== Hero Section ===== */}
//       <section className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-linear-to-br from-gray-900 via-gray-800 to-blue-900' : 'bg-linear-to-br from-blue-50 via-white to-purple-50'} pt-20 relative overflow-hidden`}>
//         <div className={`absolute inset-0 ${darkMode ? 'bg-linear-to-br from-blue-900/20 to-purple-900/20' : 'bg-linear-to-br from-blue-50/20 to-purple-50/20'}`}></div>
//         <div className="text-center px-4 relative z-10 animate-fade-in-up">
//           <div className="mb-6">
//             <FaUser className={`text-6xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4 animate-bounce`} />
//           </div>
//           <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Hi, I'm Frontend Developer
//           </h2>
//           <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto leading-relaxed`}>
//             Crafting beautiful, responsive web experiences with modern technologies and creative design.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <a
//               href="#projects"
//               className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               View My Work
//             </a>
//             <a
//               href="#contact"
//               className={`border-2 ${darkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'} px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105`}
//             >
//               Get In Touch
//             </a>
//           </div>

//           {/* Statistics */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {[
//               { number: "50+", label: "Projects Completed", icon: FaProjectDiagram },
//               { number: "6 months+", label: "Internship Experience", icon: FaBriefcase },
//               { number: "100%", label: "Client Satisfaction", icon: FaStar },
//               { number: "24/7", label: "Support", icon: FaEnvelope }
//             ].map((stat, index) => (
//               <div key={index} className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
//                 <stat.icon className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-2`} />
//                 <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>{stat.number}</div>
//                 <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== About ===== */}
//       <section id="about" className="py-24 max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <FaUser className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
//           <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-linear-to-r from-gray-100 to-gray-300' : 'bg-linear-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>About Me</h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               I'm a passionate frontend developer specializing in creating beautiful, responsive, and user-friendly web interfaces.
//               I love bringing designs to life with clean, efficient code and modern web technologies.
//             </p>
//             <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               My expertise lies in React, JavaScript, and CSS frameworks. I focus on writing maintainable code,
//               optimizing performance, and delivering exceptional user experiences.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-300`}>
//                 <FaGithub className="text-2xl" />
//               </a>
//               <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-300`}>
//                 <FaLinkedin className="text-2xl" />
//               </a>
//               <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition-colors duration-300`}>
//                 <FaTwitter className="text-2xl" />
//               </a>
//             </div>
//           </div>
//           <div className={`bg-linear-to-br ${darkMode ? 'from_gray-800 to-gray-700' : 'from-blue-100 to-purple-100'} p-8 rounded-2xl shadow-lg`}>
//             <div className="text-center">
//               <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <FaUser className="text-4xl text-white" />
//               </div>
//               <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Frontend Developer</h3>
//               <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>React • JavaScript • CSS • UI/UX</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Experience ===== */}
//       <section id="experience" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <FaBriefcase className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
//             <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-100 to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>Experience & Education</h2>
//           </div>

//           <div className="space-y-8">
//             {/* Experience Timeline */}
//             <div className="space-y-6">
//               <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Work Experience</h3>
//               {[
//                 {
//                   title: "Frontend Developer",
//                   company: "Tech Solutions Inc.",
//                   period: "2023 - Present",
//                   description: "Developing responsive web applications using React and modern CSS frameworks. Collaborating with design teams to implement pixel-perfect UI components.",
//                   type: "work"
//                 },
//                 {
//                   title: "Junior Web Developer",
//                   company: "Digital Agency",
//                   period: "2022 - 2023",
//                   description: "Built interactive websites and web applications. Worked with HTML, CSS, JavaScript, and various frameworks to deliver high-quality solutions.",
//                   type: "work"
//                 },
//                 {
//                   title: "Freelance Developer",
//                   company: "Self-Employed",
//                   period: "2021 - 2022",
//                   description: "Created custom websites and web applications for small businesses. Managed full project lifecycle from concept to deployment.",
//                   type: "work"
//                 }
//               ].map((exp, index) => (
//                 <div key={index} className={`flex items-start space-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
//                   <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white`}>
//                     <MdWork className="text-xl" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
//                       <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{exp.title}</h4>
//                       <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>{exp.period}</span>
//                     </div>
//                     <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{exp.company}</p>
//                     <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Education */}
//             <div className="space-y-6">
//               <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h3>
//               {[
//                 {
//                   degree: "BCA (Bachelor of Computer Applications)",
//                   school: "CRSU University",
//                   period: "2022 - 2025",
//                   description: "Focused on web development, software engineering, and computer science fundamentals.",
//                   type: "education"
//                 },
//                 {
//                   degree: "Web Development Certification",
//                   school: "From Chandigarh University",
//                   period: "2025",
//                   description: "Comprehensive course covering modern web technologies including React, Node.js, and database design.",
//                   type: "education"
//                 }
//               ].map((edu, index) => (
//                 <div key={index} className={`flex items-start space-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
//                   <div className={`p-3 rounded-full ${darkMode ? 'bg-green-600' : 'bg-green-500'} text-white`}>
//                     <MdSchool className="text-xl" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
//                       <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{edu.degree}</h4>
//                       <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>{edu.period}</span>
//                     </div>
//                     <p className={`text-lg ${darkMode ? 'text-green-400' : 'text-green-600'} mb-2`}>{edu.school}</p>
//                     <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Skills ===== */}
//       <section id="skills" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <FaCode className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
//             <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-100 to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>Skills & Technologies</h2>
//           </div>

//           {/* Technical Skills */}
//           <div className="mb-12">
//             <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
//                 { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
//                 { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
//                 { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
//                 { name: "Git", level: 85, color: "from-red-400 to-pink-500" },
//                 { name: "Responsive Design", level: 90, color: "from-green-400 to-emerald-500" }
//               ].map(skill => (
//                 <div key={skill.name} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
//                   <div className="flex justify-between items-center mb-3">
//                     <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</span>
//                     <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
//                   </div>
//                   <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
//                     <div
//                       className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tools & Technologies */}
//           <div>
//             <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tools & Frameworks</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { name: "VS Code", color: "from-blue-400 to-blue-600" },
//                 { name: "Github-Copilot", color: "from-purple-400 to-pink-500" },
//                 { name: "GitHub", color: "from-gray-400 to-gray-600" },
//                 { name: "Chrome DevTools", color: "from-orange-400 to-red-500" },
//                 { name: "Vite", color: "from-yellow-400 to-orange-500" },
//                 { name: "ChatGpt", color: "from-blue-500 to-indigo-600" },
//                 { name: "Git", color: "from-purple-500 to-violet-600" },
//                 { name: "Tailwind", color: "from-pink-400 to-rose-500" }
//               ].map(tool => (
//                 <div
//                   key={tool.name}
//                   className={`bg-gradient-to-r ${tool.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white text-center font-semibold text-lg`}
//                 >
//                   {tool.name}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Projects ===== */}
//       <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-800' : ''} max-w-6xl mx-auto px-6`}>
//         <div className="text-center mb-16">
//           <FaProjectDiagram className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
//           <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-100 to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>Featured Projects</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Counter App",
//               desc: "A simple yet elegant counter application built with React, featuring increment, decrement, and reset functionality with smooth animations.",
//               tech: ["React", "JavaScript", "CSS"],
//               color: "from-green-400 to-blue-500",
//               link: "#"
//             },
//             {
//               title: "Todo App",
//               desc: "A comprehensive task management application with add, edit, delete, and mark as complete features. Includes local storage for data persistence.",
//               tech: ["React", "Local Storage", "Tailwind"],
//               color: "from-blue-400 to-cyan-500",
//               link: "#"
//             },
//             {
//               title: "API Fetch with Axios",
//               desc: "Demonstrates API integration using Axios for fetching data from REST APIs. Includes error handling, loading states, and data display.",
//               tech: ["React", "Axios", "API"],
//               color: "from-purple-400 to-pink-500",
//               link: "#"
//             },
//             {
//               title: "Search & Filter App",
//               desc: "Advanced search and filtering functionality for large datasets. Features real-time search, multiple filter options, and sorting capabilities.",
//               tech: ["React", "JavaScript", "CSS"],
//               color: "from-indigo-400 to-purple-500",
//               link: "#"
//             },
//             {
//               title: "Form Validation",
//               desc: "Robust form validation system with real-time feedback, custom validation rules, and user-friendly error messages for better UX.",
//               tech: ["React", "JavaScript", "HTML"],
//               color: "from-orange-400 to-red-500",
//               link: "#"
//             },
//             {
//               title: "Pagination App",
//               desc: "Efficient pagination component for handling large lists of data. Includes page navigation, items per page selection, and smooth transitions.",
//               tech: ["React", "JavaScript", "CSS"],
//               color: "from-teal-400 to-green-500",
//               link: "#",
//             }
//           ].map(project => (
//             <div
//               key={project.title}
//               className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group`}
//             >
//               <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative`}>
//                 <FaProjectDiagram className="text-4xl text-white" />
//                 <a
//                   href={project.link}
//                   className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 p-2 rounded-full hover:bg-white/30"
//                 >
//                   <FaExternalLinkAlt className="text-white text-sm" />
//                 </a>
//               </div>
//               <div className="p-6">
//                 <h3 className={`font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>{project.desc}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map(tech => (
//                     <span key={tech} className={`${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'} px-3 py-1 rounded-full text-sm`}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'} font-medium transition-colors duration-300 group-hover:translate-x-1 transform flex items-center gap-2`}>
//                   View Project <FaExternalLinkAlt className="text-sm" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== Testimonials ===== */}
//       <section id="testimonials" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <FaStar className={`text-4xl ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} mx-auto mb-4`} />
//             <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-100 to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>What Clients Say</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sarah Johnson",
//                 role: "Product Manager",
//                 company: "TechCorp",
//                 content: "Exceptional work! The website exceeded our expectations with its modern design and smooth functionality. Highly recommend for any web development needs.",
//                 rating: 5,
//                 avatar: "SJ"
//               },
//               {
//                 name: "Michael Chen",
//                 role: "Startup Founder",
//                 company: "InnovateLab",
//                 content: "Delivered the project on time with outstanding quality. The attention to detail and user experience is remarkable. Will definitely work together again.",
//                 rating: 5,
//                 avatar: "MC"
//               },
//               {
//                 name: "Emily Rodriguez",
//                 role: "Marketing Director",
//                 company: "BrandBoost",
//                 content: "Professional, creative, and reliable. The portfolio website they created helped us attract more clients. Excellent communication throughout the project.",
//                 rating: 5,
//                 avatar: "ER"
//               }
//             ].map((testimonial, index) => (
//               <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="text-yellow-400 text-sm" />
//                   ))}
//                 </div>
//                 <FaQuoteLeft className={`text-3xl ${darkMode ? 'text-gray-600' : 'text-gray-300'} mb-4`} />
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed italic`}>
//                   "{testimonial.content}"
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{testimonial.name}</h4>
//                     <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                       {testimonial.role} at {testimonial.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== Contact ===== */}
//       <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <FaEnvelope className={`text-4xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mx-auto mb-4`} />
//             <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-100 to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>Get In Touch</h2>
//             <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Let's work together on your next project</p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-2">
//               <div className="flex items-center space-x-4">
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-full`}>
//                   <HiOutlineMail className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-xl`} />
//                 </div>
//                 <div className="">
//                   <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email</h3>
//                   <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>irfankhureshi135@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
              
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-full`}>
//                   <FaGithub className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-xl`} />
//                 </div>
//                 <div>
//                   <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>GitHub</h3>
//                   <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>@yourusername</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-full`}>
//                  <Link to='https://www.linkedin.com/in/irfan-khan'> <FaLinkedin className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-xl`} /> </Link>
//                 </div>
//                 <div>
//                   <Link to='https://www.linkedin.com/in/irfan-khan'> <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>LinkedIn</h3> </Link>
//                   <Link to ='https://www.linkedin.com/in/irfan-khan'> <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Irfan Khureshi</p></Link>
//                 </div>
//               </div>
//             </div>
//             <form className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg space-y-6`}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300'} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300'} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   rows="4"
//                   className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300'} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
//                 />
//               </div>
//               <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ===== Footer ===== */}
//       <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-8 relative`}>
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-gray-400 mb-4">
//             © 2026 Frontend Developer | Built with ❤️ using React & Tailwind CSS
//           </p>
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <FaGithub className="text-xl" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <FaLinkedin className="text-xl" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <FaTwitter className="text-xl" />
//             </a>
//           </div>
//         </div>

//         {/* Scroll to Top Button */}
//         {showScrollTop && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
//             aria-label="Scroll to top"
//           >
//             <BsArrowUpCircle className="text-2xl" />
//           </button>
//         )}
//       </footer>

    
//     </div>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;


