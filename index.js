const express = require('express');
const app = express();
const track = require('./track');

app.get('/track', track);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running at http://localhost:${port}');
});
