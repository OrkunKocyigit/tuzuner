import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CSSVariablesResolver, MantineProvider } from "@mantine/core";
import "./i18n/i18n.ts";
import App from "./App.tsx";

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {},
  dark: {
    "--mantine-color-text": theme.white,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider forceColorScheme="dark" cssVariablesResolver={resolver}>
      <App></App>
    </MantineProvider>
  </React.StrictMode>,
);
