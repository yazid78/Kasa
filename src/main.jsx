import { render } from "preact";
import { App } from "./app.jsx";
import "./scss/index.scss";
import {router} from './routes/router.jsx';


render(<RouterProvider router={router} />, document.getElementById("app"));
