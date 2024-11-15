import React, { useState } from "react";

const TransferFund = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  // Function to handle transfer submission
  const handleTransfer = (e) => {
    e.preventDefault();
    if (recipient && amount) {
      setConfirmation(true); // Show confirmation message on successful input
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Transfer Funds
      </h1>

      <form
        onSubmit={handleTransfer}
        className="bg-white p-6 shadow-md rounded space-y-4 max-w-md mx-auto"
      >
        {/* Recipient Details */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipient’s Account Number
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter account number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Amount Details */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Transfer Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Transfer
        </button>

        {/* Confirmation Message */}
        {confirmation && (
          <p className="text-green-600 mt-4 text-center">
            Transfer initiated successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default TransferFund;
