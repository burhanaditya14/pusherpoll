const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://aditya:Torabika1@cluster0-eino4.mongodb.net/test?retryWrites=true&w=majority')
.then(()=> console.log('Koneksi MongoDB Berhasil'))
.catch(err => console.log(err));