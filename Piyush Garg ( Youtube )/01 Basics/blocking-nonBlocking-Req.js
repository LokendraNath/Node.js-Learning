import fs from "fs";

//? Check Core
  import os from "os";
  console.log(os.cpus().length); //4

//! Blocking Request ==========

  console.log("First Line");
  const res = fs.readFileSync("./email.txt", "utf-8");
  console.log("Second Line", res);
  console.log("Third Line");

  /*
      - result -
      First Line
      Second Line lokendra => lokendraverma225@gmai.com
                  ronaldo => ronaldo7@gmail.com
      Third Line 
  */

//! Non - Blocking Request ==========

  console.log("First Line");
  fs.readFile("./email.txt", "utf-8", (err, res2) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Second Line - ", res2);
    }
  });
  console.log("Third Line");

  /*
    - result -

      First Line
      Third Line
      Second Line - lokendra => lokendraverma225@gmai.com
                    ronaldo => ronaldo7@gmail.com
  */
