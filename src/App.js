import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenfromUrl } from "./components/spotify";
import spotifyWebAPI from "spotify-web-api-js"
import Player from "./components/Player";
import { useDataLayervalue } from "./DataLayer";



function App() {
  const spotify = new spotifyWebAPI(); //spotify object
  const [{user, token, playlists, discover_weekly}, dispatch] = useDataLayervalue() // fecting from data layer

  // const [token, setToken] = useState(null);

  useEffect(() => { // use effect to create states

    const hash = getTokenfromUrl(); //to get token

    const _token = hash.access_token
   // console.log("let's get the token");

   window.location.hash = "";
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      
      //setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getUserPlaylists() // note that we don't pass a user id
      .then((playlists) => {
        console.log('Getting thr kuse')
        // dispatch({
        //   type: 'SET_PLAYLIST',
        //   playlists: playlists
        // })
      });

      spotify.getMe()
      .then((user) => {
        console.log('Fetch user🧑‍🦱', user);

        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists() // note that we don't pass a user id
      .then(
        function (data) {
          console.log('User playlists', data);
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: data
          })
        },
        function (err) {
          console.error(err);
        }   
      );

      spotify.getPlaylist("37i9dQZF1DXbYM3nMM0oPk").then((listtt) =>{
        console.log('listtt: ', listtt);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:listtt
        })
      })
     
    }
  }, [token, dispatch]);
    
  console.log('Put user🧑‍🦱', user);
  console.log('token🧑‍🦱', token);
  console.log('My discover_weekly Playlist is::', discover_weekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
