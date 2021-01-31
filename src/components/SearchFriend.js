import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FriendsActions from "../redux/actions/friends.actions";

const SearchFriend = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const friendSearch = useSelector((state) => state.friends.friendSearched);

  const history = useHistory();

  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value) {
      dispatch(FriendsActions.searchFriend(searchTerm));
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => handleSubmit(e)}
        type="text"
        placeholder="Search friend..."
      />
      {friendSearch.length > 0
        ? friendSearch.map((friend) => <div>{friend.name}</div>)
        : null}
    </>
  );
};

export default SearchFriend;
