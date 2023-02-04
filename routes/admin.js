const express = require('express');
const router = express.Router();
const multer = require('multer');
const { csvArrayToJSON } = require('../common/utils');
var csv = require('csvtojson');
var userSchema = require('../model/userSchema');

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post('/importUser', upload.single('file'), async (req, res) => {
  try {
    const csvRow = await csv({
      noheader: true,
      output: 'csv',
    }).fromString(req.file.buffer.toString());
    const csvJson = await csvArrayToJSON(csvRow);
    // console.log(csvJson);
    var user = [];
    for (var i = 0; i < csvJson.length; i++) {
      var obj = {};
      obj.name = csvJson[i]['Name'];
      obj.phone = csvJson[i]['PhoneNo'];
      obj.rollNo = csvJson[i]['RollNo'];
      user.push(obj);
    }
    console.log(user);
    try {
      const uploaded = await userSchema.insertMany(user);
      res.status(200).send({
        message: 'Successfully Uploaded!',
        uploaded,
      });
    } catch (error) {
      res.status(500).send({
        message: 'failure',
        error,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
      err,
    });
  }
});

router.get('/', (req, res) => {
  res.send(`hello admin`);
});

router.post('/addStudents', (req, res) => {
  res.json({ message: req.body });
});

router.post('/addTeachers', (req, res) => {
  res.send(`hello admin`);
});

router.delete('/deleteStudent', (req, res) => {
  res.send(`hello admin`);
});

router.delete('/deleteTeacher', (req, res) => {
  res.send(`hello admin`);
});

module.exports = router;
