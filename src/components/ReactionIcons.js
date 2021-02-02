import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import sendReactions from "../redux/actions/reactions.actions";

const ReactionIcons = ({ reactions, flag, id }) => {
  const dispatch = useDispatch();

  const storeReactions = useSelector((state) => state.reactions.response);

  const handleClick = (reaction) => {
    dispatch(sendReactions.sendBlogReactions(flag, id, reaction));
  };

  return (
    <div>
      <MDBBtn onClick={() => handleClick("laugh")}>
        <MDBIcon far icon="grin-squint-tears" />
      </MDBBtn>
      <span className="counter">
        {Object.keys(storeReactions).length === 0
          ? reactions.laugh
          : storeReactions.laugh}
      </span>
      <MDBBtn onClick={() => handleClick("sad")}>
        <MDBIcon far icon="sad-cry" />
      </MDBBtn>
      <span className="counter">
        {Object.keys(storeReactions).length === 0
          ? reactions.sad
          : storeReactions.sad}
      </span>
      <MDBBtn onClick={() => handleClick("like")}>
        <MDBIcon far icon="thumbs-up" />
      </MDBBtn>
      <span className="counter">
        {Object.keys(storeReactions).length === 0
          ? reactions.like
          : storeReactions.like}
      </span>
      <MDBBtn onClick={() => handleClick("love")}>
        <MDBIcon far icon="grin-hearts" />
      </MDBBtn>
      <span className="counter">
        {Object.keys(storeReactions).length === 0
          ? reactions.love
          : storeReactions.love}
      </span>
      <MDBBtn onClick={() => handleClick("angry")}>
        <MDBIcon far icon="angry" />
      </MDBBtn>
      <span className="counter">
        {Object.keys(storeReactions).length === 0
          ? reactions.angry
          : storeReactions.angry}
      </span>
    </div>
  );
};

export default ReactionIcons;
