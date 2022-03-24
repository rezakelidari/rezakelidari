import React, { Children } from "react";

import "./Button.scss";

export default function Button({
  children,
  secondary,
  href,
}: {
  children: any;
  secondary?: boolean;
  href?: string;
}) {
  return (
    <a href={href && href} target="_blank">
      <button className={`buttonMain ${secondary && "secondary"}`}>
        {children}
      </button>
    </a>
  );
}
