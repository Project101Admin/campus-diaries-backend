const mongoose = require('mongoose');

const DB = process.env.MONGO_URL;
console.log(DB);
mongoose.set('strictQuery', false);

mongoose
  .connect(DB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('no connection'));
