const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Prevent collection name end with 's'
mongoose.pluralize(null);

// Prevent collection.ensureIndex is deprecated
mongoose.set('useCreateIndex', true);

// Middleware for route
const app = express();
const routes = require('./routes/routes');
app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('MongoDB connected');
    }
})

// How to we start listening to the server
const server = app.listen(3000);

// SocketIO listening to the server
const socketIO = require('./socket/socket');
socketIO(server);