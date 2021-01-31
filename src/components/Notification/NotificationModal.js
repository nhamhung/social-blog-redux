import React from "react";
import "../../css/NotificationModal.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import FriendsActions from "../../redux/actions/friends.actions";
const NotificationModal = ({ showModal, setShowModal }) => {
  const requestsList = useSelector((state) => state.friends.incFriendRequest);
  const dispatch = useDispatch();
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
                    <img
                      style={{ width: "50px" }}
                      src={request.avatarUrl}
                      alt="profile"
                    />
                    {request.name}
                    <div className="accept-button">
                      {" "}
                      <BsIcons.BsCheck
                        onClick={() =>
                          dispatch(
                            FriendsActions.acceptFriendRequest(request._id)
                          )
                        }
                      />
                    </div>
                    <div
                      className="deny-button"
                      onClick={() =>
                        dispatch(
                          FriendsActions.deleteFriendRequest(request._id)
                        )
                      }
                    >
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
