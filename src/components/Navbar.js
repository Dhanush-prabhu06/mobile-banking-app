import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-semibold">EasyBank</h1>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Links and language buttons */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 items-center md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 z-10`}
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/accounts" className="hover:underline">
          Accounts
        </Link>
        <Link to="/support" className="hover:underline">
          Support
        </Link>
        <button className="bg-yellow-500 px-4 py-2 rounded">Login</button>

        <div className="flex gap-2 mt-2 md:mt-0">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("hi")}>हिन्दी</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
