import React from "react";

const Notifications = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded my-4">
      <h2 className="text-lg font-semibold text-yellow-800">
        Important Notification
      </h2>
      <p className="text-gray-700">
        Scheduled maintenance on 15th Nov from 2 AM to 5 AM. Services may be
        unavailable.
      </p>
    </div>
  );
};

export default Notifications;
