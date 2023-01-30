const express = require('express');
const user = express();
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public');
    console.log('saved');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post('/importUser', upload.single('file'), async (req, res) => {
  try {
    res.send({ status: 200, message: 'success' });
  } catch (err) {
    res.send({ message: 'got error' });
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
