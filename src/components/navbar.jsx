"use strict";
import { NavLink, Outlet } from "react-router-dom"; 
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

const {logout} = useLogout();
const {user} = useAuthContext();

const handleClick = () => {
    logout()
}


return (
    <header className="header">
    <ul>
        <li className="nav-login">
            <NavLink to="About">About</NavLink>
        </li>


        {/* If not null then display user email */}
        {user && ( <li className="nav-login">
            <span>Welcome {user.name}</span>
            <button onClick={handleClick}>Log out</button>
        </li>
        )}

        {!user && (
            <>
        <li className="nav-sign">
            <NavLink to="/login">Login</NavLink>
        </li>

        {/* <li className="nav-sign">
            <NavLink to="/signup">Signup</NavLink>
        </li> */}
        </>
        )}
    </ul>    
    
    <Outlet />
    </header>
)
};

export default Navbar;