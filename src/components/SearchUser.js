import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FriendsActions from "../redux/actions/friends.actions";
import "../css/SearchInput.css";

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value) {
      dispatch(FriendsActions.searchUser(searchTerm));
      history.push("/search");
      e.target.value = "";
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);
  return (
    <div className="search-input-container">
      <input
        className="search-input user"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => handleSubmit(e)}
        type="text"
        placeholder="Search user..."
      />
    </div>
  );
};

export default SearchUser;
