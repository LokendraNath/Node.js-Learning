//  BUILDING HTTP SERVER

import http from "http";
import fs from "fs";
import url from "url";

const lokendraServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${new Date().getDate()} ${req.url} New Request \n`;
  const myURL = url.parse(req.url, true); // <-- ...parse(url,passQueryParameter?)
  console.log(myURL);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myURL.pathname) {
      case "/":
        res.end("Welcome To My Website");
        break;
      case "/about":
        const username = myURL.query.myname;
        res.end(`Nice To See You ${username}`);
        break;
      case "/projects":
        res.end("I have 13 projects");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

lokendraServer.listen(8080, () => console.log("Server is Started"));
