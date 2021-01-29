import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BlogsActions from "../redux/actions/blogs.actions";

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
  }, [dispatch]);
  return (
    <div className="userHomePage">
      <p>You're authenticated! - User Home Page</p>
    </div>
  );
};

export default UserHomePage;
