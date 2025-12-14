import React, { Children } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-100">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
