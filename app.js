// Import required modules
const express = require('express');
const path = require('path');

// Initialize the express application
const app = express();

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a basic route
app.get('/', (req, res) => {
    res.render('index'); // This will render views/index.ejs
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
