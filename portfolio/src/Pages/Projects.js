import React from 'react';
import Scenarios from '../components/Scenarios'
import { motion } from "framer-motion";

function Projects() {

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={pageTransition}
  >
    <Scenarios />
  </motion.div>
  );
}

export default Projects;