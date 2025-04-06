import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    const pdfUrl = '/src/assets/Yash P. Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Yash Prajapati Resume.pdf';
    anchor.click();
  };

  return (
    <div ref={ref} className='relative h-full text-white flex items-center justify-center'>
      {/* Background Overlay */}
      <div className='bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0'></div>

      <div className='container mx-auto flex flex-col items-center justify-center py-12 px-4 z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center px-8 md:px-20'
        >
          <h2 className='text-2xl md:text-4xl font-bold text-green-400 mb-4'>
            About Me
          </h2>
          <p className='text-lg md:text-xl text-gray-400 mb-4'>
            Hello! I'm Yash Prajapati, a final year Computer Engineering student passionate about software development. I've gained experience in JavaScript, Python, focusing on web development with the MERN stack.
            I thrive on continuous learning and enjoy solving problems and collaborating with teams. As I transition to the professional world, I'm eager to contribute to impactful projects and grow as a software engineer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className='mt-8 w-full md:w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
        >
          <div className='bg-gray-800 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-105'>
            <h3 className='text-2xl font-bold text-green-400'>8.05+</h3>
            <p className='text-gray-400 mt-2'>Aggregate CGPA</p>
          </div>
          <div className='bg-gray-800 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-105'>
            <h3 className='text-2xl font-bold text-green-400'>07+</h3>
            <p className='text-gray-400 mt-2'>MERN Stack Projects</p>
          </div>
          <div className='bg-gray-800 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-105'>
            <h3 className='text-2xl font-bold text-green-400'>02+</h3>
            <p className='text-gray-400 mt-2'>Months Experience</p>
          </div>
        </motion.div>

        <button
          className='bg-green-400 hover:bg-green-500 text-black font-medium py-2 px-4 rounded-lg mt-8 flex items-center'
          onClick={handleDownloadResume}
        >
          <FaDownload className='inline-block mr-2' /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;