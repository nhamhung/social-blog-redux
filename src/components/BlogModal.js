import React from 'react';
import {
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBModalBody,
} from 'mdbreact';
import BlogDetail from './BlogDetail';

const BlogModal = ({ modal, handdleToggle, blogDetails }) => {
  return (
    <MDBModal isOpen={modal} toggle={handdleToggle} size='lg'>
      <MDBModalHeader toggle={handdleToggle}></MDBModalHeader>
      <MDBModalBody>
        <BlogDetail blogDetails={blogDetails} />
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={handdleToggle}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default BlogModal;
