import React from "react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      <button className="bg-blue-600 text-white py-4 rounded">
        <a href="/accounts"> Check Balance</a>
      </button>
      <button className="bg-blue-600 text-white py-4 rounded">
        <a href="/TransferFund"> Transfer Funds</a>
      </button>
      <button className="bg-blue-600 text-white py-4 rounded">
        <a href="/statement">View Statement</a>
      </button>
    </div>
  );
};

export default QuickActions;
