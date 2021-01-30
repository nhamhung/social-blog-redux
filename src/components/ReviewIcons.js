import React from 'react';

const ReviewIcons = ({ reactions, flag, id }) => {
  return (
    <div>
      <MDBBtn onClick={() => handleClick('laugh')}>
        <MDBIcon far icon='grin-squint-tears' />
      </MDBBtn>
      <span className='counter'>
        {Object.keys(storeReactions).length === 0
          ? reactions.laugh
          : storeReactions.laugh}
      </span>
      <MDBBtn onClick={() => handleClick('sad')}>
        <MDBIcon far icon='sad-cry' />
      </MDBBtn>
      <span className='counter'>
        {Object.keys(storeReactions).length === 0
          ? reactions.sad
          : storeReactions.sad}
      </span>
      <MDBBtn onClick={() => handleClick('like')}>
        <MDBIcon far icon='thumbs-up' />
      </MDBBtn>
      <span className='counter'>
        {Object.keys(storeReactions).length === 0
          ? reactions.like
          : storeReactions.like}
      </span>
      <MDBBtn onClick={() => handleClick('love')}>
        <MDBIcon far icon='grin-hearts' />
      </MDBBtn>
      <span className='counter'>
        {Object.keys(storeReactions).length === 0
          ? reactions.love
          : storeReactions.love}
      </span>
      <MDBBtn onClick={() => handleClick('angry')}>
        <MDBIcon far icon='angry' />
      </MDBBtn>
    </div>
  );
};

export default ReviewIcons;
