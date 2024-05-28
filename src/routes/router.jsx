import { render } from "preact";
import { App } from "./app.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div> page non trouvé</div>,
    },
    {
      path: "/appartements",
      element: (
        <div>
          <Navbar />
          <div>appart</div>
        </div>
      ),
    },
    {
      path: "/apropos",
      element: (
        <div>
          <Navbar />
          <div>a Propos</div>
        </div>
      ),
    },
  ]);

  export default router