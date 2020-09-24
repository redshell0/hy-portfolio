import React from "react";
import { motion } from "framer-motion";

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
      stiffness: 100,
      duration: 1,
    },
  },
};

const Skill = ({ name, score }) => {
  const circle = {
    cx: 140,
    cy: 140,
    r: 100,
  };

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
            {score}
            <span>%</span>
          </h2>
        </div>
        <h2 className="text">{name}</h2>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
