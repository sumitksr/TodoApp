const express = require("express");
const router =express.router();
const {createTodo} = require("../controllers/createTodo");


// mapping route to controller
reouter.post("/createTodo",createTodo);

module.exports=dbConnect;