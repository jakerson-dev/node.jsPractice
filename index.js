//import express module
const express = require("express");
//initialized express module
const app = express();

//use the built-in function/middleware of express for json an body-parser
app.use(express.json());
app.use(express.urlencoded());

//using Port 5000
const PORT = 5000;

//POST - to add new student record
app.post('/student/addStudent', (request, response) => {
    //show the request body
    console.log(request.body);
    //Destructuring studentId , firstName, and lastName
    const {studentId,firstName,lastName} = request.body
    //send response if success and send message and status (200)
    response.status(201).json({
        success: true,
        status: 201,
        message: `Student: ${studentId} - ${firstName + ' ' +lastName} is sucessfully added.`

    });
});

//create listen for express
app.listen(PORT, () => {
    console.info(`
    Port: ${PORT}
    Env: Development
    Application: http://localhost:${PORT}
    `);
});