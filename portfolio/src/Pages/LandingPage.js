import React from "react";
import { motion } from "framer-motion";

function LandingPage() {

  const myStyle = {
    fontFamily: "'Sawarabi Mincho', sans-serif",
    textAlign: "left",
    fontSize: "8em",
    marginLeft: "50px",
    marginTop: "100px"
  };

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div style={myStyle}>
          <span>SUJITH</span>
          <br></br>
          <span>ランジットクマール。</span>
        </div>
      </motion.div>
    </>
  );
}

export default LandingPage;