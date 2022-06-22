import React from 'react'
import './Sidebar.css'
import SidebarList from './SidebarList'
import { useDataLayervalue } from '../DataLayer'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
const [{playlists}] = useDataLayervalue()

  return (
    <div className='sidebar'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg">
        </img>
        <SidebarOptions Icon={HomeIcon} option="Home" />
      <SidebarOptions Icon={SearchIcon} option="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />

        <br />
        <strong className="sidebar-title">PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
        <SidebarList title={playlist.name} />
      ))}

    </div>
  )
}

export default Sidebar
