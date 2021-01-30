import React from 'react';
import Moment from 'react-moment';
import { MDBListGroupItem } from 'mdbreact';
import Icons from './Icons';

const ReviewCard = ({ review }) => {
  return (
    <div className='reviewCard'>
      <MDBListGroupItem active href='#'>
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>{review.content}</h5>
          <small>
            Created: <Moment fromNow>{review.createdAt}</Moment>
          </small>
          <small>
            Edited: <Moment fromNow>{review.updatedAt}</Moment>
          </small>
        </div>
        <p className='mb-1'>posted by {review.user}</p>
        <Icons reviewDetails={review} />
      </MDBListGroupItem>
    </div>
  );
};

export default ReviewCard;
