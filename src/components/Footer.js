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
          <a href="mailto:jacksonahumada@gmail.com">
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jacksonahumada@gmail.com{" "}
              </h4>
              <div className="social">
              <a href="https://www.linkedin.com/in/jackson-ahumada-aa341825a/">
                   <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/JacksonAhumada">
                  <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
                </div>
                  
          </div>
          </a>
          
        </div>
              <div className="right">
                  <h4>About Me</h4>
                  <p>Greetings! I am a full-stack developer based in Colorado Springs, with a strong passion for crafting user-friendly designs and tackling complex problems. I take pride in delivering top-notch solutions that exceed client expectations with an emphasis in front-end development. I look forward to collaborating with you and bringing your next project to life.</p>
                  
        </div>
      </div>
    </div>
  );
};

export default Footer;
