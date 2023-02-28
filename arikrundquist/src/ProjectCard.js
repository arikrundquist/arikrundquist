
function ProjectCard(props) {
  return (
    <div className="Card" key={props.key}>
      <img className="CardImage" src={props.image} alt={props.title} />
      <h3 className="CardTitle">{props.title}</h3>
      <p className="CardDescription">{props.description}</p>
      <a href={props.link} className="CardLink">View Project</a>
    </div>
  );
}

export default ProjectCard;