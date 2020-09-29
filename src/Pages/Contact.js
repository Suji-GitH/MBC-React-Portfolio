import React from 'react';
import { motion } from "framer-motion";

function Contact() {

  const myStyle = {
    fontFamily: "'Sawarabi Mincho', sans-serif",
    textAlign: "left",
    fontSize: "5em",
    marginLeft: "50px",
    marginTop: "100px",
  };

  const aboutStyle = {
    paddingLeft: "10px",
    borderLeftStyle: "solid",
    position: "absolute",
    top: "70%",
    left: "30%",
    borderWidth: "2px",
    fontFamily: "'Sawarabi Mincho', sans-serif"
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
          <span>モバイル: +61 430 165 467</span>
          <br></br>
          <span>メール: Sujithranjitk@gmail.com</span>
        </div>

        <div style={aboutStyle}>
          <p>
            Or contact me through social.
        </p>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;