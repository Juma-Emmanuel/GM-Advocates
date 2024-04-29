import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Practise from "./components/Practise/Practise";
import Footer from "./components/Footer/Footer";
import AboutBg from "./components/About/AboutBg";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function HomePage() {
  return (
    <div className="Homepage">
      <Navbar />
      <Home />
      <About />
      <AboutBg />
      <Practise />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
