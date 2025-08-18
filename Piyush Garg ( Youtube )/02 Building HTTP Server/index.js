//  BUILDING HTTP SERVER

import http from "http";
import fs from "fs";

const lokendraServer = http.createServer((req, res) => {
  const log = `${new Date().getDate()} ${req.url} New Request \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Welcome To My Website");
        break;
      case "/about":
        res.end("Hii, I am Lokendra Nath");
        break;
      case "/projects":
        res.end("I have 13 projects");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

lokendraServer.listen(8080, () => console.log("Server Chal Gya B@nC*@d"));
