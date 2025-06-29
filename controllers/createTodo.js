// import the db
const Todo = require("../models/Todo.js");

// route handler 
exports.createTodo = async (req, res) => {
    try {
        // extract data from body
        const { title, description } = req.body;

        // create a new todo obj and insert it in db 
        const response = await Todo.create({ title, description });

        // send a json response with success flag 
        res.status(200).json({
            success: true,
            data: response,
            message: 'entry created successfully',
        });
    } catch (error) {
        console.log("nahi chala bhai soo jao jake");
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: error.message,
        });
    }
};
