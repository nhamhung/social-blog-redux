import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';
import sendReactions from '../redux/actions/reactions.actions';

const ReviewIcons = ({ reactions, flag, reviewId, handleReviewReactions }) => {
  const currentReactions = useSelector((state) => state.reactions.response);

  const dispatch = useDispatch();

  const handleClick = (reaction) => {
    dispatch(sendReactions.sendReviewReactions(flag, reviewId, reaction));
    handleReviewReactions(currentReactions);
  };

  return (
    <div>
      <MDBBtn onClick={() => handleClick('laugh')}>
        <MDBIcon far icon='grin-squint-tears' />
      </MDBBtn>
      <span className='counter'>{reactions.laugh}</span>
      <MDBBtn onClick={() => handleClick('sad')}>
        <MDBIcon far icon='sad-cry' />
      </MDBBtn>
      <span className='counter'>{reactions.sad}</span>
      <MDBBtn onClick={() => handleClick('like')}>
        <MDBIcon far icon='thumbs-up' />
      </MDBBtn>
      <span className='counter'>{reactions.like}</span>
      <MDBBtn onClick={() => handleClick('love')}>
        <MDBIcon far icon='grin-hearts' />
      </MDBBtn>
      <span className='counter'>{reactions.love}</span>
      <MDBBtn onClick={() => handleClick('angry')}>
        <MDBIcon far icon='angry' />
      </MDBBtn>
      <span className='counter'>{reactions.angry}</span>
    </div>
  );
};

export default ReviewIcons;
