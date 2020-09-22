import React from "react";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const underlineVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Landing = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="landing"
    >
      <motion.span className="title">
        <motion.div variants={underlineVariants} className="underline" />
        최하연
      </motion.span>

      <motion.span className="title">
        <motion.div variants={underlineVariants} className="underline" />
        CHOI
      </motion.span>

      <motion.span className="title">
        <motion.div variants={underlineVariants} className="underline" />
        HA YEON
      </motion.span>
    </motion.div>
  );
};

export default Landing;
