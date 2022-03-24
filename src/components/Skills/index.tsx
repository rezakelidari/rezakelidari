import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Skills.scss";
import "@splidejs/splide/dist/css/splide.min.css";

import IconReact from "../../assets/icons/react.svg";
import IconRedux from "../../assets/icons/redux.svg";
import IconTypeScript from "../../assets/icons/typescript.svg";
import IconBootstrap from "../../assets/icons/bootstrap.svg";
import IconSass from "../../assets/icons/sass.svg";
import IconAPI from "../../assets/icons/api.svg";
import IconFirebase from "../../assets/icons/firebase.svg";
import IconCode from "../../assets/icons/code.svg";

interface ISkill {
  title: string;
  icon: string;
  desc: string;
}

export default function Skills() {
  const skills: Array<ISkill> = [
    {
      title: "React.js",
      icon: IconReact,
      desc: "React.js, jsx, hooks, Routing & SPA",
    },
    { title: "Redux", icon: IconRedux, desc: "Redux, redux-thunk" },
    { title: "TypeScript", icon: IconTypeScript, desc: "" },
    {
      title: "Bootstrap",
      icon: IconBootstrap,
      desc: "Bootstrap v5, Bootstrap-Icons",
    },
    { title: "Sass", icon: IconSass, desc: ".scss" },
    { title: "API", icon: IconAPI, desc: "RESTful APIs, axios" },
    { title: "Firebase", icon: IconFirebase, desc: "Auth, Analytics" },
    { title: "Html, CSS, JS", icon: IconCode, desc: "HTML5, CSS3, JS(ES6)" },
  ];

  const width: number =
    window.screenX > 0 ? window.screenX : window.screen.availWidth;

  return (
    <div className="skillsMain main">
      <h2 className="mainHeader">Skills</h2>
      <Splide
        options={{
          focus: "center",
          trimSpace: false,
          arrows: width < 786 ? false : true,
          autoplay: true,
          perPage:
            width > 1280 ? 5 : width > 960 ? 4 : width > 786 ? 3.5 : 1.25,
          gap: 15,
          width: "95vw",
          pagination: false,
        }}
        className="slides"
      >
        {skills.map((item) => (
          <Slide
            title={item.title}
            icon={item.icon}
            desc={item.desc}
            key={item.title}
          ></Slide>
        ))}
      </Splide>
    </div>
  );
}

function Slide({ title, icon, desc }: ISkill) {
  return (
    <SplideSlide>
      <div className="skill">
        <img src={icon} alt={title} className="icon" />
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </SplideSlide>
  );
}
