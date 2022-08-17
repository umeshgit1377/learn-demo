import React from 'react';
import { NavLink } from "react-router-dom";
function HeaderMenu() {
    return (
        <div className='customMenuPrimery'>  
            <ul>
                <li> 
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/note">Note</NavLink>
                </li>
                <li>   
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMenu;