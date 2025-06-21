const Todo = require("../models/Todo.js");

exports.getTodo = async (req, res) => {
    try {
        // fetch all todos
        const todos = await Todo.find({});
        // response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error:error.message,
            message: "server error"
        });
    }
};



