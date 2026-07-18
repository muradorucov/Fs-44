import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <Navbar />

      <main className="flex-1 container mx-auto px-5 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;