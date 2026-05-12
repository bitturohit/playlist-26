import "./index.css";
import "bulma/css/bulma.css";

import { createRoot } from "react-dom/client";

import App from "./App.js";
import "./store";

createRoot(document.getElementById("root")).render(<App />);
