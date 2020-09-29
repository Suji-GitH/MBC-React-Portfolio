import React from 'react';
// import '../App.css';

function HiddenLang() {

  const hiddenStyle = {
    paddingLeft: "70px",
    color:"white",
    fontFamily: "'Questrial', sans-serif",
    fontSize: "20px"
  };
  
  return (
    <>
    <span style={hiddenStyle}>Node.js Express.js ORM</span>
    <span style={hiddenStyle}>SQL MongoDB</span>
    <span style={hiddenStyle}>HTML CSS JavaScript jQuery</span>
    <span style={hiddenStyle}>APIs JSON AJAX</span><span style={hiddenStyle}>React.js</span>
    <span style={hiddenStyle}>Heroku Git GitHub</span>
    </>
  )
};

export default HiddenLang;