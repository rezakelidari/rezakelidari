import React from "react";
import { contact } from "../../helper/APISim";

import "./ContactMe.scss";

export interface IContact {
  title: string;
  icon: string;
  info: string;
  href: string;
}

export default function ContactMe() {
  return (
    <div className="contactMain main">
      <h2 className="mainHeader">Contact Me</h2>

      <div className="items">
        {contact.map((item) => (
          <Contact
            title={item.title}
            icon={item.icon}
            info={item.info}
            href={item.href}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

function Contact({ title, icon, info, href }: IContact) {
  return (
    <a className="item" href={href} target="_blank">
      <div className="header">
        <i className={`bi bi-${icon}`}></i>
        {title}
      </div>
      {info}
    </a>
  );
}
