import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import "./styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <div className="appMain">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Works />
      <ContactMe />
      <Footer />
    </div>
  );
}
