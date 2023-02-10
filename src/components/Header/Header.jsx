import Description from "./Description";
import NavBar from "./NavBar";
import "../Estilos/Variables.css";
import "../Estilos/Header.css";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef();

  // cambia el valor del scroll true o false para activar el efecto del scroll
  useEffect(() => {
    const handleScroll = () => {
      const div = ref.current;
      const { y } = div.getBoundingClientRect();
      const scroll = y;
      setScroll(scroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="header" id="home" ref={ref}>
      <div className="background"></div>
      <NavBar scroll={scroll} />
      <div className="header-content">
        <Description />
      </div>
    </section>
  );
}
