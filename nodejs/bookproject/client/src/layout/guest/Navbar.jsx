import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
      <div className="container mx-auto px-5 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-black tracking-wider text-yellow-400"
        >
          BOOKLY
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-zinc-300 hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="text-zinc-300 hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;