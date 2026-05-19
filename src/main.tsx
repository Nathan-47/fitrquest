import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { StyledEngineProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StyledEngineProvider>
  </StrictMode>
);