import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Navbar from "./components/Navbar";
import BalanceSummary from "./components/BalanceSummary";
import Statement from "./components/Statement";
import TransferFund from "./pages/TransferFund";
import i18n from "./i18n.js";
import Login from "./admin/Login.js";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/accounts" element={<BalanceSummary />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/TransferFund" element={<TransferFund />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
