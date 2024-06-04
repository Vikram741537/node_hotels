const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
// mongoose.connect("mongodb://localhost:27017/hotel");
// mongoose.connect("mongodb+srv://Vikram741:Qwerty12345@cluster0.icmjreh.mongodb.net/");
const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = process.env.MONGODB_URL;

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


