import React, { useEffect } from "react";
import authActions from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
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
// import { useSelector } from "react-redux";
const UserProfilePage = () => {
  const user = useSelector((state) => state.auth.user.data);
  // return <div>{user ? user.name : null}</div>;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.getUser());
  }, [dispatch]);
  return (
    <MDBContainer>
      <MDBRow style={{ maxWidth: "18rem" }}>
        <MDBCol>
          <MDBCard md="6">
            <MDBView hover cascade waves>
              <img
                src="https://i.pinimg.com/originals/77/40/40/7740408f1f7a98b6ab401084b1d653e4.jpg"
                alt=""
                className="img-fluid"
              />
              <MDBMask overlay="white-slight" className="waves-light" />
            </MDBView>
            <MDBCardBody cascade className="text-center">
              <MDBRow>
                <h2 className="font-weight-bold">{user.name}</h2>
                <MDBBtn>Edit name</MDBBtn>
              </MDBRow>
              <MDBRow>
                <p>Email : {user.email}</p>
              </MDBRow>

              <MDBBtn>Delete account</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserProfilePage;
