const path = require("path");

// basename path.js
console.log("basename", path.basename(__filename));

// directory /Users/chihomaekawa/Documents/01ciccc/05May/May_9_Node.js
console.log("directory", path.dirname(__filename));

// file extension .js
console.log("file extension", path.extname(__filename));

// /Users/chihomaekawa/Documents/01ciccc/05May/May_9_Node.js/hello.html
console.log(path.join(__dirname, "hello.html"));