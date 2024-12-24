import { motion } from "framer-motion";
import { styles, testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const FeedbackCard = ({ index, name, designation, company, image, site }) => {
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
        <div className="bg-tertiary p-5 rounded-2xl w-full sm:w-[310px]">
          <p className="text-white font-black text-4xl">"</p>

          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-1 justify-between items-center mt-4">
              <div className="flex flex-col flex-1">
                <p className="text-white font-medium text-md">
                  <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="text-secondary text-sm mt-1">
                  {designation}, {company}
                </p>
              </div>
              <div>
                <img
                  src={image}
                  alt={name}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
}

const Feedbacks = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-2xl">
        <div className='bg-tertiary rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10'>
          <motion.div>
            <p 
              className={`${styles.sectionSubText}`}
            >
              What People Say
            </p>
            <h2 
              className={`${styles.sectionHeadText}`}
            >
              References.
            </h2>
          </motion.div>
        </div>

        <div className="sm:px-16 px-6 sm:py-16 py-10 -mt-28 pb-14 flex flex-wrap justify-center gap-7">
          {testimonials.map((testimonial, index) => {
            return (
              <FeedbackCard 
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Feedbacks, "");