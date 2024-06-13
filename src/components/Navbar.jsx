// Import necessary components and assets
import "../scss/Navbar.scss";
import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

// Define Navbar component
export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={LOGO} alt="logo" />
      </NavLink>
      <div className="navlinks">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
          <div className="link">Accueil</div>
        </NavLink>

        <NavLink to="/apropos" className={({ isActive }) => (isActive ? "active" : "")}>
          <div className="link">À Propos</div>
        </NavLink>
      </div>
    </nav>
  );
}
