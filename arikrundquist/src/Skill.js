
import React from 'react';

function Skill(props) {
  return (
    <li key={props.key}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default Skill;