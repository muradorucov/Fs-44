import { createBrowserRouter, Navigate } from "react-router";
import Cart from "../pages/cart";
import Shop from "../pages/shop";
import Layout from "../layout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/shop"} />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
  {
    path: "*",
    element: <h1>NotFound</h1>
  }
])