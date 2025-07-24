import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bootstrap from "../assets/image copy 5.jpg";
import landing from "../assets/image copy.jpg";
import construct from "../assets/image.jpg";
import food from "../assets/p1.jpg";
import attendance from "../assets/image copy 4.jpg";
import chat from "../assets/image.png";
import webblock from "../assets/image copy.png";
import monkey from "../assets/image copy 2.png";
import pet from "../assets/image copy 3.png";
import { useState } from "react";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const projects = [
    {
      title: "Bootstrap Web",
      description:
        "A simple responsive website built with Bootstrap and HTML/CSS.",
      longDescription:
        "This project demonstrates the use of Bootstrap's grid system, components, and utilities to create a modern, responsive website. It features a clean layout, navigation bar, and interactive elements, making it a great example for beginners learning Bootstrap.",
      image: bootstrap,
      website: "https://bootstrap-yp.netlify.app/",
      github: "https://github.com/Yash-oza-24/bootstrap-website",
      technologies: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Landing Page",
      description: "A modern landing page built with React and Tailwind CSS.",
      longDescription:
        "This landing page project showcases a clean, responsive design using React for component structure and Tailwind CSS for rapid styling. It includes smooth scrolling, animated sections, and a focus on user experience, making it ideal for product or service promotion.",
      image: landing,
      website: "https://landingyp.netlify.app/",
      github: "https://github.com/Yash-oza-24/Landingpage",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "Construction Site",
      description:
        "A construction project management site built with React and Tailwind CSS.",
      longDescription:
        "This project provides a platform for managing construction projects efficiently. It includes features for project tracking, resource management, and team collaboration, all within a user-friendly and responsive interface.",
      image: construct,
      website: "https://constructionyp.netlify.app/",
      github: "https://github.com/Yash-oza-24/Construction-site",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Food Fast-Food Ordering Website",
      description:
        "A fast-food ordering platform with a smooth user experience.",
      longDescription:
        "Food Fast allows users to browse an extensive menu, add favorite dishes to the cart, and complete a seamless checkout process. The site is designed for speed and usability, making online food ordering easy and efficient.",
      image: food,
      github: "https://github.com/Yash-oza-24/food_fast_mern",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Attendance Management System",
      description: "A web app for tracking and managing attendance records.",
      longDescription:
        "This system offers a user-friendly UI to track attendance, generate detailed reports, and manage student or employee records. It is designed for educational institutions and organizations seeking efficient attendance solutions.",
      image: attendance,
      github: "https://github.com/Yash-oza-24/attendance_system",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    },
    {
      title: "Chat Application",
      description: "A real-time chat app for friends and family.",
      longDescription:
        "This chat application supports real-time messaging using Socket.io, user authentication, and group chats. Built with a MERN stack, it features a responsive UI and secure backend. Users can create chat rooms, send direct messages, and experience instant updates.",
      image: chat,
      website: "https://chatyp.netlify.app/",
      github: {
        frontend: "https://github.com/Yash-oza-24/chat_frontend",
        backend: "https://github.com/Yash-oza-24/chat_backend",
      },
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
    },
    {
      title: "Web Blocker Extension",
      description:
        "A browser extension to block distracting websites and improve productivity.",
      longDescription:
        "Web Blocker is a browser extension that allows users to block access to specified websites, helping them stay focused and productive. Users can add or remove sites from the block list, set custom block messages, and enable/disable blocking as needed. Ideal for students and professionals looking to minimize distractions.",
      image: webblock, // You can add an appropriate image asset if available
      github: "https://github.com/Yash-oza-24/webBlock",
      technologies: ["JavaScript", "HTML", "CSS", "Browser Extension APIs"],
    },
    {
      title: "Monkey Type Script Automation",
      description:
        "A Node.js automation tool for Monkeytype typing tests using Puppeteer.",
      longDescription:
        "Monkey Type Script automates typing tests and login on Monkeytype.com using Puppeteer. It features automated login with cookie persistence, automated typing test execution, and session management. The tool is ideal for practicing typing or automating repetitive typing test tasks.",
      image: monkey, // Add an image asset if available
      github: "https://github.com/Yash-oza-24/Monkey_Type_Script",
      technologies: [
        "Node.js",
        "JavaScript",
        "Puppeteer",
        "Winston",
        "Automation",
      ],
    },
    {
      title: "Pet Adoption Platform",
      description: "A full-stack web application for adopting and listing pets.",
      longDescription:
        "Pet Adoption is a MERN stack project that allows users to browse, adopt, and list pets for adoption. It features authentication, real-time updates, and a user-friendly interface for both adopters and pet owners. The project is split into frontend and backend repositories, and is deployed live for demo purposes.",
      image: pet, // Replace with a more relevant image if available
      website: "https://petstoreyp.netlify.app/",
      github: "https://github.com/Yash-oza-24/pet-adoption",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <div ref={ref} className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are some of my recent works
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-9">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform transition-transform duration-500 "
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal for project details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-gray-900 rounded-lg p-8 max-w-lg w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-green-400 text-2xl font-bold"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-2">
                {selectedProject.description}
              </p>
              {/* Technologies badges */}
              {selectedProject.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-800 text-green-200 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {/* Long description */}
              {selectedProject.longDescription && (
                <p className="text-gray-400 mb-4">
                  {selectedProject.longDescription}
                </p>
              )}
              <div className="flex gap-4">
                {/* Only show website button if website exists */}
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 hover:bg-green-500 text-black font-medium py-2 px-4 rounded transition-all duration-300"
                  >
                    Visit Website
                  </a>
                )}
                {/* Show GitHub links: single or both frontend/backend */}
                {typeof selectedProject.github === "string" ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-all duration-300"
                  >
                    View Code
                  </a>
                ) : (
                  <>
                    {selectedProject.github.frontend && (
                      <a
                        href={selectedProject.github.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-all duration-300"
                      >
                        Frontend Code
                      </a>
                    )}
                    {selectedProject.github.backend && (
                      <a
                        href={selectedProject.github.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-all duration-300"
                      >
                        Backend Code
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
