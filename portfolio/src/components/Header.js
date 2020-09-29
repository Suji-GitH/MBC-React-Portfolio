import React from 'react';
import {Link} from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../App.css';

function Header() {

  const navStyle = {
    position: "absolute",
    top: "20px",
    right: "200px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Questrial', sans-serif"
  };
  
  return (
    <>
        <Link  
        tag={Link} 
        to="/">
          <img
            src={require('../assets//img/Logo/srLogo.png')} 
            alt="homeLogo" 
            height="70px"
          />
        </Link>

    <Breadcrumbs style={navStyle} aria-label="breadcrumb">
      <Link
         tag={Link}
        to="/AboutMe"
      >
        About Me
      </Link>

      <Link 
         tag={Link}
        to="/Portfolio"
      >
        Portfolio
      </Link>

      <Link
         tag={Link}
        to="/Contact"
      >
        Contact
      </Link>

    </Breadcrumbs>
    </>
  );
}

export default Header;