import React from "react";
import { works } from "../../helper/APISim";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./works.scss";
import Button from "../Button";

export interface IWork {
  title: string;
  image: string;
  tags: Array<string>;
  github?: string;
  demo?: string;
}

export default function Works() {
  const width: number =
    window.screenX > 0 ? window.screenX : window.screen.availWidth;

  return (
    <div className="worksMain main">
      <h2 className="mainHeader">Work Samples</h2>

      <Splide
        options={{
          focus: "center",
          trimSpace: false,
          arrows: width < 786 ? false : true,
          autoplay: true,
          perPage: width > 1280 ? 5 : width > 960 ? 4 : width > 786 ? 3 : 1.15,
          perMove: 1,
          gap: 15,
          width: "100vw",
          pagination: false,
          rewind: true,
        }}
        className="slides"
      >
        {works.map((item) => (
          <Slide
            title={item.title}
            image={item.image}
            tags={item.tags}
            github={item.github}
            demo={item.demo}
            key={item.title}
          />
        ))}
      </Splide>
    </div>
  );
}

function Slide({ title, image, tags, github, demo }: IWork) {
  return (
    <SplideSlide>
      <div className="work">
        <img src={image} alt={title} />
        <h3 className="title">{title}</h3>
        <div className="tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {github && <Button href={github}>Open in Github</Button>}
        {github && <Button href={demo}>View Demo</Button>}
      </div>
    </SplideSlide>
  );
}
