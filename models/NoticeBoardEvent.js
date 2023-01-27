const mongoose = require('mongoose');

const eventInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 40,
    },
    Date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
      maxLength: 16,
    },
    departmentName: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      default: 0,
    },
    posterLink: {
      data: Buffer,
      contentType: String,
    },
    clubName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('eventInfo', eventInfoSchema);
