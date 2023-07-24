import React from "react";
import { motion } from "framer-motion";

const spinnerVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Spinner = () => (
  <motion.div
    variants={spinnerVariants}
    animate="spin"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "5px solid lightgrey",
      borderTop: "5px solid black",
    }}
  />
);

export default Spinner;
