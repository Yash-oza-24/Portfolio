import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import classnotes from "../assets/image copy 6.jpg"
import bootstrap from "../assets/image copy 5.jpg"
import quoty from "../assets/image copy 2.jpg"
import landing from "../assets/image copy.jpg"
import construct from "../assets/image.jpg"
import food from "../assets/p1.jpg"
import attendance from "../assets/image copy 4.jpg"

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className='bg-black text-white py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
            Projects
          </h2>
          <p className='text-lg md:text-xl text-gray-400'>
            Here are some of my recent works
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-9'>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={bootstrap} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Bootstrap Web</h3>
              <p className='text-gray-400 mb-4'>
              Welcome to Bootstrap web, Designed with HTML , Bootstrap. Its Basic Simple Example of using bootstrap and HTML,CSS and also all through a user-friendly interface.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/bootstrap-website'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={quoty} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Quote Generator</h3>
              <p className='text-gray-400 mb-4'>
              Welcome to Quoty, Designed with MERN Stack. Its Basic Simple Quote Generator which generate the quote using keyword and all through a user-friendly interface.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/quoty'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={landing} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Landing Page</h3>
              <p className='text-gray-400 mb-4'>
              Welcome to Landing Page, Designed with React and Tailwind CSS. Its Basic Simple Landing Page which shows the simple structure of the website.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/Landingpage'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={construct} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Construction Site </h3>
              <p className='text-gray-400 mb-4'>
              Welcome to Construction Site, Designed with React and Tailwind CSS. Enjoy user-friendly interface that makes managing your construction projects efficient.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/Construction-site'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={food} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Food Fast-Food Ordering Website</h3>
              <p className='text-gray-400 mb-4'>
                Welcome to Food Fast, enjoy browsing an extensive menu, adding your favorite dishes to the cart, and a smooth checkout process, all through a user-friendly interface.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/food_fast_mern'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={attendance} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>Attendance Management System</h3>
              <p className='text-gray-400 mb-4'>
              Welcome to the Attendance Management System, Our system offers a user-friendly UI to track attendance, and generate detailed reports.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/attendance_system'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg shadow-white shadow-sm overflow-hidden'>
            <img src={classnotes} alt='Project' className='w-full h-60 object-cover' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-green-400 mb-2'>ClassNotes</h3>
              <p className='text-gray-400 mb-4'>
              Welcome to the ClassNotes, It will provide functionalities of Google-classroom,manage the class and also it provide security based exam,and give better performance to end users.
              </p>
              {/* <a
                href='https://github.com/Yash-oza-24/class-notes'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-400 hover:bg-green-500 text-black py-2 px-4 rounded-lg inline-flex items-center'
              >
                <FaGithub className='mr-2' /> View on GitHub
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
