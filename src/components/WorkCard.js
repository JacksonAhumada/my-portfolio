import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  const handleViewClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <div className="pro-content">
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            {React.cloneElement(props.view, { onClick: handleViewClick })}
            
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
