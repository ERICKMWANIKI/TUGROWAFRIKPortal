import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// API endpoint to send SMS
app.post('/api/send-sms', async (req, res) => {
  const smsPayload = req.body;

  try {
    // Make the POST request to the SMS service API
    const response = await axios.post(
      'https://quicksms.advantasms.com/api/services/sendsms/',
      smsPayload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data); // Return the response data from the SMS API
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || error.message);
  }
});

// Start the backend server
app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});
