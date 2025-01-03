const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbConnect } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(express.json());  // Parse JSON data
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Database connection
dbConnect();

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
