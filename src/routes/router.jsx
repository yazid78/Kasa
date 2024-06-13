import { App } from "../components/app.jsx";

import PageAppartements from "../components/PageAppartements.jsx";
import Error404 from "../components/error404.jsx";
import { Apropos } from "../components/apropos.jsx";
import "../scss/index.scss";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/appartements/:id",
    element: <PageAppartements />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);
