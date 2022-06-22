import React from 'react'
import "./Body.css"
import Header from './Header'
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled'
import { FavoriteRounded, MoreHorizRounded } from '@mui/icons-material'
import { useDataLayervalue } from "../DataLayer";
import SongRow from './SongRow'


const Body = () => {
  const [{discover_weekly}, dispatch] = useDataLayervalue() // fecting from data layer
  return (
    <div className='body'>
        <Header />

        <div className='body-info'> 
          <img src='https://i.scdn.co/image/ab67706c0000bebb099a6790efb70ec8156569ae' alt='' />
          <div className='bpdy-infoText'>
              <strong> Platlist</strong>
              <h2>Discover Weekly</h2>
              <p>Description...</p>
              </div>
        </div>
        <div className='body-icons'>
          <PlayCircleFilled className='body-icon' />
          <FavoriteRounded className='body-icon' />
          <MoreHorizRounded className = 'body-icon' />
        </div>
        <div className='songs-list'> 
          {discover_weekly?.tracks?.items?.map((song) => (
            //console.log("song is", song.track)
           <SongRow track={song?.track}/>
        ))}
            <div className='songss'>

            </div>
        </div>
    </div>
  )
}

export default Body
