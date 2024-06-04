import { Navbar } from "../components/Navbar.jsx";
import "../scss/error404.scss";
import { Footer } from "../components/Footer.jsx";
import error404 from "../assets/error404.jpg";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="error">
        <img src={error404} alt="image erreur404" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to={"/Kasa"}>
    
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;

