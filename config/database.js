// Import mongoose
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

// Define connection function
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));
};

// Export the function
module.exports = dbConnect;
