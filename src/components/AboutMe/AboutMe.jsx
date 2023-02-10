import Titulo from "../Utilidades/Titulo";
import "../Estilos/AboutMe.css";
// logos
import html from "./logos/1-html.svg";
import css from "./logos/2-css.svg";
import js from "./logos/3-javascript.svg";
import react from "./logos/4-react.svg";
import git from "./logos/5-git.svg";
import github from "./logos/6-github.svg";
import java from "./logos/7-java.svg";
import bootstrap from "./logos/8-bootstrap.svg";
import materialUi from "./logos/9-material-ui.svg";
import photoshop from "./logos/10-photoshop.svg";
export default function AboutMe({ value }) {
  return (
    <section className="sobreMi" id="about-me">
      <Titulo clase="About-me-titulo" value="Sobre Mi" />
      <div className="about-me-content">
        <div className="description-me">
          <Titulo clase="About-me-subtitulo" value="Formacion y Personalidad" />
          <p className="parrafo-description">
            Estudiante de{" "}
            <a
              href="https://www.info.unlp.edu.ar/licenciatura-en-sistemas-plan-2021/"
              title="Web de la Carrera"
              target="_blank"
              rel="noreferrer"
            >
              Licenciatura en sistemas De la Universidad Nacional de la plata
            </a>
            , y Desarrollador Web con conocimientos en el Área del Front End. Mi conocimiento lo obtuve con la
            universidad en cuanto a lo que es teoría y lógica, otra gran parte como autodidacta con cursos,
            documentación y videos. Me gusta aprender constantemente nuevas Tecnologías hacer proyectos perfeccionando
            mis conocimientos de programación y del inglés.Me gusta dar y recibir Feedback por lo que soy bueno
            trabajando en equipo aunque me desempeño bien solo También.
          </p>
        </div>
        <div className="my-skills">
          <Titulo clase="About-me-subtitulo" value="Habilidades y Tecnologias" />
          <div className="logos">
            <img src={html} alt="logo de HTML Portfolio Kevin Balmaceda" />
            <img src={css} alt="logo de CSS Portfolio Kevin Balmaceda" />
            <img src={js} alt="logo de JAVASCRIPT Portfolio Kevin Balmaceda" />
            <img src={react} alt="logo de react Portfolio Kevin Balmaceda" />
            <img src={git} alt="logo de Git Portfolio Kevin Balmaceda" />
            <img src={github} alt="logo de GitHub Portfolio Kevin Balmaceda" />
            <img src={java} alt="logo de Java Portfolio Kevin Balmaceda" />
            <img src={bootstrap} alt="logo de bootstrap Portfolio Kevin Balmaceda" />
            <img src={materialUi} alt="logo de materialUi Portfolio Kevin Balmaceda" />
            <img src={photoshop} alt="logo de photoshop Portfolio Kevin Balmaceda" />
            {/* fin de los logos */}
          </div>
        </div>
      </div>
    </section>
  );
}
