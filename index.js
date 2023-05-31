const express = require('express');
const app = express();

app.use(express.json());

// Importing routes
const recordsRouter = require('./routes/records');

// Registering routes
app.use('/api/records', recordsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
