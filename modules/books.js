
const mongoose = require('mongoose');


const booksSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
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

// /addBooks?email=${email}&title=${title}&description=${description}&status=${status}
// /addBooks
async function addBooksHandler(request, response){
    // console.log(request.query);
   //  the name shold be match at the front and back end
//    let {email,title,description,status} = request.query;
// all the data when i use post will be in body
console.log(request.body);

   let {email,title,description,status} = request.body;

   const newBook = new booksModel({ email, title, description, status})
//    I have to try using .then here
// I have to take a look for the other way using creat
  await newBook.save();
  
   booksModel.find({email:email},function(error,emailData){
    if(error){
        console.log('error in getting data',error)
    }
    else{
        console.log(emailData)
        response.send(emailData)
    }
})
}

// /deleteBooks?bookID=${bookID}&email={emailD}
 function deleteBooksHandler(request, response){
   let bookID = request.query.bookID;
   let email = request.query.email;


   booksModel.deleteOne({_id:bookID}).then(() => {
    booksModel.find({email:email},function(error,emailData){
        if(error){
            console.log('error in getting data',error)
        }
        else{
            // console.log(emailData)
            response.send(emailData)
        }
    })
   })
   


//    booksModel.remove({_id:bookID},(error,deletedData)=>{
//        if(error){
//            console.log('error in deleting book data')
//        }
//        else{
//            console.log('deleted data',deletedData)
//            booksModel.find({email:email},function(error,emailData){
//             if(error){
//                 console.log('error in getting data',error)
//             }
//             else{
//                 // console.log(emailData)
//                 response.send(emailData)
//             }
//         })
//        }
//    })
}

module.exports = getBooksHandler;
module.exports = addBooksHandler;
module.exports = deleteBooksHandler;


