import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 w-full"
    >
      {label}
    </button>
  );
};

export default Button;
