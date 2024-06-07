import "./scss/app.scss";
import { Navbar } from "./components/Navbar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Footer } from "./components/Footer.jsx";
import { AppartementCards } from "./components/AppartementCards.jsx";
import BannerHome from "./assets/BannerHome.png";

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
