import Titulo from "../Utilidades/Titulo";
import BoxContact from "./BoxContact";
import "../Estilos/Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <Titulo clase="contact-titulo" value="Contacto" />
      <div className="box-contact">
        <BoxContact
          enlace="mailto:kevinbalmaceda5@gmail.com"
          claseIcon="fa-regular fa-envelope mail-icon"
          parrafo="Mail"
        />
        <BoxContact
          enlace="https://www.linkedin.com/in/kevin-balmaceda-a0350b199/"
          claseIcon="fa-brands fa-linkedin-in linkedin-icon"
          parrafo="Linkedin"
        />
        <BoxContact
          enlace="https://github.com/kevingonzalo"
          claseIcon="fa-brands fa-github github-icon"
          parrafo="GitHub"
        />
      </div>
    </section>
  );
};
export default Contact;
