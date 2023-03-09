import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <div className="pro-content">
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} target="_blank" className="btn" rel="noreferrer">
            View
          </a>
          <a
            href={props.source}
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            Source
          </a>
          </div>
          </div>
      </div>
    </div>
  );
};

export default WorkCard;
