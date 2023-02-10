const BoxContact = ({ claseIcon, parrafo, enlace }) => {
  return (
    <div className="box-contact-item">
      <a href={enlace} target="_blank" rel="noreferrer">
        <i class={claseIcon}></i>
        <p>{parrafo}</p>
      </a>
    </div>
  );
};
export default BoxContact;
