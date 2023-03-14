import "./LocalStyles.css";

import React from "react";

import CherryImg from "../assets/project3.jpg";

const CherryComp = () => {
  return (
    <div className="content">
      <h1>Cherry Picked</h1>
      <div className="container">
      <img
        className="imgHeader"
        src={CherryImg}
        alt="Cherry Picked screenshot"
      ></img>
        <h1>Overview:</h1>
        <p className="topic">
          Cherry Picked is an innovative recipe search engine that helps users discover new and exciting food and drink recipes based on the ingredients they already have in their fridge. With just a few clicks, users can input the items they have on hand, and the platform will generate a list of recipes that can be made using those ingredients.</p>
        <p className="topic"> This feature not only helps users save time and money, but it also encourages them to get creative with their cooking and try new recipes they may not have considered before. Cherry Picked is designed to make cooking more accessible and enjoyable for users, providing them with a personalized and hassle-free cooking experience.
        </p>
        <h1>Objective:</h1>
        <p className="topic">
        The objective of Cherry Picked is to provide an innovative recipe search engine that enables users to easily discover new food and drink recipes based on the ingredients they have in their fridge. The platform aims to save users time and money by generating a list of recipes that can be made using those ingredients with just a few clicks. The feature encourages users to get creative with their cooking and try new recipes they may not have considered before.
        </p>
        <h1>Role:</h1>
        <p className="topic">Front End Developer</p>
      </div>
    </div>
  );
};

export default CherryComp;
