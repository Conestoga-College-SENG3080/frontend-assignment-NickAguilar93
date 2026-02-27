/*
 * FILE : routes.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file creates the browser router for the react application and defines the various routes
 */
import { createBrowserRouter } from "react-router";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import ForumPage from "./pages/ForumPage";
import FavoritesPage from "./pages/FavoritesPage";
let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            Component: Homepage,
            index: true,
          },
          {
            Component: ForumPage,
            path: "/forum/:id",
          },
          {
            Component: FavoritesPage,
            path: "/favorites",
          },
        ],
      },
    ],
  },
]);

export default router;
