import React from "react";
import { skills } from "../../helper/APISim";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Skills.scss";
import "@splidejs/splide/dist/css/splide.min.css";

export interface ISkill {
  title: string;
  icon: string;
  desc: string;
}

export default function Skills() {
  return (
    <div className="skillsMain main">
      <h2 className="mainHeader">Skills</h2>
      <Splide
        options={{
          focus: "center",
          trimSpace: false,
          arrows: window.innerWidth < 786 ? false : true,
          autoplay: true,
          perPage:
            window.innerWidth > 1280
              ? 5
              : window.innerWidth > 960
              ? 4
              : window.innerWidth > 786
              ? 3.5
              : 1.25,
          gap: 15,
          width: "100vw",
          pagination: false,
          rewind: true,
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
