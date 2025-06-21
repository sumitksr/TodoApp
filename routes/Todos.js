const express = require("express");
const router =express.Router();
const {createTodo} = require("../controllers/createTodo");


// mapping route to controller
router.post("/createTodo",createTodo);

module.exports=router;