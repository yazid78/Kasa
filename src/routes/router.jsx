import { App } from "../app.jsx";

import PageAppartements from "../components/PageAppartements.jsx";
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
    element: <PageAppartements />,
  },
  {
    path: "/Kasa/apropos",
    element: <Apropos />,
  },
  {
    path: "/Kasa/*",
    element: <Error404 />,
  },
]);
