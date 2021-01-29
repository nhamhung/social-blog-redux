import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginActions from "../redux/actions/login.actions";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginActions.loginRequest(email, password));
  };
  useEffect(() => {
    console.log(isAuthenticated);
    isAuthenticated ? history.push("/user") : console.log("");
  }, [isAuthenticated, history]);
  return (
    <div className="loginPage">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      onChange={handleEmailChange}
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      onChange={handlePasswordChange}
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      onClick={onSubmit}
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter style={{ fontSize: "18px" }}>
                  <div className="font-weight-light">
                    <p>
                      Not a member? <Link to="/register">Sign up</Link>
                    </p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginPage;
