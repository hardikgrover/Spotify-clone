import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <SideBarOption title="Home" />
      <SideBarOption title="Search" />
      <SideBarOption title="Your Library" />
    </div>
  );
}

export default SideBar;
