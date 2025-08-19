import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`Server Is started On ${PORT}`);
});
