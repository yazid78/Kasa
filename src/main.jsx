import { render } from "preact";
import "./scss/index.scss";
import {router} from './routes/router.jsx';
import { RouterProvider } from "react-router-dom";

render(<RouterProvider router={router} />, document.getElementById("app"));
