// initializing express 
const express = require('express');
const app = express();
app.use(express.json());
// ✅ Typo fix: 'dontenv' → 'dotenv'
require("dotenv").config();

const PORT = process.env.PORT || 4000; // default to 4000 if PORT is not set


const todoRoutes=require("./routes/Todos");

app.use("/api/v1",todoRoutes);
app.listen(PORT ,()=>{
    console.log(`server started sycessfully at ${PORT}`)
});

// connect to the db
const dbConnect = require("./config/database");
dbConnect();



// deafult route 

app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage</h1>`)
})

