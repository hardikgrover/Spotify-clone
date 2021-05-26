export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
const clientId = "7f6e2e7a793946b8abcb72e29762ba3b";
const redirectUri = "http://spotify-clone-58259.web.app/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&socpe=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
