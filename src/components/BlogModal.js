import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsActions from '../redux/actions/reviews.actions';
import ReviewList from './ReviewList';

import {
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBModalBody,
} from 'mdbreact';
import BlogDetail from './BlogDetail';

const BlogModal = ({ modal, handdleToggle, blogDetails }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (modal) dispatch(ReviewsActions.getReviews(blogDetails._id));
  }, [dispatch, modal]);

  const reviews = useSelector((state) => state.reviews.reviews);

  if (modal) console.log('Blog details', blogDetails);
  return (
    <MDBModal isOpen={modal} toggle={handdleToggle} size='lg'>
      <MDBModalHeader></MDBModalHeader>
      <MDBModalBody>
        <BlogDetail blogDetails={blogDetails} />
        <ReviewList reviews={reviews} />
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
