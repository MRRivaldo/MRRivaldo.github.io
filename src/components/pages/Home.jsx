import React from "react";
import Cards from "../Cards";
import FirstSection from "../FirstSection";
import About from "./About";
import Projects from "./Projects";

import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <About />
      <Projects />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
