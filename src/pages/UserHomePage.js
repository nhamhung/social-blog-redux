import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BlogCardList from "../components/BlogCardList";
import BlogsActions from "../redux/actions/blogs.actions";

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
  }, [dispatch]);
  return (
    <div className="userHomePage">
      <p>You're authenticated!</p>
      <h1>User Home Page</h1>
      <BlogCardList />
    </div>
  );
};

export default UserHomePage;
