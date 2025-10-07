import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
