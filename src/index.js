import "./index.css";
import "bulma/css/bulma.css";

import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import { store } from "./store/index.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
   <Provider store={store}>
      <App />
   </Provider>,
);
// createRoot(document.getElementById("root")).render(<App />);
