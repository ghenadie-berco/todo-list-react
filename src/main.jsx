// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Components
import App from "./App.jsx";
// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
// Styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
