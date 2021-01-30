import React from 'react';
import { MDBRow } from 'mdbreact';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews }) => {
  return (
    <MDBRow className='reviewList'>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </MDBRow>
  );
};

export default ReviewList;
