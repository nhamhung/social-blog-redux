import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import "../../css/FriendRequestNotification.css";
import NotificationModal from "./NotificationModal";
import { useSelector } from "react-redux";

const FriendRequestNotificationIcon = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const requestsList = useSelector((state) => state.friends.incFriendRequest);

  const openModal = () => {
    setShowNotificationModal((prev) => !prev);
  };
  return (
    <div className="friend-request-notification">
      <button type="button" className="icon-button" onClick={openModal}>
        <MdIcons.MdNotifications className="icon" />

        <span id="red" className="badge">
          {requestsList.length}
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
