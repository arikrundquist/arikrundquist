import Lister from "./Lister";
import ProjectCard from "./ProjectCard";

function App() {

  return Lister(ProjectCard, require("./projects.json"));
}

export default App;
