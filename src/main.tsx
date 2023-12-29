import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CSSVariablesResolver, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import "./i18n/i18n.ts";

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
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MantineProvider>
  </React.StrictMode>,
);
