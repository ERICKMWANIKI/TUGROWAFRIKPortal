import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SendSms from "./components/SendSms";
import SmsLogs from "./components/SmsLogs";
import Scheduler from "./components/Scheduler";
import UserManagement from "./components/UserManagement";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send-sms" element={<SendSms />} />
          <Route path="/sms-logs" element={<SmsLogs />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
