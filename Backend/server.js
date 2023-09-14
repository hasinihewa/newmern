//import the express dependency
const express = require("express");
//import the mongoose dependency
const mongoose = require("mongoose");
//import the bodyParser dependency
const bodyParser = require("body-parser");
//import the cors dependency
const cors = require("cors");
//import the dotenv dependency
// const dotenv = require("dotenv");
require("dotenv").config();

const app = express();


// sever connect port number define
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// connect the database using db name and db username & password
const URL = process.env.MONGODB_URL;

//mongo db connect with node js
mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongo DB connection Successfull...");

});

//student.js file access to create a object
const studentRouter = require("./routes/student.js"); 
app.use("/student",studentRouter);
//teacher.js file access to create a object
const teacherRouter = require("./routes/teacher.js"); 
app.use("/teacher",teacherRouter);

app.listen(PORT,()=>{
    console.log("Sever is up and running...");
});



