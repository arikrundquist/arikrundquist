
import React from 'react';

function Card(props) {
  return (
    <a href={props.link} className="Card" key={props.key} target="_blank" rel="noopener noreferrer">
      <img className="CardImage" src={props.required ? require("./images/" + props.image) : props.image} alt={props.title} />
      <h3 className="CardTitle">{props.title}</h3>
      <p className="CardDescription">{props.description}</p>
    </a>
  );
}

export default Card;