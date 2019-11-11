const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// Middleware for route
const app = express();
const routes = require('./routes/routes');
app.use('/', routes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('MongoDB connected!!');
})

//How to we start listening to the server
app.listen(3000);