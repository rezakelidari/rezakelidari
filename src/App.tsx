import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <div className="appMain">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Works />
      <ContactMe />
    </div>
  );
}
