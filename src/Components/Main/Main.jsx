import React from "react";
import "./main.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Main = () => {
  return (
    <div className="main-section">
      <h1 className="name">Barbara Palvin</h1>
      <h3 className="profession">Model</h3>
      <div className="email--box"></div>
      <div className="mail-div">
        <EmailOutlinedIcon className="email-icon" />
      </div>
      <h5 className="email-name">Email</h5>

      <div className="about">About</div>
      <div className="about-info">
        Barbara Palvin (pronounced [ˈbɒrbɒrɒ ˈpɒlvin]; born 8 October 1993)[3]
        is a Hungarian model. She first appeared in the Sports Illustrated
        Swimsuit Issue in 2016. In 2019, she became a Victoria's Secret Angel.
        She is also an Armani Beauty ambassador.
      </div>
    </div>
  );
};

export default Main;
