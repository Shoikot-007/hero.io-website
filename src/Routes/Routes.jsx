import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppNotFound from "../Pages/AppNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app-not-found",
        element: <AppNotFound />,
      },
    ],
  },
]);

export default router;