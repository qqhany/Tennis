import React from "react";
import { Link } from "react-router-dom";

import tennislogo from "../../Resources/images/logos/tennis.png";

export const TennisLogo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        backgroundImage: `url(${tennislogo})`
      }}
    ></div>
  );
  if (props.Link) {
    return (
      <Link to={props.linkto} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
