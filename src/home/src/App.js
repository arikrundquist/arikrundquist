
import React from 'react';

import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Products from "./Products";
import Education from "./Education";
import Skills from "./Skills";

function App() {

  return (
    <div id="app">
      <Hero />
      <div id="main">
        <Projects />
        <Products />
        <Skills />
        <Education />
        <hr />
      </div>
    </div>
  );
}

export default App;
