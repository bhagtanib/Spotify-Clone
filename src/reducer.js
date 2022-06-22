import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  songName: null,
  //token: "BQCBzGBIMfE7p1uMTKkwcIENS2l5f6W81KCp8Ox6yTl8WdmVrE75ony4gydoSiUYGQXTFz8BInvDMlTRZW8Es_j9Z0obuLz4TG52o1_EY0tWOYdDME2kLrhLOe7O0osoT8X7HzjNdMllmlb1tsIPYhm5YJnpFxNRFAM"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SONGNAME":
      return {
        ...state,
        songName: action.songName,
      };
  
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};


export default reducer;