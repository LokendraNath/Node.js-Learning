import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") req.readableEnded("hello");
  else (res.statusCode = 404), res.end("not found");
});

server.listen(3000);
