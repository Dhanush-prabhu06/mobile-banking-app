import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <h1 className="text-2xl">EasyBank</h1>
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/transactions" className="mr-4">
          Transactions
        </Link>
        <Link to="/support">Support</Link>
      </nav>
    </header>
  );
};

export default Header;
