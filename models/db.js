const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hotel");
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


