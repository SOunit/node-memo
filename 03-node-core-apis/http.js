const http = require("http");

//create a server object
http
  .createServer((req, res) => {
    res.write("Hello World!!");
    res.end();
  })
  .listen(8888, () => console.log("Server is running on port 8888"));
