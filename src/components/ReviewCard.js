import React from 'react';
import Moment from 'react-moment';
import { MDBListGroupItem, MDBBtn, MDBIcon } from 'mdbreact';

const ReviewCard = ({ review }) => {
  return (
    <MDBListGroupItem active href='#'>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>{review.content}</h5>
        <small>
          Created: <Moment fromNow>{review.createdAt}</Moment>
          Edited: <Moment fromNow>{review.updatedAt}</Moment>
        </small>
      </div>
      <p className='mb-1'>posted by {review.user}</p>
      <MDBBtn>
        <MDBIcon far icon='grin-squint-tears' />
      </MDBBtn>
      <span className='counter'>{review.reactions.laugh}</span>
      <MDBBtn>
        <MDBIcon far icon='sad-cry' />
      </MDBBtn>
      <span className='counter'>{review.reactions.sad}</span>
      <MDBBtn>
        <MDBIcon far icon='thumbs-up' />
      </MDBBtn>
      <span className='counter'>{review.reactions.like}</span>
      <MDBBtn color='default' className='waves-light'>
        <MDBIcon far icon='grin-hearts' />
      </MDBBtn>
      <span className='counter'>{review.reactions.love}</span>
      <MDBBtn color='default' className='waves-light'>
        <MDBIcon far icon='angry' />
      </MDBBtn>
    </MDBListGroupItem>
  );
};

export default ReviewCard;
