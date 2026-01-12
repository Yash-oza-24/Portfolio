import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import AnimatedBackground from "./Components/AnimatedBackground";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-dark min-h-screen text-white antialiased overflow-x-hidden"
        >
          {/* Global Animated Background */}
          <div className="fixed inset-0 z-0">
            <AnimatedBackground />
          </div>

          <Navbar />

          {/* Main content with navbar offset */}
          <main className="relative z-10 pt-16 md:pt-20">
            {/* Home - No extra padding needed, hero handles it */}
            <section id="home" className="scroll-mt-16 md:scroll-mt-20">
              <Home />
            </section>

            {/* Other sections with consistent spacing */}
            <section id="about" className="scroll-mt-16 md:scroll-mt-20">
              <AboutMe />
            </section>

            <section id="skills" className="scroll-mt-16 md:scroll-mt-20">
              <Skills />
            </section>

            <section id="projects" className="scroll-mt-16 md:scroll-mt-20">
              <Projects />
            </section>

            <section id="contact" className="scroll-mt-16 md:scroll-mt-20">
              <Contact />
            </section>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Enhanced Loader with 3D animation
const Loader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative">
      {/* 3D Rotating Cube Effect */}
      <motion.div
        className="w-16 h-16"
        style={{ perspective: "200px" }}
      >
        <motion.div
          className="w-full h-full border-2 border-accent rounded-xl"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  </motion.div>
);

export default App;