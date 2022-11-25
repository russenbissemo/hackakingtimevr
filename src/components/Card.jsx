import React from "react";
import "../css/Card.css";

const Card = ({description ,title, image}) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={image}
        alt={title}
      />
        <h1 className="card-title">{title}</h1>
        <h2 className="card-time">45min</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Travel</button>
     </div>
  )
}

export default Card

