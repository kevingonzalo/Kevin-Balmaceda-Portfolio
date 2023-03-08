const BoxContact = ({ claseMail, claseIcon, parrafo, enlace }) => {
  return (
    <div className={`box-contact-item ${claseMail}`}>
      <a href={enlace} target="_blank" rel="noreferrer">
        <i className={claseIcon}></i>
        <p>{parrafo}</p>
      </a>
    </div>
  );
};
export default BoxContact;
