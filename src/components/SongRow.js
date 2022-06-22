import "./SongRow.css"

const SongRow = ({ track }) => {
  return (
    <div className="row">
      {/* <img id ="song-img"
        src="https://i.scdn.co/image/ab67616d0000b273bc2dd68b840bb48db3177046"
        alt=""
      ></img>
      <div className="row-info">
        <h1>First Song Here</h1>
        <p>Artist 1 Artist 2</p>
      </div> */}
      <img src={track?.album?.images[0].url} alt=''></img>
            <div className="row-info">
                <h1>{track.name}</h1>
                <p>
                    {/* <h4>{track?.artist[0]?.name} </h4> */}
                    
                    {track?.album.name}
                </p>
            </div>
    </div>
  );
};
export default SongRow;
