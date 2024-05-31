import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Layout.css';
const Layout = ({children}) => {
    const nav=useNavigate();
    const [open,set_open]=useState(false);

    const handle_menu=()=>
        {
            set_open(!open);
        }
    const handle_logout=()=>
        {
            nav('/')
        }
  return (
    <div>
        <header style={{marginLeft:'200px'}}>Dharshana's College of Women</header>
    <div className='menu'>
      <div className="menu_class" id="menu_id">
           <div className='menu_content'>
            <p onClick={()=>nav('/layout')}>Student Table</p>
            <p>Contact Us</p>
            <p>Upcoming Events</p>
            <p>Sports</p>
            <p>Faculty and Staffs</p>
            <p>Fee Payment</p>
            <p>Attendance</p>
            <p>Achievements</p>
           
            </div>
            </div>
            {/* <div className="menu_open" id="menuu"><span onClick={openMenu}>&#9776; Menu </span></div> */}
    </div>
    <div className='logout_menu'>
           <b> <p onClick={handle_menu} style={{fontSize:'30px'}}>&#9776; </p></b>
           {open&&(<div className='logout'><p onClick={handle_logout}>Logout</p></div>)}
    </div>
    <p>
    {children}
    </p>
    <footer style={{marginLeft:'200px'}}>
        <p>Contact us:+91 9087658446</p>
        <a href="mailto:angelinsuguna05@gmail.com" style={{color:"white"}}>dharcollege@gmail.com</a>
    </footer>
    </div>
  )
}

export default Layout
