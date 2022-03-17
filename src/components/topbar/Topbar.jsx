import React from "react";

import "./topbar.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SH K
          </a>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a
              href="https://github.com/sunghwankwon1994"
              target="_blank"
              rel="noreferrer"
            >
              <span>Sunghwan's Github</span>
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a
              href="https://www.linkedin.com/in/sunghwan-kwon-108715223"
              target="_blank"
              rel="noreferrer"
            >
              <span>Sunghwan's LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
