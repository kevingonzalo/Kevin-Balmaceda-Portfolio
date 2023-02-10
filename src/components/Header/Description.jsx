import imgHeader from "./imgHeader/img-header.png";
import Titulo from "../Utilidades/Titulo";
import CV from "./imgHeader/CV.pdf";
export default function Description() {
  return (
    <div className="description">
      <img src={imgHeader} alt="img header Portfolio desarrollo web " className="img-header" />

      <div className="description-text">
        <Titulo clase="Description-Titulo-uno" value="Kevin Balmaceda" />
        <Titulo clase="Description-Titulo-dos" value="Desarrollador Web" />

        <div className="button-container" title="Click para Descargar CV">
          <a href={CV} download="CV.pdf" className="btn">
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}
