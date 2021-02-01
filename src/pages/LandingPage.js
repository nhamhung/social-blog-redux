import React from "react";
import LoginPage from "./LoginPage";
const LandingPage = () => {
  return (
    <div className="landingPage-login">
      <div>
        <LoginPage />
      </div>
      <div>
        <img
          style={{ width: "700px", marginLeft: "-100px" }}
          src="https://www.plays-in-business.com/wp-content/uploads/2018/12/HappyGirl.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
