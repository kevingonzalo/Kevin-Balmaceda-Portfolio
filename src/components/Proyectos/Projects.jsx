import Titulo from "../Utilidades/Titulo";
import "../Estilos/Projects.css";
import CalculadoraJs from "./Projects-img/Calculadora-JS.png";
import EcommercePlantasCarnivoras from "./Projects-img/Ecommerce-PlantasCarnivoras.png";
import CuentaRegresiva from "./Projects-img/CuentaRegresiva.png";
import paqueteTuristicoLandingPage from "./Projects-img/paqueteTuristico-LandingPage.png";
import PiedraPapelOTijeras from "./Projects-img/PiedraPapelOTijeras.png";
import SimonGame from "./Projects-img/Simon-game.png";
import TaTeTiGame from "./Projects-img/Ta-Te-Ti-Game.png";
import WebdePeliculas from "./Projects-img/Web-de-Peliculas-Responsive.png";
import PortfolioAntiguo from "./Projects-img/PortfolioAntiguo.png";
import WebdeTestimonios from "./Projects-img/Web-de-Testimonios.png";
import ListadeCompras from "./Projects-img/ListadeCompras.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <Titulo clase="projects-titulo" value="Proyectos" />
      <div className="projects-content">
        <Titulo clase="subtitulo-projects" value="Los proyectos en los que he trabajado." />
        <div className="list-projects">
          <ProjectItem
            imagen={CalculadoraJs}
            titulo="Calculadora"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Calculadora con Js"
            linkWebside="https://calculadorawithjs.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/Calculadora-js"
          />
          <ProjectItem
            imagen={EcommercePlantasCarnivoras}
            titulo="Ecommerce Plantas Carnivoras"
            text="JS, bootstrap."
            alt="Proyecto de Porfolio Ecommerce de Plantas Carnivoras con Js"
            linkWebside="https://e-commerceplantascarnivoras.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/E-commerce-Plantas-Carnivoras"
          />
          <ProjectItem
            imagen={CuentaRegresiva}
            titulo="Cuenta Regresiva"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Cuenta Regresiva con Js"
            linkWebside="https://cuenta-regresivajs.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/Cuenta-Regresiva-JS"
          />
          <ProjectItem
            imagen={paqueteTuristicoLandingPage}
            titulo="paquete Turistico LandingPage"
            text="Material UI, REACT."
            alt="Proyecto de Porfolio Landing Page con Material UI Y REACT"
            linkWebside="https://pagina-aerolineas.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/pagina-aerolineas-LandingPage"
          />
          <ProjectItem
            imagen={PiedraPapelOTijeras}
            titulo="Piedra Papel o Tijeras"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Piedra Papel o Tijeras con Js"
            linkWebside="https://piedrapapelotijerasgame.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/Piedra-Papel-o-Tijeras-JS"
          />
          <ProjectItem
            imagen={SimonGame}
            titulo="Simon Dice"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Simon Dice con Js"
            linkWebside="https://simon-dice-js.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/simon-dice-js"
          />
          <ProjectItem
            imagen={TaTeTiGame}
            titulo="Ta-Te-Ti Game"
            text="REACT."
            alt="Proyecto de Porfolio Ta Te Ti Game con REACT"
            linkWebside="https://ta-te-ti-reactjs.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/Ta-Te-Ti-REACTJS"
          />
          <ProjectItem
            imagen={WebdePeliculas}
            titulo="Web de Peliculas"
            text="REACT."
            alt="Proyecto de Porfolio Web de Peliculas con Js"
            linkWebside="https://web-peliculas.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/WEB-Peliculas-Reactjs"
          />
          <ProjectItem
            imagen={PortfolioAntiguo}
            titulo="Portfolio Antiguo"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Portfolio Antiguo con Js"
            linkWebside="https://kevinbalmaceda-portfolioantiguo.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/PortfolioAntiguoJs  "
          />
          <ProjectItem
            imagen={WebdeTestimonios}
            titulo="Web de Testimonios"
            text="React."
            alt="Proyecto de Porfolio Web de Testimonios con REACT"
            linkWebside="https://testimonios-reactjs.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/WEB-Testimonios-ReactJS"
          />
          <ProjectItem
            imagen={ListadeCompras}
            titulo="Lista de Compras"
            text="HTML, CSS y JS."
            alt="Proyecto de Porfolio Lista de Compras con Js"
            linkWebside="https://lista-de-compras-comidas.netlify.app/"
            linkRepository="https://github.com/kevingonzalo/Lista-ComprasJs"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
