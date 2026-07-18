import React from "react";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-10">
      <div className="container mx-auto px-5 py-6 flex items-center justify-between">
        <p className="text-zinc-500 text-sm">
          © 2026 Bookly. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <span className="hover:text-yellow-400 cursor-pointer transition">
            Privacy
          </span>

          <span className="hover:text-yellow-400 cursor-pointer transition">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;