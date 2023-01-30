const mongoose = require('mongoose');

const DB = 'mongodb+srv://priyanshu:appyfizz@cluster0.4arzow6.mongodb.net/backend?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose
  .connect(DB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('no connection'));
