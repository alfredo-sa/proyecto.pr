import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
import { UsuarioProvider } from "./contexts/UsuarioContext.jsx";
import { TemaProvider } from "./contexts/TemaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemaProvider>
      <CssBaseline />
      <UsuarioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsuarioProvider>
    </TemaProvider>
  </React.StrictMode>
);
