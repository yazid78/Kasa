import "../css/Navbar.scss";
import LOGO from "../assets/LOGO.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <img src={LOGO} alt="logo" />
      <div className="navlinks">
        <a href="">Accueil</a>
        <a href="">À Propos</a>
      </div>
    </nav>
  );
}
