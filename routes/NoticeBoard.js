const express = require('express');

const { getGeneralInfo, getEventInfo } = require('../controllers/NoticeBoard');

const router = express.Router();

router.post('/notice/general', getGeneralInfo);
router.post('/notice/event', getEventInfo);

module.exports = router;
