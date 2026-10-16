import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = document.getElementById("root")!;
const content = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, content);
else ReactDOM.createRoot(root).render(content);
