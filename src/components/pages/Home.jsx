import React from "react";
import Cards from "../Cards";
import FirstSection from "../FirstSection";
import About from "./About";
import Projects from "./Projects";

import Footer from "../Footer";

function Home() {
  return (
    <>
      <FirstSection />
      <About />
      <Projects />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
