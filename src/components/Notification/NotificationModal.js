import React from "react";
import "../../css/NotificationModal.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

const NotificationModal = ({ showModal, setShowModal }) => {
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
              {/* MAP LIST OF FRIEND REQUESTS HERE */}
              {/* BELOW ARE SAMPLES */}
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
              <li>
                {/* friend request icon */}
                <div className="icon-wrapper"></div>
                friend request name{" "}
                <div className="accept-button">
                  {" "}
                  <BsIcons.BsCheck />
                </div>
                <div className="deny-button">
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NotificationModal;
