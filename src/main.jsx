import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap App so every component can use routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
