const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
