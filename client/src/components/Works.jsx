import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { projects, styles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
      >
        <div className="bg-tertiary p-5 rounded-2xl w-full sm:w-[355px]">
          <div className="relative w-full h-56">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-fill rounded-2xl"
            />

            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 mt-3 mr-3 flex justify-end card-img_hover"
            >
              <div
                className="w-10 h-10 black-gradient rounded-full flex items-center justify-center cursor-pointer"
              >
                <img 
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </a>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <p className="mt-2 text-secondary text-sm">{description}</p>
          </div>

          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-sm ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
}

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText}`}>
          Things I've built
        </p>
        <h2 className={`${styles.sectionHeadText}`}>	
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-secondary text-lg leading-8 mt-3 max-w-3xl"
        >
          These are just some of the projects I have built fairly recently. As time goes on, I will add more and display them all here. I have chosen not to provide a link to the source code however all the repos are public. Here is a link to my Github: &nbsp;
          <a 
            href="https://github.com/nhlebelabz74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-purple hover:text-gold"
          >
            link
          </a>
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-7 mt-20 justify-center">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, "");