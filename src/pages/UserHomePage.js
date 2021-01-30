import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BlogsActions from "../redux/actions/blogs.actions";
import BlogCardList from "../components/BlogCardList";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import { MDBContainer, MDBRow } from "mdbreact";
import FriendsButton from "../components/FriendsButton";
import WritePostButton from "../components/WritePostButton";
import authActions from "../redux/actions/auth.actions";
import FriendsActions from "../redux/actions/friends.actions";

import "../css/Navbar.css";

const UserHomePage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
    dispatch(authActions.getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(FriendsActions.getIncomingFriendRequest());
  }, [dispatch]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <MDBContainer>
      <MDBRow className="searchBarContainer">
        <SearchBar handleSearch={handleSearch} />
        <Sort handleSort={handleSort} />
      </MDBRow>
      <BlogCardList searchTerm={searchTerm} sortOrder={sortOrder} />
      <FriendsButton />
      <WritePostButton />
    </MDBContainer>
  );
};

export default UserHomePage;
