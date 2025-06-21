const mongoose = require("mongoose");
// schema
const  todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            deafult:Date.now(),
        },
        updatedAt:{
            type:Date,
            requied:true,
            deafult:Date.now(),
        }
    }
);
// export 
module.exports=mongoose.model("Todo",todoSchema);