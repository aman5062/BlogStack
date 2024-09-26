const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables before using them

const app = express();

// CORS Configuration
const corsOptions = {
    origin: '*', // Allow all origins or specify your frontend URL
    credentials: true, // Use credentials if needed
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connection established");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

// Start the server
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`App is running on port ${process.env.PORT}`);
});
