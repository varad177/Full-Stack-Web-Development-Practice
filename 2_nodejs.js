// javascript me ham modules ko add krte hai 
//jaise ki ham java me libraries ko add krte hai 


const fs = require("fs");
let text= fs.readFileSync("vrd.txt", "utf-8");
 text=text.replace("example" , "eg")
console.log(text);

console.log("creating a new file ")
fs.writeFileSync("vrd.txt",text);