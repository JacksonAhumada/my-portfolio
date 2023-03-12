import "./LocalStyles.css";

import React from "react";

import CherryImg from "../assets/project3.jpg";

const CherryComp = () => {
  return (
    <div className="content">
      <h1>The Local</h1>
        <img className="imgHeader" src={CherryImg} alt="Cherry Picked screenshot"></img>
      <div className="container">
        <h1>Overview:</h1>
        <p className="topic">
          The Local is a carefully curated database of the best restaurants,
          attractions, and entertainment options in any given city, created by
          travelers and locals alike. Rather than wading through the endless
          list of tourist traps and generic chain restaurants that often come up
          in a Google search, The Local offers insider tips and unique
          recommendations that capture the true essence of each city. We
          understand that travelers want to experience the local culture and
          discover hidden gems that make each city unique. That's why we created
          The Local, to help solve the common problem of finding authentic and
          memorable experiences in a new city.
        </p>
        <h1>Objective:</h1>
        <p className="topic">
          The objective of The Local is to provide travelers with a
          comprehensive and carefully curated database of the best local
          restaurants, attractions, and entertainment in any given city. By
          offering insider tips and unique recommendations, we aim to help
          travelers discover hidden gems and experience the true essence of each
          city. Our goal is to solve the common problem of finding authentic and
          memorable experiences in a new city, making travel more enjoyable and
          rewarding for everyone.
        </p>
        <h1>Role:</h1>
        <p className="topic">
        UX/UI Engineer
        </p>
      </div>
    </div>
  );
};

export default CherryComp;
