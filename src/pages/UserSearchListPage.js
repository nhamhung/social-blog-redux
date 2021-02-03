import React, { useEffect } from "react";
import UserSearchedCard from "../components/UserSearchedCard";
import { MDBContainer, MDBRow } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import FriendsActions from "../redux/actions/friends.actions";

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

  return (
    <div className="userSearchPageContainer">
      {searchedUsers.length > 0 ? (
        <>
          <h3>Search Results ({searchedUsers.length})</h3>
          {searchedUsers.map((user) => (
            <UserSearchedCard user={user} />
          ))}{" "}
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default UserSearchListPage;
