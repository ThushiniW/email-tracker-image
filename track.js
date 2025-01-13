const fs = require('fs');
const path = require('path');

//Path to the log file
const logFile = path.join(__dirname, 'log.txt');

//Function to log each image view with timestamp
function logView(req) 
{
  const timestamp = new Date().toISOString();
  const logEntry = 'Image viewed at: ${timestamp}\n';

  // Append to the log.txt.file
  fs.appendFile(logFile, logEntry, (err) => 
  {
    if (err) 
    {
      console.error('Failed to log image view', err);
    } 
    else 
    {
        console.log('Logged image view:', timestamp);
    }
  });
}

module.exports = logView;
  
