// initializing express 
const express = require('express');
const app = express();

// ✅ Typo fix: 'dontenv' → 'dotenv'
require("dotenv").config();

const PORT = process.env.PORT || 4000; // default to 4000 if PORT is not set

// parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use('/api/todos', todoRoutes);

// define port 
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
