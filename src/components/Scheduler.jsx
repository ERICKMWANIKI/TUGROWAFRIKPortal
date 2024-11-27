import React, { useState } from "react";

function Scheduler() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleScheduleSms = () => {
    // Implement scheduling logic here
    console.log("Scheduling SMS to:", recipient);
    console.log("Message:", message);
    console.log("Schedule Date:", scheduleDate);
  };

  return (
    <div className="scheduler">
      <h2>Schedule SMS</h2>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient's phone number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="scheduleDate">Schedule Date</label>
        <input
          type="datetime-local"
          id="scheduleDate"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
        />
      </div>
      <button className="btn-schedule" onClick={handleScheduleSms}>
        Schedule SMS
      </button>
    </div>
  );
}

export default Scheduler;
