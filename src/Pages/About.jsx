import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, GraduationCap, Briefcase, Code2 } from "lucide-react";
import resumePDF from '../../src/assets/Yash Prajapati Resume.pdf';

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const handleDownloadResume = async () => {
    try {
      const response = await fetch(resumePDF);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Yash Prajapati Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const stats = [
    { icon: GraduationCap, value: "8.05", label: "CGPA", color: "#ff6b35" },
    { icon: Code2, value: "8+", label: "Projects", color: "#06B6D4" },
    { icon: Briefcase, value: "1+", label: "Year Exp", color: "#A855F7" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Additional decorative elements for this section */}
      <motion.div
        className="absolute top-1/4 -right-20 w-40 h-40 border border-accent/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Content */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-accent font-mono text-sm mb-4"
            >
              01 / About
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-display font-bold mb-8"
            >
              A bit about me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-white/60 leading-relaxed"
            >
              <p>
                I'm a <span className="text-white">Computer Engineering graduate</span> with
                a genuine passion for creating things that live on the internet. My interest
                in web development started back in college when I decided to build my first
                project turns out building a simple CRUD app taught me a lot about how
                things work behind the scenes.
              </p>

              <p>
                Fast-forward to today, I've had the privilege of working on various projects
                ranging from <span className="text-accent">chat applications</span> to
                <span className="text-accent"> e-commerce platforms</span>. My main focus
                these days is building accessible, inclusive products with great user experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source, or probably watching tech videos.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-sm text-white/40 mb-3">Technologies I work with:</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,107,53,0.1)" }}
                    className="px-3 py-1.5 text-sm bg-dark-100 text-white/70 rounded-lg border border-white/5 hover:border-accent/30 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-dark-100 border border-white/10 text-white rounded-full hover:border-accent/50 hover:bg-accent/5 transition-all group"
              onClick={handleDownloadResume}
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </div>

          {/* Right - Stats */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <div className="space-y-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="relative group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                    style={{ backgroundColor: stat.color }}
                  />

                  <motion.div
                    className="relative flex items-center gap-6 p-6 bg-dark-100/80 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all"
                    whileHover={{ rotateY: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${stat.color}15` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon size={24} style={{ color: stat.color }} />
                    </motion.div>
                    <div>
                      <motion.p
                        className="text-3xl font-display font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-white/40">{stat.label}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-accent/5 border border-accent/10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-6xl text-accent/10 font-serif">"</div>
              <p className="text-white/60 italic relative z-10">
                "The only way to do great work is to love what you do."
              </p>
              <p className="text-white/40 text-sm mt-2 relative z-10">— Steve Jobs</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
