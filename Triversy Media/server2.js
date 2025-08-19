import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Cristiano Ronaldo", age: 40, height: 6.2, isMarried: true },
  { id: 2, name: "Lional Messi", age: 42, height: 5.4, isMarried: true },
  { id: 3, name: "Neymar Jr.", age: 35, height: 5.9, isMarried: true },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User Not Found" }));
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server Is started On ${PORT}`);
});
