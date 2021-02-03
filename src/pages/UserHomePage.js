import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BlogsActions from "../redux/actions/blogs.actions";
import BlogCardList from "../components/BlogCardList";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import { MDBContainer, MDBRow } from "mdbreact";
import FriendsButton from "../components/FriendsButton";
import FriendsActions from "../redux/actions/friends.actions";
import "../css/Navbar.css";
import BlogWriteModal from "../components/BlogWriteModal";

const UserHomePage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    dispatch(BlogsActions.BlogsData());
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
  const handlePagination = (data) =>
    dispatch(BlogsActions.BlogsData(data.selected + 1));

  return (
    <MDBContainer>
      <MDBRow className="searchBarContainer">
        <SearchBar handleSearch={handleSearch} />
        <Sort handleSort={handleSort} />
      </MDBRow>
      <BlogCardList
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        handlePagination={handlePagination}
      />
      <FriendsButton />
      <BlogWriteModal />
    </MDBContainer>
  );
};

export default UserHomePage;
