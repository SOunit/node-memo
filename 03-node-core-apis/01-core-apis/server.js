const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url)

  // if(req.url === '/'){
  //     res.setHeader('Content-Type', 'text/html')
  //     res.write('<html>')
  //     res.write('<head><title>Home Page</title></head>')
  //     res.write('<body>')
  //     res.write('<h1>Hola!</h1>')
  //     res.write('</body>')
  //     res.write('</html>')
  //     res.end()
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let extName = path.extname(filePath);
  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  if (contentType === "text/html" && extName === "") filePath += ".html";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // throw err
      if (err.code === "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(400, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
server.listen(8888);
