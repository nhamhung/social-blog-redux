import React from "react";
import "../../css/NotificationModal.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

const NotificationModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="notification-modal">
          <div className="title">
            <h3>Friend Requests</h3>
          </div>
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
    </>
  );
};

export default NotificationModal;
