const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./Models/Users');

const app = express()
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

app.post('/Register', (req, res) => {
    UsersModel.create(req.body)
        .then((user) => {
            console.log('User created:', user);
            res.json(user);
        })
        .catch((error) => {
            console.error('Error creating user:', error);
            res.json(error);
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
