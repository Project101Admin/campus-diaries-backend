const express = require('express');
const router = express.Router();
const { getGeneralUpdates } = require('../controllers/noticeBoard2');


router.get('/generalUpdates', getGeneralUpdates);

module.exports = router;