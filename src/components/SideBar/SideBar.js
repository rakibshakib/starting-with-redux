import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {

    return (
        <div className='navStyle'>
            <Link to='/'><span> Peoples </span></Link>
            <span><Link to='/added-people'>Added People</Link></span>
            <span><Link to='/removed-people'>Removed People</Link></span>
        </div>
    )
}

export default SideBar
