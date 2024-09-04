import { Link } from "react-router-dom";
export function Header({ setNavigation }) {
  return (
    <ul className="header">
      <li className="withPicture">
        {" "}
        <Link to="/">
          <img src="/logo.jpeg" />
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/"> Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/rostilj">Jela sa Rostilja</Link>
      </li>
      <li>
        {" "}
        <Link to="/pizza"> Pizza</Link>
      </li>
      <li>
        {" "}
        <Link to="/hamburger">Hamburgeri</Link>
      </li>
      <li>
        {" "}
        <Link to="/kontakt">Narudba</Link>
      </li>
    </ul>
  );
}
