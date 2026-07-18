import React from "react";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router"

function Navbar() {
  const nav = useNavigate()
  const logoutHandler = async () => {
    try {
      await logout();
      nav("/login")
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <header className="h-[80px] border-b border-zinc-800 bg-black sticky top-0 z-50">

      <div className="h-full px-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-black text-red-500 tracking-wide">
            ADMIN PANEL
          </h1>
        </div>

        <div className="flex items-center gap-5">

          <input
            type="text"
            placeholder="Search users, books..."
            className="w-[320px] h-[45px] px-5 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none focus:border-red-500"
          />

          <button
            onClick={logoutHandler}
            className="h-[45px] px-5 rounded-2xl bg-red-500 font-bold hover:scale-105 transition">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;