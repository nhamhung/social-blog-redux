import React from "react";
import "../../css/NotificationModal.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { useSelector } from "react-redux";

const NotificationModal = ({ showModal, setShowModal }) => {
  const requestsList = useSelector((state) => state.friends.incFriendRequest);
  console.log(requestsList);
  return (
    <div>
      {showModal ? (
        <div className="notification-modal">
          {/* modal title */}
          <div className="header">
            <h3>Friend Requests</h3>
            {/* close modal button */}
            <div
              className="close-modal-button"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <AiIcons.AiOutlineClose />
            </div>
          </div>
          {/* modal friend list */}
          <div className="friend-list-container">
            <ul>
              {requestsList.length > 0 ? (
                requestsList.map((request) => (
                  <li>
                    {/* friend request icon */}
                    <div className="icon-wrapper"></div>
                    <img src={request.avatarUrl} alt="profile" />
                    {request.name}
                    <div className="accept-button">
                      {" "}
                      <BsIcons.BsCheck />
                    </div>
                    <div className="deny-button">
                      <AiIcons.AiOutlineCloseCircle />
                    </div>
                  </li>
                ))
              ) : (
                <li>No pending requests</li>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NotificationModal;
