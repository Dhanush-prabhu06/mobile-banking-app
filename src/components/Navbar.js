import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-semibold">EasyBank</h1>
      <div className="flex gap-4">
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
        <div className="flex gap-4">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("hi")}>हिन्दी</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
