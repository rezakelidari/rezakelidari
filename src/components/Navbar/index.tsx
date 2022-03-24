import React, { useState } from "react";

import "./Navbar.scss";

export default function Navbar() {
  const [className, setClassName] = useState("navbarMain");
  document.addEventListener("scroll", () => {
    window.scrollY > 0
      ? setClassName("navbarMain scrolled")
      : setClassName("navbarMain");
  });

  return <nav className={className}>Reza Kelidari</nav>;
}
