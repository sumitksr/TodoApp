// initializing express 
const express = require('express');
const app = express();

// ✅ Typo fix: 'dontenv' → 'dotenv'
require("dotenv").config();

const PORT = process.env.PORT || 4000; // default to 4000 if PORT is not set

app.use(express.json());
const todoRoutes=require("./routes/Todos");

app.use("/api/v1",todoRoutes);

