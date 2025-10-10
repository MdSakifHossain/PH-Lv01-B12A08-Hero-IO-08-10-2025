import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AllAppsPage from "../pages/AllAppsPage/AllAppsPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AppDetailsPage from "../pages/AppDetailsPage/AppDetailsPage";
import InstallationPage from "../pages/InstallationPage/InstallationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => axios("/apps.json"),
        Component: HomePage,
      },
      {
        path: "/apps",
        loader: async () => axios("/apps.json"),
        Component: AllAppsPage,
      },
      {
        path: "/apps/:id",
        loader: async ({ params }) => {
          const { data: allApps } = await axios("/apps.json");
          return allApps.find((app) => app.id === parseInt(params.id));
        },
        Component: AppDetailsPage,
      },
      {
        path: "/installation",
        loader: async () => axios("/apps.json"),
        Component: InstallationPage,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
