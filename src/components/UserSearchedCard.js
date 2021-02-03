// THIS COMPONENT IS CALLED TO DISPLAY THE SEARCH USER RESULTS

import React from "react";
import FriendsActions from "../redux/actions/friends.actions";
import { MDBBtn } from "mdbreact";
import "../css/UserSearchedCard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const UserSearchedCard = ({ user }) => {
  const pendingFriendRequest = useSelector(
    (state) => state.friends.pendingFriendRequest
  );
  const friendList = useSelector((state) => state.friends.friendList);
  const userID = useSelector((state) => state.auth.user.data._id);
  const dispatch = useDispatch();

  const cancelFriendRequest = (id) => {
    dispatch(FriendsActions.cancelFriendRequest(id));
  };
  const sendFriendRequest = (id) => {
    dispatch(FriendsActions.sendFriendRequest(id));
  };
  const removeFriend = (id) => {
    dispatch(FriendsActions.removeFriend(id));
  };
  const isFriend = (id) =>
    friendList.find((friend) => friend._id === id) ? "friend" : "";

  //Get the relationship with the user searched (friend, pending, not friend and the user himself)
  const getStatusFriendRequest = (id) => {
    if (userID === id) return "me";
    if (friendList.find((friend) => friend._id === id)) return "friend";
    if (pendingFriendRequest.find((fr) => fr._id === id)) return "pending";
    else return "not";
  };

  const renderButtons = (id) => {
    const status = getStatusFriendRequest(id);
    switch (status) {
      case "pending":
        return (
          <MDBBtn color="cyan" onClick={() => cancelFriendRequest(user._id)}>
            Request Pending...
          </MDBBtn>
        );
      case "friend":
        console.log("IS FRIEND", status);
        return (
          <MDBBtn
            onClick={() => {
              removeFriend(user._id);
            }}
          >
            Remove friend
          </MDBBtn>
        );
      case "not":
        return (
          <MDBBtn
            onClick={() => {
              sendFriendRequest(user._id);
            }}
          >
            Add friend
          </MDBBtn>
        );
      case "me":
        return (
          <Link to="/profile">
            <MDBBtn color="indigo">My Profile </MDBBtn>
          </Link>
        );
      default:
        return;
    }
  };

  return (
    <div className="userCardContainer">
      <div className="userCardImage">
        <img
          src={
            user.avatarUrl.length > 0
              ? user.avatarUrl
              : "https://starcresources.com.au/wp-content/uploads/2018/08/dummy450x450.jpg"
          }
          alt=""
          srcset=""
        />
      </div>
      <div className="userCardContent">
        <strong>{user.name}</strong>
        {isFriend(user._id)}
      </div>
      <div className="userCardButtons">{renderButtons(user._id)}</div>
    </div>
  );
};

export default UserSearchedCard;
