import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'
import { useDataLayervalue } from '../DataLayer'

const Header = () => {
    const [{user}] = useDataLayervalue()
  return (
    <div className="header">
        <div classname="header-left" id='main'>
            <Search />
            <input type="text" placeholder="Search.." /> 
        </div>

        <div className="header-right">
            <Avatar src={user?.images[0]?.url} alt='RQ'/>
            <h4>{ user?.display_name} </h4>
        </div>

        
    </div>
  )
}

export default Header
