import "./FooterStyles.css";

import React from "react";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="center">
          <div>
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <a href="tel:(719)651-2005">
            <FaPhone size={30} style={{ color: "#fff", marginRight: "1rem" }} />

            <a href="mailto:jacksonahumada@gmail.com">
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />

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
            </a>
          </a>
          <p>Copyright Jackson Ahumada 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
