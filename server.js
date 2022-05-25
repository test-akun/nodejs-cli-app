// IMPORT Third party
const express = require("express");
const mongoose = require('mongoose')


// IMPORT from local
const { port, mongoURI } = require('./config')

// INIT
const app = express()

// CONNECT TO DB
mongoose
    .connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDb database is connected'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('hello'))

app.listen(port, () => console.log(`Express is running at port ${port}`))


