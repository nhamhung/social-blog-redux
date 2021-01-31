import React from "react";
import * as faIcons from "react-icons/fa";
import "../css/FriendList.css";
const Friend = ({ friend }) => {
  return (
    <div className="friendList-item-container ">
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
  );
};

export default Friend;
