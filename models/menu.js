const express = require("express");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        require: true,
    },
    isDrink:{
        type: Boolean,
        default: false,
    },
    ingredients:{
        type: [String],
        default: [],
    }

})

const menuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = {menuItem};