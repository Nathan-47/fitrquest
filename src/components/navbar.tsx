import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../images/fitrquest_icon.svg";
import { JSX } from "react";

const Navbar = (): JSX.Element => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="header">
      <ul>
        <li className="nav-logo">
          <NavLink to="/">
            {" "}
            <img src={logo} alt="fitrquest" />
          </NavLink>
        </li>

        {/* If not null then display user email */}
        {user && (
          <li className="nav-login">
            <span>Welcome {user.name}</span>
            <button onClick={handleClick}>Log out</button>
          </li>
        )}

        {/* If null then take user to login page */}
        {!user && (
          <li className="nav-sign">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>

      <Outlet />
    </header>
  );
};

export default Navbar;
