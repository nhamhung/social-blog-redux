// THIS COMPONENT IS CALLED TO DISPLAY THE SEARCH USER RESULTS

import React from "react";
import FriendsActions from "../redux/actions/friends.actions";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";
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
    <MDBCol md="4">
      <MDBCard wide cascade>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay="white-slight"
            className="card-img-top"
            src={user.avatarUrl}
            alt="Card cap"
          />
        </MDBView>
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle className="card-title">
            <strong>{user.name}</strong>
          </MDBCardTitle>
          <MDBCardText>Sed ut perspiciatis unde omnis.</MDBCardText>
          {renderButtons(user._id)}
          <MDBCol md="12" className="d-flex justify-content-center">
            <a href="!#" className="px-2 fa-lg li-ic">
              <MDBIcon fab icon="linkedin-in"></MDBIcon>
            </a>

            <a href="!#" className="px-2 fa-lg tw-ic">
              <MDBIcon fab icon="twitter"></MDBIcon>
            </a>

            <a href="!#" className="px-2 fa-lg fb-ic">
              <MDBIcon fab icon="facebook-f"></MDBIcon>
            </a>
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default UserSearchedCard;
