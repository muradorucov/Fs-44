import React from "react";
import { NavLink } from "react-router";

function AsideBar() {
  return (
    <aside className="w-[290px] h-[calc(100vh-80px)] fixed top-[80px] left-0 border-r border-zinc-800 bg-black p-5">
      
      <div className="mb-10">
        <h2 className="uppercase tracking-[6px] text-zinc-600 text-sm">
          System
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `h-[60px] rounded-2xl px-5 flex items-center font-semibold transition ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `h-[60px] rounded-2xl px-5 flex items-center font-semibold transition ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
            }`
          }
        >
          Users
        </NavLink>
      </div>

      
      <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
        
        <p className="text-zinc-500 text-sm mb-3">
          System Status
        </p>

        <div className="flex items-center gap-3">
          
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="font-semibold">
            Servers Online
          </span>
        </div>
      </div>
    </aside>
  );
}

export default AsideBar;