const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
// mongoose.connect("mongodb://localhost:27017/hotel");
// mongoose.connect("mongodb+srv://Vikram741:2vRnxal6l6cnNz3g@cluster0.icmjreh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// const mongoURL = process.env.MONGODB_URL_LOCAL;

mongoose.connect(process.env.MONGODB_URL)

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    empId:{
        type: String,
        require: true,
    },
   position:{
    type: String,
    require: true,
   }
   
})
const hotel = new mongoose.model("hotel",hotelSchema);
module.exports = {hotel};

