//import express module
const express = require("express");
//initialized express module
const app = express();

//use the built-in function/middleware of express for json an body-parser
app.use(express.json());
app.use(express.urlencoded());

//using Port 5000
const PORT = 5000;



//create listen for express
app.listen(PORT, () =>{
    console.info(`
    Port: ${PORT}
    Env: Development
    Application: http://localhost:${PORT}
    `);
});