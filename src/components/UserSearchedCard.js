// THIS COMPONENT IS CALLED TO DISPLAY THE SEARCH USER RESULTS

import React, { useState, useEffect } from "react";
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

const UserSearchedCard = ({ user }) => {
  const pendingFriendRequest = useSelector(
    (state) => state.friends.pendingFriendRequest
  );
  const friendList = useSelector((state) => state.friends.friendList);
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
  // useEffect(() => {
  //   dispatch(FriendsActions.getFriendRequest());
  // }, [dispatch]);
  const getStatusFriendRequest = (id) => {
    console.log(
      id,
      friendList,
      friendList.filter((friend) => friend._id === id).length
    );

    if (friendList.filter((friend) => friend._id === id).length > 0)
      return "friend";
    if (pendingFriendRequest.filter((fr) => fr._id === id).length > 0)
      return "pending";
    else return "not";
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
            {console.log("call", getStatusFriendRequest(user._id))}
          </MDBCardTitle>
          {getStatusFriendRequest(user._id) === "pending" ? (
            <MDBBtn onClick={() => cancelFriendRequest(user._id)}>
              Cancel friend request
            </MDBBtn>
          ) : getStatusFriendRequest(user._id) === "not" ? (
            <MDBBtn
              onClick={() => {
                sendFriendRequest(user._id);
              }}
            >
              Add friend
            </MDBBtn>
          ) : (
            <MDBBtn
              onClick={() => {
                removeFriend(user._id);
              }}
            >
              Remove friend
            </MDBBtn>
          )}

          <MDBCardText>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.{" "}
          </MDBCardText>

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
