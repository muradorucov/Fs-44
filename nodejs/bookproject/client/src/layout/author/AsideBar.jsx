import React from "react";
import { NavLink } from "react-router";

function AsideBar() {
  return (
    <aside className="w-[270px] h-[calc(100vh-80px)] border-r border-zinc-800 bg-zinc-950 fixed left-0 top-[80px] p-5">

      <div className="mb-10">
        <h2 className="text-zinc-500 uppercase text-sm tracking-widest">
          Navigation
        </h2>
      </div>

      <div className="flex flex-col gap-3">

        <NavLink
          to="/author"
          end
          className={({ isActive }) =>
            `h-[55px] rounded-2xl px-5 flex items-center transition font-semibold ${isActive
              ? "bg-yellow-400 text-black"
              : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/author/books"
          className={({ isActive }) =>
            `h-[55px] rounded-2xl px-5 flex items-center transition font-semibold ${isActive
              ? "bg-yellow-400 text-black"
              : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
            }`
          }
        >
          My Books
        </NavLink>
      </div>
    </aside>
  );
}

export default AsideBar;