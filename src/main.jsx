// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Redux
import { Provider } from "react-redux";
// Store
import store from "./store/store.jsx";
// Components
import App from "./App.jsx";
// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
// Styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
