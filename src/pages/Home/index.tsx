import React from "react";
import Me from "../../assets/img/me.jpg";

import "./Home.scss";

export default function Home() {
  return (
    <div className="homeMain">
      <div className="social">
        <a
          className="item"
          href="https://github.com/rezakelidari"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a className="item" href="mailto:reza.phoenix.1382@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a className="item" href="https://t.me/rezakelidari" target="_blank">
          <i className="bi bi-telegram"></i>
        </a>
        <a
          className="item"
          href="https://www.instagram.com/rezakelidari_alone"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="left">
        <div className="subheading">Hi,</div>
        <h1 className="heading">I'm</h1>
        <h1 className="heading">Reza</h1>
        <h1 className="heading">Kelidari</h1>
        <div className="desc">I'm a junior React.js developer</div>
      </div>
      <div className="right">
        <img src={Me} alt="Me" />
      </div>
      <div className="scrollDown">
        <span></span> Scroll Down
      </div>
    </div>
  );
}
