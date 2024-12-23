import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../constants";

const SectionWrapper = (Component, id) => function WrappedComponent() {
    return (
        <motion.section
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
        >
            <span className="hash-span" id={id}>&nbsp;</span>
            <Component />
        </motion.section>
    );
}

export default SectionWrapper;