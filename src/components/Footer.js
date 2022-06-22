import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from '@mui/material';
import { useDataLayervalue } from "../DataLayer";


import SpotifyPlayer from 'react-spotify-web-playback';
const Footer = () => {
  const [{token, discover_weekly}, dispatch] = useDataLayervalue() // fecting from data layer
  let uri = discover_weekly?.tracks?.items[0]?.track?.uri
  console.log('uri is Here', uri);
  return (
    <SpotifyPlayer token={token} uri={uri}/>
  )
  // return (
  //   <div className='footer'>
  //     <div className='footer-left'>
  //         <img className='footer-albumLogo' src="https://cutewallpaper.org/22/ed-sheeran-and-khalid-beautiful-people-wallpapers/1206420899.jpg"/>
  //         <div className='footer-songInfo'>
  //           <h4> Beautiful people</h4>
  //           <p>Ed Sheeren</p>
  //         </div>
  //     </div>
  //     <div className='footer-center'>
  //       <ShuffleIcon className='footer-green' />
  //       <SkipPreviousIcon className = 'footer-icon' />
  //       <PlayCircleOutlineIcon className = 'footer-icon' fontSize='large'/>
  //       <SkipNextIcon className = 'footer-icon'/>
  //       <RepeatIcon className='footer-green' />
  //     </div>
  //     <div className='footer-right'>
  //     <Grid container spacing={2}>
  //         <Grid item>
  //           <PlaylistPlayIcon />
  //         </Grid>
  //         <Grid item>
  //           <VolumeDownIcon />
  //         </Grid>
  //         <Grid item xs>
  //           <Slider aria-labelledby="continuous-slider" />
  //         </Grid>
  //       </Grid>
      
  //     </div>
 
  //   </div>
  // )
}

export default Footer
