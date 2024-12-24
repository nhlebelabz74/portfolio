import { Tilt } from 'react-tilt';
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
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>	
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='mt-4 text-secondary text-lg max-w-3xl leading-7'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam excepturi consectetur rem molestiae laudantium, nesciunt accusamus assumenda soluta officiis iusto est, fugiat possimus et id vitae nisi! Iure, enim!
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