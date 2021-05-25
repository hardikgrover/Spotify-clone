import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Home } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  const [{ token, user, playlists }, dispatch] = useDataLayerValue();
  // console.log(user);
  console.log(token);
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <SideBarOption title="Home" Icon={Home} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {/* {console.log(playlists)} */}
      {playlists.map((playlist) => {
        return <SideBarOption title={playlist.name} />;
      })}
      {/* <SideBarOption title="hi there"></SideBarOption> */}
    </div>
  );
}

export default SideBar;
