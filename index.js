// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemon = require('nodemon');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to your Project Management System!');
});




// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Use nodemon to automatically restart the server during development
if (process.env.NODE_ENV === 'development') {
  nodemon({
    script: 'index.js',
    ext: 'js',
    ignore: ['node_modules/']
  }).on('restart', () => {
    console.log('Server restarting...');
  });
}
