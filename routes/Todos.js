const express = require("express");
const router =express.Router();
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo")
const {getTodoById} = require("../controllers/getTodoById")
// mapping route to controller
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo)
router.get("/getTodos/:id",getTodoById );

module.exports=router;