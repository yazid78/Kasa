import "../scss/apropos.scss";
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import BannerApropos from '../assets/BannerApropos.png'; 
import { Footer } from "../components/Footer.jsx";

export const Apropos = () => {
  return (
    <div>
      <Navbar />
      <Banner imgSrc={BannerApropos} bannerTexte="" /> 
      <div></div>
      <Footer />
    
    </div>
  );
}
