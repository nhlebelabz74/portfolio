import { styles, experiences } from "../constants";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#151030', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-2xl">
          {experience.title}
        </h3>
        <p className="text-lg text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="list-disc mt-5 ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li 
            key={`${experience.title}-point-${index}`}
            className="text-md text-white-100 pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>	
          Activities and Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard key={index} experience={experience} />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");