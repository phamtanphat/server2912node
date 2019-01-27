const mongoose = require('mongoose');
mongoose.connect('mongodb://abc:A123456@ds239137.mlab.com:39137/server2912', {useMongoClient : true});

const Word = mongoose.model('Word' , {
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true },
    isMemorized : {type : Boolean , require : true , default : false}
}); 
 
// 1 : SELECT cac gia tri ben trong database

// Word.find({})
// .then(word => console.log(word))
// .catch(error => console.log(error));

//2 : Them du lieu vao
// const word = new Word({en : 'Four' , vn : 'Bon'});
// word.save()
// .then(word => console.log(word));

//3 : Xoa du lieu
// Word.findByIdAndRemove('5c4c2eb89375ee2a409773b0')
// .then(word => console.log(word));


// 4 : Update du lieu
// Word.findByIdAndUpdate('5c4c2f6fc48e6901ec4b5cd6' , 
//                         {isMemorized : false} , 
//                         {new : true})
// .then(word => console.log(word))

module.exports = {Word};