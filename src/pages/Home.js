import React from "react";
import Navbar from "../components/Navbar";
import BalanceSummary from "../components/BalanceSummary";
import QuickActions from "../components/QuickActions";
import Notifications from "../components/Notifications";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Notifications */}
      <div className="p-4">
        <Notifications />
      </div>

      {/* Welcome Banner */}
      <section className="p-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-700">
          Welcome to EasyBank
        </h2>
        <p className="text-gray-700 mt-2">
          Your trusted partner in managing finances simply and securely.
        </p>
      </section>

      {/* Account Balance and Quick Actions */}
      <div className="p-4">
        <QuickActions />
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center mt-auto">
        <p>&copy; 2024 EasyBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
