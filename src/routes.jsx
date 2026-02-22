import { createBrowserRouter } from "react-router";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import ForumPage from "./pages/ForumPage";
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
        ],
      },
    ],
  },
]);

export default router;
