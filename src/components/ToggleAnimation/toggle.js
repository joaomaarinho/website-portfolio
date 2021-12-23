import React from "react";

import classes from "./toggle.module.scss";

function Toggle() {
  return (
    <svg
      className={classes.animation}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="64"
      viewBox="0 0 38 64"
    >
      <g id="Group_8" data-name="Group 8" transform="translate(-188 -601)">
        <rect
          id="Rectangle_179"
          data-name="Rectangle 179"
          width="38"
          height="64"
          rx="19"
          transform="translate(188 601)"
          fill="#edf6f9"
        />
        <rect
          id="Rectangle_180"
          data-name="Rectangle 180"
          width="30"
          height="54"
          rx="15"
          transform="translate(192 606)"
          fill="#2b2d42"
        />
        <circle
          className={classes.animation__circle}
          id="Ellipse_13"
          data-name="Ellipse 13"
          cx="11"
          cy="11"
          r="11"
          transform="translate(196 611)"
          fill="#edf6f9"
        />
      </g>
    </svg>
  );
}

export default Toggle;
