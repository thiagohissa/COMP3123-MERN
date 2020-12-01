const mongoose = require('mongoose');

const Employees = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    emailAddress:{
        type: String,
        required: true,
        trim: true
    },
});

const Employee = mongoose.model("Employees", Employees, 'employees');
module.exports = Employee;
