import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import educationData from "../data/educationData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="education"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <motion.h1 variants={textVariants}>Education</motion.h1>
      <motion.div className="timeline-container" variants={timelineVariants}>
        {educationData.map(({ date, content }, idx) => (
          <motion.div
            className="timeline-item"
            key={idx}
            variants={textVariants}
          >
            <span className="date">{date}</span>
            <p className="content">{content}</p>
            <span className="circle"></span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;
