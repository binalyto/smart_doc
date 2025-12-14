import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 sm:h-16 bg-white shadow-sm flex items-center justify-between px-6 sm:px-6">
      <h1 className="text-lg sm:text-xl font-bold text-blue-900">
        SmartDoc.   
      </h1>
      <button className="sm:hidden text-gray-600">☰</button>
      <ul className="hidden sm:flex gap-6 text-sm font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Scans</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
