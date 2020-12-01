const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(noteRoute);

// DB
const DB_URL = "mongodb+srv://thiago:mypassword@cluster0.siwfc.mongodb.net/labtest2?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/test', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
    res.json(customers);
});

app.get('/connection', (req, res)=>{
    res.send("TODO");
});

app.get('/', (req, res)=>{
    res.send("TODO");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
