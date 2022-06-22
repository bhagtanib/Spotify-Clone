export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000";

const clientID = "da6f24cc2ca04653b39adce5eef47e90"
//const clientSecret = "2edf468ce12c4c59895fde66d1fbf554"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-collaborative",
    "playlist-read-private",
    "streaming",
    "user-library-read",
    "user-library-modify",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state"

];

export const getTokenfromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]) ;
        return initial ;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`