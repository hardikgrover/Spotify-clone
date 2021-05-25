export const initialState = {
  user: null,
  playlists: [],
  plaing: false,
  item: null,
  token:
    "BQCPEj-Op9KU0qSndNZBU8lDVwS3z8OTRspZw9kydshYCqwNXREp3jPT1mMYR7zqYgnRDV-N0glIaP7RX6-IZTYqAB7KUlU3HC0Mzd13X9AwoHmymxeCeyPdjqO5E52C_HXI8VSp3Cj1DfxALCVHiPkjK2SXzxgO8RKct0zbrxAJCxTK",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
