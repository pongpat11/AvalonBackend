const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Prevent collection name end with 's'
mongoose.pluralize(null);

// Middleware for route
const app = express();
const routes = require('./routes/routes');
app.use(bodyParser.json());
app.use('/', routes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('MongoDB connected');
    }
})

//How to we start listening to the server
app.listen(3000);