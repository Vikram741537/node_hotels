//example of module
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// module.exports = add
// module.exports = sub  //this will overwrite the code

const { Module } = require("module");

//or
// exports.add = (a,b) => a+b;
// exports.sub = (a,b) => a-b;

//single export
// module.exports ={ add,sub,}

console.log("notes page is loaded")
var age = 35;

const addNumber = (a,b)=>{
    return a+b;
}

module.exports ={
    age,
    addNumber
}
