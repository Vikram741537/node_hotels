//-----  file system-----
//to create new file

const fs = require("fs");
//to write in file
//synchronous call
fs.writeFileSync("./test.txt","Hello World");   //blocking operaton

//asynchronous call
// fs.writeFile("./test.txt","Hello World async", (err)=>{}); // non blocking operation

//to read a file - synchronous
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)

//asynchronous way to read
// fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
    // if(err){
    //     console.log("Error", err)
    // }else{
    //     console.log(result)
    // }
// })

//to append the text one by one
// fs.appendFileSync("./test.txt", `${Date.now()}\nhey there\n`)

//to copy a file
// fs.cpSync("./test.txt","./copy.txt")

//to delete a file
// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt").isFile());

//to create folder
// fs.mkdirSync("my-docs")

//blocking 
// console.log(1)
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)
// console.log(2);

//non blocking 
// console.log(1)
// fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
//         console.log(result)
// })
// console.log(2);

//to check the thread size of computer
// const fs = require("fs");
// const os = require("os");
// console.log(os.cpus().length);




 