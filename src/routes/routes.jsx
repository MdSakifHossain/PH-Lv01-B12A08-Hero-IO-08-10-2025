import { createBrowserRouter } from "react-router";

import App from "../App";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1 className="text-8xl">Page Not Found</h1>
      </div>
    ),
  },
]);
