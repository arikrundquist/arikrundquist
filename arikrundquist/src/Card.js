
import React from 'react';

function Card(props) {
  return (
    <a href={props.link} className="Card" key={props.key}>
      <img className="CardImage" src={props.image} alt={props.title} />
      <h3 className="CardTitle">{props.title}</h3>
      <p className="CardDescription" dangerouslySetInnerHTML={{"__html": `${props.description}`}}></p>
    </a>
  );
}

export default Card;