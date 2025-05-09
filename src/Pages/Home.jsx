import React from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';
import myPhoto from '../assets/Yash.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center py-4 px-4">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-[850px] text-center md:text-left px-8 md:ml-20"
        >
          <motion.h1 
            className="text-2xl md:text-5xl mt-10 pb-4 font-bold text-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typing
              text={["Hi, I'm Yash Prajapati.", "I'm a MERN stack developer."]}
              speed={200}
              eraseSpeed={70}
              eraseDelay={2000}
              typingDelay={1000}
              cursorClassName="hidden-cursor"
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            Computer Engineering Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-gray-400"
          >
            A last-year undergraduate engineering student at Uka Tarsadia University, Bardoli.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 223, 154, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 font-bold bg-green-400 text-black rounded-lg hover:bg-opacity-80 transition-all duration-300"
            >
              <ScrollLink to="projects" smooth={true} duration={500} offset={-10} className="scroll-m-80">
                View Projects
              </ScrollLink>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <motion.img
              src={myPhoto}
              alt="Yash Prajapati"
              className="rounded-lg w-72 h-72 object-cover shadow-lg md:w-96 md:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
