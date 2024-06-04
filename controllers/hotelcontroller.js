const express = require('express');
const mongoose = require('mongoose');
const {hotel} = require("../models/db")
const {menuItem} = require("../models/menu")
const {Person} = require("../models/person")


exports.data  =  async(req, res) => {
    const data = await hotel.find();
    res.json(data);
  
};
exports.menu = (req,res) => {
    const data = req.body;
    const consumer = new menuItem(data);
    consumer.save().then((res)=>{
      console.log("record saved..");
    }).catch((err)=>{
      console.log("error");
    })
    res.json({message:"record saved"});
  };

exports.hotel = (req,res)=>{
    const {name, empId, position} = req.body;  //destructuring
    const user = new hotel({
      name: name,
      empId: empId,
      position:position,
    });
    user.save().then((result)=>{
      console.log("record successfully saved");
    }).catch((err)=>{
      console.log("error");
    })
    res.json({message:"record saved"})
  };
  
  exports.Person = (req,res) =>{
    const data = req.body;
    const PersonData = new Person(data)
    PersonData.save().then((result)=>{
      console.log("data saved");
    }).catch((err)=>{
      console.log("error");
    })
    res.json(PersonData);
  };

  exports.Data = async(req,res)=>{
    const Data = await Person.find();
    res.json(Data);
  }

  exports.specificData = async(req,res)=>{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log("response fetched");
      res.json(response);
    }
  }
  exports.updateData = async(req,res)=>{
    const personId = req.params.id;
    const updatedpersonData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedpersonData,{
      new : true,
      runValidators: true,
    });
    if(!response){
      return res.json({error:'person not found'});
    }
    console.log("data updated");
    res.json(response);
  }
 exports.deleteData = async (req,res)=>{
  const personId = req.params.id;
  const response = await Person.findByIdAndDelete(personId);
  if(!response){
    return res.json({error:'person not found'});
  }
  console.log("data deleted");
    res.json({error:'person deleted successfully'});
 }
  