import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <div>
            <p>Colorado Springs,</p>
            <p>Colorado</p>
          </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              719-651-2005
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jacksonahumada@gmail.com{" "}
            </h4>
          </div>
        </div>
              <div className="right">
                  <h4>About Me</h4>
                  <p>Something about me</p>
                  <div className="social">
                  <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                      />
                   <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                      />
                  <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                />
                </div>
                  
        </div>
      </div>
    </div>
  );
};

export default Footer;
