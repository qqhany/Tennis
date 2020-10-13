import React from "react";
import { TennisLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="fotter_logo">
        <TennisLogo width="70px" height="70px" Link={true} linkto="/" />
      </div>
      <div className="footer_discl">All rights reserved</div>
    </footer>
  );
};

export default Footer;
