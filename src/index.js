import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import "./css/global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { PredefinedCountriesProvider } from "./Components/PredefinedCountriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PredefinedCountriesProvider>
        <App />
      </PredefinedCountriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
