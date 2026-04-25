import { createBrowserRouter } from "react-router";
import Posts from "../pages/posts";
import Favorite from "../pages/favorite";
import Layout from "../components/layout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: "/favorite",
        element: <Favorite />
      }
    ]
  }
])