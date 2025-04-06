import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Disclosure } from '@headlessui/react';
import { FaChevronUp, FaChevronDown, FaCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div ref={ref} className='bg-black text-white py-12 md:mt-40 md:mb-44'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
            Skills
          </h2>
          <p className='text-lg md:text-xl text-gray-400'>
            My technical proficiency
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-1 md:w-3/4 md:mx-auto gap-6'>
          <Disclosure open={openIndex === 0} onClick={() => handleToggle(0)}>
            {({ open }) => (
              <div className='bg-gray-800 rounded-lg'>
                <Disclosure.Button className='flex justify-between w-full px-4 py-3 text-lg font-semibold'>
                  <div className='flex items-center'>
                    <span className='text-2xl text-green-400 mr-2'><FaCode /></span>
                    Programming Languages
                  </div>
                  <div>
                    {open ? <FaChevronUp className='text-green-400' /> : <FaChevronDown className='text-green-400' />}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-3 pb-2'>
                  <div className='mb-4'>
                    <SkillBar name='Java' percentage={70} />
                  </div>
                  <div className='mb-4'>
                    <SkillBar name='Python' percentage={50} />
                  </div>
                
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure open={openIndex === 1} onClick={() => handleToggle(1)}>
            {({ open }) => (
              <div className='bg-gray-800 rounded-lg'>
                <Disclosure.Button className='flex justify-between w-full px-4 py-3 text-lg font-semibold'>
                  <div className='flex items-center'>
                    <span className='text-2xl text-green-400 mr-2'><FaServer /></span>
                    Technologies
                  </div>
                  <div>
                    {open ? <FaChevronUp className='text-green-400' /> : <FaChevronDown className='text-green-400' />}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-3 pb-2'>
                <div className='mb-4'>
                    <SkillBar name='HTML' percentage={90} />
                  </div>
                <div className='mb-4'>
                    <SkillBar name='React.js' percentage={90} />
                  </div>
                  <div className='mb-4'>
                    <SkillBar name='Node.js' percentage={75} />
                  </div>
                  <div className='mb-4'>
                    <SkillBar name='Express' percentage={70} />
                  </div>
                  <div className='mb-4'>
                    <SkillBar name='MongoDB' percentage={75} />
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ name, percentage }) => (
  <div className='flex flex-col md:flex-row md:justify-between mb-4'>
    <span className='capitalize mb-2 md:mb-0'>{name}</span>
    <span className='mb-2 md:mb-0'>{percentage}%</span>
    <div className='bg-gray-700 h-2 w-full md:w-1/2 rounded-full'>
      <div
        className='bg-green-400 h-full rounded-full'
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Skills;
