// initalising  express 
const express=require('express');
const app = express();

reqire("dontenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// defineing port 
app.listen(process.env.PORT,()=>{
    console.log("helo world")
})

