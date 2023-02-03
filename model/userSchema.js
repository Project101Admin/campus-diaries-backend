const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongooose.model('USER', userSchema);
