export default function ListElement({ enlace, valor, handleClick }) {
  return (
    <li className="list-element">
      <a href={enlace} onClick={handleClick}>
        {valor}
      </a>
    </li>
  );
}
