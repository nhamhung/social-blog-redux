import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";
import { useSelector } from "react-redux";

const UserSearchedCard = ({ user }) => {
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

          <MDBBtn>Add friend</MDBBtn>
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
const UserSearchListPage = () => {
  const searchedUsers = useSelector((state) => state.friends.userSearched);
  console.log(searchedUsers);
  return (
    <MDBContainer>
      <MDBRow>
        {searchedUsers.length > 0 ? (
          searchedUsers.map((user) => <UserSearchedCard user={user} />)
        ) : (
          <h1>No users found</h1>
        )}
      </MDBRow>{" "}
    </MDBContainer>
  );
};

export default UserSearchListPage;
