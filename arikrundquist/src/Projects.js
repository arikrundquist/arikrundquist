
import React from 'react';
import Card from './Card';
import Lister from './Lister';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className='CardHolder'>{Lister(Card, require("./projects.json"))}</div>
    </section>
  );
}

export default Projects;
