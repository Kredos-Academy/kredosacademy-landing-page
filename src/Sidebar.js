import React from 'react'
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
 
const Sidebar = ({children}) => {
    <SidebarData />
  return (
    <div className='container'>
           <div className='lms-app'>
            <div className='lms-image-div'>
            {
                SidebarData.map((item, index)=>(
                    <NavLink to={item.link} key={index} className='link' activeClassName='active' >
                        <div >{item.icon}</div>
                        <div className='lms-subjects'>{item.title}</div>
                    </NavLink>
                ))
            }
            </div>
           </div>
           <main>{children}</main>
    </div>
  )
}

export default Sidebar