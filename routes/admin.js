const express = require('express');
const router = express.Router();
const multer = require('multer');
const { csvArrayToJSON } = require('../common/utils');
const csv = require('csvtojson');

require('../database/connection');
const userSchema = require('../model/userSchema');

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post('/importCsv', upload.single('file'), async (req, res) => {
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

router.post('/importManual', async (req, res) => {
  const { name, phone, rollNo } = req.body;
  if (!name || !phone || !rollNo) {
    return res.status(422).json({ error: 'Plz filled the field properly' });
  }

  try {
    const userExist = await userSchema.findOne({ rollNo: rollNo });
    if (userExist) {
      return res.status(422).json({ error: 'RollNo already Exist' });
    }
    const user = new userSchema({ name, phone, rollNo });
    await user.save();
    res.status(201).json({ message: 'user registered successfuly' });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const user = await userSchema.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/user', (req, res) => {
  userSchema.find({}, (err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(users);
  });
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
