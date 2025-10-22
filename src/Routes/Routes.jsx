import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: '/app/:id',
        element: <AppDetails />
      },
    ],
  },
]);

export default router;