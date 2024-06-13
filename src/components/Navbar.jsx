import "../scss/Navbar.scss";
import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/Kasa/">
        <img src={LOGO} alt="logo" />
      </NavLink>
      <div className="navlinks">
        <NavLink to="/Kasa/" end className={({ isActive }) => (isActive ? "active" : "")}>
          <div className="link">Accueil</div>
        </NavLink>
        <NavLink to="/Kasa/apropos" className={({ isActive }) => (isActive ? "active" : "")}>
          <div className="link">À Propos</div>
        </NavLink>
      </div>
    </nav>
  );
}
