import React from "react";

const Statement = () => {
  // Sample transactions data
  const transactions = [
    {
      id: 1,
      type: "incoming",
      amount: 200,
      description: "Received from John Doe",
      date: "2024-11-12",
    },
    {
      id: 2,
      type: "outgoing",
      amount: 50,
      description: "Paid Electricity Bill",
      date: "2024-11-10",
    },
    {
      id: 3,
      type: "incoming",
      amount: 100,
      description: "Salary",
      date: "2024-11-08",
    },
    {
      id: 4,
      type: "outgoing",
      amount: 75,
      description: "Grocery Shopping",
      date: "2024-11-05",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Transaction History
      </h1>

      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="bg-white p-4 shadow-md rounded">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{transaction.description}</span>
              <span
                className={`text-lg font-semibold ${
                  transaction.type === "incoming"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "incoming" ? "+" : "-"}$
                {transaction.amount}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statement;
