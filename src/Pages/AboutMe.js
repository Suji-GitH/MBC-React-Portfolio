import React from 'react';
import { motion } from "framer-motion";

function AboutMe() {

  const myStyle = {
    fontFamily: "'Sawarabi Mincho', sans-serif",
    textAlign: "left",
    fontSize: "6em",
    marginLeft: "50px",
    marginTop: "200px",
  };

  const aboutStyle = {
    paddingLeft: "10px",
    borderLeftStyle: "solid",
    position: "absolute",
    top: "100px",
    left: "950px",
    width: "30%",
    borderWidth: "2px",
    fontFamily: "'Sawarabi Mincho', sans-serif",
  };

  const aboutHeader = {
    fontFamily: "'Questrial', sans-serif"
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
          <span>スージット</span>
          <br></br>
          <span>RANJITKUMAR.</span>
        </div>

        <div style={aboutStyle}>
          <h4 style={aboutHeader}>ABOUT</h4>
          <p>
            Full stack web developer with experiences in various process automation platform and RPA. Certificate from Monash Boot Camp in full stack web technologies, including JavaScript, CSS, HTML, and Node.js, and proficiency with k2, Nintex, Uipath, and VisualKpI. Also worked/ran both agile and waterfall methodology adapted project, and involved in presales of in house built tool. Fascinated by the growing technology to be able to automate tasks. My technical aptitude in cutting-edge web technologies, combined with overall adaptive skills and mindset make me a strong addition to any project.
        </p>

          <h4 style={aboutHeader}>PORTFOLIO DESIGN</h4>
          <p>
            One of my hobbies is cooking and there is a famous saying "People Eat with Their Eyes First", and I believe that goes for web design as well.

            I was born and raised in Japan so I incorporated the language to this minimalist inspired web design to showcase how even the simplest application can be elevated with thoughtfully planned UI/UX.
        </p>
        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;