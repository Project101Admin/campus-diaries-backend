const mongoose = require('mongoose');

const generalInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 40,
      unique: true,
    },
    Date: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      maxLength: 16,
    },
    time: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
    posterLink: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('GeneralInfo', generalInfoSchema);
