const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/randomPosts', async (req, res) => {
  let dummyData = await axios.get('https://jsonplaceholder.typicode.com/posts');

  res.status(200).json(dummyData.data);
});

module.exports = router;
