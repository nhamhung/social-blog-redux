import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';

const ReviewIcons = ({ reactions, flag, id }) => {
  return (
    <div>
      <MDBBtn>
        <MDBIcon far icon='grin-squint-tears' />
      </MDBBtn>
      <span className='counter'>{reactions.laugh}</span>
      <MDBBtn>
        <MDBIcon far icon='sad-cry' />
      </MDBBtn>
      <span className='counter'>{reactions.sad}</span>
      <MDBBtn>
        <MDBIcon far icon='thumbs-up' />
      </MDBBtn>
      <span className='counter'>{reactions.like}</span>
      <MDBBtn>
        <MDBIcon far icon='grin-hearts' />
      </MDBBtn>
      <span className='counter'>{reactions.love}</span>
      <MDBBtn>
        <MDBIcon far icon='angry' />
      </MDBBtn>
      <span className='counter'>{reactions.angry}</span>
    </div>
  );
};

export default ReviewIcons;
