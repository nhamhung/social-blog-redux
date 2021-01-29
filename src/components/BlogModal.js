import React from 'react';
import {
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBModalBody,
} from 'mdbreact';
import BlogDetail from './BlogDetail';

const BlogModal = ({ modal, handleToggle, blogDetails }) => {
  return (
    <MDBModal isOpen={modal} toggle={handleToggle} size='lg'>
      <MDBModalHeader toggle={handleToggle}></MDBModalHeader>
      <MDBModalBody>
        <BlogDetail blogDetails={blogDetails} />
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={handleToggle}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default BlogModal;
