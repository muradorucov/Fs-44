import { createBrowserRouter } from "react-router"
import Layout from "../layout/guest"
import Home from "../pages/guest/Home"
import Contact from "../pages/guest/Contact"
import AuhtorLayout from "../layout/author"
import AdminLayout from "../layout/admin"
import AuthorDashboard from "../pages/author/Dashboard"
import Books from "../pages/author/Books"
import AdminDashboard from "../pages/admin/Dashboard"
import Users from "../pages/admin/Users"
import Login from "../pages/guest/Login"
import Register from "../pages/guest/Register"
import PrivateRouter from "../provider/privateRouter"

export const routers = createBrowserRouter([
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
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "/author",
    element: <PrivateRouter>
      <AuhtorLayout />
    </PrivateRouter>,
    children: [
      {
        index: true,
        element: <AuthorDashboard />
      },
      {
        path: "books",
        element: <Books />
      }
    ]
  },
  {
    path: "/admin",
    element: <PrivateRouter>
      <AdminLayout />
    </PrivateRouter>,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  }
])