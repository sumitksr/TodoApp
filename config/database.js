// making instance 
const mongoose = require("mongoose");

// env main jo bhi define kara hai vo sb process main cashal jaeyga
reqire("dontenv").config();
// function for  connection from db
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("hogya bhai ladoo bato");
    })
    .catch((error) => {
      console.log("laddo fek do");
      alert(error.message);
      process.exit(1);
    });
};

// export krna

module.exports=dbConnect;