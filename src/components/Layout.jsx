import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main content will grow to fill available space */}
      <main className="flex-grow mt-[12vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
