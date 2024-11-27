import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

function SmsLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("https://your-backend-api/sms-logs");
        setLogs(response.data.logs);
      } catch (error) {
        console.error("Failed to fetch SMS logs");
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="sms-logs">
      <h2>SMS Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Recipient</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.recipient}</td>
              <td>{log.message}</td>
              <td>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SmsLogs;
