const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'log.txt');

module.exports = (req, res) => {
  fs.appendFileSync(logFilePath, 'Image loaded: ${new Date().toISOString()}\n');

  // Send a success response
  res.status(200).send('Logged');
};
  
