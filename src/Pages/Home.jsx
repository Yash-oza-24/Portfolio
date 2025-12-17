import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {  Github, Linkedin, Twitter } from "lucide-react";
import myPhoto from "../assets/Yash.jpg";

const Home = () => {
  const socials = [
    { icon: Github, href: "https://github.com/Yash-oza-24" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-prajapati-510957380/" },
    { icon: Twitter, href: "https://twitter.com/ytmp2407" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="order-2 lg:order-1">

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">I build things</span>
              <br />
              <span className="text-white">for the </span>
              <motion.span
                className="text-accent inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,107,53,0.5)",
                    "0 0 40px rgba(255,107,53,0.3)",
                    "0 0 20px rgba(255,107,53,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                web
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/50 max-w-md mb-8 leading-relaxed"
            >
              Hi, I'm <span className="text-white font-medium">Yash Prajapati</span>.
              A full-stack developer specializing in building exceptional digital
              experiences with the MERN stack.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button
                  className="group px-8 py-3.5 bg-accent text-dark font-medium rounded-full relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>
              </ScrollLink>

              <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button
                  className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:border-accent/50 hover:bg-accent/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </ScrollLink>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-100/50 backdrop-blur-sm border border-white/10 text-white/40 hover:text-accent hover:border-accent/30 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex mt-6 justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: "1000px" }}>
                {/* Animated border frame */}
                <motion.div
                  className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl"
                  animate={{
                    rotateX: [0, 5, 0, -5, 0],
                    rotateY: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Second animated frame */}
                <motion.div
                  className="absolute -top-8 -right-8 w-full h-full border border-white/10 rounded-2xl"
                  animate={{
                    rotateX: [0, -5, 0, 5, 0],
                    rotateY: [0, -5, 0, 5, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Image Container */}
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-200 border border-white/10"
                  whileHover={{
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={myPhoto}
                    alt="Yash Prajapati"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-dark-100/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-xs text-white/40 uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-display font-bold text-white">1+ Year</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;