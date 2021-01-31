import React, { useState } from "react";
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
const BlogEditModal = ({ blog }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [images, setImages] = useState(blog.images);
  const dispatch = useDispatch();
  const toggleEdit = () => {
    setModal(!modal);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImagesChange = (e) => setImages(e.target.value);
  const handleSubmit = (e) => {
    console.log(title, content, images);

    // e.preventDefault();
    dispatch(blogsActions.editBlog(title, content, images, blog._id));
  };

  return (
    <MDBContainer>
      <div onClick={toggleEdit}>Edit </div>
      <MDBModal isOpen={modal} size="lg">
        <MDBModalHeader>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          <h4>Title</h4>
          <textarea
            className="write-blog-text-area title"
            onChange={handleTitleChange}
            defaultValue={blog.title}
          ></textarea>
          <h4>Content</h4>
          <textarea
            className="write-blog-text-area"
            onChange={handleContentChange}
            defaultValue={blog.content}
          ></textarea>
          <h4>Link images</h4>
          <textarea
            className="write-blog-text-area title"
            onChange={handleImagesChange}
            defaultValue={blog.images[0]}
          ></textarea>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggleEdit}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" onClick={handleSubmit}>
            Edit blog
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default BlogEditModal;
