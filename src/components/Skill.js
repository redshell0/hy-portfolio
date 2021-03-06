import React from "react";
import { motion } from "framer-motion";

import Counter from "../hooks/Counter";

const skillVariants = {
  hidden: { opacicy: 0 },
  visible: {
    opacicy: 1,
    transition: {
      duration: 0.2,
      delayChildren: 1,
    },
  },
};

const svgVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      duration: 1,
    },
  },
};

const Skill = ({ name, score, count, inView }) => {
  const circle = {
    cx: 140,
    cy: 140,
    r: 100,
  };

  const timer = 0.6 + (count + 1) * 0.2;

  const dasharray = 2 * Math.PI * circle.r;
  const dashoffset = dasharray - (dasharray * score) / 100;

  const circleVariants = {
    hidden: {
      strokeWidth: 10,
      stroke: "#fff",
      strokeDasharray: dasharray,
      strokeDashoffset: dasharray,
    },
    visible: {
      strokeDashoffset: dashoffset,
      transition: {
        duration: 2,
      },
    },
  };

  const duration =
    svgVariants.visible.transition.duration +
    skillVariants.visible.transition.duration;
  // console.log(timer);

  return (
    <motion.div className="skill" variants={skillVariants}>
      <motion.div className="percent" variants={svgVariants}>
        <svg>
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            strokeWidth="10"
            stroke="#68686880"
            strokeDasharray={dasharray}
            strokeDashoffset="0"
          ></circle>
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            variants={circleVariants}
          ></motion.circle>
        </svg>
        <div className="number">
          <h2>
            <Counter
              valueTo={score}
              totalDuration={2 + timer + duration}
              inView={inView}
            />
          </h2>
        </div>
        <h2 className="text">{name}</h2>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
