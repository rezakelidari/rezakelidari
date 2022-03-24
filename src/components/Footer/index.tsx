import React from "react";

import "./Footer.scss";

import Me from "../../assets/img/me.jpg";

export default function Footer() {
  return (
    <footer className="footerMain">
      <img src={Me} alt="Reza Kelidari" />
      <div className="info">
        <h3 className="header">Reza Kelidari</h3>
        <p className="desc">I'm a junior React.js Developer</p>
      </div>
    </footer>
  );
}
