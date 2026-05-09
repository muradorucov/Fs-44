import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Home from "./pages/home";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])