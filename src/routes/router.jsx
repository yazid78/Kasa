import { render } from "preact";
import { App } from "../app.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { Banner } from "../components/Banner.jsx";
import { DescriptionAppartement } from "../components/DescriptionAppartement.jsx";
import "../scss/index.scss";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> ERROR 404</div> /*mettre le composant error 404*/,
  },
  {
    path: "/appartements/:id",
    element: (
      <div>
        <Navbar />
        <DescriptionAppartement />
        <Footer />
      </div>
    ),
  },
  {
    path: "/apropos",
    element: (
      <div>
        <Navbar />
        <Banner/>
        <div>a Propos</div>
        <Footer />
      </div>
    ),
  },
]);
