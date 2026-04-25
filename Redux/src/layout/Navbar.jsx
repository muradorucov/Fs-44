import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cartList = useSelector(x => x)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          ShopApp
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Cart

            {/* Cart Badge */}
            {cartList.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartList.reduce((acc, item) => acc += item.quantity, 0)}
              </span>
            )}
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;