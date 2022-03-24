import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="appMain">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}
