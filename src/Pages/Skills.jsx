import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp, FaCode, FaServer } from "react-icons/fa";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Python", percentage: 70 },
        { name: "JavaScript", percentage: 90 },
      ],
    },
    {
      title: "Technologies",
      icon: <FaServer />,
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "Bootstrap", percentage: 80 },
        { name: "Tailwind CSS", percentage: 85 },
        { name: "React.js", percentage: 90 },
        { name: "Node.js", percentage: 80 },
        { name: "Express", percentage: 75 },
        { name: "MongoDB", percentage: 75 },
        { name: "Socket.io", percentage: 70 },
        { name: "Puppeteer", percentage: 65 },
      ],
    },
  ];

  return (
    <div ref={ref} className="bg-black text-white py-12 md:mt-40 md:mb-44">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My technical proficiency
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 md:w-3/4 md:mx-auto gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <Disclosure
                open={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                {({ open }) => (
                  <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-lg font-semibold hover:bg-gray-700/50 transition-colors duration-300">
                      <div className="flex items-center">
                        <span className="text-2xl text-green-400 mr-3">
                          {category.icon}
                        </span>
                        {category.title}
                      </div>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronUp className="text-green-400" />
                      </motion.div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pt-4 pb-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                        >
                          <SkillBar
                            name={skill.name}
                            percentage={skill.percentage}
                          />
                        </motion.div>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ name, percentage }) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 last:mb-0">
    <span className="capitalize mb-2 md:mb-0 text-gray-300">{name}</span>
    <span className="mb-2 md:mb-0 text-green-400 font-medium">
      {percentage}%
    </span>
    <div className="bg-gray-700 h-2.5 w-full md:w-1/2 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-green-400 h-full rounded-full"
      />
    </div>
  </div>
);

export default Skills;
