import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";

const isDarkMode = true;

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
