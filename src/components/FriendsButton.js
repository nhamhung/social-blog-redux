import React, { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "../css/Buttons.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FriendsActions from "../redux/actions/friends.actions";
import Friend from "./Friend";
import LoaderSpinner from "./Loader/LoaderSpinner";
import SearchFriend from "./SearchFriend";

const FriendsButton = () => {
  // by default, sidebar is set to false meaning not displaying
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  // Here ShowSidebar is like a toggle switch, from false(not open) to true (open)
  const showSidebar = () => setSidebar(!sidebar);

  const friendsList = useSelector((state) => state.friends.friendList);
  const loading = useSelector((state) => state.friends.loading);

  console.log("friendsList", friendsList);
  useEffect(() => {
    dispatch(FriendsActions.getFriendList());
  }, [dispatch]);

  return (
    <div className="Friends-Button">
      <Link to="#" className="floating-button friends">
        <div className="floating-button friends" onClick={showSidebar}>
          <BsIcons.BsPeople />
        </div>
      </Link>
      {/* By default the right sidebar is hidden  */}
      <nav
        className={
          sidebar ? "right-side-nav-menu active" : "right-side-nav-menu"
        }
      >
        <div className="right-side-navbar-toggle" onClick={showSidebar}>
          <Link to="#" className="right-side-menu-bars">
            <AiIcons.AiOutlineClose />
          </Link>
        </div>
        <SearchFriend />

        {/* ------------- FRIEND LIST ITEMS -------------- */}
        <ul className="right-side-nav-menu-items" onClick={showSidebar}>
          {/* fetch/map friends list */}
          {!loading ? (
            friendsList.map((friend, index) => (
              <Friend friend={friend} key={index} />
            ))
          ) : (
            <LoaderSpinner />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default FriendsButton;
