"use strict";
import { NavLink, Outlet } from "react-router-dom"; 

const Navbar = () => {

return (
    <header className="header">
    <ul>
        <li className="nav-sign">
            <NavLink to="#">Login</NavLink>
            </li>

        <li className="nav-login">
            <NavLink to="About">About</NavLink>
            </li>
    </ul>    
    
    <Outlet />
    </header>
)
};

export default Navbar;