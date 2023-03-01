import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

function App() {

  return (
    <div>
      <Hero />
      <div id="main">
        <Projects />
        <Skills />
        <Education />
      </div>
    </div>
  );
}

export default App;
