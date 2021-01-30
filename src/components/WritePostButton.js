import React from "react";
import * as MIcons from "react-icons/md";
import "../css/Buttons.css";

const WritePostButton = () => {
  return (
    <div className="Write-Post-Button">
      <div className="floating-button write-post">
        <MIcons.MdEdit />
      </div>
    </div>
  );
};

export default WritePostButton;
