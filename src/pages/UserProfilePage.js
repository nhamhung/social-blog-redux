import React, { useEffect } from "react";
import authActions from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import ProfileEditModal from "../components/ProfileEditModal";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
const UserProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.getUser());
  }, [dispatch]);
  return (
    <>
      {user === null ? (
        <h1>Loading</h1>
      ) : (
        <MDBContainer>
          <MDBRow center className="pt-5">
            <MDBCard md="6">
              <MDBCol>
                <MDBView hover cascade waves>
                  <img src={user.data.avatarUrl} alt="" className="img-fluid" />
                  <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <MDBCol />
                <MDBCol>
                  <MDBCardBody cascade className="text-center">
                    <h2 className="font-weight-bold">{user.data.name}</h2>
                    <p>Email : {user.data.email}</p>
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBBtn>
                          <ProfileEditModal user={user} />
                        </MDBBtn>
                        <MDBBtn>Delete account</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBCol>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
};

export default UserProfilePage;
