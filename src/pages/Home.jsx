import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import About from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import LayoutMain from '../components/layout/LayoutMain'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
    <LayoutMain>
      <>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
        <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </>
    </LayoutMain>
    </>
  );
};

export default Home;
