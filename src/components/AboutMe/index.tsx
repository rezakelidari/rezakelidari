import React from "react";

import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="aboutMain main">
      <h2 className="mainHeader">About Me</h2>
      <div className="items">
        <Item title="Name" icon="person-fill" desc="Reza Kelidari" />
        <Item title="Birth date" icon="balloon-fill" desc="Sep. 2003" />
        <Item title="Nationallity" icon="geo-fill" desc="I.R.Iran" />
        <Item title="Address" icon="geo-alt-fill" desc="Tehran, Shahriar" />
        <Item
          title="Github"
          icon="github"
          desc="@rezakelidari"
          link="https://github.com/rezakelidari"
        />
      </div>
    </div>
  );
}

function Item({
  title,
  icon,
  desc,
  link,
}: {
  title: string;
  icon: string;
  desc: string;
  link?: string;
}) {
  return (
    <div className="item">
      <div className="header">
        <i className={`bi bi-${icon}`}></i>
        {title}:
      </div>
      {link === undefined ? (
        desc
      ) : (
        <a href={link} target="_blank" className="textLink">
          {desc}
        </a>
      )}
    </div>
  );
}
