import React from "react";
import Navbar from "./Navbar";
import AsideBar from "./AsideBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="flex">
        <AsideBar />

        <main className="flex-1 ml-[290px] p-8 min-h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AdminLayout;