import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTailwindcss, SiPython, SiHtml5, SiCss3, SiBootstrap,
  SiSocketdotio, SiGit, SiPuppeteer, 
  SiGithub,
  SiFirebase,
  SiPostman,
  SiRedux
} from "react-icons/si";

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"},
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
        { name: "Puppeteer", icon: SiPuppeteer, color: "#40B2A0" },
      ],
    },
   {
  title: "Tools & Others",
  skills: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
  ],
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <motion.p
            className="text-accent font-mono text-sm mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            02 / Skills
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            My toolkit
          </motion.h2>
          <motion.p
            className="text-white/50 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technologies and tools I use to bring products to life.
          </motion.p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
            >
              <h3 className="text-xl font-display font-semibold text-white/80 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent" />
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {category.skills.map((skill, index) => {
                  const globalIndex = catIndex * 10 + index;
                  const isHovered = hoveredIndex === globalIndex;

                  return (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      variants={cardVariants}
                      onHoverStart={() => setHoveredIndex(globalIndex)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{
                        y: -10,
                        rotateY: 10,
                        rotateX: 5,
                      }}
                      style={{ perspective: "1000px" }}
                      className="relative group cursor-pointer"
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                        style={{ backgroundColor: skill.color }}
                        animate={{ opacity: isHovered ? 0.2 : 0 }}
                      />

                      {/* Card */}
                      <motion.div
                        className="relative p-6 bg-dark-100/80 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all duration-300"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={{
                          boxShadow: isHovered
                            ? `0 20px 40px -20px ${skill.color}40`
                            : "0 0 0 0 transparent",
                        }}
                      >
                        {/* Icon */}
                        <motion.div
                          className="flex justify-center mb-4"
                          animate={{
                            rotateY: isHovered ? 360 : 0,
                            scale: isHovered ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <skill.icon
                            size={36}
                            style={{
                              color: isHovered ? skill.color : "rgba(255,255,255,0.4)",
                              filter: isHovered ? `drop-shadow(0 0 10px ${skill.color})` : "none",
                              transition: "all 0.3s ease",
                            }}
                          />
                        </motion.div>

                        {/* Name */}
                        <h4 className="text-center text-white/70 font-medium text-sm mb-3 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>

                        {/* 3D shine effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 border border-accent/20 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 border border-white/10 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default Skills;