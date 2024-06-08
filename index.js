//modules -- modules is a group of function which is separated in other file and we will export the file



// const math = require("./math")
// console.log(math.add(2,4))
// console.log(math.sub(2,4));

//http server in node js
// const http = require("http");
// const myServer = http.createServer((req, res)=>{
//    // console.log("new req recieved");
//     console.log(req);
//     res.end("hello from server");
// });
// myServer.listen(8000,()=>console.log("server started!"))

//log file 

// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((req, res)=>{
//    const log = `${Date.now()}:${req.url} new req recieved\n`;
//    fs.appendFile("log.txt",log,(err,data)=>{
//     switch(req.url){
//         case '/' : 
//         res.end("Homepage");
//         break;
//         case '/about': 
//         res.end("I am piyush garg");
//         break;
//         default:
//             res.end("404 not found");
//     }
//    })
    
// });
// myServer.listen(8000,()=>console.log("server started!"));

//url handler

// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const myServer = http.createServer((req, res)=>{
//     if(req.url==="/favicon.ico") return res.end();
//    const log = `${Date.now()}:${req.url} new req recieved\n`;
//    const myUrl = url.parse(req.url, true);
//    console.log(myUrl);
//    fs.appendFile("log.txt",log,(err,data)=>{
//     switch(myUrl.pathname){
//         case '/' : 
//         res.end("Homepage");
//         break;
//         case '/about': 
//         const username = myUrl.query.myname
//         res.end(`hi, ${username}`)
//         res.end("I am piyush garg");
//         break;
//         default:
//             res.end("404 not found");
//     }
//    })
    
// });
// myServer.listen(8000,()=>console.log("server started!"));

//fucntion
//first method
// function add(a,b){
//     return a+b;
// }
// var result = add(2,4)
// console.log(result);

//second method
// var add = function(a,b){
//     return a+b;
// }
// var result = add(2,4)
// console.log(result);

//third method
// var  add = (a,b) => {return a+b};

//fourth method
// var add = (a,b) => a+b;

//fifth method
// (function add(a,b){
//     console.log("vikram")
// })()

//call back
// function callback(){
//     console.log("now adding is successfully completed.")
// }

// const add = function(a,b,callback){
//     var result =a+b;
//     console.log("result = "+ result)
//     callback();
// }
// add(3,5,callback)

//another method
// const add = function(a,b,vikram){
//     var result =a+b;
//     console.log("result = "+ result)
//     vikram();
// }
// add(3,5,function(){
//     console.log("add completed")
// });

// add(3,5,()=> console.log("add completed"));

//files and modules
// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greetings.txt', 'Hi' + user.username +'!\n', ()=>{
//     console.log("file is created.");
// });
//to check the functionality of fs 
// console.log(fs);

//to import the file
// const maths = require('./math')
// var _ = require('lodash');

// console.log("server file is available");
// var age = maths.age;
// var result = maths.addNumber(age+18 ,3);
// console.log(age);
// console.log("result is = "+result);

//lodash is used to filter the data
// var data = ["person", "person", 1, 3, 1, 3, age];
// var filter = _.uniq(data);
// console.log(filter);

//to check the string
// console.log(_.isString("vikram"))
// console.log(_.isString(3))

//json
// const jsonString = '{"name":"John", "age":30, "city":"New York"}';
// const jsonobject = JSON.parse(jsonString); // CONVERT JSON TO OBJECT
// console.log(jsonobject.name);

// const objectToconvert = {
//     name:"John", 
//     age:31
// };

// const json = JSON.stringify(objectToconvert) // CONVERT OBJECT TO JSON STRING
// console.log(json);
// console.log(typeof json);
//server creation
const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const hotelroutes= require("./controllers/hotelcontroller")
require('dotenv').config();
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const { Person } = require('./models/person');
// app.use(express.json())
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

//middleware function
const logRequest= (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`);
    next(); //move on the next phase
}
app.use(logRequest);
// passport.use(new localStrategy(async(username,password,done)=>{
// // authentication logic here
// try{
//     console.log('recieved credentials:', username, password);
//     const user = await Person.findOne({username:username})
//     if(!user){
//         return done(null, false, {message:'incorrect user name'})
//     }
//     const ispasswordMatch = user.password===password ? true:false
//     if(ispasswordMatch){
//         return done(null,user);
//     }else{
//         return done(null, false, {message:'incorrect password'})
//     }

// }catch(err){
//   return done(err);
// }
// }))

// app.use(passport.initialize)

// app.get('/',(req,res)=>{
//     res.send("welcome to my hotel.")
// })

app.get('/',hotelroutes.hotelData)
// app.post('/', hotelroutes.hotel)
// app.get('/menu:workType', hotelroutes.work)
// app.get('/menu', hotelroutes.menu )
app.get('/Person', hotelroutes.PersonData)
app.get('/Person/:workType', hotelroutes.specificData)
app.post('/Person', hotelroutes.Person)
app.post('/', hotelroutes.hotel)
app.post('/menu', hotelroutes.menu)
app.put('/Person/:id', hotelroutes.updateData)
app.delete('/Person/:id', hotelroutes.deleteData)

app.listen(PORT, ()=>{
    console.log("listening on port 3000");
})














