const express = require("express");
 
const mongoose = require("mongoose");


//to load .env file
require("dotenv").config();

const app = express();

//this will allow the usage of json datas
app.use(express.json());

//connect
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB connected successfully");
    app.listen(3000, () => {
      console.log("app listening to port 3000");
    });
  } catch (error) {
    console.error("Error connecting to Mongo DB", error);
  }
};

connect()