const Todo = require("../models/Todo.js");

exports.getTodoById = async (req, res) => {
    try {
         // extract todo by id 
        const id = req.params.id;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error"
        });
    }
};
