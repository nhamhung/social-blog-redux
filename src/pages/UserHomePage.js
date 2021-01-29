import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import getBlogsActions from "../redux/actions/getBlogs.actions";

const UserHomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsActions.getBlogsData());
  }, [dispatch]);
  return (
    <div className="userHomePage">
      <p>You're authenticated!</p>
      <h1>User Home Page</h1>
    </div>
  );
};

export default UserHomePage;
