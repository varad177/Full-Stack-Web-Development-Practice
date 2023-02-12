//blocking non blocking code

//synchronous or blocking
//===>line by line execution


//asynchronous or non blocking
//===>not line by line execution


const fs = require("fs");
fs.readFile("vrd.txt", "utf-8", (err, data) => {
    console.log(data);
})

console.log("this is a msg");

//yaha pr "this is msg" pehle run ho rha hai
//badme bakika matlab uparka run ho rha hai

//q ki fs.readFile ko apna kaam pura krne ke liye
//jyada time lagta hai
//isiliye program aage badta hai
//aur aage ka pura hota hai 
//isiko call back kehte hai



