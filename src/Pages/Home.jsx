import React from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';
import myPhoto from '../assets/Yash.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div className="relative h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Video Background */}


      {/* Content */}
      <div className="relative  container mx-auto flex flex-col md:flex-row items-center justify-center py-4">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[850px] text-center md:text-left px-8 md:ml-20"
        >
          <h1 className="text-2xl md:text-5xl mt-10 pb-4 font-bold text-green-400 ">
            <Typing
              text={["Hi, I'm Yash Prajapati.", "I'm a MERN stack developer."]}
              speed={200}
              eraseSpeed={70}
              eraseDelay={2000}
              typingDelay={1000}
              cursorClassName="hidden-cursor"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            Computer Engineering Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 text-gray-400"
          >
            A last-year undergraduate engineering student at Uka Tarsadia University, Bardoli.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 font-bold bg-green-400 text-black rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            <ScrollLink to="projects" smooth={true} duration={500} offset={-10} className="scroll-m-80">
              View Projects
            </ScrollLink>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, z: 50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <motion.img
            src={myPhoto}
            alt="Yash Prajapati"
            className="rounded-lg w-72 h-72 object-cover shadow-lg md:w-96 md:h-96"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
