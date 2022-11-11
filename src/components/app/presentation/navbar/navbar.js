import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss';

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/activityboard">Activity Board</Link></li>
            <li><Link to="/logout"><span>Logout</span><i className="fa-solid fa-user"></i></Link></li>
            <li><Link to="/viewactivityboard">View Activity Board</Link></li>
            <li><Link to="/createactivity">Create Activity</Link> </li>
        </ul>
    </div>
  )
}

export default NavBar;