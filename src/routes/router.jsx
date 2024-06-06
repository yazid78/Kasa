import { App } from "../app.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { DescriptionAppartement } from "../components/DescriptionAppartement.jsx";
import Error404 from "../components/error404.jsx";
import { Apropos } from "../components/apropos.jsx";
import "../scss/index.scss";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/Kasa/",
    element: <App />,
  },
  {
    path: "/Kasa/appartements/:id",
    element: (
      <>
        <div className="PageAppartements">
          <DescriptionAppartement />
        </div>
        <Footer /> {/* J'ai mis le footer en dehors pour qu'il prennent tout la largeur sans margin des cotés */}
      </>
    ),
  },
  {
    path: "/Kasa/apropos",
    element: <Apropos className="PageAppartements" />,
  },
  {
    path: "/Kasa/*",
    element: <Error404 />,
  },
]);
