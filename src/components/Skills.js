import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Skill from "./Skill";

import skillData from "../data/skillData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const skillcontinerVariants = {
  visible: {
    transition: {
      duration: 0.2,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="skills-container">
      <motion.div
        className="skills"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <motion.h1 variants={textVariants}>Skills</motion.h1>
        <motion.div
          className="skill-container"
          variants={skillcontinerVariants}
        >
          {skillData.map(({ name, score }, idx) => (
            <Skill
              name={name}
              score={score}
              key={idx}
              count={idx}
              inView={inView}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
