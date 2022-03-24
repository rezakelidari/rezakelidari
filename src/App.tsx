import React from "react";
import Navbar from "./components/Navbar";

import "./styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="appMain">
      <Navbar />
      <Home />
    </div>
  );
}
