import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Import the CORS package

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Proxy route to handle SMS sending
app.post('/send-sms', async (req, res) => {
  try {
    const formData = req.body; // Receive the form data from the frontend

    const response = await axios.post(
      'https://quicksms.advantasms.com/api/services/sendsms/',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data); // Send the response back to the frontend
  } catch (error) {
    console.error("Error in proxy:", error);
    res.status(500).send('Error sending SMS');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});