import "../scss/Footer.scss";
import LogoFooter from "../assets/LogoFooter.png";
export function Footer() {
  return (
    <footer className="footer">
      <img className="bannerText" src={LogoFooter} alt="Logo Kasa footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
