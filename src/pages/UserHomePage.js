import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BlogsActions from "../redux/actions/blogs.actions";
import authActions from "../redux/actions/auth.actions";

import BlogCardList from "../components/BlogCardList";
import "../css/Navbar.css";
import FriendsButton from "../components/FriendsButton";

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
    dispatch(authActions.getUser());
  }, [dispatch]);
  return (
    <div className="userHomePage">
      <BlogCardList />
      <FriendsButton />
    </div>
  );
};

export default UserHomePage;
