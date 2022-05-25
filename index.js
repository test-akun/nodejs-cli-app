// IMPORT FROM PACKAGE
const express = require('express');
const mongoose = require('mongoose');

// IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT
const app = express();
const port = 3000;
const DB =
    'mongodb+srv://rivaan:rivaan123@cluster0.pm36a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
    .connect(DB)
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
