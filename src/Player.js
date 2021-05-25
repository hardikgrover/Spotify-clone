import "./Player.css";

import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />

        <Body spotify={spotify} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
