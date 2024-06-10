import "../scss/Navbar.scss";
import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar test">
      <NavLink to={"/Kasa/"}>
        <img src={LOGO} alt="logo" />
      </NavLink>
      <div className="navlinks">
        <NavLink to={"/Kasa/"}>
          <div className="link">Accueil</div>
        </NavLink>

        <NavLink to="/Kasa/apropos">
          <div className="link">À Propos</div>
        </NavLink>
      </div>
    </nav>
  );
}
