import React, { useEffect } from "react";
import UserSearchedCard from "../components/UserSearchedCard";
import { MDBContainer, MDBRow } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import FriendsActions from "../redux/actions/friends.actions";

const UserSearchListPage = () => {
  const dispatch = useDispatch();
  const searchedUsers = useSelector((state) => state.friends.userSearched);
  useEffect(() => {
    dispatch(FriendsActions.getFriendRequest());
  }, [dispatch]);

  return (
    <MDBContainer>
      <MDBRow>
        {searchedUsers.length > 0 ? (
          searchedUsers.map((user) => <UserSearchedCard user={user} />)
        ) : (
          <h1>No users found</h1>
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default UserSearchListPage;
