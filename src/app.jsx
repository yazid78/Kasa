import "./scss/app.scss";
import { Navbar } from "./components/Navbar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Footer } from "./components/Footer.jsx";
import { AppartementCards } from "./components/AppartementCards.jsx";

export function App() {
  return (
    <div>
      <div className="app-container">
      <Navbar />
      <Banner />
      <AppartementCards />
     
    </div> 
    <footer>
      <Footer />
    </footer>
    </div>

    
  );
}
