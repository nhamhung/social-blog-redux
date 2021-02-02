import React, { useEffect } from "react";
import UserSearchedCard from "../components/UserSearchedCard";
import { MDBContainer, MDBRow } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import FriendsActions from "../redux/actions/friends.actions";
import authActions from "../redux/actions/auth.actions";

import LoaderSpinner from "../components/Loader/LoaderSpinner";

const UserSearchListPage = () => {
  const dispatch = useDispatch();
  const searchedUsers = useSelector((state) => state.friends.userSearched);

  useEffect(() => {
    dispatch(FriendsActions.getFriendRequest());
  }, [dispatch]);
  useEffect(() => {
    dispatch(FriendsActions.getFriendList());
  }, [dispatch]);
  useEffect(() => {
    dispatch(authActions.getUser());
  }, [dispatch]);
  return (
    <MDBContainer>
      <MDBRow center>
        {searchedUsers.length > 0 ? (
          searchedUsers.map((user) => <UserSearchedCard user={user} />)
        ) : (
          <LoaderSpinner />
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default UserSearchListPage;
