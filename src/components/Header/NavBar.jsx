import Button from "../Utilidades/Button";
import { useState } from "react";
import ListElement from "./ListElement";
export default function NavBar({ scroll }) {
  const [clicked, setClicked] = useState(false);

  // cambia a verdadero o falso a dar un click a un elemento de la navbar
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`navBar ${scroll <= -145 ? "scroll" : ""}`}>
      <div className="logo">
        <a href="#home">KG</a>
      </div>
      <Button
        clase="menu"
        clicked={clicked}
        handleClick={handleClick}
        value={<i class="fa-sharp fa-solid fa-bars"></i>}
      />
      <ul className={`list ${clicked ? "active" : ""}`} onClick={handleClick}>
        <ListElement enlace="#home" handleClick={handleClick} valor="HOME" />
        <ListElement enlace="#about-me" handleClick={handleClick} valor="SOBRE MI" />
        <ListElement enlace="#proyectos" handleClick={handleClick} valor="PROYECTOS" />
        <ListElement enlace="#contacto" handleClick={handleClick} valor="CONTACTO" />
      </ul>
    </div>
  );
}
