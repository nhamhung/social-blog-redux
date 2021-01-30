import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../css/Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import FriendsActions from "../redux/actions/friends.actions";
import { useSelector } from "react-redux";
import { LOGOUT } from "../redux/constants/auth.constants";
import SearchUser from "./SearchUser";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="nav-links-wrapper">
            <Link to="/">Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {item.title === "Friends" ? (
                      <span
                        onClick={() => dispatch(FriendsActions.getFriendList())}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="nav-menu-items">
            <li>
              <SearchUser FriendsActions={FriendsActions} />
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
