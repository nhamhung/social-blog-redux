import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewsActions from "../redux/actions/reviews.actions";
import ReviewList from "./ReviewList";

import {
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBModalBody,
  MDBInput,
  MDBRow,
} from "mdbreact";
import BlogDetail from "./BlogDetail";

const BlogModal = ({ modal, handleToggle, blogDetails }) => {
  const [review, setReview] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (modal) dispatch(ReviewsActions.getReviews(blogDetails._id));
  }, [dispatch, modal]);

  const reviews = useSelector((state) => state.reviews.reviews);

  const handleReview = (e) => {
    /* review text */
    setReview(e.target.value);
  };

  const handleSubmitReview = () => {
    /* submit review */
    dispatch(ReviewsActions.postReviews(blogDetails._id, review));
    setTimeout(() => {
      dispatch(ReviewsActions.getReviews(blogDetails._id));
    }, 500);
    // dispatch(ReviewsActions.getReviews(blogDetails._id));
  };

  return (
    <MDBModal isOpen={modal} toggle={handleToggle} size="lg">
      <MDBModalHeader></MDBModalHeader>
      <MDBModalBody>
        <BlogDetail blogDetails={blogDetails} />
        <ReviewList reviews={reviews} />
      </MDBModalBody>
      <MDBModalFooter className="modalReview">
        <MDBRow>
          <MDBInput
            label="Write a review"
            outline
            size="lg"
            onChange={(e) => handleReview(e)}
          />
          <MDBBtn color="unique" onClick={handleSubmitReview}>
            Review
          </MDBBtn>
        </MDBRow>
        <MDBBtn color="default">Edit</MDBBtn>
        <MDBBtn color="secondary" onClick={handleToggle}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default BlogModal;
