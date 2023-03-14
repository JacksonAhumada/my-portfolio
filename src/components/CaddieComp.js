import "./LocalStyles.css";

import React from "react";

import CaddieImg from "../assets/project1.png";

const CaddieComp = () => {
  return (
    <div className="content">
      <div className="container">
      <h1 className="title">Clubhouse Caddie</h1>
      <img className="imgHeader" src={CaddieImg} alt="Caddie img"></img>
        <h1 className="section">Overview:</h1>
        <p className="topic">
          The golfing experience is being revolutionized with the introduction
          of a new app that brings the clubhouse to you. With this app, golfers
          can order mouth-watering food, ice-cold drinks, and essential golf
          supplies right from the comfort of their golf cart. This allows
          players to focus more on their game and enjoy the convenience of
          having everything they need at their fingertips. Whether it's a quick
          snack or a refreshing beverage, golfers can now have it all delivered
          directly to them on the course. This app is designed to enhance the
          golfing experience and provide golfers with a more convenient and
          enjoyable way to play the game.
        </p>
        <h1 className="section">Objective:</h1>
        <p className="topic">
          The objective of Clubhouse Caddie is to enhance the golfing experience
          by providing a convenient and enjoyable way for golfers to order
          mouth-watering food, ice-cold drinks, and essential golf supplies from
          the comfort of their cart, bringing the clubhouse to them and allowing
          them to focus more on their game.
        </p>
        <h1 className="section">Role:</h1>
        <p className="topic">Front End Developer</p>
        <h1 className="section">Skills</h1>
        <ul className="topic">
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>UX/UI Design</li>

        </ul>
      </div>
    </div>
  );
};

export default CaddieComp;
