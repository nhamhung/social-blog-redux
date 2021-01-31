import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import "../../css/FriendRequestNotification.css";

import NotificationModal from "./NotificationModal";

const FriendRequestNotificationIcon = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const openModal = () => {
    setShowNotificationModal((prev) => !prev);
  };
  return (
    <div className="friend-request-notification">
      <button type="button" className="icon-button" onClick={openModal}>
        <MdIcons.MdNotifications className="icon" />

        <span id="red" className="badge">
          2{/* number of friend requests goes here */}
        </span>
      </button>
      <NotificationModal
        showModal={showNotificationModal}
        setShowModal={setShowNotificationModal}
      />
    </div>
  );
};

export default FriendRequestNotificationIcon;
