import React from 'react'
import './SidebarOptions.css'


const SidebarOptions = ({option, Icon}) => {
  return (
    <div className='sidebarOptions'>
        {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
    
  )
}

export default SidebarOptions
