const express = require('express');
const path = require('path');
const logView = require('./track');

const app = express();
const port = process.env.PORT || 3000;

// Serve the image and log views
app/get('CYSSC Newsletter Banner.jpg', (req, res) =>  
// Log the view when image is requested
{
  logView(req);
  // Serve the image
  const imagePath = path.join(__dirname, 'CYSSC Newsletter Banner.jpg');
  res.sendFile(imagePath);
});

// Route to check the log file
app.get('/log.txt', (req, res) => 
{
  const logFilePath = path.join(__dirname, 'log.txt');
  res.sendFile(logFilePath);
});

// Start the server
app.listen(port, () =>
{
  console.log('Server is running on port ${port}');
});
