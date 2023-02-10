export default function ProjectItem(props) {
  return (
    <div className="projects__item">
      <img src={props.imagen} className="projects__item-img" alt={props.alt} />
      <div className="projects-item-description">
        <h3 className="projects__item__description-titulo">{props.titulo}</h3>
        <p className="projects__item__description-text">Web Application: {props.text}</p>
        <div className="project-bottom-container">
          <a href={props.linkWebside} className="webside" target="_blank" rel="noopenr noreferrer">
            <i className="fa-solid fa-earth-americas"></i> Website
          </a>
          <a href={props.linkRepository} className="repository" target="_blank" rel="noopenr noreferrer">
            <i className="fa-brands fa-github icon-repository"></i> Repository
          </a>
        </div>
      </div>
    </div>
  );
}
