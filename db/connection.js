const mongoose = require('mongoose');

const DB = process.env.mongo_url;

mongoose.set('strictQuery', false);

mongoose
  .connect(DB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('no connection'));
