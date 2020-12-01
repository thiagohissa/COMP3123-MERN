const employeeModel = require('../model/employeesModel.js');
const express = require('express');
const app = express();

// Create new Employee
app.post('/employees', async (req, res) => {
    // Validate request
    if(!req.body) {
        console.log(req.body);
        return res.status(400).send({message: "Note content can not be empty"});
    }
    const employee = new employeeModel(req.body);
    try{
        await employee.save();
        res.send(employee);
    }catch(err){
        res.status(500).send(err);
    }
});

// Getting all employees
app.get('/employees', async (req, res) => {
    const employee = await employeeModel.find({});
    try{
        res.send(employee);
    }catch(err){ res.status(500).send(err); }
});

// Getting employee by id
app.get('/employees/:empID', async (req, res) => {
    // Validate request
    if(!req.params.empID) {
        return res.status(400).send({message: "Employee content can not be empty"});
    }
    console.log("Looking for id: " + req.params.empID);
    const employee = await employeeModel.findById(req.params.empID);
    try{
        res.send(employee);
    }catch(err){ res.status(500).send(err); }
});

// Update a employee by empID
app.put('/notes/:empID', async (req, res) => {
    // Validate request
    if(!req.params.empID && !req.body) {
        return res.status(400).send({message: "Note content can not be empty"});
    }
    try{
        const employee = await employeeModel.findByIdAndUpdate(req.params.empID, req.body);
        await employee.save();
        res.send(employee);
    }catch(err){ res.status(500).send(err); }
});

// Delete employee by empID
app.delete('/notes/:empID', async (req, res) => {
    // Validate request
    if(!req.params.empID) {
        return res.status(400).send({message: "Note content can not be empty"});
    }
    try{
        const employee = await employeeModel.findByIdAndDelete(req.params.empID, req.body);
        if (!employee){ res.status(404).send("No item found"); }
        res.status(200).send()
    }catch(err){ res.status(500).send(err); }
});

module.exports = app;
