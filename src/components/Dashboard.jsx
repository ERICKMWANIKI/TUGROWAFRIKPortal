import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Welcome to the SMS Portal</h1>

      <div className="dashboard-buttons">
        <button onClick={() => navigate("/send-sms")}>Send SMS</button>
        <button onClick={() => navigate("/sms-logs")}>View SMS Logs</button>
        <button onClick={() => navigate("/scheduler")}>Schedule SMS</button>
        <button onClick={() => navigate("/user-management")}>
          User Management
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
