import React from "react";
import { IconContext } from "react-icons";
import { VscBell } from "react-icons/vsc";
import "./Menu.css";
import globalCSS from "../../global.js"


export default function Menu() {
  return (
    <nav className="nav">
      <ul>
        <IconContext.Provider value={{ size: "4rem", color: globalCSS.color_white }}>
          <li>BIRD LOGO</li>
          <li>Home</li>
          <li>Explore</li>
          <li>
            <VscBell />
            Notifications
          </li>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li>Profile</li>
          <li>More</li>
          <li>Tweet</li>
          <li>Account</li>
        </IconContext.Provider>
      </ul>
    </nav>
  );
}
