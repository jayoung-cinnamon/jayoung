import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./lang/i18n";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import i18n from "./lang/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
