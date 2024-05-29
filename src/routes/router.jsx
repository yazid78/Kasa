import { render } from "preact";
import { App } from "../app.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import {DescriptionAppartement} from "../components/DescriptionAppartement.jsx"
import "../scss/index.scss";
import { createBrowserRouter} from "react-router-dom";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div> page non trouvé</div>, /*mettre le composant error 404*/
    },
    {
      path: "/appartements/:id",
      element: (
        <div>
          <Navbar />
          <div>appart</div> 
         < DescriptionAppartement/> {/*mettre le composant descriptionappartement*/}
         <Footer/>
        </div>
      ),
    },
    {
      path: "/apropos",
      element: (
        <div>
          <Navbar />
          <div>a Propos</div>
          <Footer/>
      
        </div>
      ),
    },
  ]);

 