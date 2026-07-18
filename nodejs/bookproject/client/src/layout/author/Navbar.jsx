import React from "react";

function Navbar() {
  return (
    <header className="h-[80px] border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
      <div className="h-full px-8 flex items-center justify-between">
        
        <div>
          <h1 className="text-3xl font-black text-yellow-400">
            AUTHOR PANEL
          </h1>
        </div>

        <div className="flex items-center gap-4">
          
          <input
            type="text"
            placeholder="Search..."
            className="w-[300px] h-[45px] px-4 rounded-xl bg-zinc-900 border border-zinc-800 outline-none focus:border-yellow-400"
          />

          <div className="w-[45px] h-[45px] rounded-full bg-yellow-400 text-black font-black flex items-center justify-center">
            M
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;