const express = require('express');
const mongoose = require('mongoose');
const app = express();

// DB
const DB_URL = "mongodb+srv://thiago:mypassword@cluster0.siwfc.mongodb.net/labtest2?retryWrites=true&w=majority";

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
