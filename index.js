//import express module
const express = require("express");
//initialized express module
const app = express();

//use the built-in function/middleware of express for json an body-parser
app.use(express.json());
app.use(express.urlencoded());

//using Port 4000
const PORT = 4000;

//GET - Welcome page
app.get('/', (_, response) => {
    //send response and the welcome
    response.status(200).json(
        {
            success: true,
            status: 200,
            message: 'Welcome'
        }
    );
});

//GET - fetch all student record 
app.get('/student', (_, response) => {
    //query for example to get all the student data
    const data = {};//select * from Student
    //send response and the data
    response.status(200).json(
        {
            success: true,
            status: 200,
            data: data
        }
    );
});

//GET - fetch all active student record 
app.get('/student/active', (_, response) => {
    //query for example to get all active student data
    const data = {};//select * from Student
    //send response and the data
    response.status(200).json(
        {
            success: true,
            status: 200,
            message: "Active students",
            data: data
        }
    );
});

//GET - fetch all inactive student record 
app.get('/student/inactive', (_, response) => {
    //query for example to get all inactive student data
    const data = {};//select * from Student
    //send response and the data
    response.status(200).json(
        {
            success: true,
            status: 200,
            message: "Inactive students",
            data: data
        }
    );
});

//GET - fetch student record by studentId
app.get('/student/:studentId', (request, response) => {
    //query for example to get student data by studentId
    const data = {};//select * from Student
    //send response and the data
    console.log(request.params)
    const {studentId} = request.params;
    response.status(200).json({
        success: true,
        status: 200,
        message: `Student with ID number (${studentId}) is sucessfully found.`
    });
});

//POST - to add new student record
app.post('/student/addStudent', (request, response) => {
    //show the request body
    console.log(request.body);
    //Destructuring studentId , firstName, and lastName
    const { studentId, firstName, lastName } = request.body
    //send response if success and send message and status (200)
    response.status(201).json({
        success: true,
        status: 201,
        message: `Student: ${studentId} - ${firstName + ' ' + lastName} is sucessfully added.`

    });
});

//PATCH - to update student record
app.patch('/student/update', (request, response) => {
    //show the request body
    console.log(request.body);
    //send response if success and send message and status (200)
    response.status(200).json({
        success: true,
        status: 200,
        message: `Student with ID number (${request.body.studentId}) is sucessfully updated.`

    });
});

//DELETE - delete student record
app.delete('/student/delete/:studentId', (request, response) => {
    console.log(request.params)
    const {studentId} = request.params;
    response.status(200).json({
        success: true,
        status: 200,
        message: `Student with ID number (${studentId}) is sucessfully deleted.`
    });
})

//create listen for express
app.listen(PORT, () => {
    console.info(`
    Port: ${PORT}
    Env: Development
    Application: http://localhost:${PORT}
    `);
});