import React from "react";

const BalanceSummary = () => {
  return (
    <div className="bg-gray-100 p-6 shadow-md rounded-lg my-6 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Bank Balance</h2>
        <p className="text-4xl font-bold text-green-600 mt-2">$5,000.00</p>
      </div>
    </div>
  );
};

export default BalanceSummary;
