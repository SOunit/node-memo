const path = require("path");

console.log("basename", path.basename(__filename));
console.log("directory", path.dirname(__filename));
console.log("file extension", path.extname(__filename));

// ../test/hello.html
console.log(path.join(__dirname, "hello.html"));
