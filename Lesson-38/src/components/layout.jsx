import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'

function Layout() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  console.log(path);

  console.log(path === "");
  console.log(path === "favorite");



  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo / Brand */}
          <h1 className="text-lg font-semibold text-gray-800">
            PostApp
          </h1>

          {/* Links */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">

            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg  text-gray-800  ${path === "" && "bg-white shadow"}`}
            >
              Posts
            </Link>

            <Link
              to="/favorite"
              className={`px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition ${path === "favorite" && "bg-white shadow"}`}
            >
              Favorite
            </Link>

          </div>

        </div>
      </nav>

      {/* Content */}
      <div className="p-6">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout