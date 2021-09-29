'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const mongoose = require('mongoose');

const server = express();
server.use(cors());
const PORT = process.env.PORT;
// middleware to decode any req body to json
server.use(express.json());
// const booksModel = mongoose.model('books', booksSchema);
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_SERVER_LINK}`);




// const url = "";
// const client = new MongoClient(url);
// 'mongodb://localhost:27017/books'

const {getBooksHandler} = require('./modules/books')
const {addBooksHandler} = require('./modules/books')
const {deleteBooksHandler} = require('./modules/books')




server.get('/', homeHandler);
server.get('/books',getBooksHandler)
server.post('/addBooks',addBooksHandler)
server.delete('/deleteBooks',deleteBooksHandler)

// server.get('/addBooks',addBooksHandler)


// // /addBooks?email=${email}&title=${title}&description=${description}&status=${status}
// function addBooksHandler(request, response){
//      console.log(request.query);
//     //  the name shold be match at the front and back end
//     let {email,title,description,status} = request.query;
//     const newBook = new booksModel({
//         email:email,
//         title: title,
//         description: description,
//         status: status,
      
//     })
//     newBook.save();
// }

function homeHandler(request, response) {

    response.status(200).send('home route')

}


server.listen(PORT, () => {
    console.log(`PORT is working on ${PORT}`)
})