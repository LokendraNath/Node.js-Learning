import fs from "fs";

//! File Write ==========

  //? Sync....
  fs.writeFileSync("./test.txt", "This is from file.js -> writeFileSync")

  //? Async ....
  fs.writeFile("./test2.txt", "This is from file.js -> writeFile", (err) => {});

// ! File Read ===========

  //? ReadFileSync (readFileSync(path,encoding))
  
  const result = fs.readFileSync("./email.txt", "utf-8");
  console.log("This is From readFileSync",result); //email - lokendraverm225@gmail.com


  //? ReadFile (readFileSync(path,encoding))          <--- Not Return Value

  fs.readFile("./email.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("This is from readFile",result);
    }
  });

// ! Append Data ==========

  //? Appending data
  fs.appendFileSync("./test.txt",`Hey There this is append \n`)

// ! Delete Data ==========

  fs.unlinkSync("./test2.txt")

// ! Rename File ==========
  fs.renameSync("./file.txt", "file1.txt")

// ! File Stats ==========
  console.log(fs.statSync("./fileHandelling.js"))

