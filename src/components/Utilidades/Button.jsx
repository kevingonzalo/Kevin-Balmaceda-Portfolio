export default function Button(props) {
  return (
    <div className="button-container">
      <button
        onClick={props.handleClick}
        className={`${props.clase} ${props.clicked ? "active" : ""}`}
      >
        {props.value}
      </button>
    </div>
  );
}
