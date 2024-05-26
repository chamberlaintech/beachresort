import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AppProvider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);
