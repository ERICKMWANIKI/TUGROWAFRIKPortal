import axios from 'axios';

// Vercel Serverless Function (no need for Express)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const smsPayload = req.body;

    try {
      // Forward the request to the external SMS API
      const response = await axios.post(
        'https://quicksms.advantasms.com/api/services/sendsms/',
        smsPayload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Return the SMS API response to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error sending SMS:", error);
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || { message: error.message });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
