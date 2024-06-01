import { App } from "../app.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { DescriptionAppartement } from "../components/DescriptionAppartement.jsx";
import { Error404 } from "../components/error404.jsx";
import { Apropos } from "../components/apropos.jsx";
import "../scss/index.scss";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/appartements/:id",
    element: (
      <>
        <div className="PageAppartements">
          <Navbar />
          <DescriptionAppartement />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/apropos",
    element: (
      <div>
        <Apropos className="PageAppartements" />
      </div>
    ),
  },
]);
