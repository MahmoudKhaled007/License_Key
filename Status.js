// Use "type": "module" in package.json to use ES module imports
import express from 'express';

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// 1. Main Page Route ("/")
app.get('/', (request, response) => {
  response.status(200).json({
    message: "Welcome to the main page!",
    api_status_url: "/status" // Changed this to point to the new endpoint
  });
});

// 2. Status Endpoint ("/status")
app.get('/status', (request, response) => {
  // Read the value from Vercel's Environment Variables.
  // process.env variables are always strings, so we compare to the string "true".
  const isOk = process.env.API_STATUS_OK === 'true';

  if (isOk) {
    // If isOk is true, return a 200 OK status
    response.status(200).json({
      status: true
    });
  } else {
    // If isOk is false, return a 401 Unauthorized status
    response.status(401).json({
      msg: "Please contact Mahmoud"
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Export the app for Vercel
export default app;
