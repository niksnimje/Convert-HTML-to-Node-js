// Import necessary modules
const express = require('express');  
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');     
const bodyParser = require('body-parser'); 
const routes = require('./routes/index');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (form submissions)
app.use(bodyParser.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(()=>console.log("MongoDB connected"))
.catch(err =>console.error("Connection error:", err));

// Use imported routes
app.use('/',routes);

// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
