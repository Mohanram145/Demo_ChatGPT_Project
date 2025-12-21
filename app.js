const http = require("http");

http.createServer((req, res) => {
  res.write("Hello DevOps 🚀");
  res.end();
}).listen(3000);
