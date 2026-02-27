/*
 * FILE : main.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file contains the main entry point for the react application.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routes.jsx";
import { RouterProvider } from "react-router/dom";
import { UserProvider } from "./context/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
