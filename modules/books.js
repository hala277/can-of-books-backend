
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');

const booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});


const booksModel = mongoose.model('books', booksSchema);

function sedBooksInfo() {
    const hala = new booksModel({
        title: 'JSbook',
        description: 'book about learning JS',
        status: 'done',
        email: 'hala277.almasharfeh277@gmail.com'
    })

    const leen = new booksModel({
        title: 'lesrn java',
        description: 'book about learning java',
        status: 'done',
        email: 'hala277.almasharfeh277@gmail.com'
    })

    const baraaa = new booksModel({
        title: 'lesrn CSS',
        description: 'book about learning CSS',
        status: 'done',
        email: 'hala277.almasharfeh277@gmail.com'
    })

    const bayan = new booksModel({
        title: 'lesrn HTML',
        description: 'book about learning HTML',
        status: 'done',
        email: 'hala277.almasharfeh277@gmail.com'
    })
    hala.save();
    leen.save();
    baraaa.save();
    bayan.save();
}
// seed only used for one time and its only to add data to mongo db
// sedBooksInfo();
// http://localhost:3001/books?email=hala277.almasharfeh277@gmail.com
function getBooksHandler (request, response){
    let email2 = request.query.email;
    booksModel.find({email:email2},function(error,emailData){
        if(error){
            console.log('error in getting data',error)
        }
        else{
            console.log(emailData)
            response.send(emailData)
        }
    })
}

module.exports = getBooksHandler;