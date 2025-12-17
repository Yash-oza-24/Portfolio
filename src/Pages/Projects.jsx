import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";

import chat from "../assets/image.png";
import pet from "../assets/image copy 3.png";
import food from "../assets/p1.jpg";
import attendance from "../assets/image copy 4.jpg";
import webblock from "../assets/image copy.png";
import monkey from "../assets/image copy 2.png";
import mvc from "../assets/folder.png"

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Chat Application",
      description: "Real-time messaging app with Socket.io",
      longDescription: "A full-stack chat application featuring real-time messaging, user authentication, and group chats. Built with MERN stack and Socket.io for seamless communication.",
      image: chat,
      category: "fullstack",
      featured: true,
      website: "https://chatyp.netlify.app/",
      github: "https://github.com/Yash-oza-24/chat_frontend",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Pet Adoption Platform",
      description: "Connect pets with loving homes",
      longDescription: "A platform allowing users to browse, adopt, and list pets for adoption. Features include pet profiles, adoption applications, and user dashboards.",
      image: pet,
      category: "fullstack",
      featured: true,
      website: "https://petstoreyp.netlify.app/",
      github: "https://github.com/Yash-oza-24/pet-adoption",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Food Ordering App",
      description: "Fast-food ordering platform",
      longDescription: "An intuitive food ordering application with menu browsing, cart functionality, and checkout process.",
      image: food,
      category: "fullstack",  
      github: "https://github.com/Yash-oza-24/food_fast_mern",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Attendance System",
      description: "Track and manage attendance",
      longDescription: "A comprehensive attendance management system with detailed reports and analytics.",
      image: attendance,
      featured: true,
      category: "fullstack",
      github: "https://github.com/Yash-oza-24/attendance_system",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Web Blocker Extension",
      description: "Browser productivity extension",
      longDescription: "A Chrome extension to block distracting websites and boost productivity.",
      image: webblock,
      category: "tools",
      github: "https://github.com/Yash-oza-24/webBlock",
      stack: ["JavaScript", "Chrome APIs"],
    },
    {
      title: "Typing Automation",
      description: "Puppeteer automation script",
      longDescription: "An automated typing test script using Puppeteer for Monkeytype.com.",
      image: monkey,
      category: "tools",
      github: "https://github.com/Yash-oza-24/Monkey_Type_Script",
      stack: ["Node.js", "Puppeteer"],
    },
    {
      title: "MVC Folder Structure",
      description: "Boilerplate for Node.js projects",
      longDescription: "A boilerplate project demonstrating a clean MVC folder structure for Node.js applications.",
      image: mvc,
      category: "tools",
      website: "https://marketplace.visualstudio.com/items?itemName=YashPrajapati2408.mvcfolderstructure",
      github: "https://github.com/Yash-oza-24/mvc-extension",
      stack: ["Node.js", "Express"],
    }
  ];

  const filters = ["all", "fullstack", "tools"];
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-accent font-mono text-sm mb-4"
            >
              03 / Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              Selected projects
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm rounded-full capitalize transition-all ${activeFilter === filter
                    ? "bg-accent text-dark font-medium"
                    : "bg-dark-100/80 text-white/60 hover:text-white border border-white/10"
                  }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative bg-dark-100/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ rotateY: 2, rotateX: 2 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-dark text-xs font-semibold rounded-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-70" />

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.span
                        className="flex items-center gap-2 px-5 py-2.5 bg-accent text-dark font-medium rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        animate={{ scale: 1, opacity: 1 }}
                      >
                        View Details <ArrowUpRight size={16} />
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold mb-2 text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-dark-200/80 text-white/60 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal - SMALLER SIZE */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-dark-100 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
              style={{ maxHeight: "70vh" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-20 p-1.5 bg-dark-200/80 backdrop-blur-sm rounded-full text-white/60 hover:text-white hover:bg-dark-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={16} />
              </motion.button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>
                {/* Image - Smaller aspect ratio */}
                <div className="relative aspect-[16/9]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />

                  {/* Featured badge */}
                  {selectedProject.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-accent text-dark text-[10px] font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content - More Compact */}
                <div className="p-5">
                  <h3 className="text-xl font-display font-bold mb-2 text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    {selectedProject.longDescription}
                  </p>

                  {/* Stack - Compact */}
                  <div className="mb-4">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1.5">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] bg-accent/10 text-accent border border-accent/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Compact */}
                  <div className="flex gap-2">
                    {selectedProject.website && (
                      <motion.a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent text-dark font-medium rounded-lg text-xs"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-white/10 text-white rounded-lg text-xs hover:bg-white/5 transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;