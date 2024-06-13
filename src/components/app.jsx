import "../scss/app.scss";
import { Navbar } from "./Navbar.jsx";
import { Banner } from "./Banner.jsx";
import { Footer } from "./Footer.jsx";
import { AppartementCards } from "./AppartementCards.jsx";
import BannerHome from "../assets/BannerHome.png";

export function App() {
  return (
    <main>
      <div className="app-container">
        <Navbar />
        <Banner imgSrc={BannerHome} bannerTexte="Chez vous, partout et ailleurs" />
        <AppartementCards />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
