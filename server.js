'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const mongoose = require('mongoose');

const server = express();
server.use(cors());
const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');

const getBooksHandler = require('./modules/books')

server.get('/', homeHandler);
server.get('/books',getBooksHandler)


function homeHandler(request, response) {

    response.status(200).send('home route')

}


server.listen(PORT, () => {
    console.log(`PORT is working on ${PORT}`)
})