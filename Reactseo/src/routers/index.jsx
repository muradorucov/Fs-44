import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])