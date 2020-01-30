const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/customers');
app.use('/customers', postRoute);

//Connect to Db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!')
);

//Listen
app.listen(3000);