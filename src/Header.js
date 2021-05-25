import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar alt="" />
        <h4>username</h4>
      </div>
    </div>
  );
}

export default Header;
