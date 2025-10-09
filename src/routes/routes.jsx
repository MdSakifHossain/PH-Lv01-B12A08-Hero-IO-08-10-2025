import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
