
import React from 'react';
import Lister from './Lister';
import Skill from './Skill';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>{Lister(Skill, require("./skills.json"))}</ul>
    </section>
  );
}

export default Skills;
