import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // Importing your main styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
