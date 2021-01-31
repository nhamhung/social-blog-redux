import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FriendsActions from "../redux/actions/friends.actions";
import "../css/SearchInput.css";
import * as faIcons from "react-icons/fa";

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
    <div className="search-input-container friend">
      <input
        className="search-input friend"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => handleSubmit(e)}
        type="text"
        placeholder="Search friend..."
      />
      {friendSearch.length > 0
        ? friendSearch.map((friend) => (
            <div className="search-friend-result">
              <div className="avatar-container">
                {friend.avatarUrl ? (
                  <img src={`${friend.avatarUrl}`} alt="friend-avatar" />
                ) : (
                  //  if friend does not have have an avatar image then it will be replaced by this icon
                  <faIcons.FaUserFriends />
                )}
              </div>
              <div>{friend.name}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchFriend;
