import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // "BQBNAvxGnLnlpnyLtqVQhlk1eYS5lcb8CofpsGXhsPdhqM_LALY2_J2Nfs_ePHhYtO2lnLVuvVidN2ECkn8TpLpeB03Ei5L_ShEfchJOIiFTZAp1nonxBuI8hkdKeEyCjYn8gmzEb9dhcI4Qf_xkPm7BrPyyS3lKpTjx9tsDgoZ7wyeQ";
    // console.log(_token);
    // console.log(_token);

    if (_token) {
      // console.log("got token");
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists.items,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcIwavjnALsxM").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      // spotify.getUserPlaylists().then((playlists) => {
      //   dispatch({
      //     action: "SET_PLAYLISTS",
      //     playlists: playlists,
      //   });
      // });
      // console.log("playlists", playlists);
    }
    // console.log("i have a token >>>>", _token);
  }, [token, dispatch, user]);
  // console.log(user);
  // console.log(playlists);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
