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
    const pdfUrl = '/Yash P. Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Yash Prajapati Resume.pdf';
    anchor.click();
  };

  const stats = [
    { value: '8.05+', label: 'Aggregate CGPA' },
    { value: '08+', label: 'MERN Stack Projects' },
    { value: '06+', label: 'Months Experience' }
  ];

  return (
    <div ref={ref} className='relative min-h-screen text-white flex items-center justify-center'>
      <div className='container mx-auto flex flex-col items-center justify-center py-12 px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center px-8 md:px-20 max-w-4xl'
        >
          <motion.h2 
            className='text-2xl md:text-4xl font-bold text-green-400 mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className='text-lg md:text-xl text-gray-400 mb-8 leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello! I'm Yash Prajapati, a final year Computer Engineering student passionate about software development. I've gained experience in JavaScript, Python, focusing on web development with the MERN stack.
            I thrive on continuous learning and enjoy solving problems and collaborating with teams. As I transition to the professional world, I'm eager to contribute to impactful projects and grow as a software engineer.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-8 w-full md:w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 223, 154, 0.2)" }}
              className='bg-gray-800 bg-opacity-80 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300'
            >
              <h3 className='text-2xl font-bold text-green-400'>{stat.value}</h3>
              <p className='text-gray-400 mt-2'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 223, 154, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className='bg-green-400 hover:bg-green-500 text-black font-medium py-3 px-6 rounded-lg mt-12 flex items-center transition-all duration-300'
          onClick={handleDownloadResume}
        >
          <FaDownload className='inline-block mr-2' /> Download Resume
        </motion.button>
      </div>
    </div>
  );
};

export default AboutMe;