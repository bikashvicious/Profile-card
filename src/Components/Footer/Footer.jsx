import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div>
      <div className="footer-div"></div>
      <InstagramIcon className="insta" />
      <TwitterIcon className="twitter" />
      <FacebookIcon className="facebook" />
      <GitHubIcon className="github" />
    </div>
  );
};

export default Footer;
