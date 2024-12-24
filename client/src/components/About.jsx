import { Tilt } from 'react-tilt';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img 
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-xl text-center text-white font-bold'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const textStyle = {
    transition: 'color 0.3s ease',
    color: isHovered ? '#caa500' : 'inherit'
  };

  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText}`}>
          Who I am
        </p>
        <h2 className={`${styles.sectionHeadText}`}>	
          Introduction.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='mt-4 text-secondary text-lg max-w-3xl leading-7'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        My name is Banzile Nhlebela (aka{' '}
        <span style={textStyle}>T</span>he{' '}
        <span style={textStyle}>M</span>ad{' '}
        <span style={textStyle}>K</span>ing
        <span
          style={textStyle}
          className={`transition-opacity duration-300 ease-in-out ${
            isHovered ? 'inline-block' : 'hidden'
          }`}
        >
          74
        </span>). I am an Experienced tutor and mentor with strong problem-solving and critical-thinking skills. 
        Technical expertise in many programming languages. Seeking to apply analytical and 
        leadership abilities and learn to develop my software development skills and drive 
        impactful projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.title} index={index} {...service} />
          );
        })}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");