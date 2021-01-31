import React, { useState } from "react";
import WritePostButton from "./WritePostButton";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import blogsActions from "../redux/actions/blogs.actions";
import { useDispatch } from "react-redux";
const BlogWriteModal = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState("");
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImagesChange = (e) => setImages(e.target.value);
  const handleSubmit = (e) => {
    console.log(title, content, images);
    // e.preventDefault();
    dispatch(blogsActions.writeBlog(title, content, images));
  };

  return (
    <MDBContainer>
      <MDBBtn color="primary" onClick={toggle}>
        <WritePostButton />
      </MDBBtn>
      <MDBModal isOpen={modal} size="lg">
        <MDBModalHeader>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          <h4>Title</h4>
          <textarea
            className="write-blog-text-area title"
            onChange={handleTitleChange}
          ></textarea>
          <h4>Content</h4>
          <textarea
            className="write-blog-text-area"
            onChange={handleContentChange}
          ></textarea>
          <h4>Link images</h4>
          <textarea
            className="write-blog-text-area title"
            onChange={handleImagesChange}
          ></textarea>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" onClick={handleSubmit}>
            Post blog
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default BlogWriteModal;
