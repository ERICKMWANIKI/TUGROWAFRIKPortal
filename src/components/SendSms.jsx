import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

function SendSms() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [feedback, setFeedback] = useState("");

  // Function to handle sending SMS
  const handleSendSms = async () => {
    if (!recipient && !csvFile) {
      setFeedback("Please enter a recipient or upload a CSV file.");
      return;
    }

    try {
      // Form data to send to the backend
      const formData = {
        apikey: "65cdfb55fd05be1e12b8894b43b235d6", // Your API Key
        partnerID: "11872", // Your Partner ID
        message: message, // SMS message
        shortcode: "TUGROWAFRIK", // Shortcode
        mobile: recipient, // Recipient's phone number
      };

      // Send request to your backend proxy
      const response = await axios.post(
        "http://localhost:3001/send-sms",
        formData
      );

      setFeedback(response.data.message || "SMS sent successfully!");
    } catch (error) {
      console.error("Error sending SMS:", error);
      setFeedback(
        "Failed to send SMS. Please check the details and try again."
      );
    }
  };

  return (
    <div className="send-sms">
      <h2>Send SMS</h2>
      <div className="form-group">
        <label htmlFor="recipient">Recipient Number</label>
        <input
          type="text"
          id="recipient"
          placeholder="Enter recipient's phone number"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Enter Your Message</label>
        <textarea
          id="message"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="csvFile">Upload CSV (optional)</label>
        <input
          type="file"
          id="csvFile"
          accept=".csv"
          onChange={(e) => setCsvFile(e.target.files[0])}
        />
      </div>
      <button onClick={handleSendSms}>Send SMS</button>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}

export default SendSms;
