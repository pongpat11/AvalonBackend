const express = require('express');

const app = express();

const mongoose = require('mongoose')
//Middlewares (use for Authenication)
// app.use('/posts', () => {
//     console.log('This is middleware running');
// });

//Routes
app.get('/', (req, res) => {
    res.send('We are on home,');
});

app.get('/posts', (req, res) => {
    res.send('We are on post,');
});

//Connect to DB
mongoose.connect('')



//How to we start listening to the server
app.listen(3000);