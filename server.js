// IMPORT Third party
const express = require("express");
const mongoose = require('mongoose')
const morgan = require('morgan')



// IMPORT from local
const { port, mongoURI } = require('./config')
const transactionRoutes = require('./routes/transactions')

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

// MIDDLEWARE
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/transactions', transactionRoutes)

app.listen(port, () => console.log(`Express is running at port ${port}`))


