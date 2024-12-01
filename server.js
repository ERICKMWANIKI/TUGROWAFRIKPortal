import express from "express";
import axios from "axios";
import cors from "cors"; // Import the CORS package

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Proxy route to handle SMS sending
app.post("/api/send-sms", async (req, res) => {
  try {
    const formData = req.body; // Receive the form data from the frontend

    // Send the request to the SMS API service
    const response = await axios.post(
      "https://quicksms.advantasms.com/api/services/sendsms/",
      formData,
      {
        headers: {
          "Content-Type": "application/json", // Ensure content type is set correctly
        },
      }
    );

    // Return the SMS API response to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error in proxy:", error);
    
    // Check if the error response exists and send a detailed message
    if (error.response) {
      console.error("Error response from SMS service:", error.response.data);
      res.status(error.response.status).json({ message: error.response.data });
    } else {
      res.status(500).send("Error sending SMS");
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
