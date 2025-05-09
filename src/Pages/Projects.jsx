import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classnotes from "../assets/image copy 6.jpg"
import bootstrap from "../assets/image copy 5.jpg"
import quoty from "../assets/image copy 2.jpg"
import landing from "../assets/image copy.jpg"
import construct from "../assets/image.jpg"
import food from "../assets/p1.jpg"
import attendance from "../assets/image copy 4.jpg"
import chat from "../assets/image.png"

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Bootstrap Web',
      description: 'Welcome to Bootstrap web, Designed with HTML, Bootstrap. Its Basic Simple Example of using bootstrap and HTML,CSS and also all through a user-friendly interface.',
      image: bootstrap
    },
    {
      title: 'Quote Generator',
      description: 'Welcome to Quoty, Designed with MERN Stack. Its Basic Simple Quote Generator which generate the quote using keyword and all through a user-friendly interface.',
      image: quoty
    },
    {
      title: 'Landing Page',
      description: 'Welcome to Landing Page, Designed with React and Tailwind CSS. Its Basic Simple Landing Page which shows the simple structure of the website.',
      image: landing
    },
    {
      title: 'Construction Site',
      description: 'Welcome to Construction Site, Designed with React and Tailwind CSS. Enjoy user-friendly interface that makes managing your construction projects efficient.',
      image: construct
    },
    {
      title: 'Food Fast-Food Ordering Website',
      description: 'Welcome to Food Fast, enjoy browsing an extensive menu, adding your favorite dishes to the cart, and a smooth checkout process, all through a user-friendly interface.',
      image: food
    },
    {
      title: 'Attendance Management System',
      description: 'Welcome to the Attendance Management System, Our system offers a user-friendly UI to track attendance, and generate detailed reports.',
      image: attendance
    },
    {
      title: 'ClassNotes',
      description: 'Welcome to the ClassNotes, It will provide functionalities of Google-classroom, manage the class and also it provide security based exam, and give better performance to end users.',
      image: classnotes
    },
    {
      title: 'Chat Application',
      description: 'Welcome to the Chat Application, It will provide functionalities of Chat Application, which is a simple chat application that allows you to chat with your friends and family.',
      image: chat
    }
  ];

  return (
    <div ref={ref} className='bg-black text-white py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <motion.h2 
            className='text-3xl md:text-4xl font-bold text-green-400 mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className='text-lg md:text-xl text-gray-400'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are some of my recent works
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-9'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className='bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300'
            >
              <div className='relative overflow-hidden group'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-60 object-cover transform transition-transform duration-500 ' 
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-green-400 mb-3'>{project.title}</h3>
                <p className='text-gray-400 mb-4 leading-relaxed'>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
