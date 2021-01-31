import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";

const ProfileEditModal = ({ user, isEdited }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.avatarUrl);
  const dispatch = useDispatch();
  const toggleEdit = () => {
    setModal(!modal);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handleSubmit = (e) => {
    dispatch(authActions.editProfile(name, image));
    isEdited();
    // setModal(!modal);
  };

  return (
    <MDBContainer>
      <div onClick={toggleEdit}>Edit </div>
      <MDBModal isOpen={modal} size="lg">
        <MDBModalHeader>Edit Profile</MDBModalHeader>
        <MDBModalBody>
          <h4>Name</h4>
          <textarea
            className="write-blog-text-area title"
            onChange={handleNameChange}
            defaultValue={user.name}
          ></textarea>
          <h4>Avatar</h4>
          <textarea
            className="write-blog-text-area"
            onChange={handleImageChange}
            defaultValue={user.avatarUrl}
          ></textarea>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggleEdit}>
            Cancel
          </MDBBtn>
          <MDBBtn color="primary" onClick={handleSubmit}>
            Edit Profile
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ProfileEditModal;
