export const initialState = {
  user: null,
  playlists: [],
  plaing: false,
  item: null,
  // token: null,
  // token:
  //   "BQBztba4pCuISt4iekUimMJKOQG_VZTTA8RxNMvXUofnwNOD4PyRDP6xClW0q4TANLQ5dS7Y1BLylD2OgnJDIwsDFQBiS9mjlCpa7TDHadgxTo8wTqZ-uxxTjQuCLygzFbpBjDHAG9qhfE1oQ9gFsm9siKkjwuSWqKJaaOcZ5nKrTvt8",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      console.log(action);
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      console.log(action);
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
