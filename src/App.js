import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from './Pages/LandingPage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/MBC-React-Portfolio/" component={LandingPage} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Portfolio" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
